import Login from '../components/Login'
import { AuthProvider } from "../contexts/AuthContext"
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        
            <AuthProvider>
          
            <div className='landingPage'>
                <h1 className='header'><Logo/></h1>
            
            <div style={{}}>
            <Login />
            </div>

            <div style={{textAlign:'center', color:'white'}}>
            New to PresentAIble? <Link to="/signup" style={{color:'white'}}> Sign up. </Link>
            </div>

            </div>
            </AuthProvider>    
            
    )
}

export default LoginPage
