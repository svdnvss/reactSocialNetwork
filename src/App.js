import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Stories from "./components/Stories/Stories";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper-background'>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile' render={ () => <Profile posts={props.posts}/>} />
                        <Route path='/news' component={News}/>
                        <Route path='/messages' render={ () => <Messages dialogues={props.dialogues}
                                                                         messages={props.messages} />} />
                        <Route path='/music' component={Music}/>
                        <Route path='/stories' component={Stories}/>
                        <Route path='/bookmarks' component={Bookmarks}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
