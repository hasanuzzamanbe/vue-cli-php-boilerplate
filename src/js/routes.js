import Supports from './Components/Supports';
import Home from './Components/Home';

export const routes = [
    {
        path: '/supports',
        name: 'supports',
        component: Supports
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    
];
