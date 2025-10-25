import React from 'react';

const MyContainerLayout = ({className, children}) => {
    return (
        <div className={`${className} container mx-auto overflow-x-hidden`}>
            {children}
        </div>
    );
};

export default MyContainerLayout;