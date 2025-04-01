document.getElementById("hasil").addEventListener("click", function () {
  let match = parseInt(document.getElementById("match").value);
  let wrNow = parseFloat(document.getElementById("wrNow").value);
  let wrTarget = parseFloat(document.getElementById("wrTarget").value);

  // Validasi input
  if (isNaN(match) || isNaN(wrNow) || isNaN(wrTarget)) {
    alert("Harap isi semua input dengan angka yang valid!");
    return;
  }

  if (wrTarget <= wrNow) {
    alert("Win rate target harus lebih besar dari win rate saat ini!");
    return;
  }

  if (wrTarget >= 100) {
    alert("Win rate tidak bisa mencapai 100% dengan pertandingan sebelumnya.");
    return;
  }

  // Hitung total menang saat ini
  let winNow = Math.floor((wrNow / 100) * match);

  // Hitung jumlah kemenangan yang diperlukan
  let neededWins = Math.abs(
    Math.ceil(((wrTarget / 100) * match - winNow * 100) / (100 - wrTarget))
  );

  // Tampilkan hasil
  document.querySelector(
    ".hasilOutput p"
  ).innerHTML = `Kamu memerlukan sekitar <b>${neededWins}</b> win tanpa lose untuk mendapatkan win rate <b>${wrTarget}%</b>`;
});
