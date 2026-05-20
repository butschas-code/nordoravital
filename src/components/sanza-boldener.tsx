"use client";

import { useEffect } from "react";

const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "TEXTAREA",
  "INPUT",
  "SELECT",
  "OPTION",
  "SVG",
  "CODE",
  "PRE",
]);

const SANZA_WORD = /\bsanza\b/i;
const SANZA_SPLIT = /(\bsanza\b)/gi;

function shouldSkip(node: Node) {
  const parent = node.parentElement;
  if (!parent) return true;
  if (SKIP_TAGS.has(parent.tagName)) return true;
  return Boolean(parent.closest("[data-sanza-bold]"));
}

function normalizeTextNode(node: Text) {
  if (shouldSkip(node) || !SANZA_WORD.test(node.nodeValue ?? "")) return;

  const fragment = document.createDocumentFragment();
  const parts = (node.nodeValue ?? "").split(SANZA_SPLIT);

  for (const part of parts) {
    if (!part) continue;
    if (SANZA_WORD.test(part)) {
      const strong = document.createElement("strong");
      strong.dataset.sanzaBold = "true";
      strong.className = "font-semibold";
      strong.textContent = "sanza";
      fragment.appendChild(strong);
    } else {
      fragment.appendChild(document.createTextNode(part));
    }
  }

  node.replaceWith(fragment);
}

function normalizeTree(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) {
    normalizeTextNode(root as Text);
    return;
  }

  if (root.nodeType !== Node.ELEMENT_NODE && root !== document.body) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let node = walker.nextNode();
  while (node) {
    nodes.push(node as Text);
    node = walker.nextNode();
  }
  nodes.forEach(normalizeTextNode);
}

export function SanzaBoldener() {
  useEffect(() => {
    normalizeTree(document.body);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach(normalizeTree);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
