import Header from '../lesser1components/header';
import Footer from '../lesser1components/footer';

const PostCommentPage=({pagetitle,currentYear})=>{

    return(
        <div id="postcommentpage-div">
            <Header pagetitle={pagetitle}/>
            <Footer currentYear={currentYear}/>
        </div>
    )

}

export default PostCommentPage;