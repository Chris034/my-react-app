//import './styles.scss'
import {TextBar} from '../TextBar/TextBar'
import {ItemList} from '../ItemList/ItemList'
import { useState } from 'react';

export const ToDoList = () => {
    const [items, setItems] = useState([]);
    console.log(items)
    return (
        <div>
            <h1>To Do List </h1>
            <TextBar setItems={setItems}/>
            <ItemList items={items} setItems={setItems}/>
        </div>
    )
}