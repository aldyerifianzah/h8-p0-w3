
    // you can only write your code here!
//     var balikAngka = String(num).split('').reverse('').join('');
//     if(num == balikAngka){
//         for(let i = num+1 ; i>=num; i++){
//             balikAngka = String(i).split('').reverse('').join('');
//             if(balikAngka == i){
//                 return i;
//             }
//         }
//     }else{
//         for(let i = num+1 ; i>=num; i++){
//         balikAngka = String(i).split('').reverse('').join('');
//         if(balikAngka == i){
//             return i;
//             }
//         }
//     }
// }

//tanpa built in function

function angkaPalindrome(num) {
    if(num < 9){
        return num+1;
    }else{

        var hasil = num + 1;

        while(hasil) {
            var hasilStr = String(hasil);
            var hasilBalik= '';

                for(let i = hasilStr.length - 1; i >=0; i-- ){
                    hasilBalik += hasilStr[i]
                }

                if (hasilStr == hasilBalik){
                    return hasil;
                
                }
                hasil ++
        }
    }






}



// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001