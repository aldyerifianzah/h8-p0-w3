function groupAnimals(animals) {
    // you can only write your code here!

    var a = animals.sort();
    var kelompok = [];

    for(var i = 0 ; i<= a.length-1 ; i++){

        var hurufAwal = a[i][0];

        var urutan = [a[i]];

        for( var j = a.length - 1; j>i; j--){

            if(hurufAwal == a[j][0]){

                urutan.push(a[j]);
                a.splice(j,1);
            }
        } kelompok.push(urutan);
    }return kelompok;



  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]