# lol-banpick-observer

League of legends BAN/PICK Observing Tool looks like eSports League

## Downloads
[Download here](https://github.com/NormalPlayerJSH/lol-banpick-observer/releases/tag/test)

## Example
![사용예시](https://user-images.githubusercontent.com/37856995/115122522-49dcab80-9ff3-11eb-91b5-035fcc54e996.gif)
 (Added 'Browser' source in OBS, 1.5x)

Used React for page to show.

## How to run
- Run released file
- Go http://localhost:7777 or add 'Browser' source in OBS to broadcast


## Preference Window
![세팅창](https://user-images.githubusercontent.com/37856995/115122571-81e3ee80-9ff3-11eb-8c15-d068c34425df.png)
 (Toggle Buttons: Show Team Score, Nickname, Spells, Champion Name)

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
