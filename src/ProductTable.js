import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow"; 
//here we receiving products attribute in the props of ProductTable i.e.products
// here we can write props or products or any name, only thing is to remember that 
//if we are giving other name of variable then put it in {} as shown in below example. 
const ProductTable = ({ products, filterText, inStockOnly }) => {
  console.log(
    "Inside ProductTable Coponent props recieved",
    products,
    filterText,
    inStockOnly
  );
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    console.log("Inside ProductTable Coponent", product);
    if( product.name.toLowerCase().indexOf(
      filterText.toLowerCase()
    ) === -1){
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    console.log("Checking condition::", product.category !== lastCategory);
    if (product.category !== lastCategory) {
      console.log(
        "Adding Product Category to the row array::",
        product.category
      );
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    console.log("Pusginf each product to the rows array::", product);
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  console.log("Rows:::::", rows);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
export default ProductTable;
