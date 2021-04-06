import champs from '../img/champ_img'
import idToChamp from './idToChamp'

function Ban(props) {
    let { side, banNum, data } = props
    function getImg() {
        return champs[idToChamp[data[side][banNum].ban.id]]
    }
    function isDoing() {
        return data[side][banNum].ban.isDoing
    }
    function isNotSelected() {
        //return true
        return parseInt(data[side][banNum].ban.id) === -1
    }

    return (
        <div className={props.side + " ban"}>
            <div className={"ban-child champ-img" + (isNotSelected() ? " not-selected" : "")}>
                <img src={getImg()} alt="" />
            </div>
            <div className={"ban-child now" + (isDoing() ? " doing" : "")}>
                <div className="blink"></div>
                <div className="dark"></div>
            </div>
        </div>
    )
}

export default Ban;