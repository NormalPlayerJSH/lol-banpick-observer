import champs from '../champ_img'
import idToChamp from './idToChamp'

function Pick(props){
    let {side,pickNum,data}=props
    function getImg(){
        return champs[idToChamp[data[side][pickNum].pickChampId]]
    }
    function isDoing(){
        return data.nowDoing.action==="PICK" 
        && data.nowDoing.target.team===side 
        && parseInt(data.nowDoing.target.pickNum)===pickNum
    }
    function isNotSelected(){
        //return true
        return parseInt(data[side][pickNum].pickChampId)===-1
    }

    return (
        <div className={side+" pick"}>
            <div className={"pick-child champ-img"+(isNotSelected()?" not-selected":"")} >
                <img src={getImg()} alt=""/>
            </div>
            <div className="pick-child champ-info"></div>
            <div className={"pick-child now"+(isDoing()?" doing":"")}>
                <div className="blink"></div>
                <div className="dark"></div>
            </div>
        </div>
    )
}

export default Pick;