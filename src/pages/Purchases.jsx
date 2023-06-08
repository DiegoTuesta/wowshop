import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import getConfigHttp from "../helpers/getConfigHttp";
import '../styles/purchases.css'



const Purchases = () => {
    const [Purchases, setPurchases] = useState()

    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`, getConfigHttp() )
        .then(res => {
          setPurchases(res.data)
        console.log(Purchases)
        })
        .catch(err => console.log(err))
      }, [])
    




    return (
        <div className="purchases">
            <h5>Productos Comprados</h5>
            <main className="purchases_main">
                {
                    Purchases?.map(produ =>
                        <article className="purchases_card" key={produ?.id}  data-aos="fade-up"
                        data-aos-duration="1500">
                            <div className="hed" data-aos="fade-right" data-aos-duration="1500">
                                <img src={produ.product.images?.[0].url} />
                            </div>
                            <h3 data-aos="zoom-in" data-aos-duration="1500">
                                {produ.quantity}
                            </h3>
                            <section data-aos="fade-left" data-aos-duration="1200">
                                <p>{produ?.product.description}</p>
                            </section>
                        </article>
                        
                        )
                }
            </main>
        </div>
    );
};

export default Purchases;