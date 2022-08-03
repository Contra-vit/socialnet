import a from './App.module.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile  from './Components/Profile/Profile'

function App() {
  return (
    <div className={a.app_wrapper}>
      
      <Header />
      <Navbar />
      <Profile />


    </div>
  );
}

export default App;
