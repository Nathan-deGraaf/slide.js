document.addEventListener( 'DOMContentLoaded', () => {
  const sliders = document.querySelectorAll( '.slider' );

  sliders.forEach( slider => {
    const slides = Array.from( slider.children );

    // Create slider track
    const track = document.createElement( 'div' );
    track.classList.add( 'slider-track' );

    slides.forEach( slide => {
      track.appendChild( slide );
    });

    slider.appendChild( track );

    // Create navigation buttons
    const prevButton = document.createElement( 'button' );
    prevButton.classList.add( 'slider-prev' );
    prevButton.innerText = 'Prev';

    const nextButton = document.createElement( 'button' );
    nextButton.classList.add( 'slider-next' );
    nextButton.innerText = 'Next';

    slider.appendChild( prevButton );
    slider.appendChild( nextButton );

    // Pagination
    const paginate = slider.dataset.paginate !== 'false'; // Default to true
    const pagination = document.createElement( 'div' );
    pagination.classList.add( 'slider-pagination' );

    if ( paginate ) {
      slides.forEach( ( slide, index ) => {
        const dot = document.createElement( 'button' );
        dot.classList.add( 'slider-dot' );
        if ( index === 0 ) dot.classList.add( 'active' );
        pagination.appendChild( dot );

        dot.addEventListener( 'click', () => {
          currentIndex = index;
          updateSliderPosition();
          updatePagination();
        });
      });
      slider.appendChild( pagination );
    }

    let currentIndex = 0;
    let autoplayInterval;

    const updateSliderPosition = () => {
      const slideWidth = slides[ 0 ].getBoundingClientRect().width;
      track.style.transform = `translateX(-${ currentIndex * slideWidth }px)`;
      if ( paginate ) updatePagination();
    };

    const updatePagination = () => {
      const dots = pagination.children;
      Array.from( dots ).forEach( ( dot, index ) => {
        dot.classList.toggle( 'active', index === currentIndex );
      });
    };

    const nextSlide = () => {
      if ( currentIndex < slides.length - 1 ) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the start
      }
      updateSliderPosition();
    };

    const prevSlide = () => {
      if ( currentIndex > 0 ) {
        currentIndex--;
      } else {
        currentIndex = slides.length - 1; // Loop back to the end
      }
      updateSliderPosition();
    };

    nextButton.addEventListener( 'click', nextSlide );
    prevButton.addEventListener( 'click', prevSlide );

    window.addEventListener( 'resize', updateSliderPosition );

    // Initial position update
    updateSliderPosition();

    // Autoplay functionality
    const autoplay = slider.dataset.autoplay === 'true'; // Default to false
    const autoplaySpeed = slider.dataset.autoplaySpeed ? parseInt( slider.dataset.autoplaySpeed, 10 ) : 3000;

    if ( autoplay ) {
      autoplayInterval = setInterval( nextSlide, autoplaySpeed );

      // Pause autoplay on hover
      slider.addEventListener( 'mouseenter', () => clearInterval( autoplayInterval ));
      slider.addEventListener( 'mouseleave', () => autoplayInterval = setInterval( nextSlide, autoplaySpeed ));
    }
  });
});
