// document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function(e) {
  // document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  var q = [];
  var currList = [];
  f(lbs, currList, q);
  var str = "<b>Total number of ways = " + q.length + "</b><br>";
  for (i = 0; i < q.length; i++) {
  	for (j = 0; j < q[i].length-1; j++)
  		str += q[i][j] + ", ";
  	str += q[i][q[i].length-1] + "<br>";
	}
	document.getElementById("output").innerHTML = str;
});

function f(x, currList, q) {
        if (x == 1) {
            currList.push(1);
            q.push(currList);
            return;
        }
        if (x == 0) {
            if (currList.length > 0) q.push(currList);
            return;
        }
        var newList = Array.from(currList);
        newList.push(1);
        f(x-1, newList, q);
        newList = Array.from(currList);
        newList.push(2);
        f(x-2, newList, q);
}