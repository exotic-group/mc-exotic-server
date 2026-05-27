# mc-exotic-server

GitHub Pages site for the Minecraft Exotic Server, built with Jekyll.

## Commands
- `bundle exec jekyll serve` — run from `docs/` directory at http://localhost:4000
- `bundle install` — run from `docs/` directory to install/update gems
- No lint, test, or typecheck commands
- GitHub Pages source: deploy from `main` branch, `/docs` folder (finds `_config.yml` there)

## Site structure
- `_config.yml` — Jekyll config
- `_layouts/` — page templates (`default.html`, `full-width.html`)
- `_includes/` — reusable components (`head.html`, `nav.html`, `footer.html`, `collapsible.html`, `command.html`)
- `_sass/` — stylesheets (`_variables.scss`, `_nav.scss`, `_collapsible.scss`, `_commands.scss`, `main.scss`)
- `assets/js/main.js` — sticky nav, collapsible toggle, copy-to-clipboard
- `assets/images/` — tiger image and other assets

## Navigation (sticky top)
Three items, fixed on scroll: **Home** | **Map** | **Contact**

## Pages
- **Home** (`index.md`) — tiger hero image, collapsible accordions: Basics (Connection + Commands), Economy (WIP)
- **Map** (`map.md`) — full-page BlueMap iframe
- **Contact** (`contact.md`) — static contact card (email, Discord, WIP)

## Color palette (defined in `_sass/_variables.scss`)
| Role | Hex |
|------|-----|
| Page background (dark grey) | `#1e1e1e` |
| Container/card/menu bg | `#000000` |
| Borders, trim, title bars, selected | `#e22215` (orange) |
| Secondary accent | `#2dd2e1` (turquoise) |
| Highlight/attention, bold text | `#ae116f` (plum) |
| Body text | `#e0e0e0` (light grey) |
| Headings | `#ffffff` |

## Fonts
- **Inter** from Google Fonts (Apple SF Pro alternative)
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Monospace for commands: `'JetBrains Mono', 'Fira Code', 'Consolas', monospace`

## Components
- **Command box** (`_includes/command.html`) — renders commands in a distinct styled block with plum accent border, monospace font, copy-to-clipboard button
- **Collapsible** (`_includes/collapsible.html`) — accordion with orange chevron, JS-driven smooth open/close

## Live map
- Embedded via iframe pointing at `http://192.168.31.90:25566`
- Mixed-content warning: HTTPS page loading HTTP iframe may be blocked by browsers — may need reverse proxy with SSL on the map server

## Conventions
- All colors go through SCSS variables, never hardcoded hex
- Commands use `command.html` include, never inline styled
- Navigation items in `nav.html`, not in page content
- Responsive mobile-first; collapsibles use `main.js` toggle logic

## Related (outside this repo)
- `SFTP/` at the workspace root — VSCode SFTP sync to the live Minecraft server at `192.168.31.90:2223`
- Server mod configs in `SFTP/config/`; this repo is only the public-facing website
