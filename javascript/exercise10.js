const idleList = [ { id: 1, name: "honoka"}, { id: 9, name: "eri"}, { id: 2, name: "kotori"}, { id: 3, name: "umi"}, { id: 5, name: "rin"}, { id: 4, name: "maki"}, { id: 8, name: "nozomi"}, { id: 6, name: "hanayo"}, { id: 7, name: "niko"} ]

const sortedIdleList = idleList.sort((a, b) => a.id - b.id);

console.log(sortedIdleList);