window.showLogin = document.getElementById('showLogin');
        window.dialogLogin = document.getElementById('dialogLogin');
        window.closeDialog = document.getElementById('closeDialog');

        window.showLogin.addEventListener('click', () => {
            window.dialogLogin.showModal();
        });

        window.closeDialog.addEventListener('click', () => {
            window.dialogLogin.close();
        });

        window.dialogLogin.addEventListener('click', (event) => {
            if (event.target === window.dialogLogin) {
                window.dialogLogin.close();
            }
        });

        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('active');
        }