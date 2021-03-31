function Ban(props){
    return (
        <div className={props.side+" ban"}>
            <div className="ban-child champ-img"></div>
            <div className={"ban-child now"+(props.doing?" doing":"")}>
                <div className="blink"></div>
                <div className="dark"></div>
            </div>
        </div>
    )
}

export default Ban;