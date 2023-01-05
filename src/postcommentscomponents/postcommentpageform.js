const PostCommentPageForm=({currentTitle,setCurrentTitle,currentText,setCurrentText})=>{
    return(
        <form id="postcommentform-form" onSubmit={(e)=>{
            e.preventDefault();
            
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange=()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    console.log(JSON.parse(xhr.response));
                }
            }
            xhr.open('POST','http://localhost:4000/postcomment',true);
            xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
            xhr.send(JSON.stringify({
                title:currentTitle,
                text:currentText
            }))
        }}>
            <label htmlFor="">Title: </label>
            <input type="text" id="" onChange={(e)=>{
            setCurrentTitle(e.target.value);
        }} value={currentTitle}/>
            <label htmlFor="">Comment: </label>
            <textarea id="" cols="30" rows="10" onChange={(e)=>{
                setCurrentText(e.target.value);
            }} value={currentText}></textarea>
            <input type="submit" value="Post" />
        </form>
    )
}

export default PostCommentPageForm;