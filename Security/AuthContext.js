// AuthContext.js
import { createContext, useContext, useState } from 'react';
import { executeJwtAuthenticationService } from '../API/AuthenticationApiService';
import { apiClient } from '../API/ApiClient';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);


  const[token, setToken] = useState(null)

  async function login(username, password){
  

   try{
   
    const response = await executeJwtAuthenticationService(username, password)
 
         console.log(response.data)
    
    if(response.status == 200){

      const jwtToken = 'Bearer ' + response.data.token
      
      setAuthenticated(true)
      setToken(jwtToken)

      apiClient.interceptors.request.use(
        (config) => {
          config.headers.Authorization = jwtToken
          return config
        }
      )
      return true
    } else{
      console.error('Error Error:');
       logout()
        return false
    }
  }catch(error){
    console.error('Authentication Error:', error);
    logout()
    return false 
  }

 }


  function logout() {
    setAuthenticated(false)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
}
