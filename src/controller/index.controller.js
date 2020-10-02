const app = document.getElementById('app');
import router from '../routes/routes';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRote';
import error404 from './components/Error404';

const init = async () => {
    const render = router[resolveRoutes( getHash() )] ? router[resolveRoutes( getHash() )] : error404;
    app.innerHTML = await render();
}

export default init;