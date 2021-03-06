import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Stories from './components/Stories/Stories';
import Sidebar from './components/Sidebar/Sidebar';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import PopIt from './components/PopIt/PopIt';
import Login from "./components/Login/Login";


const App = (props) => {
    return (
        <div className='app-wrapper-background'>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='app-wrapper-side'>
                    <Navbar/>
                    {/*<Sidebar/>*/}
                </div>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/messages'
                           render={() => <MessagesContainer/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/stories' render={() => <Stories/>}/>
                    <Route path='/bookmarks' render={() => <Bookmarks/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/popit' render={() => <PopIt/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
