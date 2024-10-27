

$(document).ready(function () {
    $('#verifikasiiButton').click(function (event) {
        event.preventDefault(); // Mencegah form dari pengiriman otomatis

        // Mengambil nilai input
        const code = $('#code').val().trim();

        // Validasi code
        if (code === '') {
            $('#codeError').text('code tidak boleh kosong.');
        } else {
            $('#codeError').text('');
            
            window.location.href = 'passwordBaru.html';
        }
    });

});
