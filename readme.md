# Embed Lottie Player — Add Interactive Lottie Animations with Block Support

![Embed Lottie Player Banner](https://ps.w.org/embed-lottie-player/assets/banner-772x250.png)

[![WordPress Support](https://img.shields.io/badge/WordPress-6.5+-blue.svg?style=flat-square&logo=wordpress)](https://wordpress.org/plugins/embed-lottie-player/)
[![PHP Support](https://img.shields.io/badge/PHP-7.1+-777bb4.svg?style=flat-square&logo=php)](./readme.txt)
[![GPLv3 License](https://img.shields.io/badge/License-GPLv3-green.svg?style=flat-square)](./readme.txt)
[![Stable Version](https://img.shields.io/badge/Version-1.3.0-blue.svg?style=flat-square)](./readme.txt)

**Embed Lottie Player** is a Gutenberg block plugin that lets you embed any `.json` or `.lottie` animation file into WordPress posts, pages, and widgets — with full playback controls, alignment options, and customizable player styling, all without writing a single line of code.

---

## Key Features

### Free Features
Everything you need to add beautiful Lottie animations to your WordPress site:

- **File URL:** Load any `.json` or `.dotlottie` animation file via URL.
- **Controls:** Show interactive player controls so visitors can play, pause, and seek.
- **Autoplay:** Start the animation automatically when the page loads.
- **Loop:** Repeat the animation seamlessly on a continuous loop.
- **Link:** Attach a URL to the player so it acts as a clickable element.
- **Width & Alignment:** Set a custom width and align the player left, center, or right.
- **Player Controls Styling:** Customize the controls bar — Height, Background Color, Icons Color, Icons Hover Color, Icon Active Color, Tracker Color, and Thumb Color.

### Pro Features
Unlock advanced playback and interactivity controls:

- **Upload File:** Upload `.json` or `.lottie` files directly from your WordPress media library.
- **Hover:** Trigger the animation on mouse hover.
- **Playback Mode:** Choose from different playback modes (`normal`, `bounce`, etc.).
- **Direction:** Play the animation forward or in reverse.
- **Count:** Set how many times the animation plays before stopping.
- **Speed:** Adjust the playback speed multiplier.
- **Interval:** Add a pause between animation loops.
- **Open Link in New Tab:** Force the player link to open in a new browser tab.
- **Interactivity:** Sync animations with user actions:
  - Sync with scroll
  - Scroll relative to container
  - Scroll with offset
  - Sync with cursor position
  - Sync with cursor horizontal movement
  - Play on click
  - Play when visible
- **Caption:** Display a text caption below the player.
- **Caption Styles:** Control caption Text Alignment, Typography, Text Color, Background Color, Padding, and Margin.

---

## Technical Stack

- **Block Framework:** WordPress Block API v3 (Gutenberg)
- **Animation Engine:** [@dotlottie/player-component](https://github.com/dotlottie/player-component) (MIT) — Web component for rendering `.json` and `.lottie` files.
- **Interactivity Library:** [@lottiefiles/lottie-interactivity](https://github.com/LottieFiles/lottie-interactivity) (MIT) — Scroll and cursor sync for Lottie animations.
- **Build System:** `@wordpress/scripts` (Webpack) + Gulp for asset bundling and deployment.
- **Styling:** SCSS with scoped block styles.
- **Admin Dashboard:** React SPA with React Router for the Help & Demos panel.
- **Backend:** PHP 7.1+, WordPress 6.5+
- **Licensing:** Freemius Lite SDK via `api.bplugins.com`

---

## Third-Party Libraries

| Library | License | Purpose |
|---|---|---|
| [@dotlottie/player-component](https://github.com/dotlottie/player-component) | MIT | Renders and plays dotLottie animations |
| [@lottiefiles/lottie-interactivity](https://github.com/LottieFiles/lottie-interactivity) | MIT | Scroll and cursor interactivity for animations |
| [Freemius Lite SDK](https://github.com/bPlugins/freemius-lite-sdk) | GPL-2.0-or-later | Opt-in usage tracking and analytics |
| [bpl-tools](https://github.com/bPlugins/bpl-tools) | GPL-2.0-or-later | Shared admin dashboard and Gutenberg editor controls |

---

## Developer Guide

### Directory Structure

```
embed-lottie-player/
├── src/
│   ├── block.json               # Block metadata and attribute definitions
│   ├── index.js                 # Block editor entry point (register block)
│   ├── render.php               # Server-side render template
│   ├── view.js                  # Frontend entry point (interactivity)
│   ├── Components/
│   │   ├── Backend/             # Gutenberg Editor (Edit) components
│   │   └── Common/              # Shared components (player, styles)
│   ├── admin/                   # Admin dashboard (React SPA)
│   └── utils/                   # Shared utility functions, icons, options
├── includes/
│   ├── admin/SubMenu.php        # Registers the admin sub-menu page
│   └── fs-lite.php              # Freemius Lite SDK bootstrap
├── public/js/
│   └── dotlottie-player.js      # Bundled dotLottie player web component
├── build/                       # Compiled assets (do not edit)
├── languages/                   # Translation files (.pot, .po, .mo)
└── plugin.php                   # Main plugin bootstrap file
```

### Development Workflow

1. **Clone** into your local WordPress `wp-content/plugins/` directory.
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start development mode** (watch + hot rebuild):
   ```bash
   npm start
   ```
4. **Production build:**
   ```bash
   npm run build
   ```

### Block Attributes

Key attributes defined in `src/block.json`:

| Attribute | Type | Default | Description |
|---|---|---|---|
| `file` | string | LottieFiles demo URL | The `.json` or `.lottie` animation source URL |
| `isControls` | boolean | `true` | Show the player controls bar |
| `isAutoplay` | boolean | `true` | Autoplay the animation on load |
| `isLoop` | boolean | `true` | Loop the animation |
| `playerAlign` | string | `"center"` | Alignment of the player (`left`, `center`, `right`) |
| `width` | string | `""` | CSS width value for the player |
| `link` | string | `""` | URL to navigate to when the player is clicked |
| `interactivity` | string | `"noInteractivity"` | Selected interactivity mode |
| `isCap` | boolean | `false` | Show caption below the player |
| `caption` | string | `""` | Caption text content |

---

## Shortcode

Embed any saved Lottie Player configuration by its post ID:

```
[lpb id="123"]
```

---

## Useful Links

- [Live Demo](https://bplugins.com/products/lottie-player)
- [Documentation](https://bplugins.com/docs/lottie-player)
- [WordPress.org Plugin Page](https://wordpress.org/plugins/embed-lottie-player/)
- [Support Forum](https://wordpress.org/support/plugin/embed-lottie-player/)
- [GitHub Repository](https://github.com/bPlugins/lottie-player)
- [Upgrade to Pro](https://bplugins.com/products/lottie-player/pricing)

---

*Developed by [bPlugins](https://bplugins.com)*
