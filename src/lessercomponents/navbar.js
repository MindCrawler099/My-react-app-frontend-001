import {Link} from 'react-router-dom';
const NavBar=()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link className="navbar-link" to="/postcomment">
                        Post Comment
                    </Link>
                </li>
                <li>
                    <Link className="navbar-link" to="/listcomments">
                        Show Comments
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;