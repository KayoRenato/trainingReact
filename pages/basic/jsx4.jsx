export default function jsx4(){
    const subtitle = 'I here in JS!'
    return (
        <div>
            <h1>JS and JSX Integration</h1>
            <h2>{subtitle}</h2>
            <h3>{3 * 4}</h3>
            <h3>{Math.max(12, 34, 12, 87, 2)}</h3>
            <h5>{between(29.99, 30, 60)}</h5>
            <h5>{between(10.01, 10, 21)}</h5>
        </div>
    )
}

function between(value, min, max) {
    return value >= min && value <= max ? "Yes" : "No"
}