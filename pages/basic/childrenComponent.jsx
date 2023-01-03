import List from "../../components/List";
import Item from "../../components/Item";

export default function childrenComponent() {
    return (
        <>
            <List>
                <Item content={'Item Content 1'} />
                <Item content={'Item Content 2'} />
                <Item content={'Item Content 3'} />
                <Item content={'Item Content 4'} />
                <Item content={'Item Content 5'} />
            </List>
        </>
    )
}
