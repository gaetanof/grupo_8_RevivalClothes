import CartTable from './CartsTable'
import TopBar from './TopBar';
import Footer from './Footer';
import SideBar from './SideBar';

function Carts() {

    return (
        <>
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <h2>Listado de carritos</h2>
                    <br></br>
                    <CartTable />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Carts;