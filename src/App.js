import a from './App.module.css';
import Dialog from './Components/Dialogs/Dialog';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className={a.app_wrapper}>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/message' element={<Dialog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
