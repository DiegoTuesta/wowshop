import '../styles/containers/products.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProductCartThunk } from '../store/slice/cart.slice'

const Products = ({dataProduct}) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    // console.log(cart)

  return (
        <article className="card-product">
            <div className="card__img">
                <img  src={dataProduct.images[0].url} alt="" />
            </div>
            <div className="card__body">
                <div className="card__title">
                    <label>{dataProduct.brand}</label>
                    <label>{dataProduct.title}</label>
                    <label>{dataProduct.category.name}</label>
                </div>
                <div className="card__price">
                    <label>$ {dataProduct.price}</label>
                </div>
            </div>
            <div className="card__footer">
                <button onClick={() => dispatch( addProductCartThunk({"quantity":1, "productId":dataProduct.id}) )} className="btn-shop">Add Cart</button>
            </div>
        </article>
  )
}

export default Products