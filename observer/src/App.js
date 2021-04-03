import ScoreBoard from "./components/ScoreBoard"
import BanPick from "./components/BanPick"
import './App.css';
import { useState } from 'react'
function App() {
  let [data,setData]=useState({
    common:{
      lang:"korean"
    },
    nowDoing:{
      remainTime:10,
      action:"BAN",
      target:{
        team:"blue",
        pickNum:5
      }
    },
    "blue":{
      name:"블루팀 이름",
      1:{
        pickChampId:150,
        banChampId:517,
        name:"가나다라마바사아"
      },
      2:{
        pickChampId:106,
        banChampId:142,
        name:"블루팀 2픽"
      },
      3:{
        pickChampId:61,
        banChampId:58,
        name:"블루팀 3픽"
      },
      4:{
        pickChampId:81,
        banChampId:526,
        name:"블루팀 4픽"
      },
      5:{
        pickChampId:-1,
        banChampId:113,
        name:"블루팀 5픽"
      }
    },
    red:{
      name:"레드팀 이름",
      1:{
        pickChampId:84,
        banChampId:235,
        name:"abcdefghijklmnop"
      },
      2:{
        pickChampId:120,
        banChampId:147,
        name:"레드팀 2픽"
      },
      3:{
        pickChampId:142,
        banChampId:412,
        name:"레드팀 3픽"
      },
      4:{
        pickChampId:18,
        banChampId:110,
        name:"레드팀 4픽"
      },
      5:{
        pickChampId:12,
        banChampId:-1,
        name:"레드팀 5픽"
      }
    }
  })
  return (
    <div className="App">
      <ScoreBoard></ScoreBoard>
      <div className="banpicks">
        <BanPick side="blue" data={data}></BanPick>
        <BanPick side="red" data={data}></BanPick>
      </div>
    </div>
  );
}

export default App;
