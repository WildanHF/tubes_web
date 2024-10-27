

$(document).ready(function () {
    $('#submitButton').click(function (event) {
        event.preventDefault(); 

     
        const password = $('#password').val().trim();
        const confirmPassword = $('#confirmPassword').val().trim();


        if (password === '') {
            $('#passwordError').text('Password tidak boleh kosong.');
        } else {
            $('#passwordError').text(''); 
        }

        if (confirmPassword === '') {
            $('#confirmPasswordError').text('Konfirmasi password tidak boleh kosong.');
        } else if (password !== confirmPassword) {
            $('#confirmPasswordError').text('Password tidak cocok.');
        } else {
            $('#confirmPasswordError').text(''); 
        }


        // Jika semua validasi lulus
        if (password && password === confirmPassword) {
            // Jika password dan konfirmasi password cocok, maka akan diarahkan ke halaman login
            window.location.href = 'login.html';
        } else {
            $('#confirmPasswordError').text('Password tidak sesuai');
        }
    });

   
});

