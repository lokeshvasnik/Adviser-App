const searchBtn = document.querySelector('.search__btn');

const result = document.querySelector('.advices');

searchBtn.addEventListener('click', (e) => {
  const loaderDiv = document.getElementById('loader');

  const loading = document.querySelector('.loading');

  let finalURL = `https://api.adviceslip.com/advice`;

  const showLoader = () => {
    loaderDiv.classList.add('show');
    loading.innerHTML = 'Loading Advice';
    result.innerHTML = '';
  };
  const hideLoader = () => {
    loaderDiv.classList.remove('show');
  };

  // Fetching data from the rest api

  showLoader();

  setTimeout(() => {
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        hideLoader();
        result.innerHTML = `
        <p> ${data.slip.advice} </p>
        `;
      });
  }, 1050);
});
