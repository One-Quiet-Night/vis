import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../Assets/notFound404.svg';

const NotFoundPage = () => {
    return (
        <div className="container">
            <h1>404 NOT FOUND</h1>
            <img src={PageNotFound} style={{ maxWidth: "500px", margin: "50px 0"}} />
            <p>The page we were looking for doesn't exist.</p>
            <button>
              <Link to="/" style={{color: "black"}}>Go to Home </Link>
            </button>
        </div>
    )
}

export default NotFoundPage;