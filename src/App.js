import a from './App.module.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div className={a.app_wrapper}>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path='/profile' element={
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPost={props.updateNewPost}
            />} />
          <Route path='/dialogs' element={<Dialogs
            dataState={props.dataState} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
