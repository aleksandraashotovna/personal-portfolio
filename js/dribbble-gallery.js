fetch('https://super-frangollo-b23bf8.netlify.app/.netlify/functions/get-shots')
  .then(res => res.json())
  .then(shots => {
    const gallery = document.getElementById('gallery');

    shots.forEach(shot => {
      const div = document.createElement('div');
      div.innerHTML = `
        <a href="${shot.html_url}" target="_blank" rel="noopener noreferrer" aria-describedby="opens-new-tab">
          <img src="${shot.images.hidpi || shot.images.normal}" alt="${shot.title}">
          <div class="icon-wrapper">
            <svg aria-hidden="true" class="icon">
                <use href="assets/icons.svg#arrow-right-up"></use>
            </svg>
        </div>
        </a>
      `;
      gallery.appendChild(div);
    });

    const dribbbleLink = document.createElement('a');
    dribbbleLink.href = 'https://dribbble.com/ashkurat';
    dribbbleLink.target = '_blank';
    dribbbleLink.rel = 'noopener noreferrer';
    dribbbleLink.className = 'link-block color-coded dribbble';
    dribbbleLink.setAttribute('aria-describedby', 'opens-new-tab');

    dribbbleLink.innerHTML = `
      <div class="icon-wrapper">
          <svg aria-hidden="true" class="icon jumping">
              <use href="assets/icons.svg#dribbble"></use>
          </svg>
      </div>
      <div class="text-wrapper">
          <p class="link-title">Want to see more UI?</p>
          <p>Check out my Dribbble</p>
      </div>
    `;

    gallery.appendChild(dribbbleLink);
  })
  
  .catch(err => {
    console.error('Error loading Dribbble shots:', err);
    const gallery = document.getElementById('gallery');
    gallery.textContent = 'Failed to load shots from Dribbble 😔';
    gallery.classList.add('dribbble-grid-error');
  });
