import logo from './logo.svg';
import './App.css';
import MyPage from './components/MyPage';
import MyPageContext from './components/MyPageContext';

function App() {
  return (
    <div>
      <h3>React Context API</h3>
      <a>Documentacion</a>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
    
  );
}

export default App;
