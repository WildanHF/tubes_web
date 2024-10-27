

$(document).ready(function () {
    $('#verifikasiButton').click(function (event) {
        event.preventDefault(); // Mencegah form dari pengiriman otomatis

        // Mengambil nilai input
        const email = $('#email').val().trim();

        // Validasi email
        if (email === '') {
            $('#emailError').text('Email tidak boleh kosong.');
        } else if (!validateEmail(email)) {
            $('#emailError').text('Format email tidak valid.');
        } else {
            $('#emailError').text('');
            
            window.location.href = 'code.html';
        }
    });

    // Fungsi untuk memvalidasi email menggunakan regex
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
