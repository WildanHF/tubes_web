

$(document).ready(function () {
    $('#registerButton').click(function (event) {
        event.preventDefault(); 

        const email = $('#email').val().trim();
        const password = $('#password').val().trim();
        const confirmPassword = $('#confirmPassword').val().trim();

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
        if (confirmPassword === '') {
            $('#confirmPasswordError').text('Konfirmasi password tidak boleh kosong.');
        } else if (password !== confirmPassword) {
            $('#confirmPasswordError').text('Password tidak cocok.');
        } else {
            $('#confirmPasswordError').text(''); // Menghapus pesan kesalahan jika valid
        }

        // Jika semua validasi lulus
        if (email && validateEmail(email) && password && password === confirmPassword) {
            alert('Registrasi berhasil!');
            // mengarahkan pengguna ke halaman login atau mengirim data ke server
            window.location.href = 'login.html';
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
