import champs from '../img/champ_img'
import spells from '../img/spell'
import idToChamp from './idToChamp'
import idToName from './idToName'
import idToSpell from './idToSpell'

function Pick(props) {
    let { side, pickNum, data } = props
    function getImg() {
        return champs[idToChamp[data[side][pickNum].pick.id]]
    }
    function getSpellImg(num) {
        return spells[idToSpell[data[side][pickNum]['spells'][num]]]
    }
    function isDoing() {
        return data[side][pickNum].pick.isDoing
    }
    function isNotSelected() {
        //return true
        return parseInt(data[side][pickNum].pick.id) === -1
    }
    function getChampName() {
        return idToName[data.common.lang][data[side][pickNum].pick.id]
    }
    function getUserName() {
        return data[side][pickNum].name
    }
    function isShow(name) {
        return data.common.show[name]
    }

    return (
        <div className={side + " pick"}>
            <div className={"pick-child champ-img" + (isNotSelected() ? " not-selected" : "")} >
                <img src={getImg()} alt="" />
            </div>
            <div className="pick-child champ-info">
                <div className="info-child top-blank"></div>
                <div className="info-child champ-name-div">
                    <div className={"champ-name" + (isShow("champName") ? "" : " dont-show")}>{getChampName()}</div>
                </div>
                <div className="info-child middle-blank"></div>
                <div className="info-child user-name-div">
                    <div className={"user-name" + (isShow("userName") ? "" : " dont-show")}>{getUserName()}</div>
                </div>
            </div>
            <div className="pick-child spell-info">
                <div className="spell-child top-blank"></div>
                <div className="spell-child spell-div">
                    <img src={getSpellImg(1)} alt="" className={"spell-img" + (isShow("spells") ? "" : " dont-show")} />
                </div>
                <div className="spell-child middle-blank"></div>
                <div className="spell-child spell-div">
                    <img src={getSpellImg(2)} alt="" className={"spell-img" + (isShow("spells") ? "" : " dont-show")} />
                </div>
            </div>
            <div className={"pick-child now" + (isDoing() ? " doing" : "")}>
                <div className="blink"></div>
                <div className="dark"></div>
            </div>
        </div>
    )
}

export default Pick;