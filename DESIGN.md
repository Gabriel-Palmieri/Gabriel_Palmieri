---
name: Gabriel Palmieri
description: Minimal, technical portfolio with sober dark surfaces and real project imagery.
colors:
  background: '#17191c'
  surface: '#202328'
  foreground: '#eff0f2'
  muted: '#a4a9b2'
  accent: '#b0bfff'
  line: '#363b43'
typography:
  display:
    fontFamily: 'Arial, Helvetica, sans-serif'
    fontSize: 'clamp(64px, 7.2vw, 96px)'
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: '-0.04em'
  headline:
    fontFamily: 'Arial, Helvetica, sans-serif'
    fontSize: '25px'
    fontWeight: 500
    letterSpacing: '-0.025em'
  body:
    fontFamily: 'Arial, Helvetica, sans-serif'
    fontSize: '15px'
    lineHeight: 1.7
  label:
    fontFamily: 'Arial, Helvetica, sans-serif'
    fontSize: '12px'
rounded:
  control: '5px'
  image: '8px'
spacing:
  control-block: '12px'
  control-inline: '18px'
  field-gap: '24px'
components:
  button-primary:
    backgroundColor: '{colors.foreground}'
    textColor: '{colors.background}'
    rounded: '{rounded.control}'
    padding: '12px 18px'
  button-primary-hover:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.background}'
  field:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.foreground}'
    rounded: '{rounded.control}'
    padding: '12px 14px'
---

# Design System: Gabriel Palmieri

## Overview

A minimal, technical, sober dark portfolio. Large left-aligned typography, quiet controls and real screenshots establish the visual identity. The direction comes from the user's brief and the implemented surface; no separate creative metaphor was chosen.

Source of truth: `tailwind.config.js`, global tokens in `app/globals.css`, and utility classes in `app/page.tsx` and `app/components/`. This document records the implemented system, not additional product claims.

## Colors

Muted periwinkle is the single primary accent, used for punctuation, links, selected indicators and focus. Graphite background and surface establish hierarchy; pale foreground carries headings, muted grey carries supporting text, and the line token separates sections. Images preserve their source colors. Form errors use a local pale red treatment.

## Typography

Arial with Helvetica fallback restores the typeface used before Space Grotesk. Display and section headings use medium weight; body copy stays regular, with semibold roles and controls. Supporting labels use small sentence-case text. Project titles use 28px with a 1.2 line height. Long about copy is limited to 74ch. Numeric gallery labels use tabular figures.

## Layout

The centered container is capped at 1240px with 56px side gutters. Desktop hero and content sections use asymmetric two-column grids. Project imagery receives more width than its description. Horizontal dividers and generous section spacing create structure.

At 1100px and below, gutters become 32px and grid gaps tighten. At 760px and below, gutters become 20px, major sections stack, the header becomes 72px tall, and navigation opens as a vertical panel. Project tabs remain a row, with year labels hidden; screenshots retain their aspect ratio. Mobile display type uses `clamp(62px, 14vw, 88px)`. Form inputs become 16px. At 380px and below, paired form fields and skill rows stack. At 1600px and above, the hero gains top spacing.

## Elevation & Depth

The interface is flat: no shadows, gradients or backdrop blur. Tonal surfaces and thin dividers establish grouping. The sticky header uses the opaque page background.

## Shapes

Controls have restrained rounded corners, image frames slightly softer corners. Screenshot frames clip overflow and contain the original image. Technology lists are plain text, without pill containers. The portrait has a 6px radius and grayscale treatment.

## Components

- Primary actions pair pale filled backgrounds with dark text, changing to accent on hover. Inline links use quiet underlines. Every keyboard focus target receives a 2px accent outline with a 5px offset.
- Project tabs use an accent bottom border and raised surface tone when selected. Left/right arrows, Home and End navigate the tab list. Selection resets the manually controlled gallery to its first image; there is no autoplay.
- Project changes animate a short horizontal arrival (400ms); image changes fade (320ms). Hero text arrives vertically (800ms and 1000ms). Small hover transitions use 160–250ms. Reduced-motion preference disables transitions, animations and smooth scrolling.
- Native disclosure elements show feature and soft-skill details, rotating the plus indicator when open.
- Form fields use a surface fill, thin line border and muted placeholders. Hover strengthens the border; focus uses the global outline. Status copy appears beside the action and distinguishes errors with pale red. Disabled buttons use reduced opacity and a waiting cursor.
- Navigation combines compact links, a language control and a mobile menu button. Preserve Portuguese and English labels, visible keyboard focus, and the skip link.

## Do's and Don'ts

- Do reuse the existing palette, self-hosted typography and restrained geometry.
- Do let actual project screenshots and readable descriptions carry the presentation.
- Do preserve keyboard controls and reduced-motion behavior when extending interactions.
- Don't add decorative terminals, floating technology clouds or artificial loading screens; the agreed surface direction excludes them.
- Don't introduce new brand colors or a competing font system without revising the design direction.
