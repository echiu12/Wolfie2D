import Graph from "../DataTypes/Graphs/Graph";
import GoapAction from "../DataTypes/Interfaces/GoapAction";
import GoapAI from "../DataTypes/Interfaces/GoapAI";
import Queue from "../DataTypes/Collections/Queue";
import Stack from "../DataTypes/Collections/Stack";
import GraphUtils from "../Utils/GraphUtils";

export default class GoapActionPlanner {
    mapping: Map<number,GoapAction | string>;
    graph: Graph;
    path: Array<number>;

    plan(goal: string, possibleActions: Array<GoapAction>, currentStatus: Array<string>, actor: GoapAI): Stack<GoapAction> {
        this.graph = new Graph(true);
        this.mapping = new Map();

        //0 is our root
        this.graph.addNode();
        this.mapping.set(0,"Start");
        //1 is the goal
        this.graph.addNode();
        this.mapping.set(1,"Goal");
        this.graph.addEdge(1,1,Number.POSITIVE_INFINITY);

        // Build tree from the root (node at index 0) to the goal (node at index 1)
        // Throw an error if the tree doesn't have at least one route from the root to the goal
        if (!this.buildTree(0, goal, possibleActions, currentStatus)) {
            let treeStr = "";
            for(let i = 0; i < this.graph.numVertices; i++){
                let edge = this.graph.edges[i];
                let edgeStr = "";
                while(edge !== undefined && edge !== null){
                    edgeStr += this.mapping.get(edge.y).toString() + ", ";
                    edge = edge.next;
                }
                treeStr += this.mapping.get(i).toString() + " ====> " + edgeStr + "\n";
            }

            throw new Error("No path between root (start) and goal was found in the GOAP tree.\n" + treeStr);
        }

        //Run djikstra to find shortest path
        this.path = GraphUtils.djikstra(this.graph, 0);

        //Push all elements of the plan
        let plan = new Stack<GoapAction>();
		
		let i = 1;
		while(this.path[i] !== -1){
            if (this.path[i] !== 0){
			    plan.push(<GoapAction>this.mapping.get(this.path[i]));
            }
			i = this.path[i];
		}
        
        return plan;
    }

    /** 
     * Builds the tree of possible GoapActions and stores the tree into the graph field. 
     * @param root The index of the graph node that will be the root of the tree
     * @param goal The string representing the goal status
     * @param possibleActions The list of GoapActions that can be performed
     * @param currentStatus The list of current statuses
     * @returns True if tree has a connection between root and goal; false otherwise.
     */
    buildTree(root: number, goal:string, possibleActions: Array<GoapAction>, currentStatus: Array<string>): boolean {
        let reachedGoal = false;
        //For each possible action 
        for (let action of possibleActions) {
            //Can it be performed?
            if (action.checkPreconditions(currentStatus)) {
                //This action can be performed
                //Add effects to currentStatus
                let newStatus = [...currentStatus];
                newStatus.push(...action.effects);

                //Check if the new node is the goal
                if (newStatus.includes(goal)){
                    let newNode = this.graph.addNode() - 1;
                    this.mapping.set(newNode, action);
                    this.graph.addEdge(root, newNode, action.cost);
                    this.graph.addEdge(newNode, 1, 0);
                    return true;
                }

                //Add node and edge from root
                let newNode = this.graph.addNode() - 1;
                this.mapping.set(newNode, action);
                this.graph.addEdge(root, newNode, action.cost);
                
                //Recursive call
                let newActions = possibleActions.filter(act => act !== action);
                reachedGoal = reachedGoal || this.buildTree(newNode, goal, newActions, action.effects);
            }
        }
        return reachedGoal;
    }
}