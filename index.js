// Code your solution in this file
function findMatching (collection, string) {
  return collection.filter(function (element) { return element.toLowerCase() === string.toLowerCase(); });
}
