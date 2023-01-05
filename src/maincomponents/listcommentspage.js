import Header from "../lessercomponents/header";
import NavBar from "../lessercomponents/navbar";
import Footer from "../lessercomponents/footer";
import ListCommentsPageContent from "../listcommentscomponents/listcommentspagecontent";

const ListCommentsPage=({pagetitle,currentYear,currentComments})=>{
    return(
        <div id="listcommentspage-div">
            <Header pagetitle={pagetitle}/>
            <NavBar/>
            <ListCommentsPageContent currentComments={currentComments}/>
            <Footer currentYear={currentYear}/>
        </div>
    )
}

export default ListCommentsPage;