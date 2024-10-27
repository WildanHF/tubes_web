

$(document).ready(function () {

    $('#loginButton').click(function (event) {
        event.preventDefault(); // Mencegah form dari pengiriman otomatis

        // Mengambil nilai input
        const email = $('#email').val().trim();
        const password = $('#password').val().trim();

        // Validasi email
        if (email === '') {
            $('#emailError').text('Email tidak boleh kosong.');
        } else if (!validateEmail(email)) {
            $('#emailError').text('Format email tidak valid.');
        } else {
            $('#emailError').text(''); // Menghapus pesan kesalahan jika valid
        }

        // Validasi password
        if (password === '') {
            $('#passwordError').text('Password tidak boleh kosong.');
        } else {
            $('#passwordError').text(''); // Menghapus pesan kesalahan jika valid
        }

        // Validasi konfirmasi password

        // Jika semua validasi lulus
        if (email && validateEmail(email) && password) {
            // Di sini, Anda bisa mengarahkan pengguna ke halaman login atau mengirim data ke server
            window.location.href = 'homepageLogin.html';
        }
    });

    // Fungsi untuk memvalidasi email menggunakan regex
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
