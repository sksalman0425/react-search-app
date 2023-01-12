const ProductRow = ({ product, key }) => {
  // const { product, key } = props;
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
  