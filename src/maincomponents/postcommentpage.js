import Header from '../lessercomponents/header';
import PostCommentPageContent from '../postcommentscomponents/postcommentpagecontent';
import Footer from '../lessercomponents/footer';

const PostCommentPage=({pagetitle,currentYear,currentTitle,setCurrentTitle})=>{

    return(
        <div id="postcommentpage-div">
            <Header pagetitle={pagetitle}/>
            <PostCommentPageContent currentTitle={currentTitle} setCurrentTitle={setCurrentTitle}/>
            <Footer currentYear={currentYear}/>
        </div>
    )

}

export default PostCommentPage;