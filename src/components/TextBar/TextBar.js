import './styles.scss'
import { useState } from 'react';

export const TextBar = ({setItems}) => {
    const [newItem, setNewItem] = useState('');


    const submitNewItem = (newItem, setItems) => {
        setItems(items => [...items, {content: newItem, edit: false, completed: false}])

    }

    return (
        <div className='textBar'>
            <input className="newItem" type="text" id="newItem" name="newItem" value={newItem} placeholder="Name..." onInput={e => setNewItem(e.target.value)}/>
            <input className="submitItem" type="submit" id='submitItem' value="Add Item" onClick={() => submitNewItem(newItem, setItems)}/>
        </div>
    )
}