const express = require('express'); // web framework
const fetch = require('node-fetch'); // for making AJAX requests
const path = require('path');

// put environmental variables defined in .env file on process.env
require('dotenv').config(); 

const app = express();

// serve files / assets from the dist folder
app.use(express.static('dist')); 

// in response to `GET /` requests, send the file `dist/index.html`
app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/dist/index.html`);
});





// NBA API REQUESTS
// headers
const headers = {
  'Host': 'stats.nba.com',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0',
  'Accept': 'application/json, text/plain, */*',
  'Accept-Language': 'en-US,en;q=0.5',
  'Referer': 'https://stats.nba.com/',
  'Accept-Encoding': 'gzip, deflate, br',
  'Connection': 'keep-alive',
  'x-nba-stats-origin': 'stats',
  'x-nba-stats-token': 'true'
};

// get list of players in a year
app.get("/getAllPlayers/:year", (request, response) => {
  console.log(`getting all players in ${request.params.year}`);

  fetch(`https://stats.nba.com/stats/commonallplayers?IsOnlyCurrentSeason=0&LeagueID=00&playerList=&Season=${request.params.year}`,
  { headers })
    .then( apiResponse => apiResponse.json() )
    .then( data => response.send(data))
    .catch( err => response.send(err) )
});

// get shot details
app.get("/getShotChart/:yearId/:playerId", (request, response) => {
  console.log("getting shot charts")

  fetch(`https://stats.nba.com/stats/shotchartdetail?AheadBehind=&ClutchTime=&ContextFilter=&ContextMeasure=FGA&DateFrom=&DateTo=&EndPeriod=&EndRange=&GameID=&GameSegment=&LastNGames=0&LeagueID=00&Location=&Month=0&OpponentTeamID=0&Outcome=&Period=0&PlayerID=${request.params.playerId}&PlayerPosition=&PointDiff=&Position=&RangeType=&RookieYear=&Season=${request.params.yearId}&SeasonSegment=&SeasonType=Regular+Season&StartPeriod=&StartRange=&TeamID=0&VsConference=&VsDivision=`,
  { headers, mode: "cors" })
    .then( apiResponse => apiResponse.json() )
    .then( data => response.send(data))
    .catch( err => {
      console.log(err);
      response.send(err);
    } )
})







// Heroku sets process.env.PORT in production; use 8000 in dev
const PORT = process.env.PORT || 8000;
// start up a server listening at PORT; on success, log a message
app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}`);
});