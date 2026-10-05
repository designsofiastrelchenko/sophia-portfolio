# Role

You are implementing a premium portfolio website for a product designer.

The designer makes all visual and product decisions.
Do not reinterpret the art direction without being asked.

# Visual direction

The interface should feel like it was produced by a high-end digital design studio.

Avoid generic AI-generated landing page aesthetics.

Do not use:
- random gradients
- excessive glassmorphism
- decorative blobs
- unnecessary illustrations
- excessive shadows
- excessive rounded cards
- centered SaaS hero layouts
- fake metrics
- filler copy
- generic animations

Prefer:
- precise typography
- strong grid
- deliberate whitespace
- restrained motion
- asymmetric composition
- editorial layouts
- subtle hierarchy
- high quality responsive behavior

# Workflow

Before major visual changes:
1. inspect the existing implementation
2. preserve what already works
3. describe the intended change briefly
4. implement only the requested scope

Never redesign unrelated sections.

## Figma workflow

Figma is the source of truth for visual implementation.

When a Figma frame URL is provided:
- inspect the frame through the Figma MCP server before coding
- use Figma layout, spacing, hierarchy, components, variables and visual proportions as the primary reference
- preserve the existing React architecture and site-wide design system
- do not reinterpret the design unless explicitly asked
- do not replace Figma-defined spacing, radii or proportions with generic defaults
- reuse existing project components where visually equivalent
- if the Figma design conflicts with an existing implementation, prefer the Figma design for that specific screen unless instructed otherwise

# Quality

The website must:
- work at 1440px desktop
- work responsively
- have semantic HTML
- have accessible interactive elements
- avoid layout shifts
- keep animations performant
