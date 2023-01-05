import {useState,useEffect,useRef} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PostCommentPage from "./maincomponents/postcommentpage";
import ListCommentsPage from "./maincomponents/listcommentspage";

const App = ()=>{
    const [currentTitle,setCurrentTitle] = useState('');
    const [currentText,setCurrentText] = useState('');

    const hasBeenRan = useRef(false);
    
    useEffect(()=>{
        if(hasBeenRan.current === false){
            setCurrentTitle('');
            setCurrentText('');
        return ()=>{
            hasBeenRan.current = true;
            }
    }},[]);

    return(
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/postcomment" element={
                        <PostCommentPage pagetitle="Post Comment" currentYear = {(new Date()).getFullYear()} currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} currentText={currentText} setCurrentText={setCurrentText}/>
                    } />
                    <Route exact path="/listcomments" element={<ListCommentsPage pagetitle="Post Comment" currentYear = {(new Date()).getFullYear()} currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} currentText={currentText} setCurrentText={setCurrentText}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;