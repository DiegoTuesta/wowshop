
import { useSelector } from 'react-redux'
import '../styles/profile.css'




function Profile() {
  
   const user = useSelector(state => state.user)

   console.log(user)
    return (
    
    <div className="profile">
      <div className='profile_data'>

        <h1>DiegoTuesta</h1>
        <h3>diego@gmail.com</h3>
        <h4>*******</h4>
        <h2>987523904</h2>
      </div>
    </div>
  
  )
}

export default Profile