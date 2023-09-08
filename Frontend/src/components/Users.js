import UserTable from './UserTable'
import TopBar from './TopBar';
import Footer from './Footer';
import SideBar from './SideBar';

function Users() {
    return (
        <>
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <h2>Listado de usuarios</h2>
                    <UserTable />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Users;