# Erase Horseracing India website

Static website (plain HTML, CSS, and JavaScript). No build step. Hosted on GitHub Pages.

## Pages
| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About (mission and team) |
| `what-is-horseracing.html` | What is horseracing? (cruelty in horseracing) |
| `death-map.html` | Kill Map |
| `memorials.html` | Memorials |
| `blogs.html`, `blog.html` | Blog list and single post (`blog.html?slug=...`) |
| `take-action.html` | Pledge, email sign-up, social links |
| `contact.html` | Volunteer, report an incident, write to us |
| `search.html` | Site search results |

## Editing content
Most content lives in the `data/` folder as JSON:

- `data/deaths.json`: Kill Map and kill count. Each record is `{ "track": "Pune", "year": 2025, "source": "public", "deaths": 3 }`. `source` is `public` (incident reports and news) or `official` (BTC records obtained via RTI). Track ids must match the `tracks` list. `highlight` marks the track drawn in red and not to scale (currently Bangalore). Deaths found in both sources must be counted once.
- `data/memorials.json`: one entry per horse. Put photos in `assets/img/horses/`.
- `data/posts.json`: blog posts. `category` is one of `News`, `Updates`, `Write-ups`. In `content`, separate paragraphs with a blank line. A YouTube link on its own line becomes an embedded video.
- `data/sections.json`: the "What is horseracing?" sections.

Menu, email, form links, and social links are at the top of `assets/js/main.js` (the `SITE` object).

Colors are at the top of `assets/css/style.css`.

## Adding a blog post

Each post is one object in `data/posts.json`. Newest posts go at the top of the list. Do not edit any HTML, CSS, or JS to add a post.

```json
{
  "title": "Post title",
  "slug": "post-title",
  "date": "YYYY-MM-DD",
  "category": "News",
  "author": "Erase Horseracing India",
  "excerpt": "One sentence summary, under 160 characters.",
  "image": null,
  "media": { },
  "content": "Paragraph one. {.justify}\n\nParagraph two. {.justify}"
}
```

Field rules:

- `slug`: lowercase letters, numbers, and hyphens only. Must be unique.
- `category`: exactly one of `News`, `Updates`, `Write-ups`.
- `image`: always `null`.
- `media`: use one shape, or `{}` for none. Use only the ID from the link (the part after `youtu.be/`, `watch?v=`, `/shorts/`, or `instagram.com/p/`, without anything after `?`).
  - YouTube Short: `{ "youtube": "ID", "short": true }`
  - YouTube video: `{ "youtube": "ID" }`, with extra videos as `"more": ["ID2"]`
  - Instagram post: `{ "instagram": "ID" }`, with extra posts as `"igMore": ["ID2"]`
  - Instagram post that cannot be embedded: add `"embed": false` and `"by": "username"` to show a link card instead
  - One image: `{ "image": "assets/img/blog/file.jpg" }`
  - Several images: `{ "image": "assets/img/blog/first.jpg", "images": ["assets/img/blog/first.jpg", "assets/img/blog/second.jpg"] }`
- `content` conventions:
  - Separate paragraphs with `\n\n` and end normal paragraphs with ` {.justify}`.
  - Bold `**text**`, italics `*text*`, links `[text](https://url)`.
  - Bullet lists: one item per line starting with `- `, with a blank line before and after.
  - A YouTube link on its own line becomes an embedded video.
  - Do not repeat the title or the media links in the content.

Style rules: American English, no em dashes or en dashes, and never invent facts or dates.

After editing:

1. Check the whole file at jsonlint.com. A missing comma or quote will stop the blog page from loading.
2. Put any new images in `assets/img/blog/`.
3. Commit in GitHub Desktop, then check the live site (Ctrl+F5 to refresh).
4. If something breaks, revert the commit in GitHub Desktop (History, right-click the commit, Revert).

## Adding a memorial

Each horse is one object in `data/memorials.json`. Newest go at the top of the list. Do not edit any HTML, CSS, or JS to add one.

```json
{
  "name": "HORSE NAME",
  "note": "",
  "slug": "horse-name",
  "date": "YYYY-MM-DD",
  "track": "Bangalore",
  "age": "4Y",
  "colorSex": "dkb g",
  "outcome": "Euthanized",
  "incident": "Fracture on its right shoulder",
  "image": "assets/img/horses/horse-name.jpg",
  "confirmedBy": "RWITC",
  "officialReport": "Exact wording from the official report.",
  "reportLink": "https://...",
  "video": "",
  "horseData": "https://www.indiarace.com/Home/horseStatistics/00000",
  "socialPost": "https://..."
}
```

Field rules:

- `name`: ALL CAPS. Use `UNNAMED HORSE` when there is no name, and describe it in `note` (for example "Two year old"). Leave `note` empty for named horses.
- `slug`: lowercase letters, numbers, and hyphens only. Must be unique (for unnamed horses add the track and year).
- `track`: exactly one of `Bangalore`, `Chennai`, `Mysore`, `Pune`, `Mumbai`, `Delhi`, `Hyderabad`, `Kolkata`, `Ooty`.
- `incident`: how the horse was killed, shown on the page as "Killed".
- `outcome`: `Euthanized`, `Died`, or empty. Kept in the data but not shown on the page.
- `image`: `assets/img/horses/<slug>.jpg`, or `null` when there is no photo (the logo is shown instead). Any photo shape works.
- `confirmedBy`: short name, for example `RWITC`, `BTC`, `MRC`, `MyRC`, `The Hindu`, `Racing Pulse`.
- `reportLink`, `horseData`, `socialPost`: full `https://` links that power the "Source report", "Racing record", and "More details" buttons. Use an empty string for none, and the button is hidden.
- `video`: always empty (no longer used).

Style rules: American English, no em dashes or en dashes, and never invent facts, dates, or links.

Adding a memorial does not change the Kill Map. Add the death to `data/deaths.json` as well if it is not already counted.

After editing: check the file at jsonlint.com, add the photo to `assets/img/horses/`, commit in GitHub Desktop, and check the live site (Ctrl+F5).

## Updating the Kill Map

The Kill Map, the totals, the year chips, and the home page kill count are all calculated from `records` in `data/deaths.json`. Never type totals by hand, and do not edit any HTML, CSS, or JS to update numbers.

Each record is one count for one racetrack, one year, and one source:

```json
{ "track": "Pune", "year": 2025, "source": "public", "deaths": 3 }
```

Rules:

- `track`: exactly one of `Bangalore`, `Chennai`, `Mysore`, `Pune`, `Mumbai`, `Delhi`, `Hyderabad`, `Kolkata`, `Ooty`.
- `year`: the calendar year of the death, as a number.
- `source`: `public` for racing club incident reports, news, and our own reporting (use this for new deaths), or `official` for deaths from the RTI records. Do not add or change `official` records unless there are new RTI documents.
- `deaths`: a whole number.
- Only one record per track + year + source. If it already exists, increase its `deaths` number. If not, add a new record at the end of the list.
- Count each horse once. Never count the same death in both `official` and `public`. If a death may already be in an `official` record for the same track and period, check before adding it.
- Do not change `tracks`, `sources`, `highlight`, `notes`, or `interim`.
- A new year (for example 2027) appears automatically as a year chip and table column.

Some text on the Kill Map page is typed, not calculated: the Bangalore note on the map, the RTI table (228, 34, 12, 274), and the estimates. These only change when new RTI documents arrive.

After editing:

1. Check the file at jsonlint.com.
2. Compare the new totals on the Kill Map and home page with what you expect (old total plus the deaths you added).
3. Commit in GitHub Desktop and check the live site (Ctrl+F5).
4. If the numbers look wrong, revert the commit in GitHub Desktop (History, right-click the commit, Revert).

A death that has a memorial still needs its own record here. Memorials and the Kill Map are updated separately.

## Preview locally
Run `python3 -m http.server` in this folder and open http://localhost:8000 (opening the files directly will not load the data).

Map: India SVG by simplemaps.com (free for commercial use).
