import React from "react"
import { ContentRowTop } from '../../components/ContentRowTop';
import ContentMiddle from "../ContentMiddle";
import { Footer } from '../../components/Footer';

const ContentWrapper = () => {
    return (
        
    <div id="content-wrapper" className="d-flex flex-column">
        <ContentRowTop />
        <ContentMiddle />
        <Footer />
    </div>
)}

export { ContentWrapper }