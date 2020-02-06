function angkaPalindrome(num) {
    // you can only write your code here!
    var balikAngka = String(num).split('').reverse('').join('');
    if(num == balikAngka){
        for(let i = num+1 ; i>=num; i++){
            balikAngka = String(i).split('').reverse('').join('');
            if(balikAngka == i){
                return i;
            }
        }
    }else{
        for(let i = num+1 ; i>=num; i++){
        balikAngka = String(i).split('').reverse('').join('');
        if(balikAngka == i){
            return i;
            }
        }
    }
}



// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001