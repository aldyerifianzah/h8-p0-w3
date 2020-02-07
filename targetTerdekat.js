function targetTerdekat(arr) {
    // you can only write your code here!

    var tempatX= [];
    var tempatO= [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'x'){
            tempatX.push(i);


        }else if(arr[i] === 'o'){
            tempatO.push(i);
        }

        
    }

    if (tempatX.length == 0){
        return 0;

    }else{
        var hasil = 0;
        for (let j = 0; j < tempatX.length; j++){
            var tampung = tempatX[j]-tempatO[0];


            if(tampung<0){
                tampung = tampung * -1;
            }

            if(hasil == 0 || tampung < hasil){
                hasil = tampung;
            }
        }
    }return hasil;


  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2