import Header from "./components/Header";
import AddItem from "./components/AddItem";
import AddedItems from "./components/AddedItems";
import { useEffect, useState } from "react";

// Grabs data from local storage
const getDataFromLS = () => {
  const data = localStorage.getItem('items');
  if(data){
    return JSON.parse(data)
  }else{
    return []
  }
}

function App() {
  const [addInput, setAddInput] = useState('')
  const [items, setItems] = useState(getDataFromLS())
  const [noItem, setNoItem] = useState(false)
  const [addedItemMessage, setAddedItemMessage] = useState(false)

  // Create addItem function
  const addItem = () => {
    if(addInput === ''){
      setNoItem(true)
      setAddedItemMessage(false)
    }else{
      setNoItem(false)
      setAddedItemMessage(true)
       // Clear input
      setAddInput('')
      // Spread items in new array
      let newItems = [...items]
      // Push a new object onto the newItems array
      newItems.push({
        id: Math.floor(Math.random() * 10000), 
        inputText: addInput, 
        done: false
      })

      // Set state to new array of objects
      setItems(newItems)

      setTimeout(() => {
        setAddedItemMessage(false)
      }, 2000)
    }
  }

  useEffect(() => {
    // setItem in localStorage each time items changes
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  // Create clear items function
  const clearItems = () => {
    // Clear items
    setItems([])
  }

  // Create deleteItem function
  const deleteItem = (id) => {
    // filter items and show items whos id doesnt match the one clicked
    setItems(items.filter(item => item.id !== id))
  }

  // Create lineThroughItem
  const lineThroughItem = (id) => {
    // setItems state, map through items, check if item.id is equal to id if true than return item but change the done property
    // else just return the item
    setItems(items.map((item) => item.id === id ? {...item, done: !item.done } : item))
  }

  return (
    <div className="container">
      <Header />
      {addedItemMessage ? <h2 className="addedItemMessage">Item Added!</h2> : ''}
      {noItem ? <h2 className="emptyInputMessage">Please type a task in the input!</h2> : ''}
      <AddItem text={addInput} onChange={(e) => setAddInput(e.target.value)} addItem={addItem} clearItems={clearItems} />
      {items.length > 0 ? <AddedItems listItems={items} deleteItem={deleteItem} itemDone={lineThroughItem} /> : <h3 className="noItems">No list items</h3>}
    </div>
  );
}

export default App;
