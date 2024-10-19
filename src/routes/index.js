import Home from '~/pages/Home';
import Following  from "~/pages/Following";
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import HeaderOnly from '~/components/Layout/HeaderOnly';

// Khong can dang nhap van vao duoc
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/Following', component: Following},
    { path: '/Profile', component: Profile},
    { path: '/Upload', component: Upload, Layout: HeaderOnly},
    { path: '/Search', component: Search, Layout: null},
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes }