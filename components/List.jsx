import Item from "./Item";

export default function List(props) {
    return (
        <section>
            <h1>Title List</h1>
            <br />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor in: </p>
            <br />

            <ul style={{
                // listStyle:"none",
                padding: 24,
            }}>
                {props.children}
            </ul>
        </section>
    )
}