function ScoreBoard({data}){
    return (
        <div className={`scoreboard`+((data.common.show.score)?' use-score':'')}>
            <div className="board-team board-blue">
                <div className="board-team-score">
                    <div className="board-team-score-border">
                        <div className="board-team-score-text">
                            {data.blue[0].score}
                        </div>
                    </div>
                </div>
                <div className="board-team-name">
                    <div className="board-team-name-text">
                        {data.blue[0].name}
                    </div>
                </div>
            </div>
            <div className="board-time">
                <div className="board-time-border">
                    <div className="board-time-text">
                        {(data.common.endTime==-1)?0:parseInt((data.common.endTime-Date.now())/1000)}
                    </div>
                </div>
            </div>
            <div className="board-team board-red">
                <div className="board-team-score">
                    <div className="board-team-score-border">
                        <div className="board-team-score-text">
                            {data.red[0].score}
                        </div>
                    </div>
                </div>
                <div className="board-team-name">
                    <div className="board-team-name-text">
                        {data.red[0].name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;