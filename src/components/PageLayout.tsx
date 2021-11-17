import React from 'react';
import Footer from "./Footer";
import useScrollToTop from "../hooks/useScrollToTop";

const PageLayout: React.FC = ({children}) => {
    useScrollToTop();
    return (
        <div className="bg-black text-white-secondary">
            {children}
            <Footer/>
        </div>
    )
}

export default PageLayout
