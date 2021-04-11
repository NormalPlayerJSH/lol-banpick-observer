function ScoreBoard({data}){
    return (
        <div className="scoreboard">
            {(data.common.endTime==-1)?0:parseInt((data.common.endTime-Date.now())/1000)}
        </div>
    )
}

export default ScoreBoard;