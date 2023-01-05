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
            const currentTime = new Date()
            xhr.open('POST','http://localhost:4000/postcomment',true);
            xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
            xhr.send(JSON.stringify({
                title:currentTitle,
                text:currentText,
                time:`${currentTime.getFullYear()}-${((currentTime.getMonth()+1)<10)?"0"+(currentTime.getMonth()+1).toString():(currentTime.getMonth()+1).toString()}-${((currentTime.getDay()+1)<10)?"0"+(currentTime.getDay()+1).toString():(currentTime.getDay()+1).toString()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${((currentTime.getSeconds())<10)?"0"+(currentTime.getSeconds()).toString():(currentTime.getSeconds()).toString()}`
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