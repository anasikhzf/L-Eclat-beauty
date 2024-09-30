// BURGER MENU
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// BOOKING
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form dari pengiriman standar

        // Ambil data dari form
        const name = document.getElementById("name").value;
        const alamat = document.getElementById("alamat").value;
        const telepon = document.getElementById("telepon").value;
        const date = document.getElementById("date").value;
        const service = document.getElementById("service").value;

        // Format pesan untuk WhatsApp
        const message = `Hai admin, saya ${name}, dari ${alamat}, ingin memesan layanan ${service}, pada tanggal ${date}, apakah bisa?`;

        // Nomor WA
        const waNumber = "+6281252106352";

        // Buat URL untuk WhatsApp
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

        // Buka WhatsApp di tab baru
        window.open(waUrl, '_blank');
    });
});

// GALLERY
document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-item'); // Perbaiki nama kelas di sini
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    const popupDescription = document.getElementById('popupDescription');
    const closePopup = document.getElementById('closePopup');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            popupImage.src = image.src;
            popupDescription.textContent = image.dataset.description;
            popup.style.display = 'flex'; // Tampilkan popup
        });
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none'; // Sembunyikan popup saat tombol close diklik
    });

    // Close popup when clicking outside of the image
    popup.addEventListener('click', (event) => {
        if (event.target !== popupImage) {
            popup.style.display = 'none';
        }
    });
});
