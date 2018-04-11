function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  var jarak=0;
  var passanger=[];
    if (arrPenumpang.length===0 ){
        return arrPenumpang;
    }

    for (var i=0; i<arrPenumpang.length; i++){
        var data={}
        var jarak=0;
        data.penumpang=arrPenumpang[i][0];
        data.naikDari=arrPenumpang[i][1];
        data.tujuan=arrPenumpang[i][2];
        var mulaiHitung = false;

        for (var j=0; j<rute.length; j++){
            if(data.naikDari === rute[j]){
                mulaiHitung = true
            }

            if (mulaiHitung === true && data.tujuan !== rute[j]) {
                jarak+=1;
            } 
            else if (data.tujuan===rute[j]){
                break;
            }
        }
        data.bayar= jarak * 2000;
        passanger.push(data)
        // console.log(data.penumpang);
        // console.log(data.naikDari);
        // console.log(data.tujuan);

    }
  return passanger;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]