// headers = {
//   'Accept': 'application/json, text/plain, */*',
//   'Accept-Encoding': 'gzip, deflate, br',
//   'Accept-Language': 'en-US,en;q=0.9',
//   'Connection': 'keep-alive',
//   'Host': 'stats.nba.com',
//   'Origin': 'https://www.nba.com',
//   'Referer': 'https://www.nba.com/',
//   'sec-ch-ua': '"Google Chrome";v="87", "\"Not;A\\Brand";v="99", "Chromium";v="87"',
//   'sec-ch-ua-mobile': '?1',
//   'Sec-Fetch-Dest': 'empty',
//   'Sec-Fetch-Mode': 'cors',
//   'Sec-Fetch-Site': 'same-site',
//   'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36',
//   'x-nba-stats-origin': 'stats',
//   'x-nba-stats-token': 'true'
//   }
  
//   params = {'LeagueID': '00',
//   'PerMode': 'PerGame',
//   'PlayType': 'Cut',
//   'PlayerOrTeam': 'P',
//   'SeasonType': 'Regular Season',
//   'SeasonYear': '2020-21',
//   'TypeGrouping': 'offensive'}

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

export const testapi = () => {
  fetch("https://stats.nba.com/stats/playergamelogs?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Advanced&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlayerID=2544&PlusMinus=N&Rank=N&Season=2020-21&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision=", { headers })
    .then(res => res.json())
    // .then(data => console.log(data))
    .catch(err => console.log(err))
};