import Pick from './Pick'
import Ban from './Ban'

function BanPick(props){

    return (
        <div className="banpick">
            <div className={props.side+' picks'}>
                {
                    [1,2,3,4,5].map((n)=>{
                        return (<Pick side={props.side} pickNum={n}></Pick>)
                    })
                }
            </div>
            <div className={props.side+' bans'}>
                {
                    [1,2,3].map((n)=>{
                        return (<Ban side={props.side} banNum={n}></Ban>)
                    })
                }
                <div className={props.side+' ban-blank'}></div>
                {
                    [4,5].map((n)=>{
                        return (<Ban side={props.side} banNum={n}></Ban>)
                    })
                }
            </div>
        </div>
    )
}

export default BanPick;