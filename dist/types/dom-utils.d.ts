/**
 * Finds an HTML element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find the element. Required when parentEl is an Element.
 *
 * @returns {HTMLElement|null} The found HTML element or null if not found.
 */
export declare function findHtmlEl(parentEl: Element | string | null, selector?: string): HTMLElement | null;
/**
 * Finds multiple HTML elements within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find elements. Required when parentEl is an Element.
 *
 * @returns {HTMLElement[]} An array of found HTML elements or empty array if none found.
 */
export declare function findHtmlEls(parentEl: Element | string | null, selector?: string): HTMLElement[];
/**
 * Finds a form element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} selector - The CSS selector to find the form element.
 *
 * @returns {HTMLFormElement|null} The found form element or null if not found.
 */
export declare function findFormEl(parentEl: Element | string | null, selector?: string): HTMLFormElement | null;
/**
 * Finds an input element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find the input element. Required when parentEl is an Element.
 *
 * @returns {HTMLInputElement|null} The found input element or null if not found.
 */
export declare function findInputEl(parentEl: Element | string | null, selector?: string): HTMLInputElement | null;
/**
 * Finds multiple input elements within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find input elements. Required when parentEl is an Element.
 *
 * @returns {HTMLInputElement[]} An array of found input elements or empty array if none found.
 */
export declare function findInputEls(parentEl: Element | string | null, selector?: string): HTMLInputElement[];
/**
 * Finds a select element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find the select element. Required when parentEl is an Element.
 *
 * @returns {HTMLSelectElement|null} The found select element or null if not found.
 */
export declare function findSelectEl(parentEl: Element | string | null, selector?: string): HTMLSelectElement | null;
/**
 * Finds an anchor element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find the anchor element. Required when parentEl is an Element.
 *
 * @returns {HTMLAnchorElement|null} The found anchor element or null if not found.
 */
export declare function findLinkEl(parentEl: Element | string | null, selector?: string): HTMLAnchorElement | null;
/**
 * Finds multiple anchor elements within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find anchor elements. Required when parentEl is an Element.
 *
 * @returns {HTMLAnchorElement[]} An array of found anchor elements or empty array if none found.
 */
export declare function findLinkEls(parentEl: Element | string | null, selector?: string): HTMLAnchorElement[];
/**
 * Finds a button element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find the button element. Required when parentEl is an Element.
 *
 * @returns {HTMLButtonElement|null} The found button element or null if not found.
 */
export declare function findButtonEl(parentEl: Element | string | null, selector?: string): HTMLButtonElement | null;
/**
 * Finds an image element within a parent element or document using a CSS selector.
 *
 * @param {Element|string|null} parentEl - The parent element, a CSS selector string, or null.
 * @param {string} [selector] - The CSS selector to find the image element. Required when parentEl is an Element.
 *
 * @returns {HTMLImageElement|null} The found image element or null if not found.
 */
export declare function findImgEl(parentEl: Element | string | null, selector?: string): HTMLImageElement | null;
/**
 * Removes all child nodes from an element.
 *
 * @param {Element|null} el - The element to empty.
 * @returns {void}
 */
export declare function emptyElement(el: Element | null): void;
/**
 * Finds the closest ancestor element that matches a selector, with an optional depth limit.
 *
 * @param {Element|null} el - The starting element.
 * @param {string} selector - The CSS selector to match against.
 * @param {number} [depth=20] - Maximum number of ancestors to check.
 *
 * @returns {HTMLElement|null} The closest matching ancestor or null if none found.
 */
export declare function getClosestHtmlEl(el: Element | null, selector: string, depth?: number): HTMLElement | null;
/**
 * Gets the parent element of an HTML element.
 *
 * @param {HTMLElement} el - The element to get the parent of.
 * @returns {HTMLElement|null} The parent element or null if no parent exists or it's not an HTMLElement.
 */
export declare function getParentHtmlEl(el: HTMLElement): HTMLElement | null;
/**
 * Gets the next sibling element of an HTML element.
 *
 * @param {HTMLElement} el - The element to get the sibling of.
 * @returns {HTMLElement|null} The next sibling element or null if no sibling exists or it's not an HTMLElement.
 */
export declare function getSiblingHtmlEl(el: HTMLElement): HTMLElement | null;
/**
 * Get siblings of an element.
 * The "el" parameter can be in any position (not only first child).
 *
 * @param {HTMLElement} el - The element.
 * @param {string} [selector] - Optional CSS selector to filter siblings.
 *
 * @return {Array<HTMLElement>} The siblings.
 */
export declare function getSiblings(el: HTMLElement, selector?: string): HTMLElement[];
/**
 * Gets all next sibling elements until a boundary element is reached.
 *
 * @param {Element|string} elementOrSelector - The starting element or CSS selector.
 * @param {string} boundarySelector - CSS selector that defines the boundary element.
 * @param {string} [filterSelector] - Optional CSS selector to filter the results.
 *
 * @returns {Element[]} Array of matching elements.
 */
export declare function getNextElsUntil(elementOrSelector: Element | string, boundarySelector: string, filterSelector?: string): Element[];
/**
 * Gets all previous sibling elements until a boundary element is reached.
 *
 * @param {Element|string} elementOrSelector - The starting element or CSS selector.
 * @param {string} boundarySelector - CSS selector that defines the boundary element.
 * @param {string} [filterSelector] - Optional CSS selector to filter the results.
 *
 * @returns {Element[]} Array of matching elements.
 */
export declare function getPrevElsUntil(elementOrSelector: Element | string, boundarySelector: string, filterSelector?: string): Element[];
/**
 * Gets the last HTML element matching a CSS selector.
 *
 * @param {string} selector - The CSS selector.
 * @returns {HTMLElement|null} The last matching element or null if none found.
 */
export declare function getLastHtmlEl(selector: string): HTMLElement | null;
/**
 * Direct query selector. It's like el.querySelector(':scope > selector') but supports older browsers.
 *
 * @param {HTMLElement} el - The parent element.
 * @param {string} selector - The CSS selector for direct children.
 *
 * @return {HTMLElement|null} The matching element or null.
 */
export declare function directQuerySelector(el: HTMLElement, selector: string): HTMLElement | null;
/**
 * Iterates over a collection of elements and applies a function to each.
 *
 * @param {string|NodeListOf<Element>|HTMLElement[]} selector - Either a NodeList, array of elements, or a CSS selector string.
 * @param {function(Element): void} handler - The function to be applied to each element.
 *
 * @returns {void}
 */
export declare function forEachEl(selector: string | NodeListOf<Element> | HTMLElement[], handler: (el: Element) => void): void;
/**
 * Add event handler to the document.
 *
 * @param {string} eventType - The event type.
 * @param {string|null} selector - The CSS selector for event delegation, or null to attach directly to document.
 * @param {function(any): void} handler - The event handler function.
 */
export declare function listenDocumentEvent(eventType: string, selector: string | null, handler: (e: any) => void): void;
/**
 * Get attribute value of an element.
 *
 * @param {HTMLElement|string} selector - The element or CSS selector.
 * @param {string} key - The attribute name.
 *
 * @return {string} The attribute value or empty string if not found.
 */
export declare function getAttr(selector: HTMLElement | string, key: string): string;
/**
 * Get attribute value of an element as number.
 *
 * @param {HTMLElement|string} selector - The element or CSS selector.
 * @param {string} key - The attribute name.
 *
 * @return {number} The attribute value as number or 0 if not found or not a number.
 */
export declare function getAttrAsNumber(selector: HTMLElement | string, key: string): number;
/**
 * Updates the src attribute of various media elements.
 *
 * @param {HTMLElement|Element} el - The element to update.
 * @param {string} src - The new source URL.
 * @returns {void}
 */
export declare function updateElSrc(el: HTMLElement | Element, src: string): void;
/**
 * Gets the offset position of an element relative to the document.
 *
 * @param {HTMLElement} el - The element to get the offset for.
 * @returns {{ top: number; left: number }} The top and left offset values.
 */
export declare function getOffset(el: HTMLElement): {
    top: number;
    left: number;
};
/**
 * Gets the current scroll position from the top of the window.
 *
 * @returns {number} The scroll position in pixels.
 */
export declare function getWindowScrollTop(): number;
/**
 * Get element's height without padding and border.
 *
 * @param {HTMLElement} el - The element to measure.
 * @return {number} The pure height in pixels or 0 if element doesn't exist.
 */
export declare function getPureHeight(el: HTMLElement): number;
