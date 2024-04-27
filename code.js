// Given a graph and a node:
// ▷ while unvisited nodes remain
//      ▷ if current vertex v is the node we’re looking for, return it
//      ▷ mark v as visited
//      ▷ for each edge (v, w)
//          ▷ recursively process w unless marked visited
// Data structure?

function depthFirstSearch(graph, startNode, targetNode){
    let visited = []
    for(let i = 0; i < graph.length; i++){visited[i] = 0}
    let path = [];

    function find(n) {
        path.push(n);
        if (n == targetNode) {
            return 1;
        }
        visited[n] = 1;
        for (let neighbor of graph[n]) {
            if (!visited[neighbor]) {
                if (find(neighbor)) {
                    return true;
                }
            }
        }
        path.pop();
        return false;
    }

    if (find(startNode)) {
        return path;
    } else {
        return [];
    }
}
