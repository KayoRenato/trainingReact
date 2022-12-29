export default function Style(props) {

    const balanceStyle = {
        backgroundColor: props.number >= 0 ? "#1780b8" : "#c01414",
        color: props.number >= 0 ? "#fafafa" : "#eccb25",
        textAlign: props.number >= 0 ? "right" : "left",
    }

    const balanceClass = props.number >= 0 ? 'balanceIn' : 'balanceOut'

    return (
        <div>
            <h1 style={balanceStyle}>
                € {props.number}
            </h1>

            <h2 className={balanceClass}>
                Description Balance
            </h2>

        </div>
    )
}