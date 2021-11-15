import React from 'react';
import Footer from "./Footer";

const PageLayout: React.FC = ({children}) => {
    return (
        <div className="bg-black text-white-secondary">
            {children}
            <Footer/>
        </div>
    )
}

export default PageLayout
