import React from "react";

function ProductCategoryRow({ title }) {
  return (
    <tr>
      <td colSpan={2} className="text-center">
        <strong>{title}</strong>
      </td>
    </tr>
  );
}

export default ProductCategoryRow;
