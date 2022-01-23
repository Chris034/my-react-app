import React, {useEffect, useState} from 'react';
import './styles.scss'
import { TrashIcon, BadgeCheckIcon, ChatIcon} from '@heroicons/react/solid'
const handleCheckClick = (idx, setItems) => {
    setItems((items) =>
    items.map((item, index) =>
      index === idx && item["completed"] === false
        ? { ...item, completed: true }
        : { ...item, completed: false }
    )
  );
}

const handleEditClick = (index, setItems) => {
    setItems(items =>  {
        const temp = [...items]
        temp[index]['edit'] = true
        return temp
    })
}

const handleDeleteClick = (index, setItems) => {
    setItems(items =>  items.filter((_, i) => i !== index));
}


export const IconGroup = ({index, setItems}) => {
    return (
        <div className='icons'>
            <BadgeCheckIcon onClick={() => handleCheckClick(index, setItems)}/>
            <ChatIcon onClick={() => handleEditClick(index, setItems)}/>
            <TrashIcon onClick={() => handleDeleteClick(index, setItems)}/>
        </div>
    )
}

export const Item = ({item, index, setItems}) => {
    const  {content, edit, completed} = item
    return(
        <div className='item'>
            {edit ? <TextBarEdit content={content} setItems={setItems} index={index} />  : <div className={`content ${completed ? 'completed' : ''}`} >{content}</div> }
            <div className='iconGroup'><IconGroup index={index} setItems={setItems}/></div>

        </div>
    )
}

export const ItemList = ({items, setItems}) => {
    return (
        <div className='itemList'>
             {items.map((item, index) => <Item key={index} item={item} index={index} setItems={setItems} />)}
        </div>
    )
}

export const TextBarEdit = ({content, setItems, index}) => {

    const [newContent, _setNewContent] = useState('DEFAULT');

    const newContentRef = React.useRef(newContent);
    const setNewContent = data => {
        newContentRef.current = data;
        _setNewContent(data);
    };

    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            console.log("Enter key was pressed. Run your function.");
            event.preventDefault();
            setItems(items =>  {
                const temp = [...items]
                temp[index]['content'] = newContentRef.current
                temp[index]['edit'] = false

                return temp
            })
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);

   return (
        <input className="editItem" type="text" id="editItem" name="editItem" placeholder={content}  onInput={e => setNewContent(e.target.value)}/>
    )
}