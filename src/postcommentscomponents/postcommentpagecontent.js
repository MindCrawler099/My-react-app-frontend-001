import PostCommentPageForm from './postcommentpageform';

const PostCommentPageContent=({currentTitle,setCurrentTitle})=>{
    return(
        <main>
            <PostCommentPageForm currentTitle={currentTitle} setCurrentTitle={setCurrentTitle}/>
        </main>
    )
}

export default PostCommentPageContent;