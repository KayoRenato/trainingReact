
function createdList(limit) {
    let list = []

    for (let index = 1; index <= limit; index++) {
        list.push(<span>{index}</span>)
        if (index != limit) {
            list.push(<span>, </span>)
        }
    }

    return list
}

export default function list() {
    return (
        <div>
            <div>
                {createdList(8)}
            </div>
            <div>
                {createdList(4)}
            </div>
        </div>
    );
}

