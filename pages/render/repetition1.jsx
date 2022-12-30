import { reduceEachLeadingCommentRange } from "typescript"

export default function repetition() {
    const approvedList = [
        'Jon',
        'Mary',
        'Steve',
        'Hitan',
        'Bryan',
        'Kayo',
        'Kayo',
        'Erika'
    ]

    function renderApprovedList() {
        return approvedList.map((item, idx) => (
            <li key={idx}>{item}</li>
        ))
    }

    return (
        <>
            {renderApprovedList()}
        </>
    )

}


// ! Basic Form
// function renderApprovedList() {

//     const approved = []

//     for (let idx = 0; idx < approvedList.length; idx++) {
//         approved.push(<li key={idx}> {approvedList[idx]} </li>)
//     }

//     return approved
// }