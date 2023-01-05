const CommentUnit =({commentUnitTitle,commentUnitText,commentUnitDate})=>{
    return(
        <div className="commentunit-div">
            <header>
                <h1>
                    {commentUnitTitle}
                </h1>
            </header>
            <hr/>
            <main>
                <p>
                    {commentUnitText}
                </p>
            </main>
            <hr/>
            <footer>
                <h2>
                    {commentUnitDate}
                </h2>
            </footer>

        </div>
    )
}

export default CommentUnit;