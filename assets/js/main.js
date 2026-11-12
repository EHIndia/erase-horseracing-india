/* Erase Horseracing India - shared site script
   Edit SITE below to change links, email, forms, and menu items. */
const SITE = {
  name: "Erase Horseracing India",
  email: "ehindia@protonmail.com",
  forms: {
    contact: "https://forms.gle/kVk2cTgZULUkHDSZ9",
    pledge: "https://forms.gle/v4mDYYG6YaYTd4vq7",
    signup: "https://forms.gle/XTyBKDXuP5kvAtw99"
  },
  socials: [
    { id: "instagram", label: "Instagram", url: "https://www.instagram.com/erasehorseracingindia" },
    { id: "facebook", label: "Facebook", url: "https://www.facebook.com/erasehorseracingindia" },
    { id: "x", label: "X", url: "https://x.com/ehindia25" },
    { id: "youtube", label: "YouTube", url: "https://www.youtube.com/@EraseHorseracingIndia" },
    { id: "threads", label: "Threads", url: "https://www.threads.com/@erasehorseracingindia" }
  ],
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "What is horseracing?", href: "what-is-horseracing.html" },
    { label: "Kill Map", href: "death-map.html" },
    { label: "Memorials", href: "memorials.html" },
    { label: "Blogs", href: "blogs.html" },
    { label: "Take Action", href: "take-action.html" },
    { label: "Contact", href: "contact.html" }
  ]
};

const ICONS = {
  instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.668 1.0745-1.3373 1.3795-2.1279.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  facebook: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  x: "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z",
  youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  threads: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"
};

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmtDate = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
const cache = {};
const getJSON = (p) => (cache[p] ||= fetch(p, { cache: "no-cache" }).then((r) => { if (!r.ok) throw new Error(p); return r.json(); }));
const titleCase = (s) => s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
const SEX = { m: "mare", f: "filly", g: "gelding", h: "horse", c: "colt" };
const COLOR = { b: "bay", dkb: "dark bay", ch: "chestnut", gr: "gray", br: "brown", blk: "black" };
function describeColorSex(cs) {
  const [c, s] = (cs || "").split(/\s+/);
  return [COLOR[c] || c, SEX[s] || s].filter(Boolean).join(" ");
}
function socialLinks(extra = "") {
  return `<div class="socials ${extra}">${SITE.socials
    .map((s) => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}" title="${s.label}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[s.id]}"/></svg></a>`)
    .join("")}</div>`;
}
const searchIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`;

/* ---------- layout ---------- */
function renderLayout() {
  const here = location.pathname.split("/").pop() || "index.html";
  const page = here === "blog.html" ? "blogs.html" : here;
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <a class="skip" href="#main">Skip to content</a>
    <div class="header-inner">
      <a class="brand" href="index.html"><img src="assets/img/logo.png" alt="Erase Horseracing India logo"><span>${SITE.name}</span></a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="main-nav">Menu</button>
      <nav class="main-nav" id="main-nav" aria-label="Main">
        <ul>${SITE.nav.map((n) => `<li><a href="${n.href}"${n.href === page ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("")}</ul>
      </nav>
      <div class="header-search">
        <form class="search-form" action="search.html" role="search">
          <input type="search" name="q" placeholder="Search" aria-label="Search the site">
          <button type="submit" aria-label="Search">${searchIcon}</button>
        </form>
      </div>
    </div>`;
  document.body.prepend(header);
  const tog = $(".nav-toggle", header);
  tog.addEventListener("click", () => {
    const open = !$(".main-nav", header).classList.contains("open");
    $(".main-nav", header).classList.toggle("open", open);
    $(".header-search", header).classList.toggle("open", open);
    tog.setAttribute("aria-expanded", open);
  });

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand"><img src="assets/img/logo.png" alt=""><span>${SITE.name}</span></div>
          <p>A grassroots movement to end horseracing and protect horses in India.</p>
          ${socialLinks("socials--light")}
        </div>
        <div><h4>Explore</h4><ul>${[...SITE.nav.slice(0, 5), { label: "Blogs", href: "blogs.html" }].map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}</ul></div>
        <div><h4>Get involved</h4><ul>
          <li><a href="take-action.html#pledge">Take the pledge</a></li>
          <li><a href="contact.html">Volunteer with us</a></li>
          <li><a href="contact.html">Report an incident</a></li>
        </ul></div>
        <div><h4>Contact</h4>
          <p><a href="mailto:${SITE.email}">${SITE.email}</a></p>
          <p><a class="btn btn--light" href="${SITE.forms.signup}" target="_blank" rel="noopener">Get email updates</a></p>
        </div>
      </div>
      <div class="footer-bottom">&copy; ${new Date().getFullYear()} ${SITE.name}. Don't watch. Don't bet. Don't attend.</div>
    </div>`;
  document.body.append(footer);

  // fill any [data-link] / [data-socials] placeholders in page markup
  $$("[data-form]").forEach((a) => { a.href = SITE.forms[a.dataset.form]; a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-email]").forEach((a) => { a.href = "mailto:" + SITE.email; if (!a.textContent.trim()) a.textContent = SITE.email; });
  $$("[data-socials]").forEach((el) => (el.innerHTML = socialLinks(el.dataset.socials)));
}

/* ---------- death data ---------- */
async function loadDeaths() {
  const d = await getJSON("data/deaths.json");
  const years = [...new Set(d.records.map((r) => r.year))].sort((a, b) => b - a); // newest first
  const count = (track, year, source) =>
    d.records.filter((r) => (!track || r.track === track) && (year === "total" || r.year === year) && (!source || r.source === source)).reduce((a, r) => a + r.deaths, 0);
  return { ...d, years, count, total: count(null, "total") };
}

function animateNumber(el, to) {
  const dur = 1200, t0 = performance.now();
  const step = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString("en-US");
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* Projection calibrated to assets/img/india.svg (Simplemaps, Mercator, 1000x1000) */
const project = (lat, lon) => {
  const m = Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));
  return [27.381071652502083 * lon - 1767.123674840038, -1568.6441448290477 * m + 1139.9190289622813];
};
const LABEL_SIDE = { Mumbai: "left", Mysore: "left", Ooty: "below", Pune: "right", Bangalore: "above", Hyderabad: "right", Delhi: "right" };

async function initDeathMap(root, { compact = false } = {}) {
  const [data, svgText] = await Promise.all([loadDeaths(), fetch("assets/img/india.svg").then((r) => r.text())]);
  const HL = data.highlight || {};
  const isHL = (id) => id === HL.track;
  let year = "total", sortKey = "total", sortDir = -1, active = null;
  const fmtN = (n) => n.toLocaleString("en-US");
  const yearLabel = () => (year === "total" ? "all years" : year);

  root.innerHTML = `
    <div class="map-toolbar" role="group" aria-label="Choose year">
      <span class="lbl">Year</span>
      ${["total", ...data.years].map((y) => `<button class="chip" data-year="${y}" aria-pressed="${y === "total"}">${y === "total" ? "All years" : y}</button>`).join("")}
    </div>
    <div class="map-wrap">
      <div class="map-panel"><div class="india-map">${svgText}<div class="map-tip"></div></div>
        ${HL.track ? `<p class="map-legend"><span class="dot dot--hl" style="background:${HL.color}"></span>${esc(HL.track)}: not to scale*<span class="dot"></span>Other racetracks</p>` : ""}
        <p class="source">Bubble size shows documented kills at each racetrack. Map: simplemaps.com.</p></div>
      <div class="map-panel">
        <p class="map-total"></p>
        <div class="bars"></div>
        ${HL.note ? `<p class="hl-note"><b>*</b> ${esc(HL.note)}</p>` : ""}
        ${compact ? `<p class="mt"><a class="btn btn--primary" href="death-map.html">Explore the full map</a></p>` : `
        <div class="table-scroll"><table class="data-table"><thead></thead><tbody></tbody><tfoot></tfoot></table></div>
        <p class="source">Scroll sideways to see earlier years. Click a column heading to sort.</p>`}
      </div>
    </div>`;

  const svg = $("svg", root);
  svg.setAttribute("viewBox", "90 20 820 960"); // crop to the land area
  const tip = $(".map-tip", root);
  const NS = "http://www.w3.org/2000/svg";
  const g = document.createElementNS(NS, "g");
  svg.append(g);
  const nodes = {};
  // draw the highlighted (largest) bubble first so smaller ones sit on top
  [...data.tracks].sort((a, b) => (isHL(b.id) ? 1 : 0) - (isHL(a.id) ? 1 : 0)).forEach((t) => {
    const [x, y] = project(t.lat, t.lon);
    const c = document.createElementNS(NS, "circle");
    c.setAttribute("cx", x); c.setAttribute("cy", y); c.setAttribute("class", "bubble" + (isHL(t.id) ? " bubble--hl" : ""));
    if (isHL(t.id)) c.style.fill = HL.color;
    c.setAttribute("tabindex", "0");
    const lb = document.createElementNS(NS, "text");
    lb.setAttribute("class", "bubble-label"); lb.setAttribute("y", y + 6);
    g.append(c, lb);
    nodes[t.id] = { c, lb, x, y, t };
    const show = () => {
      const v = data.count(t.id, year);
      const box = $(".india-map", root).getBoundingClientRect(), cb = c.getBoundingClientRect();
      tip.style.left = cb.left - box.left + cb.width / 2 + "px";
      tip.style.top = cb.top - box.top + "px";
      const off = data.count(t.id, year, "official"), pub = data.count(t.id, year, "public");
      tip.innerHTML = `<b>${esc(t.name)}</b><br>${fmtN(v)} documented kill${v === 1 ? "" : "s"} (${yearLabel()})` +
        (off ? `<br><span class="tip-sub">${fmtN(off)} from official club records (RTI), ${fmtN(pub)} from public reports</span>` : "");
      tip.style.opacity = 1;
      highlight(t.id);
    };
    const hide = () => { tip.style.opacity = 0; highlight(null); };
    c.addEventListener("mouseenter", show); c.addEventListener("focus", show);
    c.addEventListener("mouseleave", hide); c.addEventListener("blur", hide);
  });

  function highlight(id) {
    active = id;
    Object.entries(nodes).forEach(([k, n]) => n.c.classList.toggle("active", k === id));
    $$(".bar-row", root).forEach((b) => b.classList.toggle("active", b.dataset.track === id));
  }

  function draw() {
    // scale everything to the largest *non-highlighted* track; the highlighted track is capped (not to scale)
    const others = data.tracks.filter((t) => !isHL(t.id));
    const max = Math.max(1, ...others.map((t) => data.count(t.id, "total")));
    const yearTotal = data.count(null, year);
    $(".map-total", root).textContent = `${fmtN(yearTotal)} documented kill${yearTotal === 1 ? "" : "s"} ${year === "total" ? "across all years" : "in " + year}`;
    Object.values(nodes).forEach(({ c, lb, x, t }) => {
      const v = data.count(t.id, year);
      let r = v ? 8 + 26 * Math.sqrt(v / max) : 6;
      const capped = isHL(t.id) && r > 42;
      if (capped) r = 42;
      c.setAttribute("r", r);
      c.classList.toggle("zero", !v);
      const side = LABEL_SIDE[t.id] || "right";
      const y0 = Number(c.getAttribute("cy"));
      const vert = side === "below" || side === "above";
      lb.setAttribute("x", side === "left" ? x - r - 6 : vert ? x : x + r + 6);
      lb.setAttribute("y", side === "below" ? y0 + r + 18 : side === "above" ? y0 - r - 7 : y0 + 6);
      lb.setAttribute("text-anchor", side === "left" ? "end" : vert ? "middle" : "start");
      lb.textContent = `${t.id} ${fmtN(v)}${isHL(t.id) && v ? "*" : ""}`;
      lb.classList.toggle("bubble-label--hl", isHL(t.id));
    });
    const rows = data.tracks.map((t) => ({ t, v: data.count(t.id, year) })).sort((a, b) => b.v - a.v);
    const bmax = Math.max(1, ...rows.filter((r) => !isHL(r.t.id)).map((r) => r.v));
    $(".bars", root).innerHTML = rows
      .map(({ t, v }) => {
        const hl = isHL(t.id), over = hl && v > bmax;
        const w = over ? 100 : Math.min(100, (v / bmax) * 100);
        return `<div class="bar-row${hl ? " bar-row--hl" : ""}" data-track="${t.id}" title="${esc(t.name)}"><span class="name">${t.id}</span><span class="bar-track"><span class="bar-fill${over ? " bar-fill--break" : ""}" style="width:${w}%${hl ? `;background-color:${HL.color}` : ""}"></span></span><span class="val">${fmtN(v)}${hl && v ? "*" : ""}</span></div>`;
      })
      .join("");
    $$(".bar-row", root).forEach((b) => {
      b.addEventListener("mouseenter", () => highlight(b.dataset.track));
      b.addEventListener("mouseleave", () => highlight(null));
    });
    if (!compact) drawTable();
  }

  function drawTable() {
    const cols = [...data.years, "total"]; // newest year first, Total pinned on the right
    const rows = data.tracks.map((t) => ({ name: t.id, full: t.name, ...Object.fromEntries(cols.map((c) => [c, data.count(t.id, c)])) }));
    rows.sort((a, b) => (sortKey === "name" ? a.name.localeCompare(b.name) * -sortDir : (a[sortKey] - b[sortKey]) * sortDir));
    const arrow = (k) => (k === sortKey ? (sortDir < 0 ? " ▼" : " ▲") : "");
    const cls = (c) => (c === "total" ? ' class="sticky-r"' : "");
    $("thead", root).innerHTML = `<tr><th data-k="name" class="sticky-l">Racetrack${arrow("name")}</th>${cols.map((c) => `<th data-k="${c}"${cls(c)}>${c === "total" ? "Total" : c}${arrow(c)}</th>`).join("")}</tr>`;
    $("tbody", root).innerHTML = rows.map((r) => `<tr${isHL(r.name) ? ' class="row-hl"' : ""}><td class="sticky-l" title="${esc(r.full)}">${r.name}${isHL(r.name) ? "*" : ""}</td>${cols.map((c) => `<td${cls(c)}>${r[c] ? fmtN(r[c]) : '<span class="zero-val">0</span>'}</td>`).join("")}</tr>`).join("");
    $("tfoot", root).innerHTML = `<tr><td class="sticky-l">All tracks</td>${cols.map((c) => `<td${cls(c)}>${fmtN(data.count(null, c))}</td>`).join("")}</tr>`;
    $$("thead th", root).forEach((th) => th.addEventListener("click", () => {
      const k = th.dataset.k === "name" || th.dataset.k === "total" ? th.dataset.k : Number(th.dataset.k);
      sortDir = sortKey === k ? -sortDir : -1;
      sortKey = k;
      drawTable();
    }));
  }

  $$(".chip", root).forEach((b) => b.addEventListener("click", () => {
    year = b.dataset.year === "total" ? "total" : Number(b.dataset.year);
    $$(".chip", root).forEach((x) => x.setAttribute("aria-pressed", x === b));
    draw();
  }));
  draw();
}

/* ---------- cards ---------- */
/* Card image: the post's own image, else its YouTube video thumbnail, else the logo */
function postYouTube(p) {
  if (p.media && p.media.youtube) return p.media.youtube;
  const m = (p.content || "").match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([\w-]{11})/);
  return m ? m[1] : null;
}
function postCard(p) {
  const yt = postYouTube(p);
  const img = p.image ? `<img class="card-img" src="${p.image}" alt="" loading="lazy">`
    : yt ? `<img class="card-img" src="https://i.ytimg.com/vi/${yt}/hqdefault.jpg" alt="" loading="lazy">`
    : `<div class="card-ph"><img src="assets/img/logo.png" alt=""></div>`;
  return `<article class="card">${img}<div class="card-body">
    <div class="meta">${fmtDate(p.date)} &middot; ${esc(p.category)}</div>
    <h3><a href="blog.html?slug=${encodeURIComponent(p.slug)}">${esc(p.title)}</a></h3>
    <p>${esc(p.excerpt)}</p>
    <a class="btn btn--outline" href="blog.html?slug=${encodeURIComponent(p.slug)}">Read more</a></div></article>`;
}
function memorialCard(m) {
  const img = m.image ? `<img class="card-img" src="${m.image}" alt="${esc(titleCase(m.name))}" loading="lazy">` : `<div class="card-ph"><img src="assets/img/logo.png" alt=""></div>`;
  return `<button class="card memorial-card" data-slug="${m.slug}">${img}<div class="card-body">
    <h3>${esc(m.name)}</h3>${m.note ? `<div class="meta" style="text-transform:none">${esc(m.note)}</div>` : ""}
    <div class="meta">${fmtDate(m.date)} &middot; ${esc(m.track)}</div>
    <p>${esc(m.incident)}</p></div></button>`;
}

/* ---------- page modules ---------- */
const pages = {
  async home() {
    const d = await loadDeaths();
    animateNumber($("#death-count"), d.total);
    initDeathMap($("#home-map"), { compact: true });
    const posts = await getJSON("data/posts.json");
    $("#recent-blogs").innerHTML = posts.slice(0, 3).map(postCard).join("");
  },

  async deathmap() {
    const d = await loadDeaths();
    animateNumber($("#death-count"), d.total);
    $("#track-count").textContent = d.tracks.length;
    $("#official-count").textContent = d.count(null, "total", "official").toLocaleString("en-US");
    $("#public-count").textContent = d.count(null, "total", "public").toLocaleString("en-US");
    $("#year-span").textContent = `${Math.min(...d.years)} to ${Math.max(...d.years)}`;
    initDeathMap($("#full-map"));
  },

  async memorials() {
    const all = await getJSON("data/memorials.json");
    const tracks = [...new Set(all.map((m) => m.track))].sort();
    const years = [...new Set(all.map((m) => m.date.slice(0, 4)))].sort().reverse();
    $("#f-track").innerHTML += tracks.map((t) => `<option>${t}</option>`).join("");
    $("#f-year").innerHTML += years.map((y) => `<option>${y}</option>`).join("");
    const grid = $("#memorial-grid"), count = $("#memorial-count");
    const draw = () => {
      const t = $("#f-track").value, y = $("#f-year").value, q = $("#f-q").value.trim().toLowerCase();
      const list = all.filter((m) => (!t || m.track === t) && (!y || m.date.startsWith(y)) && (!q || m.name.toLowerCase().includes(q)));
      grid.innerHTML = list.map(memorialCard).join("") || `<p class="empty">No memorials match these filters.</p>`;
      count.textContent = `${list.length} of ${all.length} horses`;
      $$(".memorial-card", grid).forEach((b) => b.addEventListener("click", () => openMemorial(all.find((m) => m.slug === b.dataset.slug))));
    };
    ["#f-track", "#f-year"].forEach((s) => $(s).addEventListener("change", draw));
    $("#f-q").addEventListener("input", draw);
    draw();
    const hash = decodeURIComponent(location.hash.slice(1));
    if (hash) { const m = all.find((x) => x.slug === hash); if (m) openMemorial(m); }
  },

  async blogs() {
    const posts = await getJSON("data/posts.json");
    const cats = ["All", ...new Set(posts.map((p) => p.category))];
    const bar = $("#blog-filters");
    bar.innerHTML = cats.map((c, i) => `<button class="chip" data-cat="${c}" aria-pressed="${i === 0}">${c}</button>`).join("");
    const draw = (c) => ($("#blog-grid").innerHTML = posts.filter((p) => c === "All" || p.category === c).map(postCard).join(""));
    $$(".chip", bar).forEach((b) => b.addEventListener("click", () => {
      $$(".chip", bar).forEach((x) => x.setAttribute("aria-pressed", x === b));
      draw(b.dataset.cat);
    }));
    draw("All");
  },

  async post() {
    const slug = new URLSearchParams(location.search).get("slug");
    const posts = await getJSON("data/posts.json");
    const p = posts.find((x) => x.slug === slug);
    const el = $("#post");
    if (!p) { el.innerHTML = `<h1>Post not found</h1><p><a href="blogs.html">Back to all blogs</a></p>`; return; }
    document.title = `${p.title} | ${SITE.name}`;
    $("#post-title").textContent = p.title;
    $("#post-meta").textContent = `${fmtDate(p.date)} · ${p.category} · ${p.author}`;
    let media = "";
    if (p.media && p.media.youtube) {
      const ids = [p.media.youtube, ...(p.media.more || [])];
      const one = (id, i) => `<div class="video${p.media.short ? " short" : ""}"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${esc(p.title)} video ${i + 1}" loading="lazy" allowfullscreen></iframe></div>`;
      media = ids.length > 1 ? `<div class="video-row">${ids.map(one).join("")}</div>` : one(ids[0], 0);
    }
    else if (p.media && p.media.images) media = `<div class="post-gallery">${p.media.images.map((src) => `<a href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="" loading="lazy"></a>`).join("")}</div>`;
    else if (p.media && p.media.image) media = `<img class="post-image" src="${p.media.image}" alt="">`;
    else if (p.media && p.media.instagram && p.media.embed === false) media = `<a class="ig-card" href="https://www.instagram.com/p/${p.media.instagram}/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS.instagram}"/></svg><span><b>Watch the video on Instagram</b>${p.media.by ? `<small>@${esc(p.media.by)}</small>` : ""}</span></a>`;
    else if (p.media && p.media.instagram) {
      const ids = [p.media.instagram, ...(p.media.igMore || [])];
      const one = (id) => `<div class="ig-embed"><iframe src="https://www.instagram.com/p/${id}/embed/" title="${esc(p.title)} Instagram post" loading="lazy" scrolling="no" allowtransparency="true"></iframe><a href="https://www.instagram.com/p/${id}/" target="_blank" rel="noopener">View on Instagram</a></div>`;
      media = ids.length > 1 ? `<div class="ig-row">${ids.map(one).join("")}</div>` : one(ids[0]);
    }
    el.innerHTML = media + renderContent(p.content);
  },

  async explainer() {
    const secs = await getJSON("data/sections.json");
    const id = (s) => s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    $("#toc").innerHTML = secs.map((s) => `<a href="#${id(s)}">${esc(s.title)}</a>`).join("");
    $("#explainer").innerHTML = secs.map((s, i) => {
      let media = "";
      if (s.youtubeId) media = `<iframe src="https://www.youtube-nocookie.com/embed/${s.youtubeId}" title="${esc(s.title)} video" loading="lazy" allowfullscreen></iframe>`;
      else if (s.image) media = s.sensitive
        ? `<div class="blurred" style="height:100%"><img src="${s.image}" alt="${esc(s.title)}" loading="lazy"><div class="reveal"><b>Sensitive image</b><button class="btn btn--light" type="button">Reveal image</button></div></div>`
        : `<img src="${s.image}" alt="${esc(s.title)}" loading="lazy">`;
      return `<article class="ex-item" id="${id(s)}">${media ? `<div class="ex-media">${media}</div>` : ""}
        <div class="ex-text"${media ? "" : ' style="grid-column:1/-1"'}><div class="num">${String(i + 1).padStart(2, "0")}</div><h2>${esc(s.title)}</h2>${renderContent(s.content)}${s.credits ? `<p class="credits">Credits: ${inlineLinks(s.credits)}</p>` : ""}</div></article>`;
    }).join("");
    $$(".reveal button").forEach((b) => b.addEventListener("click", () => { const w = b.closest(".blurred"); w.classList.remove("blurred"); b.parentElement.remove(); }));
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
  },

  async search() {
    const q = (new URLSearchParams(location.search).get("q") || "").trim();
    $("#q").value = q;
    const out = $("#results");
    if (!q) { out.innerHTML = `<p class="empty">Type something to search the site.</p>`; return; }
    const [posts, mems, secs] = await Promise.all(["data/posts.json", "data/memorials.json", "data/sections.json"].map(getJSON));
    const docs = [
      ...STATIC_PAGES,
      ...posts.map((p) => ({ title: p.title, type: "Blog", url: `blog.html?slug=${p.slug}`, text: p.excerpt + " " + stripLinks(p.content) })),
      ...mems.map((m) => ({ title: m.name, type: "Memorial", url: `memorials.html#${m.slug}`, text: `${m.note} ${m.track} ${m.date.slice(0, 4)} ${m.incident} ${m.outcome}` })),
      ...secs.map((s) => ({ title: s.title, type: "What is horseracing?", url: `what-is-horseracing.html#${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`, text: stripLinks(s.content) }))
    ];
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    const hits = docs.map((d) => {
      const T = d.title.toLowerCase(), X = d.text.toLowerCase();
      if (!terms.every((t) => T.includes(t) || X.includes(t))) return null;
      return { d, score: terms.reduce((a, t) => a + (T.includes(t) ? 5 : 0) + (X.split(t).length - 1), 0) };
    }).filter(Boolean).sort((a, b) => b.score - a.score);
    const re = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
    const snippet = (txt) => {
      const i = Math.max(0, txt.toLowerCase().indexOf(terms[0]) - 60);
      return esc((i ? "…" : "") + txt.slice(i, i + 200) + "…").replace(re, "<mark>$1</mark>");
    };
    $("#result-count").textContent = `${hits.length} result${hits.length === 1 ? "" : "s"} for “${q}”`;
    out.innerHTML = hits.map(({ d }) => `<a class="result" href="${d.url}"><div class="meta">${d.type}</div><h3>${esc(d.title).replace(re, "<mark>$1</mark>")}</h3><p>${snippet(d.text)}</p></a>`).join("") || `<p class="empty">No results. Try another word.</p>`;
  }
};

const STATIC_PAGES = [
  { title: "About us", type: "Page", url: "about.html", text: "mission vision approach legislative action investigation advocacy" },
  { title: "Kill Map", type: "Page", url: "death-map.html", text: "kill death count map racetracks Bangalore Chennai Mysore Pune Mumbai Delhi Hyderabad Kolkata year statistics" },
  { title: "Take Action", type: "Page", url: "take-action.html", text: "pledge boycott sign email subscription newsletter sign up social media" },
  { title: "Contact", type: "Page", url: "contact.html", text: "contact volunteer report an incident write to us email" }
];

/* Turn plain text into paragraphs, with YouTube embeds and clickable links */
/* **bold** and *italic* (applied after escaping) */
const fmt = (h) => h.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, "$1<em>$2</em>");
/* [text](url) becomes a link; bare URLs become links too */
function inlineLinks(t) {
  const parts = [];
  let last = 0;
  const re = /\[([^\]]+)\]\((https?:\/\/[^\s)]+(?:\([^\s)]*\))?[^\s)]*)\)/g;
  let m;
  while ((m = re.exec(t))) {
    parts.push(fmt(esc(t.slice(last, m.index)).replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')));
    parts.push(`<a href="${esc(m[2])}" target="_blank" rel="noopener">${fmt(esc(m[1]))}</a>`);
    last = re.lastIndex;
  }
  parts.push(fmt(esc(t.slice(last)).replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')));
  return parts.join("");
}
const stripLinks = (t) => t.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\s*\{\.(justify|center|right)\}/g, "").replace(/\*/g, "");

function renderContent(text) {
  return text.split(/\n{2,}/).map((para) => {
    let t = para.trim(), align = "";
    const am = t.match(/\s*\{\.(justify|center|right)\}$/);
    if (am) { align = ` class="al-${am[1]}"`; t = t.slice(0, am.index); }
    const yt = t.match(/^https?:\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([\w-]{11})\S*$/);
    if (yt) return `<div class="video${t.includes("/shorts/") ? " short" : ""}"><iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="Video" loading="lazy" allowfullscreen></iframe></div>`;
    const lines = t.split("\n");
    if (lines.every((l) => /^- /.test(l))) return `<ul>${lines.map((l) => `<li>${inlineLinks(l.slice(2))}</li>`).join("")}</ul>`;
    return `<p${align}>${inlineLinks(t)}</p>`;
  }).join("");
}

function openMemorial(m) {
  let dlg = $("#memorial-dialog");
  if (!dlg) { dlg = document.createElement("dialog"); dlg.id = "memorial-dialog"; document.body.append(dlg); dlg.addEventListener("click", (e) => e.target === dlg && dlg.close()); }
  const img = m.image ? `<img class="card-img" src="${m.image}" alt="${esc(titleCase(m.name))}">` : "";
  dlg.innerHTML = `<button class="close" aria-label="Close">&times;</button>${img}<div class="card-body">
    <div class="eyebrow">In memory of</div><h2>${esc(m.name)}</h2>${m.note ? `<p class="meta" style="text-transform:none">${esc(m.note)}</p>` : ""}
    <dl class="dl">
      <dt>Date</dt><dd>${fmtDate(m.date)}</dd>
      <dt>Racetrack</dt><dd>${esc(m.track)}</dd>
      ${m.age ? `<dt>Age</dt><dd>${esc(m.age.replace(/Y$/i, " years"))}</dd>` : ""}
      ${m.colorSex ? `<dt>Color / sex</dt><dd>${esc(describeColorSex(m.colorSex))}</dd>` : ""}
      <dt>Killed</dt><dd>${esc(m.incident)}</dd>
      ${m.confirmedBy ? `<dt>Confirmed by</dt><dd>${esc(m.confirmedBy)}</dd>` : ""}
    </dl>
    <p class="btn-row mt">${[["reportLink", "Source report"], ["horseData", "Racing record"], ["socialPost", "More details"]].filter(([k]) => /^https?:/.test(m[k] || "")).map(([k, l]) => `<a class="btn btn--outline" href="${esc(m[k])}" target="_blank" rel="noopener">${l}</a>`).join("")}</p>
    </div>`;
  $(".close", dlg).addEventListener("click", () => dlg.close());
  dlg.showModal();
  history.replaceState(null, "", "#" + m.slug);
  dlg.addEventListener("close", () => history.replaceState(null, "", location.pathname + location.search), { once: true });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLayout();
  const p = document.body.dataset.page;
  if (pages[p]) pages[p]().catch((e) => console.error(e));
});
