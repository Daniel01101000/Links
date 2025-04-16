import './App.css';
import LoginForm from './components/Login/LoginForm';
import CatEyes from './components/Gato/CatEyes';

function App() {
  return (
    <>
      <div className="App">
        <h1>Login App</h1>
        <LoginForm />
      </div>
      <CatEyes /> {/* <- Fuera de .App */}
    </>
  );
}

export default App;