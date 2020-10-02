//read javascript
import './css/style.css';
import './images/rick_y_morty_home.jpg';
import './images/home_two.jpg';
import './images/serie.png';
//app
const app = document.getElementById('app');
import init from './controller/index.controller';
import router from './routes/routes';
import getHash from './utils/getHash';
import resolveRoutes from './utils/resolveRote';

const home_initial = router[ resolveRoutes( getHash() ) ];
app.innerHTML = home_initial();

window.addEventListener('hashchange', async () => await init() );