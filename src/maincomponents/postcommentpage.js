import Header from '../lessercomponents/header';
import PostCommentPageContent from '../postcommentscomponents/postcommentpagecontent';
import Footer from '../lessercomponents/footer';

const PostCommentPage=({pagetitle,currentYear,currentTitle,setCurrentTitle,currentText,setCurrentText})=>{

    return(
        <div id="postcommentpage-div">
            <Header pagetitle={pagetitle}/>
            <PostCommentPageContent currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} currentText={currentText} setCurrentText={setCurrentText}/>
            <Footer currentYear={currentYear} />
        </div>
    )

}

export default PostCommentPage;