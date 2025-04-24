document.addEventListener('DOMContentLoaded', function () {
    const agentBoxes = document.querySelectorAll('.box');
    const agentPanels = document.querySelectorAll('.container');
    const abilityButtons = document.querySelectorAll('.ability-btn');
    const abilityDescriptions = document.querySelectorAll('.ability-description');

    // Remove the active class from navbar links 
    // (This ensures the red background doesn't appear on the AGENTS link in navbar)
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.textContent === 'AGENTS') {
            link.classList.remove('active');
        }
    });

    const videos = {
        phoenix: document.getElementById('phoenixVideo'),
        astra: document.getElementById('astraVideo'),
        sage: document.getElementById('sageVideo'),
        sova: document.getElementById('sovaVideo'),
        raze: document.getElementById('razeVideo')
    };

    const videoSources = {
        phoenix: {
            1: '../ASSET/phoenixa1.mp4',
            2: '../ASSET/phoenixa2.mp4',
            3: '../ASSET/phoenixa3.mp4',
            4: '../ASSET/phoenixa4.mp4'
        },
        astra: {
            1: '../ASSET/astraa1.mp4',
            2: '../ASSET/astraa2.mp4',
            3: '../ASSET/astraa3.mp4',
            4: '../ASSET/astraa4.mp4'
        },
        sage: {
            1: '../ASSET/sagea1.mp4',
            2: '../ASSET/sagea2.mp4',
            3: '../ASSET/sagea3.mp4',
            4: '../ASSET/sagea4.mp4'
        },
        sova: {
            1: '../ASSET/sovaa1.mp4',
            2: '../ASSET/sovaa2.mp4',
            3: '../ASSET/sovaa3.mp4',
            4: '../ASSET/sovaa4.mp4'
        },
        raze: {
            1: '../ASSET/razea1.mp4',
            2: '../ASSET/razea2.mp4',
            3: '../ASSET/razea3.mp4',
            4: '../ASSET/razea4.mp4'
        }
    };

    function getAbilityVideoSrc(agent, abilityNum) {
        return videoSources[agent] ? videoSources[agent][abilityNum] : '';
    }

    function playVideo(videoElement) {
        if (videoElement) {
            videoElement.muted = true;
            videoElement.load();
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Video started playing.');
                }).catch(error => {
                    console.error('Video playback was prevented:', error);
                });
            }
        }
    }

    function playAbilityVideo(agent, abilityNum) {
        const video = videos[agent];
        if (video) {
            const src = getAbilityVideoSrc(agent, abilityNum);
            video.setAttribute('src', src);
            playVideo(video);
        }
    }

    function activateAgent(agentName) {
        // Panel dan Box
        agentBoxes.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-agent') === agentName);
        });

        agentPanels.forEach(p => {
            p.classList.toggle('active', p.id === `${agentName}-panel`);
        });

        // Button Ability
        abilityButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-agent') === agentName && btn.getAttribute('data-ability') === '1';
            btn.classList.toggle('active', isActive);
        });

        // Deskripsi Ability
        document.querySelectorAll(`.${agentName}-desc .ability-description`).forEach(desc => {
            const isActive = desc.getAttribute('data-ability') === '1';
            desc.classList.toggle('active', isActive);
        });

        // Mainkan video pertama
        setTimeout(() => {
            playAbilityVideo(agentName, 1);
        }, 100);
    }

    // Saat klik agent
    agentBoxes.forEach(box => {
        box.addEventListener('click', function () {
            const agentName = this.getAttribute('data-agent');
            activateAgent(agentName);
        });
    });

    // Saat klik ability
    abilityButtons.forEach(button => {
        button.addEventListener('click', function () {
            const agent = this.getAttribute('data-agent');
            const abilityNum = this.getAttribute('data-ability');

            // Aktifkan tombol
            document.querySelectorAll(`.ability-btn[data-agent="${agent}"]`).forEach(btn => {
                btn.classList.toggle('active', btn === this);
            });

            // Aktifkan deskripsi
            document.querySelectorAll(`.${agent}-desc .ability-description`).forEach(desc => {
                desc.classList.toggle('active', desc.getAttribute('data-ability') === abilityNum);
            });

            // Mainkan video
            playAbilityVideo(agent, abilityNum);
        });
    });

    // Aktifkan default (Phoenix) saat pertama kali halaman dibuka
    activateAgent('phoenix');
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