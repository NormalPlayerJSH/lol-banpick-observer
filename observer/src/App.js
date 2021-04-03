import ScoreBoard from "./components/ScoreBoard"
import BanPick from "./components/BanPick"
import './App.css';
import { useState } from 'react'
function App() {
  let [data,setData]=useState({
    common:{
      lang:"korean",
      show:{
        champName:true,
        userName:true,
        spells:true
      }
    },
    nowDoing:{
      remainTime:10,
      action:"PICK",
      target:{
        team:"blue",
        pickNum:5
      }
    },
    "blue":{
      name:"블루팀 이름",
      1:{
        pickChampId:150,
        banChampId:235,
        spells:{
          1:12,
          2:4
        },
        name:"일이삼사오육칠팔"
      },
      2:{
        pickChampId:106,
        banChampId:412,
        spells:{
          1:11,
          2:4
        },
        name:"블루팀 2픽"
      },
      3:{
        pickChampId:61,
        banChampId:4,
        spells:{
          1:12,
          2:4
        },
        name:"블루팀 3픽"
      },
      4:{
        pickChampId:81,
        banChampId:429,
        spells:{
          1:1,
          2:4
        },
        name:"블루팀 4픽"
      },
      5:{
        pickChampId:-1,
        banChampId:3,
        spells:{
          1:3,
          2:4
        },
        name:"블루팀 5픽"
      }
    },
    red:{
      name:"레드팀 이름",
      1:{
        pickChampId:84,
        banChampId:77,
        spells:{
          1:12,
          2:4
        },
        name:"abcdefghijklmnop"
      },
      2:{
        pickChampId:120,
        banChampId:147,
        spells:{
          1:11,
          2:6
        },
        name:"레드팀 2픽"
      },
      3:{
        pickChampId:142,
        banChampId:201,
        spells:{
          1:12,
          2:4
        },
        name:"레드팀 3픽"
      },
      4:{
        pickChampId:110,
        banChampId:18,
        spells:{
          1:4,
          2:7
        },
        name:"레드팀 4픽"
      },
      5:{
        pickChampId:89,
        banChampId:-1,
        spells:{
          1:14,
          2:4
        },
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
