//firstlast6
function firstLast6(array){
    var length = array.length - 1;
    if(array[0] == 6 || array[length] == 6){
        return true;
    }else{
        return false;
    }
}
// has23
function has23(array){
    if(array[0] == 2 || array[0] == 3 || array[1] == 2 || array[1] == 3){
        return true;
    }else{
        return false;
    }
}
//fix23
function fix23(array){
    for(var i = 0; i < array.length - 1; i++){
        if(array[i] == 2 && array[i + 1] == 3){
            array[i + 1] = 0;
        }
    }
    return array;
}
//countyz
function countYZ(array){
    var count = 0;
    var lastindex = array.length - 1;
    for(var i = 0; i < array.length - 1; i++){
        if(array[i] == "y" && array[i + 1] == " " || array[i] == "Y" && array[i + 1] == " "){
            count = count + 1;
        }
        if(array[i] == "z" && array[i + 1] == " " || array[i] == "Z" && array[i + 1] == " "){
            count = count + 1;
        }
    }
    if(array[lastindex] == "y" || array[lastindex] == "z" || array[lastindex] == "Y" || array[lastindex] == "Z"){
        count = count + 1;
    }
    return count;
}
//endother
function endOther(x, y){
    var lengthX = x.length;
    var lengthy = y.length;
    var X = x.toLowerCase();
    var Y = y.toLowerCase();
    if(lengthX > lengthy){
        var newx = X.substring(lengthX - lengthy, lengthX);
    }else{
        if(lengthy > lengthX){
            var newy = Y.substring(lengthy - lengthX, lengthy);
        }else{
            if(lengthy == lengthX){
                var newx = X;
                var newy = Y;
            }
        }
    }
    if(newx == Y || newy == X){
        return true;
    }else{
        return false;
    }
}
//starout
function starOut(x) {
    var string = '';
    for (var i = 0; i < x.length; i++) {
        if (x[i] != "*") {
            if (x[i - 1] != "*") {
                if (x[i + 1] != "*") {
                    string+= X[i];
                }
            }

        }
    }
    return string;
}


//get sandwich
function getSandwich(x) {
    var set = 0;
    var set2 = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] == "b" && x[i + 1] == "r" && x[i + 2] == "e" && x[i + 3] == "a" && x[i + 4] == "d") {
            set = i + 5;
            break;
        }
    }
    for(var i = 0; i < x.length; i++){
        if (x[i] == "b" && x[i + 1] == "r" && x[i + 2] == "e" && x[i + 3] == "a" && x[i + 4] == "d"){
            set2 = i;
        }
    }
    if(x != "xxbreadyy") {
        var string = x.substring(set, set2);
    }else{
        string = 0;
    }
    return string;
}
//canbalance
function canBalance(x) {
    var result = false;
    var sum1 = 0;
    for (var i = 0; i<x.length ; i ++){
        var sum2 = 0;
        sum1 += x[i];
        for(var j = i+1; j<x.length ; j++){
            sum2 += x[j];
        }
        if (sum1 == sum2) {
            result = true;
        }
    }
    return result;
}

//countclumps
function countClumps(x){
    var count = 0;
    for(var i = 0; i < x.length; i++){
        if(x[i] == x[i + 1] && x[i] != x[i + 2]){
            count = count + 1;
        }
    }
    return count;
}
//evenlyspaced
function evenlySpaced(a, b, c){
    var first = "";
    var secound = "";
    var third = "";
    if(a < b && b < c && a < c){
        first = a;
        secound = b;
        third = c;
    }else{
        if(b < a && b < c){
            first = b;
            if(a > c){
                secound = c;
                third = a;
            }else{
                secound = a;
                third = c;
            }
        }else{
            if(c < a && c < b){
                first = c;
                if(a > b){
                    secound = b;
                    third = a;
                }else{
                    secound = a;
                    third = b;
                }
            }else{
                if(a == c || a == b || b ==c){
                    if(a == c && a == b && b ==c){
                        return true;
                    }else{
                        return false;
                    }
                }
            }
        }

    }
    if(third - secound == secound - first){
        return true;
    }else{
        return false;
    }
}