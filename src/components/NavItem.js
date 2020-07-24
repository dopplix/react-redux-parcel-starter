import React from 'react';
import { Link } from 'react-router-dom';

export default ({path, content, onLinkClicked}) => {
    return (
        <li className="nav-item">
            <Link 
                to={path} 
                className="nav-link" 
                onClick={(event)=>{
                    if(onLinkClicked!=null){
                        event.preventDefault();
                        event.stopPropagation();
                        onLinkClicked();    
                    }
                }}
            >
                {content}
            </Link>
        </li>
    );
};
