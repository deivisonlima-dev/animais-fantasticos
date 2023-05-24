import initWritingEfferct from './modules/escrever.js';
import SmoothScrolling from './modules/scroll-suave.js';
import initAnimationScroll from './modules/animate-scroll.js';
import initTabMenu from './modules/tabmenu.js';
import Accordion from './modules/accordion.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFecthAnimais from './modules/fecth-animais.js';
import initFecthBitcoin from './modules/fecth-bitcoin.js';

const smoothScrolling = new SmoothScrolling('[data-menu="suave"] a[href^="#"]');
smoothScrolling.init();

const accordion = new Accordion('[data-animate="accordion"] dt');
accordion.init();

initWritingEfferct();
initAnimationScroll();
initTabMenu();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFecthAnimais();
initFecthBitcoin();

// Verificar tipo de dados do protótipo
const typeofData = (dado) => Object.prototype.toString.call(dado);
console.log(typeofData('ola mundo'));
