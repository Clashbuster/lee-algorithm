var maze = [
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 9, 0, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 1, 0, 0, 1]
];
var visited = maze.map(function (item) { return item.map(function (item) { return false; }); });
var stack = [];
var executable = function (position, distance) {
    return function () {
        LeesAlgorithm(position, distance);
    };
};
var toggle = true;
function LeesAlgorithm(position, distance) {
    if (distance === void 0) { distance = 0; }
    distance += 1;
    visited[position[0]][position[1]] = true;
    //pushes executable into stack after a bunch of checks for an orthogonal direction
    if (exists([position[0] + 1, position[1]])) {
        if (visited[position[0] + 1][position[1]] === false) {
            if (maze[position[0] + 1][position[1]] === 1) {
                visited[position[0] + 1][position[1]] = distance;
                stack.push(executable([position[0] + 1, position[1]], distance));
            }
            else if (maze[position[0] + 1][position[1]] === 9) {
                toggle = false;
                console.log(distance);
            }
        }
    }
    //pushes executable into stack after a bunch of checks for an orthogonal direction
    if (exists([position[0] - 1, position[1]])) {
        if (visited[position[0] - 1][position[1]] === false) {
            if (maze[position[0] - 1][position[1]] === 1) {
                visited[position[0] - 1][position[1]] = distance;
                stack.push(executable([position[0] - 1, position[1]], distance));
            }
            else if (maze[position[0] - 1][position[1]] === 9) {
                toggle = false;
                console.log(distance);
            }
        }
    }
    //pushes executable into stack after a bunch of checks for an orthogonal direction
    if (exists([position[0], position[1] + 1])) {
        if (visited[position[0]][position[1] + 1] === false) {
            if (maze[position[0]][position[1] + 1] === 1) {
                visited[position[0]][position[1] + 1] = distance;
                stack.push(executable([position[0], position[1] + 1], distance));
            }
            else if (maze[position[0]][position[1] + 1] === 9) {
                toggle = false;
                console.log(distance);
            }
        }
    }
    //pushes executable into stack after a bunch of checks for an orthogonal direction
    if (exists([position[0], position[1] - 1])) {
        if (visited[position[0]][position[1] - 1] === false) {
            if (maze[position[0]][position[1] - 1] === 1) {
                visited[position[0]][position[1] - 1] = distance;
                stack.push(executable([position[0], position[1] - 1], distance));
            }
            else if (maze[position[0]][position[1] - 1] === 9) {
                toggle = false;
                console.log(distance);
            }
        }
    }
}
function exists(position) {
    if (position[0] < 0) {
        return false;
    }
    else if (position[1] < 0) {
        return false;
    }
    else if (position[0] > maze.length - 1) {
        return false;
    }
    else if (position[1] > maze.length - 1) {
        return false;
    }
    else {
        return true;
    }
}
//seed the executable stack
stack.push(executable([0, 0], 0));
//until we find 9, repeatedly pull from the executable stack and execute the lee's algorithm function
while (toggle) {
    stack.shift()();
}
console.log(visited);
var displayMaze = document.querySelector("#maze");
displayMaze.innerHTML = "hello";
