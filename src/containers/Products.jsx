import React from 'react'

const Products = ({dataProduct}) => {
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
                <button className="btn-shop">Add Cart</button>
            </div>
        </article>
  )
}

export default Products