---
name: Clinical Precision
colors:
  surface: '#08132a'
  surface-dim: '#08132a'
  surface-bright: '#2f3952'
  surface-container-lowest: '#030d25'
  surface-container-low: '#101b33'
  surface-container: '#151f37'
  surface-container-high: '#1f2942'
  surface-container-highest: '#2a344d'
  on-surface: '#d9e2ff'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#d9e2ff'
  inverse-on-surface: '#263049'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#41e4c0'
  on-secondary: '#00382d'
  secondary-container: '#00c7a5'
  on-secondary-container: '#004d3f'
  tertiary: '#b6c6ed'
  on-tertiary: '#20304f'
  tertiary-container: '#061836'
  on-tertiary-container: '#7282a5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#5ffbd6'
  secondary-fixed-dim: '#38debb'
  on-secondary-fixed: '#002019'
  on-secondary-fixed-variant: '#005142'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#b6c6ed'
  on-tertiary-fixed: '#091b39'
  on-tertiary-fixed-variant: '#374767'
  background: '#08132a'
  on-background: '#d9e2ff'
  surface-variant: '#2a344d'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-margin: 48px
  container-max: 1280px
---

## Brand & Style
The design system embodies the intersection of elite surgical expertise and cutting-edge medical technology. The aesthetic is high-fidelity and sophisticated, designed to instill absolute confidence in patients seeking world-class orthopedic care. 

The visual direction combines **Minimalism** with **Glassmorphism**. We utilize expansive whitespace to represent the clarity of a clinical environment, while translucent "frosted" layers and subtle cyan glows mimic the high-tech interfaces of modern surgical robotics. Every interaction should feel precise, smooth, and intentional, mirroring the physical precision of orthopedic surgery.

## Colors
The palette is anchored in **Deep Clinical Navy (#0A192F)**, providing a stable, authoritative foundation that evokes trust and expertise. **Surgical Cyan (#64FFDA)** serves as the high-energy accent, used sparingly to draw focus to critical actions, data points, and "active" states, much like a laser or digital readout in an OR.

We use **Crisp Clinical White** for high-contrast typography and **Tertiary Navy (#112240)** for subtle layering and surface separation. This dark-mode-first approach creates a premium, "dashboard" feel that distinguishes the brand from generic, light-themed medical templates.

## Typography
We utilize **Geist** for headlines and display elements to project a technical, developer-precise image. Its sharp terminals and geometric construction align with the concept of "orthopedic precision." 

**Inter** is employed for all body copy and long-form information. It provides the necessary humanist legibility for medical descriptions and patient instructions. For data visualizations and metadata labels, we use uppercase Geist with increased letter spacing to evoke a scientific, tabulated aesthetic.

## Layout & Spacing
The design system utilizes a **12-column fluid grid** for desktop with generous 48px margins to ensure a premium, airy feel. Content is organized with a strong vertical rhythm based on an 8px square grid.

Spacing is used to imply "expertise"—we do not crowd information. Large "Section Gaps" are used to separate clinical services, surgical philosophies, and patient testimonials, allowing each piece of content to be consumed with focus. On mobile, we shift to a 4-column grid with 20px margins, maintaining the emphasis on whitespace and vertical flow.

## Elevation & Depth
Depth is communicated through **Glassmorphism and Tonal Layers**. Surfaces do not use traditional drop shadows; instead, they use:
1.  **Backdrop Blurs:** Elements like navigation bars and floating cards use a 20px blur with a 10% opacity navy tint.
2.  **Inner Glows:** To simulate high-tech screens, active cards feature a 1px border with a 20% opacity Cyan tint.
3.  **Luminous Accents:** Vital information or active CTAs may have a soft, localized Cyan "bloom" (a diffused background glow) to draw the eye without breaking the flat, modern aesthetic.

## Shapes
We adopt **Soft (0.25rem)** roundedness. While we want the interface to feel approachable, high-tech medical branding requires a level of "sharpness" that perfectly rounded corners (Pills) lack. 

Structural elements like cards and input fields use small-radius corners to maintain a professional, architectural feel. Buttons follow this same logic, appearing as precise, machined components rather than playful bubbles.

## Components
### Buttons
Primary buttons use the Surgical Cyan background with Navy text. They should feature a "ghost" border that expands slightly on hover, mimicking a pulse or scan. Secondary buttons are "Ghost" style with a cyan border and no fill.

### Cards
Cards are the primary container for services and data. They use the Glassmorphism style: semi-transparent navy backgrounds with a subtle top-light border to define their edge against the deep background.

### Input Fields
Inputs are minimalist, utilizing only a bottom border that illuminates in Cyan when focused. Labels use the `label-sm` style, floating above the input to maintain a "blueprint" aesthetic.

### Data Chips
Small, technical tags used to categorize orthopedic specialties (e.g., "Knee," "Spine," "Robotic Surgery"). These use a monospaced variant of the font and a subtle cyan tint to look like metadata on a medical scan.

### Interaction States
All hover states should be fast (150ms-200ms) and use "Linear-Out" easing to feel responsive and high-performance. Avoid bouncy or playful animations; the motion should be smooth and clinical.