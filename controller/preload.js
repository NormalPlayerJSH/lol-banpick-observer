const { ipcRenderer } = require('electron')
window.addEventListener('DOMContentLoaded', () => {
    inConsole=document.getElementById('console')
    for (const side of ['blue','red']){
      let scoreSpan=document.getElementById(`${side}-score`)
      document.getElementById(`${side}-minus`).addEventListener('click',(e)=>{
        let score=parseInt(scoreSpan.innerText)
        if(score===0) return
        scoreSpan.innerText=score-1
      })
      document.getElementById(`${side}-plus`).addEventListener('click',(e)=>{
        let score=parseInt(scoreSpan.innerText)
        if(score===9) return
        scoreSpan.innerText=score+1
      })
    }
    document.getElementById('apply').addEventListener('click',(e)=>{
        tmp={}
        for(const id of ['score','userName','spells','champName']){
            tmp[id]=document.getElementById(id).checked
        }
        for(const side of ['blue','red']){
            tmp[side]={}
            for (const pick of ['name',1,2,3,4,5]){
                tmp[side][pick]=document.getElementById(`${side}-${pick}`).value
            }
            tmp[side]['score']=document.getElementById(`${side}-score`).innerText
        }
        //inConsole.innerText=JSON.stringify(tmp)
        ipcRenderer.send('controller_info',tmp)
    })
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }
  })
  