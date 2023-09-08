import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import ProductTable from './ProductTable'
import SideBar from './SideBar';


function ContentWrapper() {
    return (
        <React.Fragment>
            <SideBar />
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <ProductTable />
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;