import PostCommentPageForm from './postcommentpageform';

const PostCommentPageContent=({currentTitle,setCurrentTitle,currentText,setCurrentText})=>{
    return(
        <main>
            <PostCommentPageForm currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} currentText={currentText} setCurrentText={setCurrentText}/>
        </main>
    )
}

export default PostCommentPageContent;