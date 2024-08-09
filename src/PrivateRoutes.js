import {Navigate,Outlet} from 'react-router-dom';
const PrivateRoutes = () => {
    const user = localStorage.getItem('news-user');

    return user ? <Outlet/> : <Navigate to='/'/>;
}
export default PrivateRoutes;
