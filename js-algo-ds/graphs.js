// Here we are implementing BFS and DFS

Graph:
https://drive.google.com/file/d/1yy4QY2X-JoeCq1LmF82Keuw3hDFPptoW/view



const airports = ['A', 'Z', 'B', 'D', 'C']

const routes = [
    ['A', 'Z'],
    ['A', 'B'],
    ['A', 'C'],
    ['Z', 'B'],
    ['Z', 'D'],
    ['C', 'D'],
    ['B', 'D']
]


let adjacentMatrics = new Map()

const addNode = (node) => adjacentMatrics.set(node, [])
const addEdge = (node, ele) => adjacentMatrics.get(node).push(ele);
airports.map((airp) => addNode(airp));
routes.map((route) => {
    if (adjacentMatrics.has(route[0])){
        addEdge(...route);
    }
})



console.log(adjacentMatrics);

const visited = new Set();

function bfs(start, dest) {
    const search_queue = [start]

    while (search_queue.length > 0){
        // if the search_queue.shift remove first element. it is Queue BFS.
        // if the search_queue.pop remove the last element, it is Stack DFS.
        let temp_dest = search_queue.pop()
        console.log(temp_dest)

        let stops = adjacentMatrics.get(temp_dest);

        for (const stop of stops){
            search_queue.push(stop);
            
            if (stop === dest){
                console.log('found it');
                return true;
            }
        }
    }

    return false;
}

console.log(bfs('A', 'D'))

