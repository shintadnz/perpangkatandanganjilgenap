let maximalScore = 3;

function tambahScore(){
    const player1display = document.getElementById("p1display");
    const player2display = document.getElementById("p2display");

    let angkaP1 = player1display.textContent
    
    let totalscoreP1 = Number(angkaP1) + 1;

    player1display.textContent = totalscoreP1;

    if(totalscoreP1 ==maximalScore){
        //ngubah warna score team a jadi hijau kalau sudah mencapai maximal score
        player1display.style.color = "green";
        //ngubah warna score team b jadi merah kalau team a mencapai maximal score
        player2display.style.color ="red";

        document.getElementById("menang").textContent = "TEAM A MENANG!!!"
    }
    
}

function tambahScoreP2(){
    const player1display = document.getElementById("p1display");
    const player2display = document.getElementById("p2display");

    let angkaP2 = player2display.textContent
    
    let totalscoreP2 = Number(angkaP2) + 1;

    player2display.textContent = totalscoreP2;

    if(totalscoreP2 == maximalScore){
        //ngubah warna score team B jadi hijau kalau sudah mencapai maximal score
        player1display.style.color = "red";
        //ngubah warna score team A jadi merah kalau team a mencapai maximal score
        player2display.style.color ="green";

        document.getElementById("menang").textContent = "TEAM B MENANG!!!"
    }
}

function resetScore(){
    const player1display = document.getElementById("p1display");
    const player2display = document.getElementById("p2display");

    // Bikin skornya balik ke 0
    player1display.textContent = "0";
    player2display.textContent = "0";

    // Balikin warna ke hitam
    player1display.style.color = "black";
    player2display.style.color = "black";

    // Hapus tulisan menang
    document.getElementById("menang").textContent = "";
}

function gantiNamaA() {
    let namaBaru = prompt("Masukkan nama baru untuk Team A:");
    if (namaBaru) {
        document.getElementById("teamAName").textContent = namaBaru;
    }
}

function gantiNamaB() {
    let namaBaru = prompt("Masukkan nama baru untuk Team B:");
    if (namaBaru) {
        document.getElementById("teamBName").textContent = namaBaru;
    }
} 