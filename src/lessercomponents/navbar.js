import {Link} from 'react-router-dom';
const NavBar=()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/postcomment">
                        Post Comment
                    </Link>
                </li>
                <li>
                    <Link to="/listcomments">
                        Show Comments
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;