
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// graph from the slides... i think
const graph1 = [
    [1,2,5], //0
    [4],//1
    [3,5], //2
    [], //3
    [], //4
    [6], //5
    [] //6
];
assert(JSON.stringify(depthFirstSearch(graph1, 0, 4)) == JSON.stringify([0,1,4]));
assert(JSON.stringify(depthFirstSearch(graph1, 1, 4)) == JSON.stringify([1,4]));
assert(JSON.stringify(depthFirstSearch(graph1, 3, 4)) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(graph1, 0, 6)) == JSON.stringify([0,2,5,6]));
assert(JSON.stringify(depthFirstSearch(graph1, 1, 1)) == JSON.stringify([1]));


const graph2 = [
    [1], 
    [2], 
    [3], 
    [4], 
    [5],
    [6],
    [0]
];
assert(JSON.stringify(depthFirstSearch(graph2, 0, 1)) == JSON.stringify([0,1]));
assert(JSON.stringify(depthFirstSearch(graph2, 0, 2)) == JSON.stringify([0,1,2]));
assert(JSON.stringify(depthFirstSearch(graph2, 0, 3)) == JSON.stringify([0,1,2,3]));
assert(JSON.stringify(depthFirstSearch(graph2, 0, 4)) == JSON.stringify([0,1,2,3,4]));
assert(JSON.stringify(depthFirstSearch(graph2, 0, 5)) == JSON.stringify([0,1,2,3,4,5]));
assert(JSON.stringify(depthFirstSearch(graph2, 0, 6)) == JSON.stringify([0,1,2,3,4,5,6]));
assert(JSON.stringify(depthFirstSearch(graph2, 6, 0)) == JSON.stringify([6,0]));


const graph3 = [
    [1, 2, 4], //0
    [0, 2, 3], //1
    [0, 1, 4, 5], //2
    [1, 6], //3
    [0, 2, 5], //4
    [2, 4, 6], //5
    [3, 5], //6
    [8], //7
    [7] //8
];
assert(JSON.stringify(depthFirstSearch(graph3, 0, 7)) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(graph3, 0, 8)) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(graph3, 8, 7)) == JSON.stringify([8,7]));
assert(JSON.stringify(depthFirstSearch(graph3, 0, 4)) == JSON.stringify([0,1,2,4]));
assert(JSON.stringify(depthFirstSearch(graph3, 5, 1)) == JSON.stringify([5,2,0,1]));
assert(JSON.stringify(depthFirstSearch(graph3, 6, 0)) == JSON.stringify([6,3,1,0]));
