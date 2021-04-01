import champs from '../champ_img'
let choice={
    blue:{
        1:champs.Akali,
        2:champs.RekSai,
        3:champs.Zed,
        4:champs.Lucian,
        5:champs.Alistar
    },
    red:{
        1:champs.Garen,
        2:champs.Udyr,
        3:champs.Galio,
        4:champs.Aphelios,
        5:champs.Thresh
    }
}
function Pick(props){
    return (
        <div className={props.side+" pick"}>
            <div className="pick-child champ-img" >
                <img src={choice[props.side][props.pickNum]} alt=""/>
            </div>
            <div className="pick-child champ-info"></div>
            <div className={"pick-child now"+(props.doing?" doing":"")}>
                <div className="blink"></div>
                <div className="dark"></div>
            </div>
        </div>
    )
}

export default Pick;