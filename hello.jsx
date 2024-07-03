import React, { useState } from 'react'

const hello = () => {
   const[set,sets]= useState(0)
  return (
    <div>{set}</div>
  )
}

export default hello