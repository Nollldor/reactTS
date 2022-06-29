import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onClick: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    /*console.log("Rating rendering");*/
    const [collapsed, setCollapsed] = useState(false)
    const items = [<div key={1}>1</div>,<div key={2}>2</div>]

    const onClick = (value:any)=>{
        props.onClick(value)
        setCollapsed(false)
    }
    return (
        <div>
            {!collapsed && <div onClick={()=>setCollapsed(true)}>{props.items.filter(el => {
                if (el.value === props.value) {
                    return el.title
                }
            })[0].title}</div>}
            {collapsed && props.items.map((item, index) => {
                return <div key={item.value} onClick={()=>onClick(item.value)}>{item.title}</div>
            })}

        </div>
    );
}