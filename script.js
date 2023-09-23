document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Lakukan validasi username dan password di sini
        // Misalnya, Anda dapat membandingkan dengan nilai yang telah Anda tetapkan sebelumnya.

        if (username === "egi" && password === "123") {
            alert("Login berhasil!");
        
            // Pengalihan ke halaman profil sederhana setelah login berhasil
            window.location.href = "profile.html"; // Gantilah dengan nama file halaman profil Anda
        } else {
            alert("Login gagal. Cek kembali username dan password Anda.");
        }
        
    });
});


    
