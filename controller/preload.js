const { ipcRenderer } = require('electron')
window.addEventListener('DOMContentLoaded', () => {
    inConsole=document.getElementById('console')
    document.getElementById('apply').addEventListener('click',(e)=>{
        tmp={}
        for(const id of ['userName','spells','champName']){
            tmp[id]=document.getElementById(id).checked
        }
        for(const side of ['blue','red']){
            tmp[side]={}
            for (const pick of [0,1,2,3,4,5]){
                tmp[side][pick]=document.getElementById(`${side}-${pick}`).value
            }
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
  