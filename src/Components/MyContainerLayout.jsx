import React from 'react';

const MyContainerLayout = ({className, children}) => {
    return (
        <div className={`${className} container mx-auto`}>
            {children}
        </div>
    );
};

export default MyContainerLayout;