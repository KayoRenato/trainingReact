export default function OnlyPair(props) {
    const isPair = props.number % 2 === 0
    const stylePair = { color: 'green', fontWeight: 'bold' }
    
    return isPair ? <span><span style={stylePair}>{props.number}</span> is pair <br/></span> : null


    // if (props.number % 2 === 0) {
    //     return (
    //         <div>
    //             <span> <span style={}> {props.number}</span> is pair </span>
    //             <br />
    //         </div>
    //     )
    // } else {
    //     return null
    // };
}