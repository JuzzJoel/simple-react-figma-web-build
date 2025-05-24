import NavBar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUser } from '@fortawesome/free-solid-svg-icons';

const HeaderBlog = () => {
    return (
        <div className="header-blog">
            < NavBar variant="blog" className="navbar .blog-navbar" /> 
            
            <div className="side-bar">
                <FontAwesomeIcon icon={faComment} />
                <FontAwesomeIcon icon={faUser} size="1x" color="red" />
            </div>
        </div>
    );
};

export default HeaderBlog;