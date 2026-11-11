# Erase Horseracing India website

Static website (plain HTML, CSS, and JavaScript). No build step. Hosted on GitHub Pages.

## Pages
| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About (mission and team) |
| `what-is-horseracing.html` | What is horseracing? (cruelty in horseracing) |
| `death-map.html` | Death Map |
| `memorials.html` | Memorials |
| `blogs.html`, `blog.html` | Blog list and single post (`blog.html?slug=...`) |
| `take-action.html` | Pledge, email sign-up, social links |
| `contact.html` | Volunteer, report an incident, write to us |
| `search.html` | Site search results |

## Editing content
Most content lives in the `data/` folder as JSON:

- `data/deaths.json`: Death Map and death count. Each record is `{ "track": "Pune", "year": 2025, "source": "public", "deaths": 3 }`. `source` is `public` (incident reports and news) or `official` (BTC records obtained via RTI). Track ids must match the `tracks` list. `highlight` marks the track drawn in red and not to scale (currently Bangalore). Deaths found in both sources must be counted once.
- `data/memorials.json`: one entry per horse. Put photos in `assets/img/horses/`.
- `data/posts.json`: blog posts. `category` is one of `News`, `Updates`, `Write-ups`. In `content`, separate paragraphs with a blank line. A YouTube link on its own line becomes an embedded video.
- `data/sections.json`: the "What is horseracing?" sections.

Menu, email, form links, and social links are at the top of `assets/js/main.js` (the `SITE` object).

Colors are at the top of `assets/css/style.css`.

## Preview locally
Run `python3 -m http.server` in this folder and open http://localhost:8000 (opening the files directly will not load the data).

Map: India SVG by simplemaps.com (free for commercial use).
