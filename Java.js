var books = [
    { title: "Cerita Anak Hebat", author: "Tim Penulis Buku Anak Jatim", link: "https://www.google.co.id/books/edition/Cerita_Anak_Hebat/MMtGDwAAQBAJ?hl=id&gbpv=1&dq=buku+cerita+untuk+anak-anak&printsec=frontcover", img:"https://books.google.co.id/books/publisher/content?id=MMtGDwAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U3op9bSRNWKv5mH4fS2klY8i5XSbQ&w=1280"},
    { title: "Kumpulan Cerita Anak Hebat", author: "Mulasih Tary", link: "https://www.google.co.id/books/edition/Kumpulan_Cerita_Anak_Hebat/rdI3EAAAQBAJ?hl=id&gbpv=1&dq=buku+cerita+untuk+anak-anak&printsec=frontcover", img:'https://books.google.co.id/books/publisher/content?id=rdI3EAAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1dgZNx_vSaIRGcgxWnFlDFZJp2Cw&w=1280'},
    { title: "Proses Kreasi Ilustrasi Serial Buku Cerita Anak Lovely", author: "Hanum Ayuningtyas", link: "https://www.google.co.id/books/edition/Proses_Kreasi_Ilustrasi_Serial_Buku_Ceri/tnVdEAAAQBAJ?hl=id&gbpv=1&dq=buku+cerita+untuk+anak-anak&printsec=frontcover", img:'https://books.google.co.id/books/publisher/content?id=tnVdEAAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0F6EDRQMDt8wowIaeT2DAL2Iaw9A&w=1280'},
    { title: "Kumpulan Dongeng untuk Anak", author: "Stella Ernes", link: "https://www.google.co.id/books/edition/Kumpulan_Dongeng_untuk_Anak_1/tkIHEAAAQBAJ?hl=id&gbpv=1&dq=buku+cerita+untuk+anak-anak&printsec=frontcover", img:'https://books.google.co.id/books/publisher/content?id=tkIHEAAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U3zjJkixcYzfT653lGBjhu7DfIJxQ&w=1280'},
    { title: "Kumpulan Cerita Anak Cerdas", author: "Durroh FUadin K", link: "https://www.google.co.id/books/edition/Kumpulan_Cerita_Anak_Cerdas/wvvrDwAAQBAJ?hl=id&gbpv=1&dq=buku+cerita+untuk+anak-anak&printsec=frontcover", img:'https://books.google.co.id/books/publisher/content?id=wvvrDwAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0v-v9_gfuo6kfe6OC7BZ0BJnTNkQ&w=1280'},
    { title: "25 Dongeng Klasik Dunia", author: "Klara Valerie", link: "https://www.google.co.id/books/edition/25_Dongeng_Klasik_Dunia/0c5BDwAAQBAJ?hl=id&gbpv=1&dq=buku+cerita+untuk+anak-anak&printsec=frontcover", img:'https://books.google.co.id/books/publisher/content?id=0c5BDwAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1S389R_PsQsfP8PwTJ10FrerbR4A&w=1280'},
    { title: "Cerita Rakyat Nusantara 34 Provinsi", author: "Dini Ayu", link: "https://www.google.co.id/books/edition/Cerita_Rakyat_Nusantara_34_Provinsi/yjohDAAAQBAJ?hl=id&gbpv=1&dq=buku+cerita+untuk+anak-anak&printsec=frontcover", img:'https://books.google.co.id/books/publisher/content?id=yjohDAAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0ANnVExE4_1utTGn_z-ncG3JLNjA&w=1280'},
    { title: "Si Cemong Coak", author: "Iwok Abqary", link: "https://buku.kemdikbud.go.id/katalog/si-cemong-coak", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Si_Cemong_Coak_Cover.png'},
    { title: "Tidak Bisa Tidak", author: "Lenny Puspita Ekawaty", link: "https://buku.kemdikbud.go.id/katalog/tidak-bisa-tidak", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Tidak_Bisa_Tidak_Cover.png'},
    { title: "Nanti Saja", author: "Fransisca Emilia", link: "https://buku.kemdikbud.go.id/katalog/nanti-saja", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Nanti_Saja_Cover.png'},
    { title: "Ini Atau Itu?", author: "Barbara Eni", link: "https://buku.kemdikbud.go.id/katalog/ini-atau-itu", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Ini_Atau_Itu_Cover.png'},
    { title: "Coba Dulu Tora!", author: "Sri Sarastuti", link: "https://buku.kemdikbud.go.id/katalog/coba-dulu-tora", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Coba_Dulu_Tora_Cover.png'},
    { title: "Putri Dalam Hutan", author: "Wiratu Emi", link: "https://buku.kemdikbud.go.id/katalog/putri-dalam-hutan", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Putri_Didalam_Hutan_Cover.png'},
    { title: "Di Mana Kacang Sipet?", author: "Aris Hartanti", link: "https://buku.kemdikbud.go.id/katalog/di-mana-kacang-sipet", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Dimana_Kacang_Sipet_Cover.png'},
    { title: "Apa Itu?", author: "Laksmi Manohara, Aira Rumi", link: "https://buku.kemdikbud.go.id/katalog/apa-itu", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Apa_Itu_Cover.png'},
    { title: "Karena Anggrek Ibu", author: "Debby Lukito Goeyardi, Widyasari Hanaya", link: "https://buku.kemdikbud.go.id/katalog/karena-anggrek-ibu", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Karena_Anggrek_Ibu_Cover.png'},
    { title: "Gambar Lucu Mika", author: "Tyas Widjati", link: "https://buku.kemdikbud.go.id/katalog/gambar-lucu-mika", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Gambar_Lucu_Mika_Cover.png'},
    { title: "Kue Kimu", author: "Lia Herliana", link: "https://buku.kemdikbud.go.id/katalog/kue-kimu", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Kue_Kimu_Cover.png'},
    { title: "Warna-Warni Anak Ondel-Ondel", author: "Hervianna Artha", link: "https://buku.kemdikbud.go.id/katalog/warna-warni-anak-ondel-ondel", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Warna_Warni_Anak_Ondel_Cover.png'},
    { title: "Layur Tetaplah Berlayar", author: "Anang YB", link: "https://buku.kemdikbud.go.id/katalog/layur-tetaplah-berlayar", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Layur_Tetaplah_Berlayar_Cover.png'},
    { title: "Kesatria Penjaga", author: "Fransisca Emilia", link: "https://buku.kemdikbud.go.id/katalog/kesatria-penjaga", img:'https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Kesatria_Penjaga_Cover.png'},
    { title: "Kesatria Penjaga", author: "Fransisca Emilia", link: "https://buku.kemdikbud.go.id/katalog/kesatria-penjaga", img:''},
];

// Fungsi untuk menambahkan buku ke dalam daftar
function renderBooks() {
    var bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach(function(book) {
        var li = document.createElement('li');
        var link = document.createElement('a');
        var img = document.createElement('img');
        img.src = book.img;
        img.alt = book.title;
        img.style.width = '100px'; // Buka link di tab/baru

        var link = document.createElement('a');
        link.textContent = book.title + ' - ' + book.author;
        link.href = book.link;
        link.target = '_blank'; // Buka link di tab/baru

        li.appendChild(img);
        li.appendChild(link);
        bookList.appendChild(li);
    });
}

// Panggil fungsi untuk pertama kali
renderBooks();

// Fungsi untuk mencari buku
function searchBooks() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var filteredBooks = books.filter(function(book) {
        return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
    });

    var bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    filteredBooks.forEach(function(book) {
        var li = document.createElement('li');
        var link = document.createElement('a');
        link.textContent = book.title + ' - ' + book.author;
        link.href = book.link;
        link.target = '_blank'; // Buka link di tab/baru

        li.appendChild(link);
        bookList.appendChild(li);
    });
}

// Panggil fungsi untuk pertama kali
renderBooks();

// Fungsi untuk mencari buku
function searchBooks() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var filteredBooks = books.filter(function(book) {
        return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
    });

    var bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    filteredBooks.forEach(function(book) {
        var li = document.createElement('li');

        var img = document.createElement('img');
        img.src = book.img;
        img.alt = book.title;
        img.style.width = '100px'; // Sesuaikan ukuran gambar

        var link = document.createElement('a');
        link.textContent = book.title + ' - ' + book.author;
        link.href = book.link;
        link.target = '_blank'; // Buka link di tab/baru

        li.appendChild(img);
        li.appendChild(link);
        bookList.appendChild(li);
    });
}