// Api

window.addEventListener('DOMContentLoaded', getLeagueData);

async function getLeagueData() {
    const response = await fetch('https://prod-relapi.ewp.gg/persisted/gw/getSchedule?hl=en-GB&leagueId=98767991302996019', {
      headers: {
        'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z'
      }
    });
    const league = await response.json();
    console.log(league);
    
  }


  // Accordian

  const accordionTitles = Array.from(document.querySelectorAll('dt'));

accordionTitles.forEach((accordionTitle) =>
  accordionTitle.addEventListener('click', openAccordion),
);

function closeAllAccordionsExcept(element) {
  const index = accordionTitles.indexOf(element);
  const filteredAccordionTitles = accordionTitles.filter(
    (accordionTitle, i) => {
      if (i !== index) {
        return accordionTitle;
      }
    },
  );

  filteredAccordionTitles.forEach((accordionTitle) => {
    accordionTitle.setAttribute('aria-expanded', false);
    accordionTitle.classList.remove('accordion-open');
  });
}

function openAccordion(event) {
  const currentTarget = event.currentTarget;

  let target;
  if (currentTarget.nodeName === 'DT') {
    target = currentTarget;
  } else {
    target = currentTarget.parentNode;
  }

  closeAllAccordionsExcept(target);
  target.classList.toggle('accordion-open');

  if (target.classList.contains('accordion-open')) {
    return target.setAttribute('aria-expanded', true);
  }
  return target.setAttribute('aria-expanded', false);
}

// hamburger

const navSlide = () => {
  const burger = document.querySelector('.toggle-button');
  const nav =document.querySelector('.nav-links');

  
  burger.addEventListener('click',() => {
  
    // Toggle burger  
  nav.classList.toggle('nav-active');
  });
}

navSlide();