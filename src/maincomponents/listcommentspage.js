import Header from "../lessercomponents/header";
import NavBar from "../lessercomponents/navbar";
import Footer from "../lessercomponents/footer";
import ListCommentsPageContent from "../listcommentscomponents/listcommentspagecontent";

const ListCommentsPage=({pagetitle,currentYear,currentTitle,setCurrentTitle,currentText,setCurrentText})=>{
    return(
        <div id="listcommentspage-div">
            <Header pagetitle={pagetitle}/>
            <NavBar/>
            <ListCommentsPageContent currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} currentText={currentText} setCurrentText={setCurrentText}/>
            <Footer currentYear={currentYear}/>
        </div>
    )
}

export default ListCommentsPage;