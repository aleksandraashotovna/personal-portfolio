document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const overlay = document.querySelector('.mobile-menu');

    burger.setAttribute('aria-expanded', 'false');

    const setMenuOpen = (isOpen) => {
        burger.classList.toggle('open', isOpen);
        overlay.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
    };

    burger.addEventListener('click', () => {
        const isOpen = !overlay.classList.contains('open');
        setMenuOpen(isOpen);

        if (isOpen) {
            const firstLink = overlay.querySelector('a');
            if (firstLink) firstLink.focus();
        } else {
            burger.focus();
        }
    });

    const overlayLinks = document.querySelectorAll('.mobile-menu a');
    overlayLinks.forEach(link => {
        link.addEventListener('click', () => {
            setMenuOpen(false);
            burger.focus();
        });
    });

    // Focus trapping for mobile menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) {
            setMenuOpen(false);
            burger.focus();
        }

        if (e.keyCode === 9 && overlay.classList.contains('open')) {
            const focusElements = [burger, ...overlay.querySelectorAll('a[href]')];
            if (focusElements.length > 0) {
                const first = focusElements[0];
                const last = focusElements[focusElements.length - 1];
                if (e.shiftKey) {
                    if (e.target === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (e.target === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        }
    });
});