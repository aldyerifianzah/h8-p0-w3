num++;
var numStr = String(num);
var reverseNum = '';
for(var i = numStr.length-1; i >= 0; i--){
    reverseNum += numStr[i];
}

if(reverseNum == num){
    return num;
}else{
    return angkaPalindrome(num);
}
if(reverseNum == num){
    return num;
}else{
    return angkaPalindrome(num);
}



// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001