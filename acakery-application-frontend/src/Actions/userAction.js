import axios from 'axios'

export function startCreateLogin(email, password){
    return(dispatch) =>{
        axios.post('http://localhost:3555/api/user/login', {email, password})
        .then((response) => {
            dispatch({ 
                type: 'LOGIN',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const logout = () => (dispatch) {
   dispatch({type: 'LOGOUT'})
}