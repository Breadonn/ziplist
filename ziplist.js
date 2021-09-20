function zipList(list1, list2) {
  let newList = [];
  for (let i = 0; i < list1.length; i++) {
      newList.push(list1[i]);
      newList.push(list2[i]);
  }
  return newList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const list1 = [1, 3, 5];
const list2 = [2, 4, 6];

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));

