import React from 'react'

const Button = ({ text, onClick, classText }) => {
  return (
    <div>
        <button className={classText} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button