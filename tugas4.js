var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(arr){

  
    
    arr.splice(1, 1,  "Roman Alamsyah Elsharawy");

  

    arr.splice(2, 1, "Provinsi Bandar Lampung");

  

    arr.splice(4, 1, "Pria", "SMA Internasional Metro");

    console.log(arr);

    
    var tanggalLahir = arr[3].split("/");
 

    switch (tanggalLahir[1]){
        case "01":
            console.log( 'januari');
            break;

        case "02":
            console.log('febuari');
            break;

        case "03":
            console.log('maret');
            break;

        case "04":
            console.log('april');
            break;

        case "05":
            console.log('mei');
            break;

        case "06":
            console.log('juni');
            break;

        case "07":
            console.log('juli');
            break;

        case "08":
            console.log('agustus');
            break;

        case "09":
            console.log('september');
            break;

        case "10":
            console.log("oktober");
            break;

        case "11":
            console.log('november');
            break;

        case "12":
            console.log('desember');
            break;

        default:
            console.log("error");

    }

    var tanggalLahir1 = tanggalLahir.join('-');

    tanggalLahir.sort(function(a,b){return b-a});

    console.log(tanggalLahir);
    console.log(tanggalLahir1);
    console.log(arr[1].slice(0, 15));

}


console.log(dataHandling2(input));


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */









































