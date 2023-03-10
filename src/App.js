
import './App.css';
import './index.css';//bydault it apply to all component even if it is not imported
import FilterableProductTable from './FilterableProductTable';

function App() {
  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <FilterableProductTable FPTproducts={PRODUCTS}/>
      </header>
    </div>
  );
}

export default App;
