function pasanganTerbesar(num) {
    // you can only write your code here!
  var strNum = String(num).split('');
  var besar = Number(strNum.slice(0,2).join(''));
  
  //scanner
  for(let i = 0; i <= strNum.length - 2; i++){
      var angka2 = Number(strNum.slice(i,i+2).join(''));

      if(besar < angka2){
          besar = angka2;
      }
  }
    return besar;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99