module.exports = function reverse (n) {
  let data = [];
  n = n.toString();
  while(n.length != 0){
    data.push(n[n.length - 1]);
    n = n.substr(0, n.length - 1);
  }
  let ansStr = "";
  data.map(item => ansStr += item)
  return parseInt(ansStr);
}