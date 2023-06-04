import { useForm } from "react-hook-form";

const Login = () => {

    const [ emailValue, setEmailValue ] = useState("")
    const [ passwordValue, setPasswordValue ] = useState("")
   
    const handleSubmit = e => {
        e.preventDefault()
        const data = {
            email : emailValue,
            password : passwordValue
        }

        console.log(data)
    }

    // joel cabro



    return (
        <>
          <form onSubmit={ e => handleSubmit(e) }>
            <h1>Inicio de sesión</h1>
            <div className="input-group">
                <label htmlFor="email">Correo electronico</label>
                <input 
                type="email" 
                id="email" 
                placeholder="Escribe tu correo..."
                onChange={ e => setEmailValue( e.target.value ) }
                value={ emailValue }
                required
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input 
                type="password" 
                id="password"
                placeholder="Escribe tu contraseña..."
                onChange={ e => setPasswordValue(e.target.value) }
                value={ passwordValue }
                required
                />
            </div>
      

            <button type="submit">Iniciar sesión</button>
        </form>
        </>
    );
};

export default Login;