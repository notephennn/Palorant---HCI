document.getElementById("bugReportForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let server = document.getElementById("server").value;
    let bugDescription = document.getElementById("bugDescription").value;
    let bugScreenshot = document.getElementById("bugScreenshot").files[0];
    let followUpPermission = document.getElementById("followUpPermission").checked;

    // Validasi 1: Pastikan username diisi minimal 3 karakter
    if (username.length < 3) {
        alert("Nama pengguna harus memiliki setidaknya 3 karakter.");
        return;
    }

    // Validasi 2: Pastikan email memiliki format yang benar
    if (!email.includes("@") || !email.includes(".")) {
        alert("Masukkan email yang valid.");
        return;
    }

    // Validasi 3: Pastikan server dipilih
    if (server === "") {
        alert("Harap pilih server.");
        return;
    }

    // Validasi 4: Pastikan deskripsi bug memiliki minimal 10 karakter
    if (bugDescription.length < 10) {
        alert("Deskripsi bug harus minimal 10 karakter.");
        return;
    }

    // Validasi 5: Jika ada lampiran, pastikan itu adalah gambar
    if (bugScreenshot && !bugScreenshot.type.startsWith("image/")) {
        alert("Lampiran harus berupa gambar.");
        return;
    }

    let reportData = {
        username: username,
        email: email,
        server: server,
        bugDescription: bugDescription,
        bugScreenshot: bugScreenshot ? bugScreenshot.name : "Tidak ada file terlampir",
        followUpPermission: followUpPermission
    };

    console.log("Laporan Bug:", reportData);
    alert("Laporan bug berhasil dikirim!");
});
document.getElementById("bugReportForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let server = document.getElementById("server").value;
            let bugDescription = document.getElementById("bugDescription").value;
            let bugScreenshot = document.getElementById("bugScreenshot").files[0];
            let followUpPermission = document.getElementById("followUpPermission").checked;

            // Validasi 1: Pastikan username diisi minimal 3 karakter
            if (username.length < 3) {
                alert("Nama pengguna harus memiliki setidaknya 3 karakter.");
                return;
            }

            // Validasi 2: Pastikan email memiliki format yang benar
            if (!email.includes("@") || !email.includes(".")) {
                alert("Masukkan email yang valid.");
                return;
            }

            // Validasi 3: Pastikan server dipilih
            if (server === "") {
                alert("Harap pilih server.");
                return;
            }

            // Validasi 4: Pastikan deskripsi bug memiliki minimal 10 karakter
            if (bugDescription.length < 10) {
                alert("Deskripsi bug harus minimal 10 karakter.");
                return;
            }

            // Validasi 5: Jika ada lampiran, pastikan itu adalah gambar
            if (bugScreenshot && !bugScreenshot.type.startsWith("image/")) {
                alert("Lampiran harus berupa gambar.");
                return;
            }

            let reportData = {
                username: username,
                email: email,
                server: server,
                bugDescription: bugDescription,
                bugScreenshot: bugScreenshot ? bugScreenshot.name : "Tidak ada file terlampir",
                followUpPermission: followUpPermission
            };

            console.log("Laporan Bug:", reportData);
            alert("Laporan bug berhasil dikirim!");
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('menu-overlay');
    body.appendChild(overlay);
    
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        if (navLinks.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }
    
    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on overlay
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});