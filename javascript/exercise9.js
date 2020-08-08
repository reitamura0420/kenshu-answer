const idleList = [ { id: 1, name: "honoka"}, { id: 2, name: "kotori"}, { id: 3, name: "umi"}, { id: 4, name: "maki"}, { id: 5, name: "rin"}, { id: 6, name: "hanayo"}, { id: 7, name: "niko"}, { id: 8, name: "nozomi"}, { id: 9, name: "eri"} ];

const userList = idleList.map(idle => idle.name);

console.log(userList);