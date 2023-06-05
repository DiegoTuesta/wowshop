import '../styles/containers/categories.css'

const Categories = ({data}) => {
  return (
    <div className="container-categories">
        <div className="categories__title">
            <h2>Categories</h2>
        </div>
        <div className="categories__body">
            {
                data.map( item => <button key={item.id} className='btn-category'>{item.name}</button> )
            }
        </div>
    </div>
  )
}

export default Categories