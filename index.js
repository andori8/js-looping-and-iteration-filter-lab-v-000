// Code your solution in this file
function findMatching (drivers, name) {
  return drivers.filter(function (element) { return element === name(0).toUpperCase(); });
}
