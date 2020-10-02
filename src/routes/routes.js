import Character from '../controller/components/Character';
import Home from '../controller/components/Home';
import About from '../controller/components/About';
import Items from '../controller/components/Items';

const router = {
    '/:id': Character,
    '/': Home,
    '/about': About,
    '/items': Items 
}

export default router;