(() => {
                    const refs = {
                        openMenuBtn: document.querySelector("[data-menu-open-header]"),
                        closeMenuBtn: document.querySelector("[data-menu-close-header]"),
                        menu: document.querySelector("[data-menu-header]"),
                    };

                    refs.openMenuBtn.addEventListener("click", toggleMenu);
                    refs.closeMenuBtn.addEventListener("click", toggleMenu);

                    function toggleMenu() {
                        refs.menu.classList.toggle("is-hidden");
                    }
                })();