export default function Title(props) {
    console.log(props);

    return props.small ? (
        <>
            <h4>{props.title}</h4>
            <h5>{props.subtitle}</h5>
            <p> {props.body} </p>
        </>
    ) : (
        <>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p> {props.body} </p>
        </>
    )

}