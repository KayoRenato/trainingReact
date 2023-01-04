function action1() {
    console.log("action1");
}

export default function buttonTest() {
    function action2() {
        console.log("action2");
    }

    function action5(e) {
        console.log(e);
    }

    return (
        <div style={{ margin: 20, display: 'inline-flex' }}>
            <button
                style={{ marginRight: 8 }}
                onClick={action1}>
                Click #01
            </button>

            <button
                style={{ marginRight: 8 }}
                onClick={action2}>
                Click #02
            </button>

            <button
                style={{ marginRight: 8 }}
                onClick={function () { console.log("action3") }}>
                Click #03
            </button>

            <button
                style={{ marginRight: 8 }}
                onClick={() => { console.log("action4") }}>
                Click #04
            </button>

            <button
                style={{ marginRight: 8 }}
                onClick={action5}>
                Click #05
            </button>

            <button
                style={{ marginRight: 8 }}
                onClick={e => action5(e.altKey)}>
                Click #05 v2
            </button>

            <div>
                <input type="text" onChange={e => console.log(e.target.value)}/>
            </div>
        </div >
    );
}