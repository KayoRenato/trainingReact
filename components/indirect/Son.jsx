export default function Son(props) {

    console.log(props.func)
    const objSon = {
        name: 'Kayo',
        age: 35
    }

    return (
        <div>
            <h1> Son #01</h1>
            <button style={{marginRight: 16}} onClick={props.func}> Talk to Father - Call Function </button>
            <button style={{marginRight: 16}} onClick={e => props.func(e)}> Talk to Father - Call Function like event </button>
            <button style={{marginRight: 16}} onClick={() => props.func("I'm Approved!")}> Talk to Father - Call Function like string</button>
            <button style={{marginRight: 16}} onClick={() => props.func(objSon)}> Talk to Father - Call Function like object</button>
        </div>
    )
}