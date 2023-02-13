const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChanged,
  onIsStockOnlyChanged,
}) => {
//or we can write const {filterText,inStockOnly}=props
//onChange event this onChangeHandler is called which is call back function.
 
  return (
    <form>
      <input
        type="text"
        placeholder="Search....."
        value={filterText}
        //below we are  taking input text value using event.target.value and passing it to parent  componant i.e. FilterableProductTable
        onChange={(event) => onFilterTextChanged(event.target.value)}
      />
      <label>
        <input
        //below we are  taking input text value using event.target.checked and passing it to parent  componant i.e. FilterableProductTable
          onChange={(event) => onIsStockOnlyChanged(event.target.checked)}
          type="checkbox"
          checked={inStockOnly}
        />
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
