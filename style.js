document.writeln("<center>");
document.writeln("<br>");
document.writeln("<h1>DATA MAHASISWA<h1>");
document.writeln("<h2>POLITEKNIK AMAMAPARE TIMIKA<H2>"); 
document.writeln("<hr width=600 color=black>"); 
document.writeln("</center>");





function tekan()
{
    var nimstr = (document.fform.nim.value);
    var namastr = (document.fform.nama.value);
    var jeniskelaminstr = (document.fform.jeniskelamin.value);
    var ketstr = (document.fform.ket.value);
    var jurusanstr = (document.fform.jurusan.value);
    var agamastr = (document.fform.agama.value);
    var status = " Mahasiswa ";
    if (document.fform.istatus.checked==true){
         status = "Mahasiswa";
        }else{
        status = "Tidak" + status ;
        }

    document.fform.Onim.value = nimstr;
    document.fform.Onama.value = namastr;
    document.fform.Ojeniskelamin.value = jeniskelaminstr;
    document.fform.Oket.value = ketstr;
    document.fform.Ojurusan.value = jurusanstr;
    document.fform.Oagama.value = agamastr;
    document.fform.Ostatus.value = status;


}

