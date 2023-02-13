import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow"; 
//here we receiving products attribute in the props of ProductTable i.e.products
// here we can write props or products or any name, only thing is to remember that 
//if we are giving other name of variable then put it in {} as shown in below example. 
const ProductTable = ({ PTproducts, filterText, inStockOnly }) => {
  console.log(
    "Inside ProductTable Coponent props recieved",
    PTproducts,
    filterText,
    inStockOnly
  );
  const rows = [];
  let lastCategory = null;
  PTproducts.forEach((PTproduct) => {
    console.log("Inside ProductTable Coponent", PTproduct);
    if( PTproduct.name.toLowerCase().indexOf(
      filterText.toLowerCase()
    ) === -1){
      return;
    }
    if (inStockOnly && !PTproduct.stocked) {
      return;
    }
    console.log("Checking condition::", PTproduct.category !== lastCategory);
    if (PTproduct.category !== lastCategory) {
      console.log(
        "Adding Product Category to the row array::",
        PTproduct.category
      );
      rows.push(
        <ProductCategoryRow
          category={PTproduct.category}
          key={PTproduct.category}
        />
      );
    }
    console.log("Pusginf each product to the rows array::", PTproduct);
    rows.push(<ProductRow product={PTproduct} key={PTproduct.name} />);
    lastCategory = PTproduct.category;
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
