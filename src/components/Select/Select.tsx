import React, {memo, useState} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onClick: (value: any) => void
    items: ItemType[]
}

export const Select = memo(function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState(true)

    const selectedItem = props.items.find(el => el.value === props.value)
    const mainTitle = selectedItem && selectedItem.title || "select..."

    const onClick = (value: any) => {
        props.onClick(value)
        setCollapsed(true)
    }

    const collapsedON = () => {
        setCollapsed(false)
    }

    return (
        <div className={s.select}>
            <div className={s.main} onClick={collapsedON}>
                <span>{mainTitle}</span>
            </div>

            {!collapsed && <div className={s.items}>
               {props.items.map(item => <div className={s.item} key={item.value} onClick={() => onClick(item.value)}>{item.title}</div>)}
            </div>}

        </div>
    );
})