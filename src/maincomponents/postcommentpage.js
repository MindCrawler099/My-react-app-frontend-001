import Header from '../lessercomponents/header';
import NavBar from '../lessercomponents/navbar';
import PostCommentPageContent from '../postcommentscomponents/postcommentpagecontent';
import Footer from '../lessercomponents/footer';

const PostCommentPage=({pagetitle,currentYear,currentTitle,setCurrentTitle,currentText,setCurrentText})=>{

    return(
        <div id="postcommentpage-div">
            <Header pagetitle={pagetitle}/>
            <NavBar/>
            <PostCommentPageContent currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} currentText={currentText} setCurrentText={setCurrentText}/>
            <Footer currentYear={currentYear} />
        </div>
    )

}

export default PostCommentPage;