function average(array){
    var sum = 0;
    for (var i = 0; i<array.length; i++){
        sum += parseInt(array[i])
    }

    var rata_rata = sum / array.length;
    return rata_rata;
}

function median(array){
    var half = Math.floor(array.length/2);

    array.sort(function(a,b){
        return a - b;
    }
    );

    if (array.length % 2) {
        return array[half]
    }
    else{
        return(array[half-1] + array[half])/2.0;
    }
}

function highest(array){
    return Math.max(...array);
}

function lowest(array){
    return Math.min(...array);
}

function hitung(){
    var nilai_1 = (document.getElementById("nilai_1").value);
    var nilai_2 = (document.getElementById("nilai_2").value);
    var nilai_3 = (document.getElementById("nilai_3").value);
    var nilai_4 = (document.getElementById("nilai_4").value);
    var nilai_5 = (document.getElementById("nilai_5").value);

    let array = [nilai_1,nilai_2,nilai_3,nilai_4,nilai_5];

    document.getElementById("average").innerHTML = "Average : " + average(array);
    document.getElementById("median").innerHTML = "Median : " + median(array);
    document.getElementById("highest").innerHTML = "Highest : " + highest(array);
    document.getElementById("lowest").innerHTML = "Lowest : " + lowest(array);
}

function reset(){
    document.getElementById("form").reset();
    document.getElementById("average").innerHTML = " ";
    document.getElementById("median").innerHTML = " ";
    document.getElementById("highest").innerHTML = " ";
    document.getElementById("lowest").innerHTML = " ";
}

