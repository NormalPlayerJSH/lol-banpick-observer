# lol-banpick-observer

롤 밴픽 화면을 대회에서 하는 것처럼 만들어보자

LeagueClient의 LCU API를 이용해서 구현할 생각

Electron으로 만들 생각이고, 
크게 나누면 보여질 화면, 환경설정 등을 위한 화면, 보여질 화면에 데이터를 보내줄 백엔드로 구성

우선 실제 보여질 화면부터 구현 대략 완료

각종 설정 할 창 일렉트론으로 구현 완료

서버에서 받아와서 보여질 화면에 띄우는 거 구현 완료

일렉트론에서 롤 클라와 통신 후 Express로 보여질 화면에 JSON 형태로 전송함

롤 클라와 연동까지 완료

자잘한 구현 (팀명, 점수 등 보여주기)만 남음

controller 폴더에서 npm run getreact 후 npm run start

현재 진행 상황 (OBS에서 브라우저 소스로 넣어 녹화한 것)
![현재진행상황](https://user-images.githubusercontent.com/37856995/114304816-32dc1c00-9b10-11eb-9cd2-996cb5d809f5.gif)
