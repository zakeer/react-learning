import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {
  const { products, isStockOnly } = props;
  console.log(products);

  const rows = [
    // <ProductCategoryRow title="Fruits" />,
    // <ProductRow product={{ name: "Apple", price: "20" }} />,
    // <ProductRow product={{ name: "Banana", price: "13" }} />,

    // <ProductCategoryRow title="Vegatables" />,
    // <ProductRow product={{ name: "Tomoto", price: "6" }} />,
    // <ProductRow product={{ name: "Brinjal", price: "8" }} />,

    // <ProductCategoryRow title="Drinks" />,
    // <ProductRow product={{ name: "ThumsUp", price: "15" }} />,
  ];
  let currentCategory = null;

  products.forEach( singleProduct => {
    console.log(singleProduct);

    if(currentCategory !== singleProduct.category) { // null !== 'Fruit' -> 'Vegatable' !== 'Vegatable'
      rows.push( <ProductCategoryRow title={singleProduct.category} /> );
      currentCategory = singleProduct.category;
    }


    if(isStockOnly) {
      if(singleProduct.stocked) {
        rows.push( <ProductRow product={singleProduct} />  )
      }
    } else {
      rows.push( <ProductRow product={singleProduct} />  )
    }

  });

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
