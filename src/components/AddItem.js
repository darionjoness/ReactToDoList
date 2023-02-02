import React from 'react'
import Button from './Button'

const AddItem = ({ text, onChange, addItem, clearItems }) => {
  return (
    <div className='addItem'>
        <input type="text" value={text} onChange={onChange} placeholder='Add an item...' />
        <Button text={'Add'} classText={'btn btnAdd'} onClick={addItem} /> 
        <Button text={'Clear'} classText={'btn btnClear'} onClick={clearItems} />
    </div>
  )
}

export default AddItem