import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Stories from "./components/Stories/Stories";
import Sidebar from "./components/Sidebar/Sidebar";
import MessagesContainer from "./components/Messages/MessagesContainer";


const App = (props) => {
    return (
        <div className='app-wrapper-background'>
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-side'>
                    <Navbar/>
                    <Sidebar store={props.store}/>
                </div>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile store={props.store} />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/messages'
                           render={() => <MessagesContainer store={props.store} />}/>
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
