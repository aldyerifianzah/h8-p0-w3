function angkaPalindrome(num) {
    // you can only write your code here!


    var palinDrome = false;

    while (palinDrome == false) {

        var kebalik = ''
        var result = num

        num = String(Number(result) + 1)

        for (let i = num.length - 1; i >= 0; i--) {

            kebalik += num[i]
        }

        if (kebalik == num) {
            palinDrome = true;
            break;

        }





    }
    return num;

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001