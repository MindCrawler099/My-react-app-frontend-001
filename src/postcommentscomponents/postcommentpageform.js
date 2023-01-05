const PostCommentPageForm=({currentTitle,setCurrentTitle})=>{
    return(
        <form id="postcommentform-form" onSubmit={(e)=>{
            e.preventDefault();
            console.log(currentTitle);
        }}>
            <label htmlFor="">Title: </label>
            <input type="text" id="" onChange={(e)=>{
            setCurrentTitle(e.target.value);
        }} value={currentTitle}/>
            <label htmlFor="">Comment: </label>
            <textarea id="" cols="30" rows="10"></textarea>
            <input type="submit" value="Post" />
        </form>
    )
}

export default PostCommentPageForm;