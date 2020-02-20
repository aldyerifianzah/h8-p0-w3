function groupAnimals(animals) {
    // you can only write your code here!

    var kamus = 'abcdefghijklmnopqrstuvwxyz'

    var tampung = []

    for (let i = 0; i < kamus.length; i++) {
        var tampung1 = []
        for (let j = 0; j < animals.length; j++) {
            if (kamus[i] == animals[j][0]) {
                tampung1.push(animals[j])
                // console.log(kamus[i], animals[j])
            }
        }
        if (tampung1.length != 0) {
            tampung.push(tampung1)
        }

    }


    return tampung
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]