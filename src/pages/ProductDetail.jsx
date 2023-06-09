import Aside from '../components/Aside'
import '../styles/product-detail.css'
import { useDispatch } from 'react-redux'
import { addProductCartThunk } from '../store/slice/cart.slice'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { isLoading } from '../store/slice/loader.slice'
import Slider from '../containers/Slider'
import axios from 'axios'
import ProductRecommend from '../containers/ProductRecommend'
const ProductDetail = () => {
    const {id} = useParams()
    const [idProduct, setIdProduct] = useState(id)
    const [product, setProduct] = useState([])
    const [productCategory, setProductCategory] = useState([])
   
    const navigate = useNavigate()
    const dispatch = useDispatch()
   
    const addProductCart = () => {
        const token = localStorage.getItem("token")
        token ? dispatch( addProductCartThunk({"quantity":1, "productId":id}) ) : navigate("/login")
    }
    useEffect( () => {
        dispatch( isLoading(true) )
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1//products/${id}`).then(result =>{
            setProduct(result.data)
            axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1//products?categoryId=${result.data.category.id}`)
            .then(res => {
                setProductCategory(res.data.filter(item => item.id !== result.data.id )) 
            })
            .catch(console.error)
        })
        .catch(console.error)
        .finally(() => dispatch( isLoading(false) ))
    }, [idProduct])

    const changeView  =(id) => {
        setIdProduct(id)
        navigate(`/product/${id}`)
    }

    return (
        <div className="container">
            <div className="main">
                <div className="main-grid-detail">
                    <article className='product__detail'>
                        <div className='product__detail__one'>
                            <span><i className="fa-solid fa-backward"></i> Back</span>
                            <div className='product__detail__img'>
                              <Slider images={product?.images} />
                            </div>
                        </div>
                      
                        <div className='product__detail__two'>
                            <div className='product__description'>
                                <h3>{product.brand}</h3>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>

                                <div className='description__footer'>
                                    <button onClick={() => addProductCart()}><i className="fa-solid fa-cart-plus"></i> Add Cart</button>
                                </div>
                               
                            </div>
                        </div>
                    </article>
                   
                    <Aside>
                        {
                            productCategory.map(data =>  <ProductRecommend key={data.id} data={data} change={changeView} /> )
                        }
                       
                    </Aside>
                  
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;