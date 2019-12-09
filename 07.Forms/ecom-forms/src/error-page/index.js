import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            Error Page
            <div>
                <Link to='/'>Go back to home page</Link>
            </div>
        </div>
    )
}

export default ErrorPage