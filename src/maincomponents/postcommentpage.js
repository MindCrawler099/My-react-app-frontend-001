import Header from '../lessercomponents/header';
import PostCommentPageContent from '../postcommentscomponents/postcommentpagecontent';
import Footer from '../lessercomponents/footer';

const PostCommentPage=({pagetitle,currentYear})=>{

    return(
        <div id="postcommentpage-div">
            <Header pagetitle={pagetitle}/>
            <PostCommentPageContent/>
            <Footer currentYear={currentYear}/>
        </div>
    )

}

export default PostCommentPage;