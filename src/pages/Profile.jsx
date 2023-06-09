
import { useSelector } from 'react-redux'
import '../styles/profile.css'




function Profile() {
  
   const user = useSelector(state => state.user)

   console.log(user)
    return (
    
    <div className="profile">
        <h1>{user.name}</h1>
    </div>
  
  )
}

export default Profile