const ProductRow = ({ product, key }) => {
  // const { product, key } = props; or we can directly recieved props in the variable as shown above 
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
      
    </tr>
  );
};

export default ProductRow;
  