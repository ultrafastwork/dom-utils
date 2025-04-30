# DOM Utils

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript" alt="TypeScript Ready">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT">
  <img src="https://img.shields.io/badge/Zero-Dependencies-orange?style=for-the-badge" alt="Zero Dependencies">
</p>

<p align="center">A lightweight TypeScript library providing utility functions for DOM manipulation and traversal.</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#api-reference">API Reference</a> •
  <a href="#license">License</a>
</p>

## 📦 Installation

```bash
# Install from GitHub
npm install ultrafastwork/dom-utils
# or
yarn add ultrafastwork/dom-utils
# or
pnpm add ultrafastwork/dom-utils
```

## 🚀 Usage

### Module Import

```javascript
import { findHtmlEl, findInputEls, emptyElement } from "dom-utils";

// Find a single HTML element
const container = findHtmlEl(document.body, ".container");

// Find all input elements within a form
const inputs = findInputEls(document.querySelector("form"));

// Empty an element's contents
emptyElement(document.querySelector(".clear-me"));
```

### Browser Script Tag

```html
<!-- Load directly from GitHub -->
<script src="https://cdn.jsdelivr.net/gh/ultrafastwork/dom-utils@main/dist/dom-utils.iife.js"></script>

<script>
  // Access functions through the DomUtils global object
  const container = DomUtils.findHtmlEl(document.body, ".container");
  const inputs = DomUtils.findInputEls(document.querySelector("form"));
  DomUtils.emptyElement(document.querySelector(".clear-me"));
</script>
```

### TypeScript with Global Usage

For TypeScript projects using the global browser import via CDN:

```html
<!-- In your HTML file -->
<script src="https://cdn.jsdelivr.net/gh/ultrafastwork/dom-utils@main/dist/dom-utils.iife.js"></script>
```

#### Option 1: Using Triple-Slash Directive (Recommended)

Download the type definition file from the CDN and add it to your project:

```bash
# Download the type definition file
curl -o dom-utils.d.ts https://cdn.jsdelivr.net/gh/ultrafastwork/dom-utils@main/dist/dom-utils.d.ts
```

Then reference it in your TypeScript file:

```typescript
// In your TypeScript file
/// <reference path="./dom-utils.d.ts" />

// Now you can use with full type support
const container = DomUtils.findHtmlEl(document.body, ".container");
const inputs = DomUtils.findInputEls(document.querySelector("form"));
```

#### Option 2: Creating a Custom Declaration File

If you prefer not to download the type definition file, you can create a simplified declaration file in your project:

```typescript
// dom-utils.d.ts
declare namespace DomUtils {
  function findHtmlEl(parentEl: Element | string | null, selector?: string): HTMLElement | null;
  function findHtmlEls(parentEl: Element | string | null, selector?: string): HTMLElement[];
  function findFormEl(parentEl: Element | string | null, selector: string): HTMLFormElement | null;
  function findInputEl(parentEl: Element | string | null, selector?: string): HTMLInputElement | null;
  function findInputEls(parentEl: Element | string | null, selector?: string): HTMLInputElement[];
  function findSelectEl(parentEl: Element | string | null, selector?: string): HTMLSelectElement | null;
  function findLinkEl(parentEl: Element | string | null, selector?: string): HTMLAnchorElement | null;
  function findLinkEls(parentEl: Element | string | null, selector?: string): HTMLAnchorElement[];
  function findButtonEl(parentEl: Element | string | null, selector?: string): HTMLButtonElement | null;
  function findImgEl(parentEl: Element | string | null, selector?: string): HTMLImageElement | null;
  function emptyElement(el: Element | null): void;
  // Add other functions as needed
}
```

## 📚 API Reference

### 🔍 Element Selection

| Function | Description |
|----------|-------------|
| `findHtmlEl(parentEl, selector)` | Find a single HTML element |
| `findHtmlEls(parentEl, selector)` | Find multiple HTML elements |
| `findFormEl(parentEl, selector)` | Find a form element |
| `findInputEl(parentEl, selector)` | Find an input element |
| `findInputEls(parentEl, selector)` | Find multiple input elements |
| `findSelectEl(parentEl, selector)` | Find a select element |
| `findLinkEl(parentEl, selector)` | Find an anchor element |
| `findLinkEls(parentEl, selector)` | Find multiple anchor elements |
| `findButtonEl(parentEl, selector)` | Find a button element |
| `findImgEl(parentEl, selector)` | Find an image element |

### 🧭 Element Traversal

| Function | Description |
|----------|-------------|
| `getClosestHtmlEl(el, selector, depth)` | Find closest matching parent element |
| `getParentHtmlEl(el)` | Get parent element |
| `getSiblingHtmlEl(el)` | Get sibling element |
| `getSiblings(el, selector)` | Get all siblings |
| `getNextElsUntil(elementOrSelector, boundarySelector, filterSelector)` | Get next elements until boundary |
| `getPrevElsUntil(elementOrSelector, boundarySelector, filterSelector)` | Get previous elements until boundary |
| `getLastHtmlEl(selector)` | Get last matching element |
| `directQuerySelector(el, selector)` | Direct query selector (like :scope > selector) |

### ✏️ Element Manipulation

| Function | Description |
|----------|-------------|
| `emptyElement(el)` | Empty an element's contents |
| `updateElSrc(el, src)` | Update src attribute of media elements |
| `forEachEl(selector, handler)` | Iterate over elements and apply a function |

### 🔔 Event Handling

| Function | Description |
|----------|-------------|
| `listenDocumentEvent(eventType, selector, handler)` | Add event handler to document |

### 🔧 Element Properties

| Function | Description |
|----------|-------------|
| `getAttr(selector, key)` | Get attribute value |
| `getAttrAsNumber(selector, key)` | Get attribute value as number |
| `getOffset(el)` | Get element's offset position |
| `getWindowScrollTop()` | Get window scroll position |
| `getPureHeight(el)` | Get element's height without padding and border |

## 📄 License

Released under the [MIT](https://opensource.org/licenses/MIT) license.

---

<p align="center">
  <a href="https://github.com/ultrafastwork/dom-utils">GitHub</a> •
  <a href="https://github.com/ultrafastwork/dom-utils/issues">Report Bug</a> •
  <a href="https://github.com/ultrafastwork/dom-utils/issues">Request Feature</a>
</p>
