import ScoreBoard from "./components/ScoreBoard"
import BanPick from "./components/BanPick"
//import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
function App() {
  let [data, setData] = useState({
    common: {
      lang: "korean",
      show: {
        champName: true,
        userName: true,
        spells: true,
        score: true
      },
      remainTime: 10
    },
    "blue": {
      0: {
        score: 0,
        name: "블루팀 이름"
      },
      1: {
        pick: {
          id: 150,
          isDoing: false
        },
        ban: {
          id: 235,
          isDoing: false
        },
        spells: {
          1: 12,
          2: 4
        },
        name: "일이삼사오육칠팔"
      },
      2: {
        pick: {
          id: 106,
          isDoing: false
        },
        ban: {
          id: 412,
          isDoing: false
        },
        spells: {
          1: 11,
          2: 4
        },
        name: "블루팀 2픽"
      },
      3: {
        pick: {
          id: 61,
          isDoing: false
        },
        ban: {
          id: 4,
          isDoing: false
        },
        spells: {
          1: 12,
          2: 4
        },
        name: "블루팀 3픽"
      },
      4: {
        pick: {
          id: 81,
          isDoing: true
        },
        ban: {
          id: 429,
          isDoing: false
        },
        spells: {
          1: 1,
          2: 4
        },
        name: "블루팀 4픽"
      },
      5: {
        pick: {
          id: -1,
          isDoing: true
        },
        ban: {
          id: 3,
          isDoing: false
        },
        spells: {
          1: 3,
          2: 4
        },
        name: "블루팀 5픽"
      }
    },
    red: {
      0: {
        score: 0,
        name: "레드팀 이름"
      },
      1: {
        pick: {
          id: 84,
          isDoing: false
        },
        ban: {
          id: 77,
          isDoing: false
        },
        spells: {
          1: 12,
          2: 4
        },
        name: "abcdefghijklmnop"
      },
      2: {
        pick: {
          id: 120,
          isDoing: false
        },
        ban: {
          id: 147,
          isDoing: false
        },
        spells: {
          1: 11,
          2: 6
        },
        name: "레드팀 2픽"
      },
      3: {
        pick: {
          id: 142,
          isDoing: false
        },
        ban: {
          id: 201,
          isDoing: false
        },
        spells: {
          1: 12,
          2: 4
        },
        name: "레드팀 3픽"
      },
      4: {
        pick: {
          id: 110,
          isDoing: false
        },
        ban: {
          id: 18,
          isDoing: false
        },
        spells: {
          1: 4,
          2: 7
        },
        name: "레드팀 4픽"
      },
      5: {
        pick: {
          id: 89,
          isDoing: false
        },
        ban: {
          id: -1,
          isDoing: true
        },
        spells: {
          1: 14,
          2: 4
        },
        name: "레드팀 5픽"
      }
    }
  })
  useEffect(() => {
    let a = setInterval(() => {
      axios.get('/data').then(
        (res) => {
          setData(res.data)
        }
      )
    }, 100)
    return () => {
      clearInterval(a)
    }
  }, [])
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
