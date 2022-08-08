import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {
  const { products } = props;
  console.log(products);

  const rows = [];
  let currentCategory = null;

  products.forEach((productItem, idx) => {
    console.log(currentCategory,  productItem.category, idx, currentCategory !== productItem.category )
    if(currentCategory !== productItem.category) { // null !== 'fruits', 2. 'fruit' !== 'vegatables'
      rows.push( <ProductCategoryRow title={productItem.category} /> )
    }

    rows.push( <ProductRow product={productItem} /> );

    currentCategory = productItem.category; // 'fruits'
  });

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
        {/* {products.map((product) => (
          <ProductRow product={product} />
        ))} */}
      </tbody>
    </table>
  );
}

export default ProductTable;
