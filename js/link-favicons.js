// Automatically add favicons to all links with class "link"
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a.link');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
            try {
                const url = new URL(href);
                const domain = url.hostname;
                const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
                
                // Set the favicon background image
                link.style.setProperty('--favicon-url', `url('${faviconUrl}')`);
                
                // Inject CSS rule for ::before element
                if (!document.getElementById('link-favicons-style')) {
                    const style = document.createElement('style');
                    style.id = 'link-favicons-style';
                    document.head.appendChild(style);
                }
                
                // Alternative: directly set the ::before background via computed style
                link.style.setProperty('--favicon-url', `url('${faviconUrl}')`);
            } catch (e) {
                console.warn('Invalid URL:', href);
            }
        }
    });
});
