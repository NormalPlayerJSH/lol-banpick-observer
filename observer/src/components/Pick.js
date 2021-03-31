import champImg from '../champ_img/TwistedFate.jpg'
function Pick(props){
    return (
        <div className={props.side+" pick"}>
            <div className="pick-child champ-img" style={{backgroundImage:`url(${champImg})`}}>
                
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