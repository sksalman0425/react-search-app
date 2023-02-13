import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";

const FilterableProductTable = ({ FPTproducts }) => {
  // we can write props or other variable name(if other variable taken then put it in {} here FTPproducts) directly which we have to assign/recieve props.FPTproducts
  // .i.e. here FTPproducts.this is latest method which is widely used. 
  //  console.log("Props recieved::::", props);
  //   const  FPTproducts=props. FPTproducts;
  //   const {  FPTproducts } = props;
  //here we use usestate bz it is parent component of both searchBar and ProductTable
  const [filterText, setFilterText]=useState("");
  // Above initial value is null
  const [inStockOnly,setInstockOnly]=useState(false);
  // in changedValue argument we are getting value from search box by i.e. by child componant using event.target.value 
  // and assigning it to filterText state variable
  const onFilterTextChanged = (changedValue) => {
    console.log("Value recieved from Search bar component", changedValue);
    setFilterText(changedValue);
  };
    // in changedValue argument we are getting value from  checkbox i.e. by child componant using event.target.checked 
  // and assigning it to inStockOnly state variable
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
        onFilterTextChanged={onFilterTextChanged}//here we passing function name as attribute
        onIsStockOnlyChanged={onIsStockOnlyChanged}//here we passing function name as attribute
      />
      <ProductTable
        PTproducts={FPTproducts}
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