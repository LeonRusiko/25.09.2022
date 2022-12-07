let myMath = {
  "+" : function(a,b){ return a+b },
  "-" : function(a,b){ return a-b },
  "*" : function(a,b){ return a*b },
  "/" : function(a,b){ return a/b },
  "calc": function(a, b, op){ return this[op](a,b) }
}

document.getElementById("out").innerText = myMath.calc(5, 6, "+");
