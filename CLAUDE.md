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
Do not change the column count or the column order.

On the home page (`components/HomeClient.tsx`) the side columns switch to
`flex: "1 999 33.33%"` with `minWidth: 0` when `isNarrow` (viewport < 1200px).
Both side columns must always use **identical** flex values — asymmetric
shrink factors push the center column off-center on iPad/narrow screens.

## Vertical border lines
- Left column: `borderRight: "1px solid #333333"`
- Right column: `borderLeft: "1px solid #333333"`
Do not remove, recolor, or reposition these borders.

## Nav
Each page renders its own inline nav as the first child of the center column:
```
<nav className="py-4 mb-16 flex items-baseline justify-between">
```
It is NOT fixed-positioned. Its `py-4` baseline aligns the nav text within the
56px top band defined by the top grid line.

## Horizontal border lines
Defined in `app/layout.tsx` as two absolute 1px divs inside `#page-root`:
- `top: 56` — top grid line
- `bottom: 56` — bottom grid line (hidden on mobile via `hidden md:block`)

These are positioned relative to the **document** (`#page-root` is
`min-h-screen`), not the viewport. Therefore every page's center column must
keep **at least 96px (`pb-24`) of bottom padding** so the bottom line never
lands inside content on short viewports. Do not reduce bottom padding below
`pb-24` on any page.

Hover cards and content frames align to these lines with `inset: 57px 0 57px 0`.
