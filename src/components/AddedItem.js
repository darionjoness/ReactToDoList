import React from 'react'
import Button from './Button'

const AddedItem = ({ text, id, deleteItem, itemDone, doneBool, idx }) => {
  return (
    <li id={id} className={`addedItem ${doneBool ? 'lineThrough' : ''}`}>
          <div className="addedItemText">
            {text}  
          </div>
          
          <div className="addedItemBtns">
            <Button text={'X'} classText={'btn xBtn'} onClick={() => deleteItem(id)} />
            <Button text={'Done'} classText={'btn doneBtn'} onClick={() => itemDone(id)} />
          </div>
    </li>
  )
}

export default AddedItem