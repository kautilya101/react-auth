import react,{useState} from 'react'

function useToken(){
  function getToken() : string | null{
    const token = sessionStorage.getItem('auth-token');
    const userToken = JSON.parse(token);
    return userToken?.token;
  }

  const [token,setToken] = useState<string | null>(getToken())
  
  const saveToken = (userToken : {token: string}) => {
    sessionStorage.setItem("auth-token",JSON.stringify(userToken));
    setToken(userToken.token);
  }

  return {
    setToken: saveToken,
    token
  }
}

export default useToken;