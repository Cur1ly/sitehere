const tooltip = document.querySelector('.tooltip');
const countries = document.querySelectorAll('.country');
const popupBg = document.querySelector('.info__bg');
const popup = document.querySelector('.info');
let lastClickedCountry = null; // Variable to store the last-clicked country

countries.forEach(country => {
  country.addEventListener('click', function () {
    popup.querySelector('.info__photo').setAttribute('src', this.dataset.photo);
    popup.querySelector('.info__title').innerText = this.dataset.title;
    popup.querySelector('.info__describtion').innerText = this.dataset.describtion;
    popupBg.classList.add('active');
    lastClickedCountry = country; // Update the last-clicked country
  });

  country.addEventListener('mousemove', function (e) {
    tooltip.innerText = this.dataset.title;
    tooltip.style.top = (e.y + 20) + 'px';
    tooltip.style.left = (e.x + 20) + 'px';
  });

  country.addEventListener('mouseenter', function () {
    tooltip.style.display = 'block';
  });

  country.addEventListener('mouseleave', function () {
    tooltip.style.display = 'none';
  });
});

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('active');
  }
});

// Update the last-clicked country on button click
const wasHereButton = document.querySelector('.info .button');
wasHereButton.addEventListener('click', function () {
  if (lastClickedCountry) {
    lastClickedCountry.classList.add('selected-country'); // Highlight the last-clicked country
    popupBg.classList.remove('active'); // Close the information window
  }
});