import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";


function LoadingComponent() {
    return (
        <div>
            <ClipLoader
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoadingComponent;