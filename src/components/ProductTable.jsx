import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable(props) {
  const { products }  = props;
  console.log(products);
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        { products.map( product => <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr> ) }
      </tbody>
    </table>
  )
}

export default ProductTable