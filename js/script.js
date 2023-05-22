import initWritingEfferct from './modules/escrever.js';
import smoothScrolling from './modules/scroll-suave.js';
import initAnimationScroll from './modules/animate-scroll.js';
import initTabMenu from './modules/tabmenu.js';
import initAccordion from './modules/accordion.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
// import initAnimateNumbers from './modules/numeros.js';
import initFuncionamento from './modules/funcionamento.js';
import initFecthAnimais from './modules/fecth-animais.js';
import initFecthBitcoin from './modules/fecth-bitcoin.js';

initWritingEfferct();
smoothScrolling();
initAnimationScroll();
initTabMenu();
initAccordion();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
// initAnimateNumbers();
initFuncionamento();
initFecthAnimais();
initFecthBitcoin();

// Verificar tipo de dados do protótipo
const typeofData = (dado) => Object.prototype.toString.call(dado);
console.log(typeofData('ola mundo'));
console.log('ola mundo 7');
