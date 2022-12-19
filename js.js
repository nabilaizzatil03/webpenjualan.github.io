let tempValue = document.getElementById("testing").value;

let arrBarang = [
  {
    id: 1,
    nama: "batik sasirangan 1",
    harga: 247000,
  },
];

function formatRupiah(angka, prefix) {
  let number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  if (prefix == undefined) {
    return "Rp. " + rupiah + ",00";
  } else {
    return prefix + rupiah + ",00";
  }
}


function test() {
  let id_sasirangan = Number(document.getElementById("id_sasirangan").value);
  let lokasiValue = document.getElementById("lokasi").value;

  console.log("ini total barang", tempValue);
  if (tempValue < 10) {
    alert("Minimal pembelian harus diatas 10");
  } else {
    //     alert(
    //       `Anda memesan kain batik sebanyak : ${tempValue}
    // Anda berlokasi di ${lokasiValue}, ongkir anda sebesar Rp.10.000,00

    // Total biaya yang anda bayar + ongkir senilai :

    // silahkan klik tombol "pesan via whatsApp"
    //     `
    //     );
    // pengambilang nama barang
    let hargaBarang = 0;
    for (let i = 0; i < arrBarang.length; i++) {
      if (id_sasirangan === arrBarang[i].id) {
        // console.log(arrBarang[i].harga);
        hargaBarang = arrBarang[i].harga;
        break;
  }
}
console.log(hargaBarang);
let strOngkir = "";
let ongkir = 0;

if (lokasiValue === "Jawa") {
  ongkir = 0;
  strOngkir = "gratis";
} else if (lokasiValue === "Sumatra") {
  ongkir = 10000;
  strOngkir = "sebesar Rp.10.000,00";
} else if (lokasiValue === "Sulawesi") {
  ongkir = 20000;
  strOngkir = "sebesar Rp.20.000,00";
} else if (lokasiValue === "Kalimantan") {
  ongkir = 30000;
  strOngkir = "sebesar Rp.30.000,00";
} else {
  ongkir = 40000;
  strOngkir = "sebesar Rp.40.000,00";
}

alert(
  `Anda memesan kain batik sebanyak : ${tempValue}
Anda berlokasi di ${lokasiValue}, ongkir anda ${strOngkir}

Total biaya yang anda bayar + ongkir senilai : ${formatRupiah(String(hargaBarang * tempValue + ongkir), "Rp.")}

silahkan klik tombol "pesan via whatsApp"
    `
);
}
}

function minus() {
  if (tempValue > 0) {
    console.log("ini jalan minus", tempValue);
    tempValue--;
  }
  document.getElementById("testing").value = tempValue;
}
function plus() {
  console.log("ini jalan plus", tempValue);
  tempValue++;
  document.getElementById("testing").value = tempValue;
}
