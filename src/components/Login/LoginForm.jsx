import { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [baseURL, setBaseURL] = useState('http://tecnoactive.net:8080/get.php'); // Estado para la URL base
  const [resultUrl, setResultUrl] = useState('');

  const generateURL = () => {
    const encodedUsername = encodeURIComponent(username);
    const encodedPassword = encodeURIComponent(password);
    const finalURL = `${baseURL}?username=${encodedUsername}&password=${encodedPassword}&type=m3u_plus`;
    setResultUrl(finalURL);
  };

  return (
    <div className="login-form">
      <div className="input-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Input para editar la URL base */}
      <input
        type="text"
        placeholder="Base URL"
        value={baseURL}
        onChange={(e) => setBaseURL(e.target.value)}
        className='base-url-input'
      />

      <button onClick={generateURL} className="button-minimalist">Generar URL</button>

      {resultUrl && (
        <div className="result">{resultUrl}</div>
      )}
    </div>
  );
}

export default LoginForm;