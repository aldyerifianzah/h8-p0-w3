// function hitungJumlahKata (kalimat) {
//     var hasil = kalimat.split(' ');
//     var hasilAkhir = hasil.length
//     return  hasilAkhir;
    
//   }

function hitungJumlahKata (kalimat){

  var kalimatArray = [];
  var wadah = '';

  for(let i = 0; i< kalimat.length; i++){
    wadah += kalimat[i];

  if(kalimat[i] == ' ' || i == kalimat.length -1){
    kalimatArray.push(wadah);
    wadah = '';
    }
  }
  return kalimatArray.length;
}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5