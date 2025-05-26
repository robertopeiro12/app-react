import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onsubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      alert("necesitas ingresar un username");
      return;
    }
    const isLogin = await login({username, password});
    if (isLogin){
      navigate("home");
    }
  };
  return (
    <form onSubmit={onsubmit}>
      <label>Username</label>
        <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}/>
        <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" value="Login"/>
    </form>
  )
}

export default Login;
