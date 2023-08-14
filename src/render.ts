import { electron } from 'webpack';
import type AbstractView from './view/_abstract';

const RenderPosition = {
	BEFOREBEGIN: 'beforebegin',
	AFTERBEGIN: 'afterbegin',
	BEFOREEND: 'beforeend',
	AFTEREND: 'afterend',
};

/**
 *
 * @param template string parsable to HTML
 */
function createElement<E extends Element = HTMLElement>(template: string) {
	const newElement = document.createElement('div');
	newElement.innerHTML = template;

	return newElement.firstElementChild as E;
}

function render(component: AbstractView<Element>, container: Element, place: InsertPosition = 'beforeend') {
	container.insertAdjacentElement(place, component.element);
}

export { createElement, render };