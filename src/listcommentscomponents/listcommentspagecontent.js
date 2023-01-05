import CommentUnit from "./commentUnit"
const ListCommentsPageContent=({currentComments})=>{
                if(currentComments.length===0){
                    return(
                        <main id="listcommentspagecontent-main">
                        <p id="nopostserror-p">No Posts Recieved</p>
                        </main>
                    )
                }else{
                    return(<main id="listcommentspagecontent-main">
                    {currentComments.map((element)=>{
                        return(
                            <CommentUnit key={element.commentid} commentUnitTitle={element.commenttitle} commentUnitText={element.commenttext} commentUnitDate={element.commentdate}/>
                        )
                    })}
                    </main>
                    )
                }
            }

export default ListCommentsPageContent