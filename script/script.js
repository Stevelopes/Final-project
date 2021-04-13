// Api  

  const template = document.querySelector('template');
  const leagueWrapper = document.querySelector('.fixture');

window.addEventListener('DOMContentLoaded', getLeagueData);

async function getLeagueData() {
    const response = await fetch('https://prod-relapi.ewp.gg/persisted/gw/getSchedule?hl=en-GB&leagueId=98767991302996019', {
      headers: {
        'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z'
      }
    });
    const league = await response.json();
    console.log(league);
    const team1 = league.data.schedule.events[79].match.teams[0].name;
    const team2 = league.data.schedule.events[79].match.teams[1].name;
    const lastMatch = league.data.schedule.events.pop();

    console.log({lastMatch})
    console.log(team2)
    console.log(team1)

    renderMatch(team1, team2);
 }
    

function renderMatch(team1, team2) {
  const clone = template.content.cloneNode(true);

  const team1Name = clone.querySelector('.team-1');
  team1Name.innerText = team1;

  const team2Name = clone.querySelector('.team-2');
  team2Name.innerText = team2;

  leagueWrapper.appendChild(clone);
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
  const nav =document.querySelector('.nav');
  
  burger.addEventListener('click',() => {

    // Toggle burger  
  nav.classList.toggle('nav-active');


   });
}

navSlide();
