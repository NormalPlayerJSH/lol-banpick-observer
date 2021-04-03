import champs from '../champ_img'
import idToChamp from './idToChamp'
import idToName from './idToName'

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
    function getChampName(){
        return idToName[data.common.lang][data[side][pickNum].pickChampId]
    }
    function getUserName(){
        return data[side][pickNum].name
    }

    return (
        <div className={side+" pick"}>
            <div className={"pick-child champ-img"+(isNotSelected()?" not-selected":"")} >
                <img src={getImg()} alt=""/>
            </div>
            <div className="pick-child champ-info">
                <div className="info-child top-blank"></div>
                <div className="info-child champ-name-div">
                    <div className="champ-name">{getChampName()}</div>
                </div>
                <div className="info-child middle-blank"></div>
                <div className="info-child user-name-div">
                    <div className="user-name">{getUserName()}</div>
                </div>
            </div>
            <div className={"pick-child now"+(isDoing()?" doing":"")}>
                <div className="blink"></div>
                <div className="dark"></div>
            </div>
        </div>
    )
}

export default Pick;