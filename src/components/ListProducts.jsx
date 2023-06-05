import Products from "../containers/Products";
import "../styles/list-product.css";

const ListProducts = ({ dataProduct }) => {
  return (
    <div className="container-products">
      <div className="container-header-product">
        <div>
          <label htmlFor="">Ordernar por:</label>
          <select>
            <option value="0">--Selected</option>
          </select>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
        </div>
      </div>
      <div className="container-body-product">
        {
            dataProduct.map(item =>   <Products key={item.id} dataProduct={item} /> )
        }
      
      </div>
    </div>
  );
};

export default ListProducts;
