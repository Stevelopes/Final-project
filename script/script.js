window.addEventListener('DOMContentLoaded', getLeagueData);

async function getLeagueData() {
    const response = await fetch('https://prod-relapi.ewp.gg/persisted/gw/getLeagues?h1=en-GB&leagueId=98767991302996019', {
      headers: {
        'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z'
      }
    });
    const league = await response.json();
    console.log(league);
    
  }