function c(t, n) {
  let e = null;
  return t instanceof Element ? !n || (e = t.querySelector(n), !(e instanceof HTMLElement)) ? null : e : typeof t != "string" || (e = document.querySelector(t), !(e instanceof HTMLElement)) ? null : e;
}
function s(t, n) {
  let e, r = [];
  if (t instanceof Element) {
    if (!n)
      return [];
    e = t.querySelectorAll(n);
    for (let i = 0; i < e.length; i++) {
      const l = e[i];
      l instanceof HTMLElement && r.push(l);
    }
    return r;
  }
  if (typeof t != "string")
    return [];
  e = document.querySelectorAll(t);
  for (let i = 0; i < e.length; i++) {
    const l = e[i];
    l instanceof HTMLElement && r.push(l);
  }
  return r;
}
function m(t, n) {
  let e = null;
  return t instanceof Element ? !n || (e = t.querySelector(n), !(e instanceof HTMLFormElement)) ? null : e : typeof t != "string" || (e = document.querySelector(t), !(e instanceof HTMLFormElement)) ? null : e;
}
function a(t, n) {
  let e = null;
  return t instanceof Element ? !n || (e = t.querySelector(n), !(e instanceof HTMLInputElement)) ? null : e : typeof t != "string" || (e = document.querySelector(t), !(e instanceof HTMLInputElement)) ? null : e;
}
function g(t, n) {
  let e, r = [];
  if (t instanceof Element) {
    if (!n)
      return [];
    e = t.querySelectorAll(n);
    for (let i = 0; i < e.length; i++) {
      const l = e[i];
      l instanceof HTMLInputElement && r.push(l);
    }
    return r;
  }
  if (typeof t != "string")
    return [];
  e = document.querySelectorAll(t);
  for (let i = 0; i < e.length; i++) {
    const l = e[i];
    l instanceof HTMLInputElement && r.push(l);
  }
  return r;
}
function d(t, n) {
  let e = null;
  return t instanceof Element ? !n || (e = t.querySelector(n), !(e instanceof HTMLSelectElement)) ? null : e : typeof t != "string" || (e = document.querySelector(t), !(e instanceof HTMLSelectElement)) ? null : e;
}
function E(t, n) {
  let e = null;
  return t instanceof Element ? !n || (e = t.querySelector(n), !(e instanceof HTMLAnchorElement)) ? null : e : typeof t != "string" || (e = document.querySelector(t), !(e instanceof HTMLAnchorElement)) ? null : e;
}
function y(t, n) {
  let e, r = [];
  if (t instanceof Element) {
    if (!n)
      return [];
    e = t.querySelectorAll(n);
    for (let i = 0; i < e.length; i++) {
      const l = e[i];
      l instanceof HTMLAnchorElement && r.push(l);
    }
    return r;
  }
  if (typeof t != "string")
    return [];
  e = document.querySelectorAll(t);
  for (let i = 0; i < e.length; i++) {
    const l = e[i];
    l instanceof HTMLAnchorElement && r.push(l);
  }
  return r;
}
function H(t, n) {
  let e;
  return t instanceof Element ? !n || (e = t.querySelector(n), !(e instanceof HTMLButtonElement)) ? null : e : typeof t != "string" || (e = document.querySelector(t), !(e instanceof HTMLButtonElement)) ? null : e;
}
function h(t, n) {
  let e;
  return t instanceof Element ? !n || (e = t.querySelector(n), !(e instanceof HTMLImageElement)) ? null : e : typeof t != "string" || (e = document.querySelector(t), !(e instanceof HTMLImageElement)) ? null : e;
}
function T(t) {
  if (t)
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
}
function L(t, n, e) {
  if (!t) return null;
  if (t.matches(n))
    return t instanceof HTMLElement ? t : null;
  if (t.tagName === "BODY" || t.tagName === "HTML")
    return null;
  let r = null;
  e = e || 20;
  for (let i = 0; i < e; i++) {
    const l = t.parentNode;
    if (!l || l.tagName === "BODY" || l.tagName === "HTML")
      break;
    if (l.matches(n))
      return l;
    t = l;
  }
  return r;
}
function S(t) {
  let n = t.parentNode;
  return n instanceof HTMLElement ? n : null;
}
function M(t) {
  let n = t.nextElementSibling;
  return n instanceof HTMLElement ? n : null;
}
function p(t, n) {
  if (!t.parentNode) return [];
  const e = [];
  let r = t.parentNode.firstChild;
  for (; r; )
    r.nodeType === 1 && r instanceof HTMLElement && r !== t && (!n || r.matches(n)) && e.push(r), r = r.nextSibling;
  return e;
}
function b(t, n, e) {
  const r = t instanceof Element ? t : document.querySelector(t);
  if (!r) return [];
  let i = [], l = r.nextElementSibling;
  for (; l && !l.matches(n); )
    e && l.matches(e) && i.push(l), l = l.nextElementSibling;
  return i;
}
function q(t, n, e) {
  const r = t instanceof Element ? t : document.querySelector(t);
  if (!r) return [];
  let i = [], l = r.previousElementSibling;
  for (; l && !l.matches(n); )
    e && l.matches(e) && i.push(l), l = l.previousElementSibling;
  return i;
}
function A(t) {
  const n = document.querySelectorAll(t), e = n[n.length - 1];
  return e instanceof HTMLElement ? e : null;
}
function N(t, n) {
  let e = t.className;
  e = e.replace(/^\s+|\s+$/g, ""), e = e.replace(/\s/g, ".");
  const r = t.parentNode;
  if (!r) return null;
  const i = r.querySelectorAll(`.${e} > ${n}`);
  if (!i.length) return null;
  let l = null;
  for (let u = 0; u < i.length; u++) {
    if (i[u].parentNode != t) continue;
    const o = i[u];
    if (o instanceof HTMLElement) {
      l = o;
      break;
    }
  }
  return l;
}
function w(t, n) {
  if (!(t instanceof NodeList) && !Array.isArray(t) && typeof t != "string" || typeof n != "function") return;
  const e = t instanceof NodeList || Array.isArray(t) ? t : document.querySelectorAll(t);
  if (e.length)
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      i instanceof HTMLElement && n(i);
    }
}
function I(t, n, e) {
  if (typeof t != "string" || typeof e != "function") return;
  let r = t;
  switch (t) {
    case "mouseenter":
      r = "mouseover";
      break;
    case "mouseleave":
      r = "mouseout";
      break;
  }
  document.addEventListener(r, function(i) {
    if (!i.target || !(i.target instanceof Element)) return;
    let l = i.target;
    if (n) {
      const u = i.target.closest(n);
      if (!u) return;
      u instanceof Element && (l = u);
    }
    l && r === "mouseout" && i instanceof MouseEvent && i.relatedTarget instanceof Node && l.contains(i.relatedTarget) || e.call(l, i);
  });
}
function f(t, n) {
  const e = t instanceof HTMLElement ? t : document.querySelector(t);
  if (!e || !e.getAttribute || !n) return "";
  const r = e.getAttribute(n);
  return r || "";
}
function v(t, n) {
  const e = f(t, n);
  return e ? parseInt(e, 10) : 0;
}
function k(t, n) {
  (t instanceof HTMLImageElement || t instanceof HTMLVideoElement || t instanceof HTMLEmbedElement || t instanceof HTMLAudioElement || t instanceof HTMLSourceElement || t instanceof HTMLIFrameElement) && (t.src = n);
}
function B(t) {
  const n = t.getBoundingClientRect();
  return {
    top: n.top + window.scrollY - document.documentElement.clientTop,
    left: n.left + window.scrollX - document.documentElement.clientLeft
  };
}
function C() {
  return document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop;
}
function F(t) {
  if (!t) return 0;
  t.style.opacity = "0", t.style.display = "block";
  const n = window.getComputedStyle(t), r = t.offsetHeight - parseFloat(n.paddingTop) - parseFloat(n.paddingBottom) - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth);
  let i = t.getAttribute("style");
  return i && (i = i.replace(
    /display\s*:\s*block\s*;/,
    ""
  ), i = i.replace(/opacity\s*:\s*0\s*;/, ""), t.setAttribute("style", i)), r;
}
export {
  N as directQuerySelector,
  T as emptyElement,
  H as findButtonEl,
  m as findFormEl,
  c as findHtmlEl,
  s as findHtmlEls,
  h as findImgEl,
  a as findInputEl,
  g as findInputEls,
  E as findLinkEl,
  y as findLinkEls,
  d as findSelectEl,
  w as forEachEl,
  f as getAttr,
  v as getAttrAsNumber,
  L as getClosestHtmlEl,
  A as getLastHtmlEl,
  b as getNextElsUntil,
  B as getOffset,
  S as getParentHtmlEl,
  q as getPrevElsUntil,
  F as getPureHeight,
  M as getSiblingHtmlEl,
  p as getSiblings,
  C as getWindowScrollTop,
  I as listenDocumentEvent,
  k as updateElSrc
};
