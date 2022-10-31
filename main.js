const body = document.getElementsByTagName('body')[0];
const toggleswitch = document.getElementById('switch');
const checkbox = document.querySelector("#switch input[type='checkbox'");
const cards = document.querySelectorAll(".cards-container>div");
const mode_text = document.getElementById('mode');
const text = document.querySelectorAll(`
  .cards-container>div div:nth-child(1)>span,
  .dashboard-card .followers-span
`)


toggleswitch.addEventListener('click', function () {
  if (checkbox.checked) {
    mode_text.textContent = 'Dark Mode';
    body.style.backgroundColor = 'var(--very-dark-blue)';
    body.style.color = 'var(--white)';
    cards.forEach(card => {
      card.style.backgroundColor = 'var(--dark-desaturated-blue)';
    })
    text.forEach(span => {
      span.style.color = 'var(--desaturated-blue)';
    })
    
    // Guardamos el modo en el localStorage
    localStorage.setItem('darkmode', 'true');
  }
  else {
    mode_text.textContent = 'White Mode';
    body.style.backgroundColor = 'var(--white)';
    body.style.color = 'var(--very-dark-blue)';  
    cards.forEach(card => {
      card.style.backgroundColor = 'var(--light-grayish-blue)';
    })
    text.forEach(span => {
      span.style.color = 'var(--dark-grayish-blue)';
    })

    // Guardamos el modo en el localStorage
    localStorage.setItem('darkmode', 'false');
  }
})


// Obtenemos el modo actual
if (localStorage.getItem('darkmode') == 'true')
  checkbox.click();
