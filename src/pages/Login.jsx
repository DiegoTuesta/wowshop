
import { useForm } from "react-hook-form";
import "../styles/login.css";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { loginThunk } from "../store/slice/user.slice";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
   const tokens = useSelector(state => state.token)

  const {register , handleSubmit} = useForm()

 const formuData = async (data) =>  {
     try {
    const dates =   dispatch(loginThunk(data))
    
  } catch (error) {
    console.log(error)
  }finally{
    if (tokens.length > 0) {
        navigate("/")
    }else{
        navigate("/login")
    }
  }
  };



  return (
   


    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(formuData)}>
        <div className="user-box">
          <input type="email" name="email" id="email" {...register("email")}  />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" id="password" {...register("password")} />
          <label>Password</label>
        </div>
       <button type="submit">
        Ingresar
       </button>
      </form>
    </div>
  );
};

export default Login;
