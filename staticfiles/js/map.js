const tooltip = document.querySelector('.tooltip');
const countries = document.querySelectorAll('.country');
const popupBg = document.querySelector('.info__bg');
const popup = document.querySelector('.info');
let lastClickedCountry = null; 

countries.forEach(country => {
  country.addEventListener('click', function () {
    popup.querySelector('.info__photo').setAttribute('src', this.dataset.photo);
    popup.querySelector('.info__title').innerText = this.dataset.title;
    popup.querySelector('.info__describtion').innerText = this.dataset.describtion;
    popupBg.classList.add('active');
    lastClickedCountry = country; 
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

const wasHereButton = document.querySelector('.info .button');
wasHereButton.addEventListener('click', function () {
  if (lastClickedCountry) {
    lastClickedCountry.classList.add('selected-country');
    popupBg.classList.remove('active'); 
  }
});

