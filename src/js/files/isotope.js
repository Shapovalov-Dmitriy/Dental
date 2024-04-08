/*

*/

// / / Подключение функционала "Чертоги фрилансера"
import { isMobile, FILES } from "./functions.js";
// Подключение списка активных модулей
import { filesModules } from "./modules.js";

import Izotope from 'isotope-layout/js/isotope.js';

const items = document.querySelector('[data-iso-items]');
if (items) {
	const itemsGrid = new Isotope(items, {
		itemSelector: '[data-iso-item]',
		masonry: {
			fitWidth: true,
			gutter: 20
		}
	});
}