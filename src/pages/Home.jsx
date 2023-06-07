import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLoading } from "../store/slice/loader.slice";
import axios from "axios";
import {
  getProductsThunk,
  getProductsXNameThunk,
} from "../store/slice/product.slice";
import { getProductCartThunk } from "../store/slice/cart.slice";
import Aside from "../components/Aside";
import ListProducts from "../components/ListProducts";
import Categories from "../containers/Categories";

const Home = () => {
  const [category, setCategories] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch( getProductCartThunk() )
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then((category) => setCategories(category.data))
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <div className="main">
        <div className="main-grid">
          <Aside>
            <Categories data={category} />
          </Aside>
          <ListProducts dataProduct={data} />


        </div>
      </div>

      {/* <aside className=" flex flex-col w-[17%] h-screen bg-bg_claro shadow-[0px_0px_7px]">
                <div className='h-[100px] text-center pb-10'>
                    <h3 className='py-2 text-dark font-extrabold text-[20px]'>Categoria</h3>
                    <tr/>

                </div>
                <ul className='grid grid-rows-5  gap-2  text-claro font-extrabold h-[100vh]'>
                    {
                        category.map( item => <button className='w-[95%]  border-[2px] translate-x-1 text-dark border-[black] hover:bg-[#64d9ee] duration-500 ease-in-out hover:drop-shadow-[0px_0px_7px_black]' key={item.id} onClick={() => dispatch(getProductsXCategoryThunk(item.id))} >{ item.name }</button>  )
                    }
                    
                </ul>
            </aside>
            <main className="bg-[##eeeeee] w-[80%] min-h-screen flex flex-wrap justify-center place-items-center gap-4">


                {
                    data?.map(procductos => 
                        <article className="flex flex-col items-center border-[3px] border-[black] w-[320px] min-h-[25rem] gap-2">
                    
                    <img  src={procductos?.images[0].url}  />
                    
                    <h1 >{procductos?.title}</h1>   
                    <p>$5000 euros :V</p>
                    <button className='bg-[#11f7ff] py-1 px-5'>Comprar pe manito</button>
                </article>
                        
                        )
                }
                

             
            </main> */}
    </div>
  );
};

export default Home;
