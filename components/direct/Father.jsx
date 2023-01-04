/* eslint-disable react/no-unescaped-entities */
import Son from "./Son";

export default function Father(props) {
    return (
        <div>
            <h1> Family's {props.family}</h1>
            <Son name="Kayo" family={props.family} />
            <Son name="Erika" family={props.family} />
            <Son name="Pandora" family={props.family} />
            <Son name="João" {...props} />
            <Son {...props} name="Kassio"/>
        </div>
    )
}