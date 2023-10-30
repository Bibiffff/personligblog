import Footer from "../footer/Footer";
import Nav from "../nav/Nav";

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <main className="container">
            {children}
        </main>
        <Footer />
        </>
    );
};

export default Layout;