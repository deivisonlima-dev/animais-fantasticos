import initWritingEfferct from './modules/escrever.js';
import SmoothScrolling from './modules/scroll-suave.js';
import AnimationScroll from './modules/animate-scroll.js';
import TabNav from './modules/tabnav.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimals from './modules/fecth-animais.js';
import fetchBitcoin from './modules/fecth-bitcoin.js';

const smoothScrolling = new SmoothScrolling('[data-menu="suave"] a[href^="#"]');
smoothScrolling.init();

const accordion = new Accordion('[data-animate="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const animateScrolling = new AnimationScroll('[data-animate="scroll"]');
animateScrolling.init();

const dropdownMenus = new DropdownMenu('[data-dropdown]');
dropdownMenus.init();

initWritingEfferct();
initTooltip();
initMenuMobile();
initFuncionamento();
fetchAnimals('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

// Verificar tipo de dados do protótipo
const typeofData = (dado) => Object.prototype.toString.call(dado);
console.log(typeofData('ola mundo'));
