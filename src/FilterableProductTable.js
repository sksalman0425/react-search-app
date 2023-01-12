import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";

const FilterableProductTable = ({ products }) => {
  // we can write props or other variable name directly which we have to assign
  // .i.e. here products.this is latest method which is widely used. 
  //  console.log("Props recieved::::", props);
  //   const products=props.products;
  //   const { products } = props;
  //here we use usestate bz it is parent component of both searchBar and ProductTable
  const [filterText, setFilterText]=useState("");
  // Above initial value is null
  const [inStockOnly,setInstockOnly]=useState(false);
  const onFilterTextChanged = (changedValue) => {
    console.log("Value recieved from Search bar component", changedValue);
    setFilterText(changedValue);
  };
  const onIsStockOnlyChanged = (changedValue) => {
    console.log("Value recieved from Search bar component", changedValue);
    setInstockOnly(changedValue);
  };
  return (
    <div>
      <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChanged={onFilterTextChanged}
        onIsStockOnlyChanged={onIsStockOnlyChanged}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
      {/*here we make products which is props of FilterableProductTable as attribute of ProductTable
       and passing it to props of ProductTable component  */}
    </div>
  );
};

export default FilterableProductTable;