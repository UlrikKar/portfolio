"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const CASCADE_BUDGET_MS = 350;
const SLIDE_DURATION_MS = 280;

const BLOCK_TAGS = new Set(["P", "H1", "H2", "H3", "H4", "H5", "H6", "LI"]);

function getBlockAncestor(node: Text): HTMLElement | null {
  let el = node.parentElement;
  while (el && el !== document.body) {
    if (BLOCK_TAGS.has(el.tagName)) return el;
    const d = getComputedStyle(el).display;
    if (d === "block" || d === "flex" || d === "grid") return el;
    el = el.parentElement;
  }
  return null;
}

function collectAncestors(): { el: HTMLElement; top: number }[] {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seen = new Set<HTMLElement>();
  const result: { el: HTMLElement; top: number }[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const textNode = node as Text;
    if (!textNode.textContent?.trim()) continue;
    const parent = textNode.parentElement;
    if (!parent) continue;
    if (parent.closest("[data-no-transform]")) continue;
    const ancestor = getBlockAncestor(textNode);
    if (ancestor && !seen.has(ancestor)) {
      seen.add(ancestor);
      result.push({ el: ancestor, top: ancestor.getBoundingClientRect().top });
    }
  }
  result.sort((a, b) => a.top - b.top);
  return result;
}

export default function EntranceFX() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.getElementById("page-root");
    const ancestors = collectAncestors();
    const stagger = ancestors.length > 1 ? CASCADE_BUDGET_MS / (ancestors.length - 1) : 0;
    const totalDuration = (ancestors.length > 1 ? CASCADE_BUDGET_MS : 0) + SLIDE_DURATION_MS;

    if (root) { root.style.transition = "none"; root.style.opacity = "0"; }
    ancestors.forEach(({ el }) => {
      el.style.transition = "none";
      el.style.transform = "translateY(12px)";
      el.style.opacity = "0";
    });

    let raf1: number, raf2: number;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (root) {
          root.style.transition = `opacity ${totalDuration}ms ease`;
          root.style.opacity = "1";
        }
        ancestors.forEach(({ el }, i) => {
          timeouts.push(
            setTimeout(() => {
              el.style.transition = `transform ${SLIDE_DURATION_MS}ms ease-in-out, opacity ${SLIDE_DURATION_MS}ms ease-in-out`;
              el.style.transform = "translateY(0)";
              el.style.opacity = "1";
            }, i * stagger)
          );
        });
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      timeouts.forEach(clearTimeout);
      if (root) { root.style.transition = ""; root.style.opacity = ""; }
      ancestors.forEach(({ el }) => {
        el.style.transition = "";
        el.style.transform = "";
        el.style.opacity = "";
      });
    };
  }, [pathname]);

  return null;
}
