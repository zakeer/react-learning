import React from 'react'

function SearchBar() {
  return (
    <form className='bg-light p-3'>
      <input 
      className='form-control'
        type="text" 
        placeholder='Search for product' />
      <label>
        <input type="checkbox" />
        <span className='ms-2'>Only show products in stock</span>
      </label>
    </form>
  )
}

export default SearchBar