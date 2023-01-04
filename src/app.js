import PostCommentPage from "./maincomponents/postcommentpage";

const App = ()=>{
    return(
        <div id="app">
            <PostCommentPage pagetitle="Post Comment" currentYear = {(new Date()).getFullYear()}/>
        </div>
    )
}

export default App;