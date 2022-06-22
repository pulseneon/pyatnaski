var area = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15, ''],
];

var winarea = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15, ''],
];

var isWin = false;
var moves = 0;

function shuffle() {
    arguments = area;
    for (var k = 0; k < arguments.length; k++) {
        var i = arguments[k].length;
        if (i == 0)
            return false;
        else {
            while (--i) {
                var j = Math.floor(Math.random() * (i + 1));
                var tempi = arguments[k][i];
                var tempj = arguments[k][j];
                arguments[k][i] = tempj;
                arguments[k][j] = tempi;
            }
        }
    }

    for(var i = 0; i < arguments.length; i++){
        for(var j = 0; j < arguments.length; j++){
            if (arguments[i][j] == ''){
                arguments[i][j] = arguments[3][3];
                arguments[3][3] = '';
            }
        }
    }
    area = arguments; // лень переписывать
}

function swapArea(a, b){
    var i = arguments[0];
    var j = arguments[1];

    if(!isWin){
    // down
    if(area[i+1][j] == ''){
        area[i+1][j] = area[i][j];
        area[i][j] = '';
        moves++;
        updateArea();
        return;
    }

    // right
    if(area[i][j+1] == ''){
        area[i][j+1] = area[i][j];
        area[i][j] = '';
        moves++;
        updateArea();
        return;
    }

    // left 
    if(area[i][j-1] == ''){
        area[i][j-1] = area[i][j];
        area[i][j] = '';
        moves++;
        updateArea();
        return;
    }

    // up
    if(area[i-1][j] == ''){
        area[i-1][j] = area[i][j];
        area[i][j] = '';
        moves++;
        updateArea();
        return;
    }
}
}

function swapAreaDown(a, b){
    var i = arguments[0];
    var j = arguments[1];

    if(!isWin){
    // up
    if(area[i-1][j] == ''){
        area[i-1][j] = area[i][j];
        area[i][j] = '';
        moves++;
        updateArea();
        return;
    }

    // right
    if(area[i][j+1] == ''){
        area[i][j+1] = area[i][j];
        area[i][j] = '';
        moves++;
        updateArea();
        return;
    }

    // left 
    if(area[i][j-1] == ''){
        area[i][j-1] = area[i][j];
        area[i][j] = '';
        moves++;
        updateArea();
        return;
    }

    // down
    if(area[i+1][j] == ''){
        area[i+1][j] = area[i][j];
        area[i][j] = '';
        moves++;
        updateArea();
        return;
    }
}
}

function checkWin(){
    if(area[0][0] == 1 && area[0][1] == 2 && area[0][2] == 3 && area[0][3] == 4 &&
        area[1][0] == 5 && area[1][1] == 6 && area[1][2] == 7 && area[1][3] == 8 &&
            area[2][0] == 9 && area[2][1] == 10 && area[2][2] == 11 && area[2][3] == 12 &&
                area[3][0] == 13 && area[3][1] == 14 && area[3][2] == 15){
        alert("WIN!");
        isWin = true;
    }
}

function debugWin(){
    area = winarea; 
    area[3][3] = area[3][2];
    area[3][2] = area[3][1];
    area[3][1] = "";
    updateArea();
}

function updateArea(){
    document.getElementById("t0").innerHTML=area[0][0];
    document.getElementById("t1").innerHTML=area[0][1];
    document.getElementById("t2").innerHTML=area[0][2];
    document.getElementById("t3").innerHTML=area[0][3];
    
    document.getElementById("t4").innerHTML=area[1][0];
    document.getElementById("t5").innerHTML=area[1][1];
    document.getElementById("t6").innerHTML=area[1][2];
    document.getElementById("t7").innerHTML=area[1][3];

    document.getElementById("t8").innerHTML=area[2][0];
    document.getElementById("t9").innerHTML=area[2][1];
    document.getElementById("t10").innerHTML=area[2][2];
    document.getElementById("t11").innerHTML=area[2][3];

    document.getElementById("t12").innerHTML=area[3][0];
    document.getElementById("t13").innerHTML=area[3][1];
    document.getElementById("t14").innerHTML=area[3][2];
    document.getElementById("t15").innerHTML=area[3][3];
    
    document.getElementById("moves").innerHTML = "Ходов: " + moves;
    checkWin();
}

function start(){
    isWin = false;
    moves = 0;
    shuffle();
    updateArea();
}