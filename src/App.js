import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Stories from "./components/Stories/Stories";
import Sidebar from "./components/Sidebar/Sidebar";


const App = (props) => {
    return (
        <div className='app-wrapper-background'>
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-side'>
                    <Navbar/>
                    <Sidebar friends={props.state.sidebar.friends}/>
                </div>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile state={props.profilePage}
                                 dispatch={props.dispatch}
                        />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/messages' render={() =>
                        <Messages state={props.state.messagesPage}
                                  dispatch={props.dispatch}
                        />}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/stories' render={() => <Stories/>}/>
                    <Route path='/bookmarks' render={() => <Bookmarks/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
