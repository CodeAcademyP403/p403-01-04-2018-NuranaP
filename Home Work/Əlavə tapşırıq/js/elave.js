var board = document.getElementById("board");
for(var i = 0; i < 8; i++) {                   
  var row = document.createElement("div");     
  for(var j = 0; j < 8; j++) {                 
    var cell = document.createElement("div");  
    if(i % 2 == j % 2) {                        
      cell.className = "white";
    }
    else {
      cell.className = "black";
    }
    row.appendChild(cell);                     
  }
  board.appendChild(row);
}