import React from "react"
import { ContentRowTop } from '../../components/ContentRowTop';
import { Footer } from '../../components/Footer';

const ContentWrapper = () => {
    return (
        
    <div id="content-wrapper" className="d-flex flex-column">
        <ContentRowTop />
        <Footer />
    </div>
)}

export { ContentWrapper }