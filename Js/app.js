// Selecting elements
const searchBtn = document.querySelector('.search__btn');

searchBtn.addEventListener('click', (e) => {
  const result = document.querySelector('.advices');

  const loaderDiv = document.querySelector('.loader');

  const loading = document.querySelector('.loading');

  // Api Url
  let finalURL = `https://api.adviceslip.com/advice`;

  // Hide and Unhide functions
  const showLoader = () => {
    loaderDiv.classList.add('show');
    loading.innerHTML = 'Loading Advice';
    result.innerHTML = '';
  };
  const hideLoader = () => loaderDiv.classList.remove('show');

  // Fetching data from the rest api

  // Gets called when the advice is loading
  showLoader();

  setTimeout(() => {
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        // Gets called wehn the advice loads
        hideLoader();
        result.innerHTML = `
        <p> ${data.slip.advice} </p>
        `;
      });
  }, 1050);
});
