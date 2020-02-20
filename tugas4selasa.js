var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling2(arr){

    var tampung = '';
    arr.splice(1,1, 'Roman Alamsyah Elsharawy');
    arr.splice(2,1, 'Provinsi Bandar Lampung');
    arr.splice(4,1, 'pria', 'SMA INTERNASIONAL METRO');

    console.log(arr);


    var tanggalLahir = arr[3].split('/');

    switch(tanggalLahir[1]){

        case "01":
            console.log('januari');
            break;

        case '02':
            console.log('febuari');
            break;

        case '03':
            console.log('maret');
            break;

        case '04':
            console.log('april');
            break;

        case "05" :
            console.log('mei');
            break;

        default:
            console.log('error');
    }

    var urutanTanggal = tanggalLahir.sort(function(a,b){return b-a});
    console.log(urutanTanggal);

    var tanggalLahirStrip = tanggalLahir.join('-');
    console.log(tanggalLahirStrip);

    var nama15 = arr[1].slice(0, 15);
    console.log(nama15);

    return tampung;

}


console.log(dataHandling2(input));