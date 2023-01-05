import Son from "./Son";

export default function Father(props) {
    function talkMe(params){
        console.log(params);
        // console.log("Someone talk to me!")
    }

    return (
        <div>
            <Son func={talkMe}/>
        </div>
    )
}