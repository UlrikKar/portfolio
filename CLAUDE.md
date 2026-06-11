@AGENTS.md

# PROTECTED: Do not modify without explicit instruction

The following elements define the core layout grid. Only touch them if the user explicitly says so.

## Three-column flex layout
Present on home, about, and all work pages. Structure:
```
<div className="relative flex flex-col flex-1 md:flex-row">
  <div ... />        {/* left column: flex: 1 1 33.33% */}
  <div ... />        {/* center column: flex: 1 1 33.33% */}
  <div ... />        {/* right column: flex: 1 1 33.33% */}
</div>
```
Do not change the flex values, the column count, or the column order.

## Vertical border lines
- Left column: `borderRight: "1px solid #333333"`
- Right column: `borderLeft: "1px solid #333333"`
Do not remove, recolor, or reposition these borders.

## Desktop nav
```
<nav className="hidden md:block fixed top-0 left-0 right-0 py-4" style={{ zIndex: 10 }}>
```
- Must be a **sibling** of the three-column row, at the outermost wrapper level
- Must **never** be nested inside a transformed ancestor (CSS transform creates a new containing block for fixed elements, trapping the nav inside the column width instead of the viewport)
- Internal structure is a three-column mirror: three children each with `flex: 1 1 33.33%`

## Horizontal border lines
Defined in `app/layout.tsx` as two absolute 1px divs:
- `top: 56` — top grid line
- `bottom: 56` — bottom grid line
These define the content frame. Do not remove or reposition them.

## Spacer div
```
<div className="h-32 md:h-56" style={{ pointerEvents: "none" }} />
```
Present on home and work pages, below the nav. Do not remove `pointerEvents: none` — the spacer sits in the DOM above the fixed nav and would intercept clicks without it.
