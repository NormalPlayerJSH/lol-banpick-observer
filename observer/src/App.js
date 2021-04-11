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
        name: ""
      },
      1: {
        pick: {
          id: -1,
          isDoing: false
        },
        ban: {
          id: -1,
          isDoing: false
        },
        spells: {
          1: -1,
          2: -1
        },
        name: ""
      },
      2: {
        pick: {
          id: -1,
          isDoing: false
        },
        ban: {
          id: -1,
          isDoing: false
        },
        spells: {
          1: -1,
          2: -1
        },
        name: ""
      },
      3: {
        pick: {
          id: -1,
          isDoing: false
        },
        ban: {
          id: -1,
          isDoing: false
        },
        spells: {
          1: -1,
          2: -1
        },
        name: ""
      },
      4: {
        pick: {
          id: -1,
          isDoing: false
        },
        ban: {
          id: -1,
          isDoing: false
        },
        spells: {
          1: -1,
          2: -1
        },
        name: ""
      },
      5: {
        pick: {
          id: -1,
          isDoing: false
        },
        ban: {
          id: -1,
          isDoing: false
        },
        spells: {
          1: -1,
          2: -1
        },
        name: ""
      },
    },
    red: {
        0: {
          score: 0,
          name: ""
        },
        1: {
          pick: {
            id: -1,
            isDoing: false
          },
          ban: {
            id: -1,
            isDoing: false
          },
          spells: {
            1: -1,
            2: -1
          },
          name: ""
        },
        2: {
          pick: {
            id: -1,
            isDoing: false
          },
          ban: {
            id: -1,
            isDoing: false
          },
          spells: {
            1: -1,
            2: -1
          },
          name: ""
        },
        3: {
          pick: {
            id: -1,
            isDoing: false
          },
          ban: {
            id: -1,
            isDoing: false
          },
          spells: {
            1: -1,
            2: -1
          },
          name: ""
        },
        4: {
          pick: {
            id: -1,
            isDoing: false
          },
          ban: {
            id: -1,
            isDoing: false
          },
          spells: {
            1: -1,
            2: -1
          },
          name: ""
        },
        5: {
          pick: {
            id: -1,
            isDoing: false
          },
          ban: {
            id: -1,
            isDoing: false
          },
          spells: {
            1: -1,
            2: -1
          },
          name: ""
        },
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
