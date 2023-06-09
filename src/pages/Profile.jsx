import '../styles/profile.css'
import { useEffect } from "react";
import { useForm } from "react-hook-form";


function Profile() {
  
  const {register,handleSubmit,reset} = useForm()
  
 

    return (
      
    <div className='page_formulario'>

      <form onSubmit={handleSubmit()} className="formulario " >
      <div className="formulario_caja ">
          <label htmlFor="firstName">Nombre</label>
        <input className="formulario_caja_input" id="firstName" placeholder="Colocar Nombre" type="text" {...register('firstName')} />
      </div>
      <div className="formulario_caja">
          <label htmlFor="lastName">Apellido</label>
          <input className="formulario_caja_input" id="lastName" type="text" placeholder="Colocar Apellido" {...register('lastName')} />
      </div>
      <div className="formulario_caja">
          <label htmlFor="email">Email</label>
          <input className="formulario_caja_input" id="email" type="email" placeholder="Colocar Email" {...register('email')} />
      </div>
      <div className="formulario_caja">
          <label htmlFor="password">Password</label>
          <input className="formulario_caja_input" id="password" type="password" placeholder="Colocar contraseña" {...register('password')} />
      </div>
      <div className="formulario_caja">
          <label htmlFor="phone">Cumpleaños</label>
          <input className="formulario_caja_bir" id="phone" type="text" placeholder="Colocar Cumpleaños" {...register('phone')}  />
      </div>
      <div className="formulario_btn">

      <button className="formulario_btn_1 " type="submit"><i class="fa-solid fa-user "></i>Crear Usuario</button>
      </div>
  </form>
    </div>
      
  
  )

}

export default Profile