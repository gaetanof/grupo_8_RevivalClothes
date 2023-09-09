import ProductTable from './ProductTable'
import TopBar from './TopBar';
import Footer from './Footer';
import SideBar from './SideBar';
import Pages from './Pagination';

function Products() {
    return (
        <>
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <h2>Listado de productos</h2>
                    <ProductTable />
                    <div className="d-flex align-items-center justify-content-center">
                        <Pages />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Products;