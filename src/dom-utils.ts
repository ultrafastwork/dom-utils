/**
 * Finds an HTML element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find the element. Required when parentEl is an Element.
 *
 * @returns {HTMLElement|null} The found HTML element or null if not found.
 */
export function findHtmlEl(
	parentEl: Element | string | null,
	selector?: string
): HTMLElement | null {
	let el: HTMLElement | null = null;

	if (parentEl instanceof Element) {
		if (!selector) {
			return null;
		}

		el = parentEl.querySelector(selector);

		if (!(el instanceof HTMLElement)) {
			return null;
		}

		return el;
	}

	if (typeof parentEl !== "string") {
		return null;
	}

	el = document.querySelector(parentEl);

	if (!(el instanceof HTMLElement)) {
		return null;
	}

	return el;
}

/**
 * Finds multiple HTML elements within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find elements. Required when parentEl is an Element.
 *
 * @returns {HTMLElement[]} An array of found HTML elements or empty array if none found.
 */
export function findHtmlEls(
	parentEl: Element | string | null,
	selector?: string
): HTMLElement[] {
	let els: NodeListOf<Element>;
	let htmlEls: HTMLElement[] = [];

	if (parentEl instanceof Element) {
		if (!selector) {
			return [];
		}

		els = parentEl.querySelectorAll(selector);

		for (let i = 0; i < els.length; i++) {
			const el = els[i];

			if (el instanceof HTMLElement) {
				htmlEls.push(el);
			}
		}

		return htmlEls;
	}

	if (typeof parentEl !== "string") {
		return [];
	}

	els = document.querySelectorAll(parentEl);

	for (let i = 0; i < els.length; i++) {
		const el = els[i];

		if (el instanceof HTMLElement) {
			htmlEls.push(el);
		}
	}

	return htmlEls;
}

/**
 * Finds a form element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} selector - The CSS selector to find the form element.
 *
 * @returns {HTMLFormElement|null} The found form element or null if not found.
 */
export function findFormEl(
	parentEl: Element | string | null,
	selector: string
): HTMLFormElement | null {
	let el: HTMLElement | null = null;

	if (parentEl instanceof Element) {
		if (!selector) {
			return null;
		}

		el = parentEl.querySelector(selector);

		if (!(el instanceof HTMLFormElement)) {
			return null;
		}

		return el;
	}

	if (typeof parentEl !== "string") {
		return null;
	}

	el = document.querySelector(parentEl);

	if (!(el instanceof HTMLFormElement)) {
		return null;
	}

	return el;
}

/**
 * Finds an input element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find the input element. Required when parentEl is an Element.
 *
 * @returns {HTMLInputElement|null} The found input element or null if not found.
 */
export function findInputEl(
	parentEl: Element | string | null,
	selector?: string
): HTMLInputElement | null {
	let el: HTMLElement | null = null;

	if (parentEl instanceof Element) {
		if (!selector) {
			return null;
		}

		el = parentEl.querySelector(selector);

		if (!(el instanceof HTMLInputElement)) {
			return null;
		}

		return el;
	}

	if (typeof parentEl !== "string") {
		return null;
	}

	el = document.querySelector(parentEl);

	if (!(el instanceof HTMLInputElement)) {
		return null;
	}

	return el;
}

/**
 * Finds multiple input elements within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find input elements. Required when parentEl is an Element.
 *
 * @returns {HTMLInputElement[]} An array of found input elements or empty array if none found.
 */
export function findInputEls(
	parentEl: Element | string | null,
	selector?: string
): HTMLInputElement[] {
	let els: NodeListOf<Element>;
	let inputEls: HTMLInputElement[] = [];

	if (parentEl instanceof Element) {
		if (!selector) {
			return [];
		}

		els = parentEl.querySelectorAll(selector);

		for (let i = 0; i < els.length; i++) {
			const el = els[i];

			if (el instanceof HTMLInputElement) {
				inputEls.push(el);
			}
		}

		return inputEls;
	}

	if (typeof parentEl !== "string") {
		return [];
	}

	els = document.querySelectorAll(parentEl);

	for (let i = 0; i < els.length; i++) {
		const el = els[i];

		if (el instanceof HTMLInputElement) {
			inputEls.push(el);
		}
	}

	return inputEls;
}

/**
 * Finds a select element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find the select element. Required when parentEl is an Element.
 *
 * @returns {HTMLSelectElement|null} The found select element or null if not found.
 */
export function findSelectEl(
	parentEl: Element | string | null,
	selector?: string
): HTMLSelectElement | null {
	let el: HTMLElement | null = null;

	if (parentEl instanceof Element) {
		if (!selector) {
			return null;
		}

		el = parentEl.querySelector(selector);

		if (!(el instanceof HTMLSelectElement)) {
			return null;
		}

		return el;
	}

	if (typeof parentEl !== "string") {
		return null;
	}

	el = document.querySelector(parentEl);

	if (!(el instanceof HTMLSelectElement)) {
		return null;
	}

	return el;
}

/**
 * Finds an anchor element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find the anchor element. Required when parentEl is an Element.
 *
 * @returns {HTMLAnchorElement|null} The found anchor element or null if not found.
 */
export function findLinkEl(
	parentEl: Element | string | null,
	selector?: string
): HTMLAnchorElement | null {
	let el: HTMLAnchorElement | null = null;

	if (parentEl instanceof Element) {
		if (!selector) return null;

		el = parentEl.querySelector(selector);

		if (!(el instanceof HTMLAnchorElement)) {
			return null;
		}

		return el;
	}

	if (typeof parentEl !== "string") {
		return null;
	}

	el = document.querySelector(parentEl);

	if (!(el instanceof HTMLAnchorElement)) {
		return null;
	}

	return el;
}

/**
 * Finds multiple anchor elements within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find anchor elements. Required when parentEl is an Element.
 *
 * @returns {HTMLAnchorElement[]} An array of found anchor elements or empty array if none found.
 */
export function findLinkEls(
	parentEl: Element | string | null,
	selector?: string
): HTMLAnchorElement[] {
	let els: NodeListOf<Element>;
	let linkEls: HTMLAnchorElement[] = [];

	if (parentEl instanceof Element) {
		if (!selector) {
			return [];
		}

		els = parentEl.querySelectorAll(selector);

		for (let i = 0; i < els.length; i++) {
			const el = els[i];

			if (el instanceof HTMLAnchorElement) {
				linkEls.push(el);
			}
		}

		return linkEls;
	}

	if (typeof parentEl !== "string") {
		return [];
	}

	els = document.querySelectorAll(parentEl);

	for (let i = 0; i < els.length; i++) {
		const el = els[i];

		if (el instanceof HTMLAnchorElement) {
			linkEls.push(el);
		}
	}

	return linkEls;
}

/**
 * Finds a button element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find the button element. Required when parentEl is an Element.
 *
 * @returns {HTMLButtonElement|null} The found button element or null if not found.
 */
export function findButtonEl(
	parentEl: Element | string | null,
	selector?: string
): HTMLButtonElement | null {
	let el: HTMLButtonElement | null;

	if (parentEl instanceof Element) {
		if (!selector) {
			return null;
		}

		el = parentEl.querySelector(selector);

		if (!(el instanceof HTMLButtonElement)) {
			return null;
		}

		return el;
	}

	if (typeof parentEl !== "string") {
		return null;
	}

	el = document.querySelector(parentEl);

	if (!(el instanceof HTMLButtonElement)) {
		return null;
	}

	return el;
}

/**
 * Finds an image element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find the image element. Required when parentEl is an Element.
 *
 * @returns {HTMLImageElement|null} The found image element or null if not found.
 */
export function findImgEl(
	parentEl: Element | string | null,
	selector?: string
): HTMLImageElement | null {
	let el: HTMLButtonElement | null;

	if (parentEl instanceof Element) {
		if (!selector) {
			return null;
		}

		el = parentEl.querySelector(selector);

		if (!(el instanceof HTMLImageElement)) {
			return null;
		}

		return el;
	}

	if (typeof parentEl !== "string") {
		return null;
	}

	el = document.querySelector(parentEl);

	if (!(el instanceof HTMLImageElement)) {
		return null;
	}

	return el;
}

/**
 * Removes all child nodes from an element.
 *
 * @param {Element|null} el - The element to empty.
 * @returns {void}
 */
export function emptyElement(el: Element | null) {
	if (!el) return;
	while (el.firstChild) {
		el.removeChild(el.firstChild);
	}
}

/**
 * Finds the closest ancestor element that matches a selector, with an optional depth limit.
 *
 * @param {Element|null} el - The starting element.
 * @param {string} selector - The CSS selector to match against.
 * @param {number} [depth=20] - Maximum number of ancestors to check.
 *
 * @returns {HTMLElement|null} The closest matching ancestor or null if none found.
 */
export function getClosestHtmlEl(
	el: Element | null,
	selector: string,
	depth?: number
): HTMLElement | null {
	if (!el) return null;

	if (el.matches(selector)) {
		if (el instanceof HTMLElement) {
			return el;
		}

		return null;
	}

	if (el.tagName === "BODY" || el.tagName === "HTML") {
		return null;
	}

	let closest = null;
	depth = depth ? depth : 20;

	for (let i = 0; i < depth; i++) {
		const parentNode = el.parentNode as HTMLElement;

		if (
			!parentNode ||
			parentNode.tagName === "BODY" ||
			parentNode.tagName === "HTML"
		) {
			break;
		}

		if (parentNode.matches(selector)) {
			return parentNode;
		}

		el = parentNode;
	}

	return closest;
}

/**
 * Gets the parent element of an HTML element.
 *
 * @param {HTMLElement} el - The element to get the parent of.
 * @returns {HTMLElement|null} The parent element or null if no parent exists or it's not an HTMLElement.
 */
export function getParentHtmlEl(el: HTMLElement): HTMLElement | null {
	let parentEl = el.parentNode;

	if (parentEl instanceof HTMLElement) {
		return parentEl;
	}

	return null;
}

/**
 * Gets the next sibling element of an HTML element.
 *
 * @param {HTMLElement} el - The element to get the sibling of.
 * @returns {HTMLElement|null} The next sibling element or null if no sibling exists or it's not an HTMLElement.
 */
export function getSiblingHtmlEl(el: HTMLElement): HTMLElement | null {
	let siblingEl = el.nextElementSibling;

	if (siblingEl instanceof HTMLElement) {
		return siblingEl;
	}

	return null;
}

/**
 * Get siblings of an element.
 * The "el" parameter can be in any position (not only first child).
 *
 * @param {HTMLElement} el - The element.
 * @param {string} [selector] - Optional CSS selector to filter siblings.
 *
 * @return {Array<HTMLElement>} The siblings.
 */
export function getSiblings(el: HTMLElement, selector?: string): HTMLElement[] {
	if (!el.parentNode) return [];

	const siblings = [];
	let sibling = el.parentNode.firstChild;

	while (sibling) {
		if (
			sibling.nodeType === 1 &&
			sibling instanceof HTMLElement &&
			sibling !== el
		) {
			if (!selector || sibling.matches(selector)) {
				siblings.push(sibling);
			}
		}

		sibling = sibling.nextSibling;
	}

	return siblings;
}

/**
 * Gets all next sibling elements until a boundary element is reached.
 *
 * @param {Element|string} elementOrSelector - The starting element or CSS selector.
 * @param {string} boundarySelector - CSS selector that defines the boundary element.
 * @param {string} [filterSelector] - Optional CSS selector to filter the results.
 *
 * @returns {Element[]} Array of matching elements.
 */
export function getNextElsUntil(
	elementOrSelector: Element | string,
	boundarySelector: string,
	filterSelector?: string
): Element[] {
	const element = !(elementOrSelector instanceof Element)
		? document.querySelector(elementOrSelector)
		: elementOrSelector;
	if (!element) return [];

	let result = [];
	let sibling = element.nextElementSibling;

	while (sibling && !sibling.matches(boundarySelector)) {
		if (filterSelector && sibling.matches(filterSelector)) {
			result.push(sibling);
		}

		sibling = sibling.nextElementSibling;
	}

	return result;
}

/**
 * Gets all previous sibling elements until a boundary element is reached.
 *
 * @param {Element|string} elementOrSelector - The starting element or CSS selector.
 * @param {string} boundarySelector - CSS selector that defines the boundary element.
 * @param {string} [filterSelector] - Optional CSS selector to filter the results.
 *
 * @returns {Element[]} Array of matching elements.
 */
export function getPrevElsUntil(
	elementOrSelector: Element | string,
	boundarySelector: string,
	filterSelector?: string
): Element[] {
	const element = !(elementOrSelector instanceof Element)
		? document.querySelector(elementOrSelector)
		: elementOrSelector;
	if (!element) return [];

	let result = [];
	let sibling = element.previousElementSibling;

	while (sibling && !sibling.matches(boundarySelector)) {
		if (filterSelector && sibling.matches(filterSelector)) {
			result.push(sibling);
		}

		sibling = sibling.previousElementSibling;
	}

	return result;
}

/**
 * Gets the last HTML element matching a CSS selector.
 *
 * @param {string} selector - The CSS selector.
 * @returns {HTMLElement|null} The last matching element or null if none found.
 */
export function getLastHtmlEl(selector: string): HTMLElement | null {
	const els = document.querySelectorAll(selector);
	const lastEl = els[els.length - 1];
	return lastEl instanceof HTMLElement ? lastEl : null;
}

/**
 * Direct query selector. It's like el.querySelector(':scope > selector') but supports older browsers.
 *
 * @param {HTMLElement} el - The parent element.
 * @param {string} selector - The CSS selector for direct children.
 *
 * @return {HTMLElement|null} The matching element or null.
 */
export function directQuerySelector(
	el: HTMLElement,
	selector: string
): HTMLElement | null {
	let className = el.className;

	// Trim leading and trailing spaces.
	className = className.replace(/^\s+|\s+$/g, "");

	// Remove space and replace it with . (dot)
	className = className.replace(/\s/g, ".");

	const parent = el.parentNode;
	if (!parent) return null;

	const children = parent.querySelectorAll(`.${className} > ${selector}`);
	if (!children.length) return null;

	let result: HTMLElement | null = null;

	for (let i = 0; i < children.length; i++) {
		if (children[i].parentNode != el) continue;
		const child = children[i];

		if (child instanceof HTMLElement) {
			result = child;
			break;
		}
	}

	return result;
}

/**
 * Iterates over a collection of elements and applies a function to each.
 *
 * @param {string|NodeListOf<Element>|HTMLElement[]} selector - Either a NodeList, array of elements, or a CSS selector string.
 * @param {function(Element): void} handler - The function to be applied to each element.
 *
 * @returns {void}
 */
export function forEachEl(
	selector: string | NodeListOf<Element> | HTMLElement[],
	handler: (el: Element) => void
): void {
	if (
		!(selector instanceof NodeList) &&
		!Array.isArray(selector) &&
		typeof selector !== "string"
	) {
		return;
	}

	if (typeof handler !== "function") return;

	const elms =
		selector instanceof NodeList || Array.isArray(selector)
			? selector
			: document.querySelectorAll(selector);

	if (!elms.length) return;

	for (let i = 0; i < elms.length; i++) {
		const elm = elms[i];

		if (elm instanceof HTMLElement) {
			handler(elm);
		}
	}
}

/**
 * Add event handler to the document.
 *
 * @param {string} eventType - The event type.
 * @param {string|null} selector - The CSS selector for event delegation, or null to attach directly to document.
 * @param {function(any): void} handler - The event handler function.
 * @returns {void}
 */
export function listenDocumentEvent(
	eventType: string,
	selector: string | null,
	handler: (e: any) => void
) {
	if (typeof eventType !== "string") return;
	if (typeof handler !== "function") return;

	let eventName = eventType;

	switch (eventType) {
		case "mouseenter":
			eventName = "mouseover";
			break;

		case "mouseleave":
			eventName = "mouseout";
			break;
	}

	document.addEventListener(eventName, function (e) {
		if (!e.target) return;
		if (!(e.target instanceof Element)) return;
		let target = e.target;

		if (selector) {
			const closestTarget = e.target.closest(selector);
			if (!closestTarget) return;

			if (closestTarget instanceof Element) {
				target = closestTarget;
			}
		}

		if (target && eventName === "mouseout") {
			if (
				e instanceof MouseEvent &&
				e.relatedTarget instanceof Node &&
				target.contains(e.relatedTarget)
			) {
				return;
			}
		}

		handler.call(target, e);
	});
}

/**
 * Get attribute value of an element.
 *
 * @param {HTMLElement|string} selector - The element or CSS selector.
 * @param {string} key - The attribute name.
 *
 * @return {string} The attribute value or empty string if not found.
 */
export function getAttr(selector: HTMLElement | string, key: string): string {
	const el =
		selector instanceof HTMLElement
			? selector
			: document.querySelector(selector);
	if (!el || !el.getAttribute) return "";
	if (!key) return "";

	const val = el.getAttribute(key);

	return val ? val : "";
}

/**
 * Get attribute value of an element as number.
 *
 * @param {HTMLElement|string} selector - The element or CSS selector.
 * @param {string} key - The attribute name.
 *
 * @return {number} The attribute value as number or 0 if not found or not a number.
 */
export function getAttrAsNumber(
	selector: HTMLElement | string,
	key: string
): number {
	const value = getAttr(selector, key);
	if (!value) return 0;

	return parseInt(value, 10);
}

/**
 * Updates the src attribute of various media elements.
 *
 * @param {HTMLElement|Element} el - The element to update.
 * @param {string} src - The new source URL.
 * @returns {void}
 */
export function updateElSrc(el: HTMLElement | Element, src: string) {
	if (
		el instanceof HTMLImageElement ||
		el instanceof HTMLVideoElement ||
		el instanceof HTMLEmbedElement ||
		el instanceof HTMLAudioElement ||
		el instanceof HTMLSourceElement ||
		el instanceof HTMLIFrameElement
	) {
		el.src = src;
	}
}

/**
 * Gets the offset position of an element relative to the document.
 *
 * @param {HTMLElement} el - The element to get the offset for.
 * @returns {{ top: number; left: number }} The top and left offset values.
 */
export function getOffset(el: HTMLElement): { top: number; left: number } {
	const rect = el.getBoundingClientRect();

	return {
		top: rect.top + window.scrollY - document.documentElement.clientTop,
		left: rect.left + window.scrollX - document.documentElement.clientLeft,
	};
}

/**
 * Gets the current scroll position from the top of the window.
 *
 * @returns {number} The scroll position in pixels.
 */
export function getWindowScrollTop(): number {
	if (document.documentElement) {
		return document.documentElement.scrollTop;
	}

	return document.body.scrollTop;
}

/**
 * Get element's height without padding and border.
 *
 * @param {HTMLElement} el - The element to measure.
 * @return {number} The pure height in pixels or 0 if element doesn't exist.
 */
export function getPureHeight(el: HTMLElement): number {
	if (!el) return 0;

	// Temporarily patch the element's display and opacity.
	el.style.opacity = "0";
	el.style.display = "block";

	const computedStyle = window.getComputedStyle(el);

	// Get the total height including padding and border
	const totalHeight = el.offsetHeight;

	const pureHeight =
		totalHeight -
		parseFloat(computedStyle.paddingTop) -
		parseFloat(computedStyle.paddingBottom) -
		parseFloat(computedStyle.borderTopWidth) -
		parseFloat(computedStyle.borderBottomWidth);

	let inlineStyleContent = el.getAttribute("style");

	// Restore the element's display and opacity.
	if (inlineStyleContent) {
		inlineStyleContent = inlineStyleContent.replace(
			/display\s*:\s*block\s*;/,
			""
		);

		inlineStyleContent = inlineStyleContent.replace(/opacity\s*:\s*0\s*;/, "");

		el.setAttribute("style", inlineStyleContent);
	}

	return pureHeight;
}
