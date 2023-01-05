import {useState,useEffect,useRef} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PostCommentPage from "./maincomponents/postcommentpage";

const App = ()=>{
    const [currentTitle,setCurrentTitle] = useState('Dave');
    const hasBeenRan = useRef(false);
    
    useEffect(()=>{
        if(hasBeenRan.current === false){
            setCurrentTitle('Frankie')
            console.log('UseEffect Ran');
        return ()=>{
            hasBeenRan.current = true;
            }
    }},[]);

    return(
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={
                        <PostCommentPage pagetitle="Post Comment" currentYear = {(new Date()).getFullYear()} currentTitle={currentTitle} setCurrentTitle={setCurrentTitle}/>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;