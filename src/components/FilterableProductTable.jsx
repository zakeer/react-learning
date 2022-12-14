import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function FilterableProductTable() {
  const [isStockOnly, setIsStockOnly] = React.useState(false);

  return (
    <div className="product-table container p-5">


      <SearchBar isStockOnly={isStockOnly} onIsStockOnlyChange={setIsStockOnly}  />


      <h1>CHecking Boolean value {isStockOnly + ""}</h1>
      <ProductTable products={PRODUCTS} isStockOnly={isStockOnly} />
    </div>
  );
}
