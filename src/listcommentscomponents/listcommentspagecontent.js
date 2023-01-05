import CommentUnit from "./commentUnit"
const ListCommentsPageContent=({currentComments})=>{
    return(
        <main id="listcommentspagecontent-main">
            {
                currentComments.map((element)=>{
                    console.log(element);
                    return(
                        <CommentUnit commentUnitTitle={element.commenttitle} commentUnitText={element.commenttext} commentUnitDate={element.commenttime}/>
                    )
                })
            }
            
        </main>
    )
}

export default ListCommentsPageContent