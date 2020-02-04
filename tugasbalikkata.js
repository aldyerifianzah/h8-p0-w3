

function balikKata(arr){

    var newArray = '';

    for(var i = arr.length - 1; i>=0; i--){
        newArray += arr[i];
    }

    return newArray;
    


    
}



console.log(balikKata("hello world!"));