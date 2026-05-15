/* ============================================================
   OPTIIIMUM — CONTENT REGISTRY · RENDERER
   Reads window.REGISTRY and builds each tab's HTML.
   ============================================================ */

(function () {
  const R = window.REGISTRY;

  // ---------------- helpers ----------------
  const esc = (s) => String(s ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  const isMissing = (s) => typeof s === "string" && /^MISSING/i.test(s.trim());

  const missChip = (label = "MISSING") =>
    `<span class="chip miss">${esc(label)}</span>`;

  const okChip = (label) =>
    `<span class="chip ok">${esc(label)}</span>`;

  const inkChip = (label) =>
    `<span class="chip ink">${esc(label)}</span>`;

  // image with graceful fallback (some Arabic-named files may not resolve in raw fetch)
  const img = (src, alt = "") => {
    if (!src || isMissing(src)) {
      return `<div class="miss-overlay">Photo missing</div>`;
    }
    return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.parentNode.innerHTML='<div class=\\'miss-overlay\\'>File not loadable</div>'">`;
  };

  // ============================================================
  // TAB 0 — OVERVIEW
  // ============================================================
  function tabOverview() {
    const m = R.meta;
    const totals = {
      caseStudies: R.caseStudies.length,
      ambassadors: R.ambassadors.length,
      logos: R.clientLogos.list.length,
      courses: R.courses.length,
      team: R.team.length,
      culture: R.culture.estimatedCount,
      blogs: R.blogs.placeholderStructure.length
    };
    return `
      <div class="tab-eyebrow">Phase 1 · Audit</div>
      <h1 class="tab-title">A working registry of every asset Optiiimum has — and every one it still needs.</h1>
      <p class="tab-lede">${esc(m.positioning)} This document organizes everything that came in: brand, proof, people, products, voice. Nothing is fabricated. Anything labelled <span class="chip miss">MISSING</span> needs to be exported from Drive before the build phase begins.</p>

      <div class="summary-strip">
        <div class="num"><b>${totals.caseStudies}</b><span>Case studies</span></div>
        <div class="num"><b>${totals.ambassadors}</b><span>Ambassadors</span></div>
        <div class="num"><b>${totals.logos}+</b><span>Client logos</span></div>
        <div class="num"><b>${totals.courses}</b><span>Courses</span></div>
        <div class="num"><b>${totals.team}</b><span>Team members</span></div>
        <div class="num"><b>~${totals.culture}</b><span>Culture photos</span></div>
        <div class="num"><b>${totals.blogs}</b><span>Blog articles</span></div>
      </div>

      <h2 class="section">Source of truth</h2>
      <div class="card">
        <dl class="def">
          <dt>Project</dt><dd>${esc(m.project)}</dd>
          <dt>Phase</dt><dd>${esc(m.phase)}</dd>
          <dt>Date</dt><dd>${esc(m.date)}</dd>
          <dt>Languages</dt><dd>${m.languages.map(l => `<span class="chip">${esc(l)}</span>`).join(" ")}</dd>
          <dt>Markets</dt><dd>${m.markets.map(l => `<span class="chip">${esc(l)}</span>`).join(" ")}</dd>
          <dt>Drive folder</dt><dd><a href="${esc(m.driveLink)}" target="_blank" rel="noopener">Open in Drive ↗</a></dd>
          <dt>Files audited</dt><dd>${m.totalUploadedFiles} uploads</dd>
          <dt>Note</dt><dd>${esc(m.sourceOfTruth)}</dd>
        </dl>
      </div>

      <h2 class="section">How to read this document</h2>
      <div class="grid two">
        <div class="card">
          <h3 class="sub">It is not the website.</h3>
          <p>This is a working artefact — a clean inventory of what exists, what is missing, and how each piece will be used. The website is the next phase.</p>
        </div>
        <div class="card">
          <h3 class="sub">Tabs are categories, not pages.</h3>
          <p>Some tabs map directly to website pages (Courses, Case Studies). Others are foundations (Brand, Voice, SEO) used across multiple pages. The <em>Page Mapping</em> tab shows which assets feed which page.</p>
        </div>
        <div class="card">
          <h3 class="sub">${missChip("MISSING")} is not a verdict.</h3>
          <p>It is a checklist. Anything tagged this way needs to be supplied before the build phase. Most are small — a phone number, a headshot, a course thumbnail.</p>
        </div>
        <div class="card">
          <h3 class="sub">Premium = restraint.</h3>
          <p>The aesthetic system is intentionally conservative. The colour appears once, in the gradient, where it is meant to. Everywhere else: warm white, warm black, real photography, real numbers.</p>
        </div>
      </div>

      <h2 class="section">Top open questions for the client</h2>
      <ol class="notes long-copy">
        <li>Confirm <code>optiiimum.com</code> is owned and live, or supply the actual primary domain.</li>
        <li>Supply corporate contact channels: phone, WhatsApp, email, booking link.</li>
        <li>Confirm Optiiimum's own social handles (separate from client accounts).</li>
        <li>Confirm whether <em>Dr. Mai · Hesham · Noureddine El Sherif · Hatoon</em> are ambassadors, team, or clients — and supply testimonial copy if ambassadors.</li>
        <li>Supply remaining four case-study client headshots (Diana Samir, Peter Moris, Bassant Habash, Dalia Hosny).</li>
        <li>Re-export the 10 blog articles as DOCX or paste as Markdown — the supplied PDF is not extractable.</li>
        <li>Approve the working tagline (multiple candidates pulled from case studies — see <em>English Copy</em> tab).</li>
      </ol>
    `;
  }

  // ============================================================
  // TAB — BRAND ASSETS
  // ============================================================
  function tabBrand() {
    const b = R.brandAssets;
    return `
      <div class="tab-eyebrow">Brand · Identity</div>
      <h1 class="tab-title">Eight logo lockups. One signature mark. One spectrum.</h1>
      <p class="tab-lede">The 'O' loop is the most ownable element in the system — treat it as the swoosh. The wordmark uses three i's; never alter that signature.</p>

      <h2 class="section">Logo set</h2>
      <div class="brand-logos">
        ${b.logoSet.map(l => `
          <div class="lg">
            <div class="preview ${l.id.includes("white") ? "dark" : "light"}">${img(l.file, l.variant)}</div>
            <div class="meta">
              <b>${esc(l.variant)}</b>
              <span>${esc(l.use)}</span>
              <div style="margin-top:6px"><code>${esc(l.file)}</code></div>
            </div>
          </div>
        `).join("")}
      </div>

      <h2 class="section">The Spectrum gradient</h2>
      <div class="card">
        <div class="gradient-strip"></div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:14px;">
          ${b.gradient.sampledStops.map(s => `
            <div class="swatch">
              <div class="blob" style="background:${esc(s.hex)}"></div>
              <div class="meta"><b>${esc(s.name)}</b><code>${esc(s.hex)}</code></div>
            </div>
          `).join("")}
        </div>
        <hr class="soft" />
        <p style="margin:0 0 6px"><b>CSS</b></p>
        <code style="display:block;padding:10px;white-space:pre-wrap;">${esc(b.gradient.cssRecommendation)}</code>
        <p style="margin-top:14px;color:var(--ink-2)">${esc(b.gradient.usage)}</p>
      </div>

      <h2 class="section">Iconography</h2>
      <div class="card">
        <p>${missChip("Status")} ${esc(b.iconography.status)}</p>
        <p style="margin-top:8px;color:var(--ink-2)">${esc(b.iconography.recommendation)}</p>
      </div>

      <h2 class="section">Patterns &amp; texture</h2>
      <div class="card">
        <p>${esc(b.patterns.status)}</p>
        <p style="margin-top:8px;color:var(--ink-2)">${esc(b.patterns.recommendation)}</p>
      </div>

      <h2 class="section">Visual style notes</h2>
      <ul class="notes long-copy">
        ${b.visualStyleNotes.map(n => `<li>${esc(n)}</li>`).join("")}
      </ul>
    `;
  }

  // ============================================================
  // TAB — COLORS
  // ============================================================
  function tabColors() {
    const c = R.brandColors;
    const swatch = (name, obj) => `
      <div class="swatch">
        <div class="blob" style="background:${esc(obj.hex)}"></div>
        <div class="meta"><b>${esc(name)}</b><code>${esc(obj.hex)}</code>${obj.note ? `<span style="font-size:11.5px;color:var(--ink-3)">${esc(obj.note)}</span>`:""}</div>
      </div>`;
    const themeBlock = (label, theme) => `
      <h3 class="sub">${esc(label)}</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px">
        ${Object.entries(theme).map(([k,v]) => swatch(k, v)).join("")}
      </div>`;
    return `
      <div class="tab-eyebrow">Brand · Colour system</div>
      <h1 class="tab-title">Two themes. One spectrum. Used sparingly so it stays a moment.</h1>
      <p class="tab-lede">Light is the default. Both themes share the same gradient identity but tuned for the surface they live on.</p>

      <h2 class="section">Anchor colours</h2>
      <div class="grid">
        ${swatch("Primary — Optiiimum Ink", c.primary)}
        ${swatch("Secondary — Soft White", c.secondary)}
        ${swatch("Accent — Spectrum Magenta", c.accentSolid)}
      </div>

      <h2 class="section">${esc(c.accentGradient.name)}</h2>
      <div class="card">
        <div class="gradient-strip"></div>
        <p style="margin-top:12px;color:var(--ink-2)">${esc(c.accentGradient.role)}</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:10px">
          ${c.accentGradient.stops.map(h => `<div class="swatch"><div class="blob" style="background:${esc(h)}"></div><div class="meta"><code>${esc(h)}</code></div></div>`).join("")}
        </div>
      </div>

      <h2 class="section">Theme tokens</h2>
      ${themeBlock("Light theme", c.light)}
      <div style="height:18px"></div>
      ${themeBlock("Dark theme", c.dark)}

      <h2 class="section">Usage rules</h2>
      <ul class="notes long-copy">
        ${c.usageRules.map(n => `<li>${esc(n)}</li>`).join("")}
      </ul>
    `;
  }

  // ============================================================
  // TAB — THEMES (light/dark notes)
  // ============================================================
  function tabThemes() {
    const t = R.themeNotes;
    return `
      <div class="tab-eyebrow">Brand · Themes</div>
      <h1 class="tab-title">Light and dark — designed to feel like the same brand, on different surfaces.</h1>
      <p class="tab-lede">${esc(t.defaultTheme)}</p>

      <div class="grid two">
        <div class="card">
          <h3 class="sub">Light theme rules</h3>
          <ul class="notes">${t.lightPremiumRules.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
        </div>
        <div class="card" style="background:#0B0B0B;color:#F5F2EC;border-color:#2A2A28">
          <h3 class="sub" style="color:#F5F2EC">Dark theme rules</h3>
          <ul class="notes" style="color:#B8B5AE">${t.darkPremiumRules.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
        </div>
      </div>

      <h2 class="section">Client logo treatment</h2>
      <div class="card">
        <ul class="notes">${t.clientLogosTreatment.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
      </div>

      <h2 class="section">Screenshots / proof imagery</h2>
      <div class="card">
        <ul class="notes">${t.screenshotsTreatment.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
      </div>

      <h2 class="section">Accessibility</h2>
      <div class="card">
        <ul class="notes">${t.accessibilityNotes.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
      </div>
    `;
  }

  // ============================================================
  // TAB — CASE STUDIES
  // ============================================================
  function tabCaseStudies() {
    const items = R.caseStudies.map(cs => `
      <article class="case" id="${esc(cs.id)}">
        <div class="case-head">
          <div>
            <div class="industry">${esc(cs.industry)}</div>
            <h3>${esc(cs.client)}</h3>
            ${cs.note ? `<div class="chip ink" style="margin-top:6px">${esc(cs.note)}</div>` : ""}
          </div>
          <div class="timeline">${esc(cs.timeline)}</div>
        </div>

        <div class="case-body">
          <div>
            <h4>Starting point</h4><p>${esc(cs.starting)}</p>
            <h4>Challenge</h4><p>${esc(cs.challenge)}</p>
          </div>
          <div>
            <h4>Strategy</h4><p>${esc(cs.strategy)}</p>
            <h4>Execution</h4><p>${esc(cs.execution)}</p>
          </div>
        </div>

        <div class="stat-strip">
          ${Object.entries(cs.results).map(([k,v]) => `
            <div class="stat"><b>${esc(v)}</b><span>${esc(k.replace(/([A-Z])/g," $1").trim())}</span></div>
          `).join("")}
        </div>

        <div class="case-summary">${esc(cs.summaryEN)}</div>
        <div class="case-summary ar">${esc(cs.summaryAR)}</div>

        <hr class="soft" />
        <dl class="def">
          <dt>Slug</dt><dd><code>${esc(cs.slug)}</code></dd>
          <dt>Home highlight</dt><dd>${esc(cs.homeHighlight)}</dd>
          <dt>CTA</dt><dd>${esc(cs.cta)}</dd>
          <dt>Proof / files</dt><dd>${esc(cs.proof)}</dd>
        </dl>
      </article>
    `).join("");

    return `
      <div class="tab-eyebrow">Proof · 13 documented transformations</div>
      <h1 class="tab-title">The case studies are the company.</h1>
      <p class="tab-lede">Ten full narratives plus three institutional/cause cases. Each follows the same nine-section page structure (right). Order on the home rail: Jozeph → Diana → Auzonia → Shift Tamrid → Dalia.</p>

      <div class="grid two">
        <div class="card">
          <h3 class="sub">Suggested page structure (one for all)</h3>
          <ol class="notes">${R.caseStudyPageStructure.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
        </div>
        <div class="card">
          <h3 class="sub">Homepage rail order</h3>
          <p>${esc(R.homepageCaseRail)}</p>
        </div>
      </div>

      <h2 class="section">All cases</h2>
      <div style="display:flex;flex-direction:column;gap:18px">${items}</div>
    `;
  }

  // ============================================================
  // TAB — AMBASSADORS
  // ============================================================
  function tabAmbassadors() {
    return `
      <div class="tab-eyebrow">Proof · People who became platforms</div>
      <h1 class="tab-title">The ambassadors are the case studies, made human.</h1>
      <p class="tab-lede">Some are case-study clients (Dina, Peter, Bassant, Dalia, Auzonia, Jozeph, Shift Tamrid, DSE). Four are headshot-only and need testimonial copy supplied.</p>

      <div class="grid">
        ${R.ambassadors.map(a => `
          <div class="person">
            <div class="photo" ${a.image && !isMissing(a.image) ? `style="background-image:url('${esc(a.image)}')"` : ""}>
              ${a.image && !isMissing(a.image) ? "" : `<div class="miss-overlay">Headshot missing</div>`}
            </div>
            <div class="meta">
              <b>${esc(a.name)}</b>
              <span>${esc(a.field)}</span>
              <div class="dept">${esc(a.market)}</div>
              ${a.role ? `<div style="margin-top:4px"><span class="chip ink">${esc(a.role)}</span></div>` : ""}
              ${isMissing(a.quoteEN) ? `<p>${missChip("Testimonial copy missing")}</p>` :
                `<p>${esc(a.quoteEN)}</p>
                 <p class="ar" dir="rtl" style="font-family:var(--font-ar)">${esc(a.quoteAR)}</p>`}
              <hr class="soft" />
              <div style="font-size:11.5px;color:var(--ink-3)">
                <div><b style="color:var(--ink-2)">Placement</b> · ${esc(a.placement)}</div>
                <div style="margin-top:4px"><b style="color:var(--ink-2)">Card</b> · ${esc(a.cardStyle)}</div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  // ============================================================
  // TAB — CLIENT LOGOS
  // ============================================================
  function tabClientLogos() {
    const groups = R.clientLogos.industriesGrouped;
    return `
      <div class="tab-eyebrow">Proof · Trust at scale</div>
      <h1 class="tab-title">${R.clientLogos.total}+ brands across hospitality, FMCG, telecom, real estate, government, and more.</h1>
      <p class="tab-lede">Default treatment is monochrome — premium, consistent, calm. Hover (or featured cell) reveals full colour.</p>

      <div class="grid two">
        <div class="card">
          <h3 class="sub">Homepage marquee (12 picks)</h3>
          <p>${esc(R.clientLogos.homepagePreview)}</p>
        </div>
        <div class="card">
          <h3 class="sub">Full /clients page</h3>
          <p>${esc(R.clientLogos.fullClientsPage)}</p>
        </div>
      </div>

      <h2 class="section">By industry</h2>
      <div class="card">
        <dl class="def">
          ${Object.entries(groups).map(([ind, names]) => `
            <dt>${esc(ind)}</dt>
            <dd>${names.map(n => `<span class="chip">${esc(n)}</span>`).join(" ")}</dd>
          `).join("")}
        </dl>
      </div>

      <h2 class="section">All ${R.clientLogos.list.length} logos</h2>
      <div class="grid tight">
        ${R.clientLogos.list.map(l => `
          <div class="logo-card" title="${esc(l.file)}">
            <img src="${esc(l.file)}" alt="${esc(l.name)}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'industry',style:'color:var(--miss-ink)',textContent:'(file path needs encoding)'}))">
            <div>
              <div class="label">${esc(l.name)}</div>
              <div class="industry">${esc(l.industry)}</div>
            </div>
          </div>
        `).join("")}
      </div>

      <h2 class="section">Treatment</h2>
      <div class="card"><p>${esc(R.clientLogos.treatment)}</p></div>

      <h2 class="section">Open items</h2>
      <div class="missing-block">
        <h4>Flags</h4>
        <ul>${R.clientLogos.flags.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
      </div>
    `;
  }

  // ============================================================
  // TAB — COURSES
  // ============================================================
  function tabCourses() {
    return `
      <div class="tab-eyebrow">Products · Education</div>
      <h1 class="tab-title">${R.courses.length} courses, all hosted on Teachable.</h1>
      <p class="tab-lede">The course catalogue is parallel to the agency services — one engine for done-with-you (courses), one for done-for-you (services). Eleven thumbnails confirmed; one missing, one URL unconfirmed, one fully pending copy.</p>

      <div class="grid">
        ${R.courses.map(c => {
          const hasThumb = c.image && !isMissing(c.image);
          const hasUrl = c.url && !isMissing(c.url);
          return `
          <article class="course">
            <div class="thumb" ${hasThumb ? `style="background-image:url('${esc(c.image)}')"` : ""}>
              ${hasThumb ? "" : `<div class="miss">Thumbnail missing</div>`}
            </div>
            <div class="body">
              <div class="cat">${esc(c.category)}</div>
              <h4>${esc(c.nameEN)}</h4>
              <div class="ar-name">${esc(c.nameAR)}</div>
              <p><b>Audience.</b> ${esc(c.audience)}</p>
              <p><b>What you learn.</b> ${esc(c.learn)}</p>
              <p><b>Why it matters.</b> ${esc(c.benefit)}</p>
              ${c.proof ? `<p style="color:var(--ink-3);font-size:12.5px"><i>${esc(c.proof)}</i></p>` : ""}
              ${c.ambassador ? `<div><span class="chip ink">Ambassador · ${esc(c.ambassador)}</span></div>` : ""}
              <hr class="soft" />
              <div>
                ${hasUrl
                  ? `<a class="url" href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.url)} ↗</a>`
                  : `<div>${missChip("Landing page URL missing")}</div>`}
              </div>
              <div style="margin-top:6px;font-size:12px;color:var(--ink-3)">Slug: <code>${esc(c.slug)}</code></div>
              ${c.flag ? `<div style="margin-top:6px">${missChip(c.flag)}</div>` : ""}
              <div class="copy-compare" style="margin-top:10px;gap:10px">
                <div class="col"><h4>EN card</h4><div>${esc(c.cardEN)}</div><div style="margin-top:6px"><span class="chip">${esc(c.ctaEN)}</span></div></div>
                <div class="col ar"><h4>AR card</h4><div>${esc(c.cardAR)}</div><div style="margin-top:6px"><span class="chip">${esc(c.ctaAR)}</span></div></div>
              </div>
            </div>
          </article>`;
        }).join("")}
      </div>
    `;
  }

  // ============================================================
  // TAB — TEAM
  // ============================================================
  function tabTeam() {
    return `
      <div class="tab-eyebrow">People · ${R.team.length} on the team</div>
      <h1 class="tab-title">Nine departments. One standard.</h1>
      <p class="tab-lede">Leadership · Operations · Account Management · Media Buying · Content · Design · Video Editing · Moderation/Community · Business Development.</p>

      <h2 class="section">Department roster</h2>
      <div class="card">
        <dl class="def">
          ${Object.entries(R.teamGrouping).map(([d, names]) => `
            <dt>${esc(d)}</dt>
            <dd>${names.map(n => `<span class="chip">${esc(n)}</span>`).join(" ")}</dd>
          `).join("")}
        </dl>
      </div>

      <h2 class="section">All team members</h2>
      <div class="grid">
        ${R.team.map(t => `
          <div class="person">
            <div class="photo" ${t.image && !isMissing(t.image) ? `style="background-image:url('${esc(t.image)}')"` : ""}>
              ${t.image && !isMissing(t.image) ? "" : `<div class="miss-overlay">Headshot missing</div>`}
            </div>
            <div class="meta">
              <b>${esc(t.name)}</b>
              <span>${esc(t.title)}</span>
              <div class="dept">${esc(t.department)}</div>
              ${t.bioEN ? `<p>${esc(t.bioEN)}</p>` : `<p style="margin:8px 0 0">${missChip("Bio missing")}</p>`}
              ${t.bioAR ? `<p class="ar" dir="rtl" style="font-family:var(--font-ar)">${esc(t.bioAR)}</p>` : ""}
            </div>
          </div>
        `).join("")}
      </div>

      <h2 class="section">Team open items</h2>
      <div class="missing-block">
        <h4>Flags</h4>
        <ul>${R.teamFlags.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
      </div>
    `;
  }

  // ============================================================
  // TAB — CULTURE GALLERY
  // ============================================================
  function tabCulture() {
    const c = R.culture;
    return `
      <div class="tab-eyebrow">People · Behind the scenes</div>
      <h1 class="tab-title">~${c.estimatedCount} culture &amp; proof photos await captioning.</h1>
      <p class="tab-lede">${esc(c.note)}</p>

      <div class="card">
        <dl class="def">
          <dt>File range</dt><dd><code>${esc(c.fileRange)}</code></dd>
          <dt>Estimated count</dt><dd>~${c.estimatedCount}</dd>
          <dt>Likely mix</dt>
          <dd>${c.likelyMix.map(m => `<span class="chip">${esc(m)}</span>`).join(" ")}</dd>
        </dl>
      </div>

      <h2 class="section">Suggested use across the site</h2>
      <table class="t">
        <thead><tr><th>Placement</th><th>Rationale</th></tr></thead>
        <tbody>
          ${c.suggestedUse.map(u => `<tr><td><b>${esc(u.placement)}</b></td><td>${esc(u.rationale)}</td></tr>`).join("")}
        </tbody>
      </table>

      <h2 class="section">Captioning task</h2>
      <div class="missing-block">
        <h4>Captioning needed</h4>
        <ul><li>${esc(c.captioning)}</li></ul>
      </div>
    `;
  }

  // ============================================================
  // TAB — BLOG
  // ============================================================
  function tabBlog() {
    const b = R.blogs;
    return `
      <div class="tab-eyebrow">Voice · Long-form</div>
      <h1 class="tab-title">10 blog articles — supplied as a compressed PDF, not yet extractable.</h1>
      <p class="tab-lede">${esc(b.recommendation)}</p>

      <div class="card">
        <dl class="def">
          <dt>Source</dt><dd><code>${esc(b.source)}</code></dd>
          <dt>Parse status</dt><dd>${missChip(b.parseStatus)}</dd>
          <dt>Rule</dt><dd>${esc(b.rule)}</dd>
        </dl>
      </div>

      <h2 class="section">Placeholder structure (one row per article)</h2>
      <table class="t">
        <thead><tr><th>ID</th><th>Title (EN)</th><th>Title (AR)</th><th>Slug</th><th>Status</th></tr></thead>
        <tbody>
          ${b.placeholderStructure.map(p => `
            <tr>
              <td><code>${esc(p.id)}</code></td>
              <td>${esc(p.titleEN)}</td>
              <td class="ar" dir="rtl" style="font-family:var(--font-ar)">${esc(p.titleAR)}</td>
              <td><code>${esc(p.slug)}</code></td>
              <td>${missChip(p.status)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  // ============================================================
  // TAB — CONTACT
  // ============================================================
  function tabContact() {
    const c = R.contact;
    return `
      <div class="tab-eyebrow">Touchpoints · Contact</div>
      <h1 class="tab-title">Most contact channels are not yet on file.</h1>
      <p class="tab-lede">Confirmed: course platform host. Missing: corporate phone, WhatsApp, email, booking link, primary domain confirmation.</p>

      <h2 class="section">Found</h2>
      <table class="t">
        <thead><tr><th>Type</th><th>Value</th><th>Note</th></tr></thead>
        <tbody>
          ${c.found.map(f => `
            <tr>
              <td>${esc(f.type)}</td>
              <td>${f.value.startsWith("http") ? `<a href="${esc(f.value)}" target="_blank" rel="noopener">${esc(f.value)} ↗</a>` : esc(f.value)}</td>
              <td>${esc(f.note)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>

      <h2 class="section">Missing</h2>
      <div class="missing-block">
        <h4>Need from client</h4>
        <ul>${c.missing.map(m => `<li>${esc(m)}</li>`).join("")}</ul>
      </div>
    `;
  }

  // ============================================================
  // TAB — SOCIAL
  // ============================================================
  function tabSocial() {
    const s = R.social;
    return `
      <div class="tab-eyebrow">Touchpoints · Social</div>
      <h1 class="tab-title">No corporate Optiiimum handles confirmed yet.</h1>
      <p class="tab-lede">All social URLs in the supplied Case Studies spreadsheet are <em>client</em> accounts, usable as proof embeds on case-study pages — not as Optiiimum's own footer links.</p>

      <h2 class="section">What we have</h2>
      <table class="t">
        <thead><tr><th>Platform</th><th>Handle</th><th>Note</th></tr></thead>
        <tbody>
          ${s.found.map(f => `<tr><td>${esc(f.platform)}</td><td>${esc(f.handle)}</td><td>${esc(f.note)}</td></tr>`).join("")}
        </tbody>
      </table>

      <h2 class="section">What we need</h2>
      <div class="missing-block">
        <h4>Need from client</h4>
        <ul>${s.missing.map(m => `<li>${esc(m)}</li>`).join("")}</ul>
      </div>

      <h2 class="section">Recommendation</h2>
      <div class="card"><p>${esc(s.recommendation)}</p></div>
    `;
  }

  // ============================================================
  // TAB — CTAs & LINKS
  // ============================================================
  function tabCTAs() {
    const c = R.ctasAndLinks;
    return `
      <div class="tab-eyebrow">Touchpoints · Calls to action</div>
      <h1 class="tab-title">Five primary CTAs, two languages, mapped to placement.</h1>
      <p class="tab-lede">Two destinations are still missing (booking link, WhatsApp). Everything else is wired.</p>

      <div class="copy-compare">
        <div class="col">
          <h4>English</h4>
          <table class="t">
            <thead><tr><th>Label</th><th>Destination</th><th>Placement</th></tr></thead>
            <tbody>
              ${c.primaryCTAs.en.map(x => `
                <tr><td><b>${esc(x.label)}</b></td>
                <td>${isMissing(x.destination) ? missChip(x.destination) : `<code>${esc(x.destination)}</code>`}</td>
                <td>${esc(x.placement)}</td></tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        <div class="col ar" dir="rtl">
          <h4 style="font-family:var(--font-mono);direction:ltr">Arabic</h4>
          <table class="t" style="direction:rtl;text-align:right">
            <thead><tr><th>التسمية</th><th>الوجهة</th><th>المكان</th></tr></thead>
            <tbody>
              ${c.primaryCTAs.ar.map(x => `
                <tr><td><b>${esc(x.label)}</b></td>
                <td>${isMissing(x.destination) ? missChip(x.destination) : `<code>${esc(x.destination)}</code>`}</td>
                <td>${esc(x.placement)}</td></tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="section">Confirmed external links (${c.confirmedExternalLinks.length})</h2>
      <div class="card">
        <ul style="columns:2;column-gap:24px;margin:0;padding-left:18px">
          ${c.confirmedExternalLinks.map(u => `<li style="break-inside:avoid"><a href="${esc(u)}" target="_blank" rel="noopener">${esc(u)}</a></li>`).join("")}
        </ul>
      </div>
    `;
  }

  // ============================================================
  // TAB — ENGLISH COPY
  // ============================================================
  function tabEnglishCopy() {
    const e = R.englishCopy;
    return `
      <div class="tab-eyebrow">Voice · English</div>
      <h1 class="tab-title">${esc(e.homeHero.h1)}</h1>
      <p class="tab-lede">${esc(e.homeHero.sub)}</p>

      <h2 class="section">Navigation</h2>
      <div class="card">${e.nav.map(n => `<span class="chip">${esc(n)}</span>`).join(" ")}</div>

      <h2 class="section">Home — hero</h2>
      <div class="card">
        <dl class="def">
          <dt>Eyebrow</dt><dd>${esc(e.homeHero.eyebrow)}</dd>
          <dt>H1</dt><dd style="font-family:var(--font-serif);font-size:24px">${esc(e.homeHero.h1)}</dd>
          <dt>Sub</dt><dd>${esc(e.homeHero.sub)}</dd>
          <dt>CTA primary</dt><dd><span class="chip ink">${esc(e.homeHero.ctaPrimary)}</span></dd>
          <dt>CTA secondary</dt><dd><span class="chip">${esc(e.homeHero.ctaSecondary)}</span></dd>
        </dl>
      </div>

      <h2 class="section">Services — six pillars</h2>
      <div class="card">
        <h3 class="sub">${esc(e.services.h2)}</h3>
        <div class="grid">
          ${e.services.pillars.map(p => `
            <div style="border:1px solid var(--line);padding:14px;border-radius:var(--r)">
              <b>${esc(p.title)}</b>
              <p style="margin:6px 0 0;color:var(--ink-2)">${esc(p.body)}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <h2 class="section">Final CTA</h2>
      <div class="card">
        <h3 class="sub">${esc(e.finalCTA.h2)}</h3>
        <p>${esc(e.finalCTA.sub)}</p>
        <span class="chip ink">${esc(e.finalCTA.cta)}</span>
      </div>

      <h2 class="section">Voice notes</h2>
      <ul class="notes long-copy">${e.voiceNotes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>
    `;
  }

  // ============================================================
  // TAB — ARABIC COPY
  // ============================================================
  function tabArabicCopy() {
    const a = R.arabicCopy;
    return `
      <div class="tab-eyebrow">Voice · العربية</div>
      <h1 class="tab-title ar" dir="rtl">${esc(a.homeHero.h1)}</h1>
      <p class="tab-lede ar" dir="rtl">${esc(a.homeHero.sub)}</p>

      <h2 class="section">التنقّل</h2>
      <div class="card ar" dir="rtl">
        ${a.nav.map(n => `<span class="chip">${esc(n.ar)} <span style="opacity:.55;font-family:var(--font-mono);direction:ltr">${esc(n.en)}</span></span>`).join(" ")}
      </div>

      <h2 class="section">الصفحة الرئيسية — البطل</h2>
      <div class="card ar" dir="rtl">
        <dl class="def">
          <dt>Eyebrow</dt><dd>${esc(a.homeHero.eyebrow)}</dd>
          <dt>H1</dt><dd style="font-family:var(--font-ar);font-size:24px">${esc(a.homeHero.h1)}</dd>
          <dt>Sub</dt><dd>${esc(a.homeHero.sub)}</dd>
          <dt>CTA رئيسي</dt><dd><span class="chip ink">${esc(a.homeHero.ctaPrimary)}</span></dd>
          <dt>CTA ثانوي</dt><dd><span class="chip">${esc(a.homeHero.ctaSecondary)}</span></dd>
        </dl>
      </div>

      <h2 class="section">الخدمات — ستة محاور</h2>
      <div class="card ar" dir="rtl">
        <h3 class="sub" style="font-family:var(--font-ar)">${esc(a.services.h2)}</h3>
        <div class="grid">
          ${a.services.pillars.map(p => `
            <div style="border:1px solid var(--line);padding:14px;border-radius:var(--r)">
              <b>${esc(p.title)}</b>
              <p style="margin:6px 0 0;color:var(--ink-2)">${esc(p.body)}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <h2 class="section">CTA النهائي</h2>
      <div class="card ar" dir="rtl">
        <h3 class="sub" style="font-family:var(--font-ar)">${esc(a.finalCTA.h2)}</h3>
        <p>${esc(a.finalCTA.sub)}</p>
        <span class="chip ink">${esc(a.finalCTA.cta)}</span>
      </div>

      <h2 class="section">ملاحظات RTL</h2>
      <ul class="notes long-copy ar" dir="rtl">${a.rtlNotes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>
    `;
  }

  // ============================================================
  // TAB — PAGE MAPPING
  // ============================================================
  function tabPageMapping() {
    return `
      <div class="tab-eyebrow">Build plan · Pages</div>
      <h1 class="tab-title">Twelve pages. Each one mapped to its assets, copy, and CTA.</h1>
      <p class="tab-lede">This is the bridge between the audit (what we have) and the build (what gets built).</p>

      <div style="display:flex;flex-direction:column;gap:14px">
        ${R.pageMapping.map(p => `
          <div class="card">
            <div class="case-head">
              <div>
                <div class="industry">${esc(p.page)}</div>
                <h3 style="font-family:var(--font-serif);font-weight:400;font-size:24px;margin:4px 0 0">${esc(p.goal)}</h3>
              </div>
              <div class="chip ink">${esc(p.cta)}</div>
            </div>
            <hr class="soft" />
            <dl class="def">
              <dt>Sections</dt>
              <dd><ol style="margin:0;padding-left:18px">${p.sections.map(s => `<li>${esc(s)}</li>`).join("")}</ol></dd>
              <dt>Assets needed</dt>
              <dd>${p.assetsNeeded.map(a => `<span class="chip">${esc(a)}</span>`).join(" ")}</dd>
              ${p.copyEN ? `<dt>Copy (EN)</dt><dd><code>${esc(p.copyEN)}</code></dd>` : ""}
              ${p.copyAR ? `<dt>Copy (AR)</dt><dd><code>${esc(p.copyAR)}</code></dd>` : ""}
              ${p.seo ? `<dt>SEO seed</dt><dd>${esc(p.seo)}</dd>` : ""}
            </dl>
          </div>
        `).join("")}
      </div>
    `;
  }

  // ============================================================
  // TAB — SEO PLAN
  // ============================================================
  function tabSEO() {
    const s = R.seoPlan;
    return `
      <div class="tab-eyebrow">Build plan · SEO</div>
      <h1 class="tab-title">Bilingual, market-segmented, schema-rich.</h1>
      <p class="tab-lede">Egypt + Gulf in Arabic. Egypt + Europe + North America in English. Hreflang on every page pair.</p>

      <h2 class="section">Target markets</h2>
      <div class="card">${s.targetMarkets.map(m => `<span class="chip">${esc(m)}</span>`).join(" ")}</div>

      <h2 class="section">Primary keywords</h2>
      <div class="grid two">
        <div class="card">
          <h3 class="sub">English</h3>
          <ul class="notes">${s.primaryKeywordsEN.map(k => `<li><code>${esc(k)}</code></li>`).join("")}</ul>
        </div>
        <div class="card ar" dir="rtl">
          <h3 class="sub" style="font-family:var(--font-ar)">العربية</h3>
          <ul class="notes">${s.primaryKeywordsAR.map(k => `<li><code style="direction:rtl;text-align:right">${esc(k)}</code></li>`).join("")}</ul>
        </div>
      </div>

      <h2 class="section">Long-tail seeds</h2>
      <div class="card"><ul class="notes">${s.longTail.map(k => `<li>${esc(k)}</li>`).join("")}</ul></div>

      <h2 class="section">URL structure</h2>
      <div class="card">
        <p>${esc(s.URLstructure.strategy)}</p>
        <ul class="notes">${s.URLstructure.example.map(k => `<li><code>${esc(k)}</code></li>`).join("")}</ul>
      </div>

      <h2 class="section">Schema</h2>
      <div class="card"><ul class="notes">${s.schemaRecommendations.map(k => `<li>${esc(k)}</li>`).join("")}</ul></div>

      <h2 class="section">Content engine</h2>
      <div class="card"><ul class="notes">${s.contentEngine.map(k => `<li>${esc(k)}</li>`).join("")}</ul></div>
    `;
  }

  // ============================================================
  // TAB — MISSING ASSETS (master list)
  // ============================================================
  function tabMissing() {
    const m = R.missing;
    const groups = [
      ["Contact",          m.contact],
      ["Social",           m.social],
      ["Ambassadors",      m.ambassadors],
      ["Case studies",     m.caseStudies],
      ["Client logos",     m.clientLogos],
      ["Courses",          m.courses],
      ["Team",             m.team],
      ["Culture / gallery",m.culture],
      ["Blog articles",    m.blogs],
      ["Brand",            m.brand]
    ];
    const total = groups.reduce((n, [, list]) => n + list.length, 0);
    return `
      <div class="tab-eyebrow">Build plan · Open items</div>
      <h1 class="tab-title">${total} items to gather before build phase begins.</h1>
      <p class="tab-lede">Most are quick — a phone number, a URL, a thumbnail. Two are non-trivial: bios for 25 team members and captions for ~145 culture photos.</p>

      <div class="summary-strip">
        ${groups.map(([label, list]) => `
          <div class="num"><b>${list.length}</b><span>${esc(label)}</span></div>
        `).join("")}
      </div>

      ${groups.map(([label, list]) => `
        <h2 class="section">${esc(label)}</h2>
        <div class="missing-block">
          <h4>${list.length} item${list.length===1?"":"s"}</h4>
          <ul>${list.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>
      `).join("")}
    `;
  }

  // ============================================================
  // TAB CONFIG
  // ============================================================
  const TABS = [
    { group: "OVERVIEW",     id: "overview",   label: "Overview",                 render: tabOverview },

    { group: "BRAND",        id: "brand",      label: "Logos & identity",         render: tabBrand },
    { group: "BRAND",        id: "colors",     label: "Colour system",            render: tabColors },
    { group: "BRAND",        id: "themes",     label: "Light & dark",             render: tabThemes },

    { group: "PROOF",        id: "cases",      label: "Case studies",             render: tabCaseStudies },
    { group: "PROOF",        id: "ambassadors",label: "Ambassadors",              render: tabAmbassadors },
    { group: "PROOF",        id: "clients",    label: "Client logos",             render: tabClientLogos },

    { group: "PRODUCTS",     id: "courses",    label: "Courses",                  render: tabCourses },

    { group: "PEOPLE",       id: "team",       label: "Team",                     render: tabTeam },
    { group: "PEOPLE",       id: "culture",    label: "Culture & gallery",        render: tabCulture },

    { group: "VOICE",        id: "english",    label: "English copy",             render: tabEnglishCopy },
    { group: "VOICE",        id: "arabic",     label: "Arabic copy",              render: tabArabicCopy },
    { group: "VOICE",        id: "blog",       label: "Blog articles",            render: tabBlog },

    { group: "TOUCHPOINTS",  id: "contact",    label: "Contact",                  render: tabContact },
    { group: "TOUCHPOINTS",  id: "social",     label: "Social",                   render: tabSocial },
    { group: "TOUCHPOINTS",  id: "ctas",       label: "CTAs & links",             render: tabCTAs },

    { group: "BUILD PLAN",   id: "pages",      label: "Page mapping",             render: tabPageMapping },
    { group: "BUILD PLAN",   id: "seo",        label: "SEO plan",                 render: tabSEO },
    { group: "BUILD PLAN",   id: "missing",    label: "Missing assets",           render: tabMissing }
  ];

  // ============================================================
  // BOOT
  // ============================================================
  function boot() {
    const nav = document.getElementById("nav");
    const main = document.getElementById("main");

    // Build sidebar
    const grouped = {};
    TABS.forEach((t, i) => {
      (grouped[t.group] = grouped[t.group] || []).push({ ...t, index: i });
    });
    nav.innerHTML = Object.entries(grouped).map(([g, items]) => `
      <h6>${esc(g)}</h6>
      <div class="nav-list">
        ${items.map(t => `
          <button class="nav-item" data-tab="${esc(t.id)}">
            <span class="num">${String(t.index + 1).padStart(2, "0")}</span>
            <span>${esc(t.label)}</span>
          </button>
        `).join("")}
      </div>
    `).join("");

    // Build all tab panels
    main.innerHTML = TABS.map(t => `<section class="tab" id="tab-${esc(t.id)}">${t.render()}</section>`).join("");

    // Activate
    function activate(id) {
      document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.tab === id));
      document.querySelectorAll(".tab").forEach(p => p.classList.toggle("active", p.id === `tab-${id}`));
      window.scrollTo({ top: 0, behavior: "instant" });
      try { history.replaceState(null, "", "#" + id); } catch (e) {}
    }
    nav.addEventListener("click", (e) => {
      const btn = e.target.closest(".nav-item");
      if (btn) activate(btn.dataset.tab);
    });

    // Open from hash or default
    const hash = (location.hash || "").replace("#", "");
    activate(TABS.find(t => t.id === hash) ? hash : "overview");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
