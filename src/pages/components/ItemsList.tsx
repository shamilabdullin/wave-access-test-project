import React, { useEffect, useState } from "react";

export default function ItemsList({getItems}: any): JSX.Element {
    // console.log(getItems)
    const [items, setItems] = useState(new Array);

    useEffect(() => {
        const newItems = getItems
        setItems(newItems)
        console.log('render')
    }, [getItems])

    // console.log(items)
    return (
        <ul>
            {items.map(i => <li>{i}</li>)}
        </ul>
    )
} 