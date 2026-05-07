---
name: "Nordora Vital"
description: "A calm, premium brand system for professional sanza wellbeing technology and clinic demo conversion."
colors:
  warm-beige: "#F6F1EA"
  soft-white: "#FFFFFF"
  mist-panel: "#EFE9E2"
  panel-deep: "#E6DDD4"
  evergreen-text: "#1E2A22"
  taupe-muted: "#6D6158"
  sage-brand: "#6F8A7A"
  moss-strong: "#507040"
  deep-green: "#0E3D34"
  mauve-secondary: "#A58592"
  mauve-strong: "#8E6F7C"
  line-beige: "#D8CEC2"
  stone-focus: "#CFC7BE"
  clay-accent: "#C88B6A"
typography:
  display:
    fontFamily: "Manrope, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 5vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Manrope, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 2.9rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Manrope, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: "0.18em"
rounded:
  tag: "6px"
  button: "10px"
  input: "10px"
  card: "16px"
  panel-lg: "28px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-sm: "64px"
  section-md: "96px"
  section-lg: "128px"
components:
  button-primary:
    backgroundColor: "{colors.sage-brand}"
    textColor: "{colors.soft-white}"
    rounded: "{rounded.button}"
    padding: "12px 28px"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.moss-strong}"
    textColor: "{colors.soft-white}"
    rounded: "{rounded.button}"
  button-secondary:
    backgroundColor: "{colors.mauve-secondary}"
    textColor: "{colors.soft-white}"
    rounded: "{rounded.button}"
    padding: "12px 28px"
  card-brand:
    backgroundColor: "{colors.soft-white}"
    textColor: "{colors.evergreen-text}"
    rounded: "{rounded.card}"
    padding: "24px"
  input-brand:
    backgroundColor: "{colors.soft-white}"
    textColor: "{colors.evergreen-text}"
    rounded: "{rounded.input}"
    padding: "10px 14px"
---

# Design System: Nordora Vital

## 1. Overview

**Creative North Star: "The Quiet Treatment Room"**

The visual system should feel like stepping into a professional room where everything has already been prepared: warm, orderly, grounded, and calm. The design is premium, but not flashy. It uses deep green, sage, warm neutrals, soft mauve, clear typography, and real product or treatment imagery to make the offer feel credible and human.

Nordora Vital is a brand and campaign website, so design is part of the persuasion. Pages should not collapse into generic SaaS structure. The strongest layouts are image-led, left or right aligned, spacious, and organized around the practical moments of a visit: arrival, treatment support, close-out, staff use, and demo handoff.

The system rejects AI-looking wellness tropes: purple gradients, neon glows, glass everywhere, cards inside cards, fake clinical certainty, and generic icon grids. The experience should be tactile and specific: sanza belongs in real rooms, used by real teams, around real professional work.

**Key Characteristics:**

- Warm clinical calm rather than sterile medical white.
- Deep green brand bands for authority and contrast.
- Mauve as a conversion and warmth accent, used sparingly.
- Large real imagery, never abstract placeholders when assets exist.
- Direct professional copy, no hype and no medical overclaiming.
- Motion that feels responsive and quiet, never bouncy.

## 2. Colors

The palette is warm, low-chroma, and treatment-room grounded: evergreen authority, sage professionalism, mauve warmth, and cream-toned neutrals.

### Primary

- **Sage Brand** (`#6F8A7A`): Primary action color, subtle icon fields, and calm emphasis.
- **Moss Strong** (`#507040`): Hover state and stronger text accents where sage needs more contrast.
- **Deep Green** (`#0E3D34`): Hero bands, dark sections, footer, modal depth, and high-confidence brand moments.

### Secondary

- **Mauve Secondary** (`#A58592`): Demo conversion emphasis, secondary CTA color, quote warmth, and premium emotional accents.
- **Mauve Strong** (`#8E6F7C`): Hover state for mauve CTAs and selected warm accents.

### Tertiary

- **Clay Accent** (`#C88B6A`): Occasional warmth. Use rarely for small highlights, never as a dominant theme.

### Neutral

- **Warm Beige** (`#F6F1EA`): Page background and soft campaign bands.
- **Soft White** (`#FFFFFF`): Cards, inputs, and content surfaces. Use through the token, not as a random hard-coded color.
- **Mist Panel** (`#EFE9E2`): Secondary panels and soft section transitions.
- **Panel Deep** (`#E6DDD4`): Hover surfaces and deeper panel states.
- **Evergreen Text** (`#1E2A22`): Primary copy color.
- **Taupe Muted** (`#6D6158`): Secondary copy, captions, helper text.
- **Line Beige** (`#D8CEC2`): Borders and dividers.
- **Stone Focus** (`#CFC7BE`): Quiet focus ring support when the primary focus color would feel too loud.

### Named Rules

**The Deep Green Anchor Rule.** Every major marketing page needs at least one deep-green authority moment. Use it for trust, not decoration.

**The Mauve Conversion Rule.** Mauve is for warmth and action. It should pull the eye toward demo intent, not become a full-page theme.

**The No Purple-Blue Rule.** Do not introduce generic purple, indigo, neon blue, or AI-gradient palettes.

## 3. Typography

**Display Font:** Manrope, with Plus Jakarta Sans and system sans fallbacks.
**Body Font:** Inter, with system sans fallbacks.
**Label/Mono Font:** No separate mono family by default.

**Character:** The type is confident, clean, and practical. Manrope gives the brand a professional rounded warmth; Inter keeps multilingual body copy readable across English, German, and Latvian.

### Hierarchy

- **Display** (700, `clamp(2.1rem, 5vw, 3.6rem)`, `1.05`): Hero headlines and campaign-first-fold arguments. Keep campaign H1s to two or three lines on desktop whenever possible.
- **Headline** (700, `clamp(1.9rem, 4vw, 2.9rem)`, `1.08`): Section titles, conversion bands, and major narrative turns.
- **Title** (600, `1.2rem`, `1.4`): Card and panel headings.
- **Body** (400 to 500, `1rem`, `1.65`): Main explanatory copy. Cap long prose at roughly 65 to 75 characters per line.
- **Label** (600, `0.75rem`, `0.18em`, uppercase): Short navigational labels and section cues. Use sparingly; labels should clarify, not decorate.

### Named Rules

**The Direct Address Rule.** Headlines on professional pages should speak to the practitioner or owner directly. Avoid abstract slogans when a clear workflow promise is stronger.

**The sanza Weight Rule.** When sanza appears inside important headlines, it may be bolded with rich text. Do not turn it into gradient text or decorative lettering.

**The No Meta-Label Rule.** Do not use cheap labels like "Section 01", "Question 05", or generic "Introducing" text.

## 4. Elevation

The system uses a hybrid of tonal layering and soft tinted shadows. Surfaces should feel placed in warm air, not floating above the page. Elevation is quiet at rest and becomes more noticeable on interaction.

### Shadow Vocabulary

- **Card Shadow** (`0 1px 3px rgba(30,42,34,0.06), 0 4px 16px rgba(30,42,34,0.06)`): Default card and small panel elevation.
- **Raised Shadow** (`0 2px 8px rgba(30,42,34,0.08), 0 8px 32px rgba(30,42,34,0.08)`): Larger imagery panels, quote blocks, active surfaces, and high-emphasis cards.
- **Dark Glass Shadow** (`inset 0 1px 0 rgba(255,255,255,0.10), 0 14px 34px rgba(0,0,0,0.18)`): Only for intentional dark glass cards on deep-green backgrounds.

### Named Rules

**The Flat-At-Rest Rule.** Do not add heavy shadows to ordinary content. Use shadows to signal hierarchy, imagery, or interaction.

**The No Side-Stripe Rule.** Do not use `border-left` or `border-right` thicker than 1px as a colored card accent. Use full borders, icon fields, numbers, or tonal backgrounds instead.

## 5. Components

### Buttons

- **Shape:** Rectangular with controlled softness (`10px` radius), not oversized pills except floating CTAs.
- **Primary:** Sage background with white text, `12px 28px` padding, medium weight.
- **Secondary:** Mauve background with white text for stronger demo conversion moments.
- **Ghost on dark:** Transparent white treatment with a visible border. Use only when a secondary action must sit on a dark image or deep-green band.
- **Hover / Focus:** Use exact-property transitions. Hover may shift by `translateY(-1px)`, active state scales to `0.97`, and focus remains visible.

### Chips

- **Style:** Use chips only for real filters, language controls, or compact trust metadata. Do not place decorative pill rows under campaign heroes or final CTAs.
- **State:** Selected chips should use token backgrounds and visible borders. Avoid glass chips unless the chip sits on a dark image and readability requires it.

### Cards / Containers

- **Corner Style:** Standard card radius is `16px`; large editorial image panels may use `28px`.
- **Background:** Light cards use `Soft White` or a subtle mix of `Soft White` and `Mist Panel`. Dark cards use deep-green surfaces with restrained inner light.
- **Shadow Strategy:** Use `Card Shadow` by default; `Raised Shadow` for important media or active cards.
- **Border:** Use full 1px borders from `Line Beige` or a color-mixed token. Never use thick colored side stripes.
- **Internal Padding:** Default card padding is `24px`; conversion and quote panels can grow to `32px` or more.

### Inputs / Fields

- **Style:** Soft white surface, `1.5px` line-beige border, `10px` radius, clear labels above fields.
- **Focus:** Border shifts to sage with a soft sage ring.
- **Error / Disabled:** Errors should be inline and specific. Disabled fields reduce opacity but keep text legible.

### Navigation

- **Desktop:** Sticky white header with large brand mark, calm link styling, language control, and primary contact action.
- **Mobile:** Side drawer from the right, with clear close affordance, language list, and full-width contact action.
- **States:** Nav links use background and color shifts, not underlines or decorative effects.

### Campaign Landing Page

Campaign pages use one shared structure for all segments: full-bleed hero, dark fact strip, problem section, solution section, workflow-fit cards, benefit cards, social proof, demo handoff, and final CTA. This structure is locked unless a page has a strategic reason to depart.

Hero copy may align left or right depending on image composition. Avoid center-stack campaign heroes. Use real segment imagery as soon as available; placeholder imagery is temporary only.

### Contact Drawer

The contact drawer is the main conversion mechanism. It opens from the right, keeps context through prefilled category and message fields, and should feel direct rather than modal-heavy. The drawer motion uses the iOS-like `--ease-drawer` curve and respects reduced motion.

## 6. Do's and Don'ts

### Do:

- **Do** speak directly to professional users: therapist, clinic owner, team, or practice.
- **Do** show where sanza fits in the visit: before, during, after, between sessions, staff use, or demo handoff.
- **Do** use deep green for trust and high-contrast brand sections.
- **Do** use mauve for warmth and conversion emphasis.
- **Do** use real product and treatment-room imagery wherever available.
- **Do** keep body copy compliant and precise. sanza supports comfort, calm, relaxation, and visit quality.
- **Do** preserve visible focus states, 44px touch targets, and reduced-motion support.
- **Do** use exact CSS transition properties and transform/opacity-based motion.

### Don't:

- **Don't** imply sanza treats disease, replaces clinical protocols, guarantees rehabilitation outcomes, or functions as a medical device unless legally approved language explicitly supports it.
- **Don't** use purple-blue gradients, neon glows, AI-style gradient text, or crypto-like dark palettes.
- **Don't** use nested cards, thick colored side stripes, decorative glassmorphism, or endless equal icon-card grids.
- **Don't** place generic pill-tag rows under campaign heroes or CTAs.
- **Don't** use vague startup copy such as "elevate", "unleash", "next-gen", or unsupported "seamless" claims.
- **Don't** center every hero by default. Campaign pages should use image-led left or right alignment.
- **Don't** add fake metrics, fake testimonials, or fake clinical validation.
- **Don't** introduce new colors, fonts, or radii without updating this file and the global tokens.
