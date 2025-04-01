// menampilkan list game menggunakan ajax
$.getJSON("/assets/data/json/game.json", function (result) {
  let game = result.game;
  $.each(game, function (i, result) {
    $(".container").append(`
      <div class="card">
        <a href="#">
          <img id="gambar" src="${result.gambar}" alt="${result.nama}" />
          <h3 class="namaGame">${result.nama} <span class="dev">${result.developer}</span></h3>
        </a>
      </div>
    `);
  });
});

// ini manggil header
$(document).ready(function () {
  $("#fullHeader").load("header.html", function (response, status, xhr) {
    if (status === "error") {
      console.error("Gagal memuat header:", xhr.status, xhr.statusText);
    }
  });
});
