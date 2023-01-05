import {useState,useEffect,useRef} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PostCommentPage from "./maincomponents/postcommentpage";
import ListCommentsPage from "./maincomponents/listcommentspage";

const App = ()=>{
    const [currentTitle,setCurrentTitle] = useState('');
    const [currentText,setCurrentText] = useState('');
    const [currentComments,setCurrentComments] = useState([]);

    const hasBeenRan = useRef(false);
    
    useEffect(()=>{
        if(hasBeenRan.current === false){
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange=()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    setCurrentComments((JSON.parse(xhr.response)).posts);
                }
            }
            xhr.open('GET','http://localhost:4000/postcomment',true);
            xhr.send();
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
                    <Route exact path="/listcomments" element={<ListCommentsPage pagetitle="Post Comment" currentYear = {(new Date()).getFullYear()}currentComments = {currentComments}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;