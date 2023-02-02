import React from 'react'
import AddedItem from './AddedItem'

const AddedItems = ({ listItems, deleteItem, itemDone }) => {
  return (
    <ul className='addedItems'>
        {listItems.map((item, index) => 
        <AddedItem 
        key={item.id} 
        text={item.inputText} 
        id={item.id} 
        deleteItem={deleteItem} 
        itemDone={itemDone}
        doneBool={item.done}
         />)}
    </ul>
  )
}

export default AddedItems
