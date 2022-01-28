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
    const lastMatch = league.data.schedule.events.pop();
    const last = lastMatch.state;
    const team1 = lastMatch.match.teams[0].name;
    const team2 = lastMatch.match.teams[1].name;
    const team1Logo = lastMatch.match.teams[0].image;
    const team2Logo = lastMatch.match.teams[1].image;
    const team1score = lastMatch.match.teams[0].result.gameWins;
    const team2score = lastMatch.match.teams[1].result.gameWins;

    console.log({lastMatch})
    console.log(last)
    console.log(team2)
    console.log(team1)
    console.log(team1Logo)
    console.log(team2Logo)
    console.log(team1score)
    console.log(team2score)

    renderMatch(team1, team2, team2Logo, team1Logo, team1score, team2score);
    
 }
    

function renderMatch(team1, team2, team2Logo, team1Logo, team1score, team2score) {
  const clone = template.content.cloneNode(true);

  const team1Name = clone.querySelector('.team-1');
  team1Name.innerText = team1;
  
  const img = clone.querySelector('.team-logo-1');
  img.setAttribute('src', team1Logo);
  img.setAttribute('alt', `The logo of ${team1Name}`);  

  const score1 = clone.querySelector('.score-1');
  score1.innerText = team1score;

  const team2Name = clone.querySelector('.team-2');
  team2Name.innerText = team2;

  const img2 = clone.querySelector('.team-logo-2');
  img2.setAttribute('src', team2Logo);
  img2.setAttribute('alt', `The logo of ${team2Name}`);

  const score2 = clone.querySelector('.score-2');
  score2.innerText = team2score;

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
