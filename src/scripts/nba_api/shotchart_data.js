// header_data  = {
//   'Connection': 'keep-alive',
//   'Accept': 'application/json, text/plain, */*',
//   'x-nba-stats-token': 'true',
//   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
//   'x-nba-stats-origin': 'stats',
//   'Sec-Fetch-Site': 'same-origin',
//   'Sec-Fetch-Mode': 'cors',
//   'Referer': 'https://stats.nba.com/',
//   'Accept-Encoding': 'gzip, deflate, br',
//   'Accept-Language': 'en-US,en;q=0.9',
// }



// header = {
//   'Host': 'stats.nba.com',
//   'Connection': 'keep-alive',
//   'Cache-Control': 'max-age=0',
//   'Upgrade-Insecure-Requests': '1',
//   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
//   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
//   'Accept-Encoding': 'gzip, deflate, br',
//   'Accept-Language': 'en-US,en;q=0.9',
// }



// from nba_api.stats.endpoints import leaguedashteamstats
// import requests
// import json
// import pandas as pd

// response = leaguedashteamstats.LeagueDashTeamStats(
//     team_id_nullable='0',
//     league_id_nullable='00',
//     season= '2020-21',
//     season_type_all_star='Regular Season',
//     headers={'Accept': 'application/json, text/plain, */*',
// 'Accept-Encoding': 'gzip, deflate, br',
// 'Accept-Language': 'en-US,en;q=0.9',
// 'Connection': 'keep-alive',
// 'Host': 'stats.nba.com',
// 'Origin': 'https://www.nba.com',
// 'Referer': 'https://www.nba.com/',
// 'sec-ch-ua': '"Google Chrome";v="87", "\"Not;A\\Brand";v="99", "Chromium";v="87"',
// 'sec-ch-ua-mobile': '?1',
// 'Sec-Fetch-Dest': 'empty',
// 'Sec-Fetch-Mode': 'cors',
// 'Sec-Fetch-Site': 'same-site',
// 'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36',
// 'x-nba-stats-origin': 'stats',
// 'x-nba-stats-token': 'true'})


// df = response.get_data_frames()[0]



  // const headers = {
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
  // }

// params = {'LeagueID': '00',
// 'PerMode': 'PerGame',
// 'PlayType': 'Cut',
// 'PlayerOrTeam': 'P',
// 'SeasonType': 'Regular Season',
// 'SeasonYear': '2020-21',
// 'TypeGrouping': 'offensive'}



// const headers = {
//   'Accept': 'application/json, text/plain, */*',
//   'Accept-Encoding': 'gzip, deflate, br',
//   'Accept-Language': 'en-US,en;q=0.9,ko;q=0.8',
//   'Connection': 'keep-alive',
//   'Host': 'stats.nba.com',
//   // 'If-Modified-Since': Mon, 26 Jul 2021 20:11:17 GMT
//   'Origin': 'https://www.nba.com',
//   'Referer': 'https://www.nba.com/',
//   // 'sec-ch-ua': " Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"
//   // 'sec-ch-ua-mobile': ?0
//   // 'Sec-Fetch-Dest': empty
//   'Sec-Fetch-Mode': 'cors',
//   'Sec-Fetch-Site': 'same-site',
//   'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36',
//   'x-nba-stats-origin': 'stats',
//   'x-nba-stats-token': 'true'
// }

export const testapi = () => {
  fetch("https://stats.nba.com/stats/commonteamroster?LeagueID=00&Season=2020-21&TeamID=1610612749")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => err.json())
}