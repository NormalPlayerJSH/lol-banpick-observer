# lol-banpick-observer

League of legends BAN/PICK Observing Tool looks like eSports League

## Example
![사용예시](https://user-images.githubusercontent.com/37856995/115122522-49dcab80-9ff3-11eb-91b5-035fcc54e996.gif)
 (Added 'Browser' source in OBS, 1.5x)

Used React for page to show.

## Preference Window
![세팅창](https://user-images.githubusercontent.com/37856995/115122571-81e3ee80-9ff3-11eb-8c15-d068c34425df.png)

Used HTML(with Bootstrap) + Electron

## How does it run
 - App is started
 - Electron and Express is started
  - Express
   - Checks for LeagueClient using LCU Connecter
   - Serves the page to show
   - Sends the ban/pick data to the page to show as JSON
  - Electron
   - Makes preference window
   - Updates the settings when it changed and let express know
