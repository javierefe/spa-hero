import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useForm } from '../../hooks/useForm'
import { types } from '../../types/types'


export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext)
    const [{username}, handleInputChange]= useForm({
        username : ''
    })
   
    
    const handleLogin = () => {
        // history.push('/');

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: username
            }
        })

        history.replace(lastPath);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleLogin();
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Login</h1>
            <hr/>

            <div className="row d-flex justify-content-center">
                <div className="col-sm-8">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Usuario:</label>
                            <input 
                                type="text"
                                className="form-control"
                                name="username"
                                autoComplete="off"
                                value={username}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Contraseña:</label>
                            <input 
                                type="password"
                                className="form-control"
                                disabled
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success btn-block"
                            
                        >
                            Login
                        </button>

                    </form>
                    <div className="alert alert-warning" role="alert">
                        <p className="text-center">pagina demo con react, no use BD, solo localStorage, asi que solo pon tu usuario y da en login :v</p>
                    </div>

                </div>

            </div>
            

        </div>
    )
}
