/* ============================================================
   OPTIIIMUM — CONTENT REGISTRY
   Phase 1 deliverable: audit + organize. No website built.
   All content extracted from project uploads only.
   Anything labeled MISSING needs to be exported from Drive.
   ============================================================ */

window.REGISTRY = {

  meta: {
    project: "Optiiimum — Premium Digital Growth Agency",
    phase: "Phase 1 — Asset Audit & Content Registry",
    date: "May 2026",
    sourceOfTruth: "Google Drive folder (not directly accessible from this environment). Audit conducted on uploaded files only.",
    driveLink: "https://drive.google.com/drive/folders/1IUSLokVqLuVQaqaSxw951-Nemr761BOu",
    totalUploadedFiles: 239,
    languages: ["English", "Arabic"],
    markets: ["Egypt", "Gulf (KSA, UAE, Qatar, Kuwait)", "Europe", "Canada", "North America"],
    positioning: "A digital growth agency that builds systems, not just social media content."
  },

  // ============================================================
  // TAB 1 — BRAND ASSETS
  // ============================================================
  brandAssets: {
    logoSet: [
      { id: "logo-black",   file: "assets/logo-black.png",          variant: "Wordmark — Black",      use: "Light/cream backgrounds. Default mark for light theme.", source: "Logos-01.png" },
      { id: "logo-white",   file: "assets/logo-white.png",          variant: "Wordmark — White",      use: "Dark backgrounds. Default mark for dark theme.",          source: "Logos-02.png" },
      { id: "logo-grey",    file: "assets/logo-grey.png",           variant: "Wordmark — Grey",       use: "Subtle/secondary placements (footers, watermarks).",      source: "Logos-03.png" },
      { id: "mark-black",   file: "assets/mark-black.png",          variant: "Mark only — Black 'O'", use: "Favicon, app icon, social avatar (light).",                source: "Logos-04.png" },
      { id: "mark-white",   file: "assets/mark-white.png",          variant: "Mark only — White 'O'", use: "Favicon/avatar on dark.",                                  source: "Logos-05.png" },
      { id: "mark-grey",    file: "assets/mark-grey.png",           variant: "Mark only — Grey 'O'", use: "Disabled / muted state.",                                  source: "Logos-06.png" },
      { id: "mark-gradient",file: "assets/mark-gradient.png",       variant: "Mark — Gradient fill", use: "Hero / brand reveal moments. The signature mark.",         source: "Logos-07.png" },
      { id: "mark-grad-out",file: "assets/mark-gradient-outline.png",variant:"Mark — Gradient outline",use:"Light/airy hero variants, animation end states.",          source: "Logos-08.png" }
    ],
    gradient: {
      file: "assets/gradient.png",
      sampledStops: [
        { name: "TL — Cream Peach", hex: "#FDD196" },
        { name: "TR — Cyan",        hex: "#00FEFF" },
        { name: "BL — Coral",       hex: "#FF966D" },
        { name: "BR — Magenta",     hex: "#E555C8" },
        { name: "Center — Mist",    hex: "#9DB8C8" }
      ],
      cssRecommendation: "background: conic-gradient(from 220deg at 50% 50%, #FDD196, #00FEFF, #54B3EC, #BE6FD2, #E555C8, #FA58A4, #FF966D, #FDD196);",
      usage: "Reserved for: brand reveal animation, hero accent moments, the 'O' mark, premium dividers. Never as full-page background. Never behind body copy."
    },
    iconography: {
      status: "MISSING — no icon set found in uploads.",
      recommendation: "Use Lucide or Phosphor (Light) at 1.5px stroke for premium feel. Pair with the gradient sparingly for hero/feature icons."
    },
    patterns: {
      status: "Conceptual — no pattern files supplied.",
      recommendation: "Suggested patterns: (1) thin connected-line system inspired by 'systemized growth'; (2) a faint concentric-arc motif (already used in Dina Asaad case study); (3) the 'O' loop as a watermark at 4–8% opacity."
    },
    visualStyleNotes: [
      "Photography: warm, human, real — never stock. Real team, real clients, real screenshots of viral content.",
      "Logo lockup: the wordmark is bold sans-serif lowercase. The triple-i in 'optiiimum' is the signature — never alter character spacing.",
      "TM mark sits to the lower-right of the wordmark/glyph. Always include on first usage per page.",
      "The 'O' loop is the single most ownable element. Treat it as the equivalent of the Nike swoosh — it can stand alone.",
      "Gradient is sacred. Use sparingly so it remains a moment, not a texture.",
      "Premium = restraint. Most surfaces should be near-white or near-black. The colour comes from the gradient as accent."
    ]
  },

  // ============================================================
  // TAB 2 — BRAND COLORS
  // ============================================================
  brandColors: {
    primary: { name: "Optiiimum Ink",   hex: "#0A0A0A", role: "Primary text, primary marks on light." },
    secondary:{ name: "Soft White",     hex: "#FAFAF7", role: "Light theme background." },
    accentGradient: {
      name: "Optiiimum Spectrum",
      stops: ["#FDD196","#FF966D","#E555C8","#BE6FD2","#54B3EC","#00FEFF"],
      role: "Brand accent — the gradient. Used as the wash inside the 'O', on hero accents, on the brand reveal."
    },
    accentSolid: { name: "Spectrum Magenta", hex: "#E555C8", role: "Pull a single hue from the gradient when a one-color accent is needed (CTA hover glow, link underline)." },
    light: {
      bg:           { hex: "#FAFAF7", note: "Warm soft white. Body background." },
      bgSecondary:  { hex: "#F1EFE9", note: "Section dividers, subtle bands." },
      surface:      { hex: "#FFFFFF", note: "Cards, dialogs." },
      surfaceElev:  { hex: "#FFFFFF", note: "Elevated cards (with 0 1px 2px rgba(0,0,0,.04) + 0 8px 24px rgba(0,0,0,.06))." },
      textPrimary:  { hex: "#0A0A0A", note: "Headlines, body." },
      textSecondary:{ hex: "#3D3D3A", note: "Subheads, labels." },
      textMuted:    { hex: "#7A7A74", note: "Meta, captions." },
      border:       { hex: "#E6E3DB", note: "Hairlines, dividers." },
      cta:          { hex: "#0A0A0A", note: "CTA fill — black on white. Premium and unambiguous." },
      ctaHover:     { hex: "#1F1F1F", note: "+ subtle gradient glow on hover." },
      highlight:    { hex: "#E555C8", note: "Selection / active link." },
      stat:         { hex: "#0A0A0A", note: "Big numbers — black, no gradient. Lets the metric carry the weight." },
      success:      { hex: "#1E6B3F" },
      error:        { hex: "#A02828" }
    },
    dark: {
      bg:           { hex: "#0B0B0B", note: "Deep near-black. Not pure #000 — slight warmth." },
      bgSecondary:  { hex: "#141413", note: "Section bands." },
      surface:      { hex: "#161616", note: "Cards." },
      surfaceElev:  { hex: "#1C1C1B", note: "Modals, dropdowns." },
      textPrimary:  { hex: "#F5F2EC", note: "Warm off-white text." },
      textSecondary:{ hex: "#B8B5AE" },
      textMuted:    { hex: "#7A7770" },
      border:       { hex: "#2A2A28" },
      cta:          { hex: "#F5F2EC", note: "Inverted — light pill on dark." },
      ctaHover:     { hex: "#FFFFFF" },
      glow:         { hex: "rgba(229,85,200,0.35)", note: "Soft magenta glow behind the 'O' on hero." },
      highlight:    { hex: "#FF8FE0" },
      stat:         { hex: "#F5F2EC" },
      success:      { hex: "#5BC489" },
      error:        { hex: "#E07070" }
    },
    usageRules: [
      "Light theme = warm soft-white backgrounds, not stark white. Black text. Gradient only as accent.",
      "Dark theme = warm near-black, never pure #000. Warm off-white text. Gradient becomes more luminous; add 8–14% glow behind it.",
      "Client logos: in light theme, render at full color OR as #1F1F1F monochrome wall. In dark theme, render as #B8B5AE monochrome wall (preserves consistency, premium feel). Hover reveals full color.",
      "Screenshots/proof: in dark theme, frame in a 1px #2A2A28 border at 12px radius. In light theme, 1px #E6E3DB border + 8px shadow.",
      "Big stat numbers stay monochrome. Don't gradient-fill numbers — it cheapens them."
    ]
  },

  // ============================================================
  // TAB 3 — CONTACT INFORMATION
  // ============================================================
  contact: {
    found: [
      { type: "Course platform (host)", value: "https://jozeph-ezzat-danial-s-school.teachable.com", note: "Teachable subdomain hosting all 12 Optiiimum courses." },
      { type: "Linktree (Diana Clinics)",  value: "https://alfan.link/dr.diana.clinic",   note: "From Data & Results.xlsx — client linktree, not Optiiimum corporate." },
      { type: "Linktree (Dr. Peter)",      value: "https://alfan.link/dr.petermouris",    note: "Client linktree." },
      { type: "Linktree (Dr. Bassant)",    value: "https://alfan.link/dr.basant.habash",  note: "Client linktree." },
      { type: "Linktree (Dalia Hosny)",    value: "https://alfan.link/dalia.hosny",       note: "Client linktree." },
      { type: "Linktree (Sky Point)",      value: "https://alfan.link/sky_point.fi",      note: "Client linktree (Finland tourism)." },
      { type: "Domain (referenced)",       value: "optiiimum.com",                         note: "Mentioned in Dina Asaad case study CTA. Status of this domain not confirmed in uploads." }
    ],
    missing: [
      "Optiiimum primary contact email (sales / hello / info)",
      "Optiiimum WhatsApp Business number",
      "Optiiimum primary phone number",
      "Booking / discovery-call link (Calendly, Cal.com, or similar)",
      "Contact form endpoint (Formspree, custom, or CMS)",
      "Office address (Cairo HQ — implied but not provided)",
      "Office address (Gulf presence — if any)",
      "Confirmation that optiiimum.com is owned and live"
    ]
  },

  // ============================================================
  // TAB 4 — SOCIAL MEDIA LINKS
  // ============================================================
  social: {
    found: [
      { platform: "TikTok",   handle: "(client accounts only — no Optiiimum corporate handle confirmed)", url: "—", note: "vt.tiktok.com links throughout case study spreadsheet point to client viral videos." },
      { platform: "Instagram",handle: "(client accounts only)",   url: "—", note: "instagram.com/reel links in case study sheet are client posts." },
      { platform: "Facebook", handle: "(client accounts only)",   url: "—", note: "facebook.com/share links in case study sheet are client posts." }
    ],
    missing: [
      "Optiiimum corporate Instagram",
      "Optiiimum corporate Facebook page",
      "Optiiimum corporate TikTok",
      "Optiiimum corporate LinkedIn (critical for B2B / enterprise positioning)",
      "Optiiimum corporate YouTube",
      "Optiiimum corporate X / Twitter",
      "Optiiimum WhatsApp Business link",
      "Optiiimum Threads (optional)",
      "Optiiimum Telegram (optional, useful for course community)"
    ],
    recommendation: "All client viral video URLs in the Case Studies xlsx (98 video links across 9 sheets) are usable as proof embeds — cleared by the client relationship. They should be referenced from case study pages, not the global social footer."
  },

  // ============================================================
  // TAB 5 — AMBASSADORS
  // ============================================================
  // The case-study clients double as ambassadors. Plus a few
  // headshot files (dr mai, hesham, نور الدين, هتون) appear without
  // an attached testimonial doc — flagged as missing copy.
  ambassadors: [
    {
      name: "Dr. Diana Samir",
      field: "Aesthetics & Wellness · Therapeutic Nutrition",
      market: "Egypt / Cairo",
      image: "MISSING — no diana headshot found (only diana logo.png, which is a clinic mark, not a portrait).",
      quoteEN: "From a quarter-million fake followers to 250,000+ real believers — and a self-sustaining content engine.",
      quoteAR: "من أرقام جوفاء إلى ربع مليون متابع حقيقي يثقون في خبرتها.",
      placement: "Home — Ambassador rail · Case Studies — featured",
      cardStyle: "Portrait card · large stat tile (250K) · play button overlay on viral clip"
    },
    {
      name: "Dr. Dina Asaad",
      field: "Therapy & NLP",
      market: "Egypt · Gulf",
      image: "uploads/dina.png",
      quoteEN: "The therapist who feared the camera now inspires thousands to seek the help they need.",
      quoteAR: "المعالجة التي خافت من الكاميرا أصبحت تلهم الآلاف ليبحثوا عن المساعدة.",
      placement: "Home — featured · Case Studies — primary",
      cardStyle: "Portrait + arc motif (forest/copper palette already designed in dina-asaad-case-study.html)"
    },
    {
      name: "Dr. Peter Moris",
      field: "Plastic Surgery · Medical Tourism",
      market: "Egypt · Gulf",
      image: "MISSING — no peter headshot found.",
      quoteEN: "From no presence to no availability in 9 months. 50%+ of patients now fly in from the Gulf.",
      quoteAR: "من غياب رقمي إلى جدول مواعيد ممتلئ خلال 9 أشهر. أكثر من 50٪ من المرضى يأتون من الخليج.",
      placement: "Case Studies · Services > Personal Brand",
      cardStyle: "Portrait card with medical-tourism stat strip (80% rise male patients · 50% Gulf · 9 months)"
    },
    {
      name: "Dr. Bassant Habash",
      field: "Nutritionist · Health & Wellness",
      market: "Egypt / Mansoura",
      image: "MISSING — no bassant headshot found.",
      quoteEN: "Mansoura stopped being a ceiling. National media came to her.",
      quoteAR: "المنصورة لم تعد سقفًا. الإعلام الوطني جاء إليها.",
      placement: "Home — Ambassador rail · Case Studies",
      cardStyle: "Portrait + 'fully booked 2 weeks ahead' callout"
    },
    {
      name: "Dalia Hosny",
      field: "Social Entrepreneurship · Women Empowerment",
      market: "Egypt / Alexandria",
      image: "MISSING — no dalia headshot found.",
      quoteEN: "We didn't build a brand. We amplified a movement.",
      quoteAR: "لم نبنِ علامة. ضخّمنا حركة.",
      placement: "Case Studies (movement/cause section) · Home — emotional anchor",
      cardStyle: "Portrait + craft-product imagery, warmer palette"
    },
    {
      name: "Mrs. Auzonia Kamel",
      field: "Educational Content · Teacher Training",
      market: "Egypt",
      image: "uploads/miss ouzoinia.png",
      quoteEN: "At 63, she didn't start over. She started something no one had ever done before.",
      quoteAR: "في الثالثة والستين، لم تبدأ من جديد — بدأت شيئًا لم يفعله أحد من قبل.",
      placement: "Home — emotional anchor · Case Studies · Courses (سبورة المحتوى)",
      cardStyle: "Portrait + age-as-authority stat block (63 · 77.4K · first-of-category)"
    },
    {
      name: "Jozeph Ezzat",
      field: "Digital Marketing Education · Content Creator",
      market: "Egypt · Arab World",
      image: "uploads/Jozeph -Managing irector.jpg",
      role: "Also Managing Director of Optiiimum.",
      quoteEN: "978,000 followers. 40,000 students. 10,000 lives changed. Built from zero in 50 months.",
      quoteAR: "978 ألف متابع. 40 ألف طالب. 10 آلاف حياة تغيّرت. من الصفر، في 50 شهرًا.",
      placement: "Home — flagship founder/ambassador moment · About · Courses",
      cardStyle: "Editorial portrait + four-stat strip · the only ambassador that doubles as the founder reveal"
    },
    {
      name: "Shift Tamrid",
      field: "Nursing Media · Podcast",
      market: "Egypt · Arab World",
      image: "uploads/shift تمريض.png",
      quoteEN: "A profession of millions. Zero platforms. Until now.",
      quoteAR: "مهنة بالملايين. صفر منصات. حتى الآن.",
      placement: "Case Studies (B2B / institutional section)",
      cardStyle: "Logo card + viral 1M-view callout — institutional rather than personal"
    },
    {
      name: "DSE — Deutsche Sprachförderung Egypt",
      field: "Education · Vocational Migration to Germany",
      market: "Egypt · Germany",
      image: "MISSING — no DSE logo found in uploads.",
      quoteEN: "From 2,000 followers to 51,000 in 13 months — a community of Egyptian youth on their way to Germany.",
      quoteAR: "من 2000 متابع إلى 51 ألفًا خلال 13 شهرًا — مجتمع من الشباب المصري في طريقه إلى ألمانيا.",
      placement: "Case Studies (institutional/cause)",
      cardStyle: "Logo + Egypt→Germany visual journey strip"
    },
    {
      name: "Dr. Mai",
      field: "Unknown — appears in client/ambassador headshot folder",
      market: "Likely Egypt",
      image: "uploads/dr mai.png",
      quoteEN: "MISSING — no testimonial document supplied.",
      quoteAR: "MISSING — يتطلب نص شهادة من الدكتورة مي.",
      placement: "Pending until copy is provided.",
      cardStyle: "Pending."
    },
    {
      name: "Hesham",
      field: "Unknown",
      market: "Unknown",
      image: "uploads/hesham.png",
      quoteEN: "MISSING — no testimonial document supplied.",
      quoteAR: "MISSING — يتطلب نص شهادة.",
      placement: "Pending.",
      cardStyle: "Pending."
    },
    {
      name: "Noureddine El Sherif (نور الدين الشريف)",
      field: "Unknown — possibly cultural/celebrity ambassador",
      market: "Egypt",
      image: "uploads/نور الدين الشريف.png",
      quoteEN: "MISSING — no testimonial document supplied.",
      quoteAR: "MISSING — يتطلب نص شهادة.",
      placement: "Likely high-prestige ambassador rail if testimonial is supplied.",
      cardStyle: "Pending."
    },
    {
      name: "Hatoon (هتون)",
      field: "Unknown",
      market: "Likely Gulf — name is common in KSA",
      image: "uploads/هتون.png",
      quoteEN: "MISSING — no testimonial document supplied.",
      quoteAR: "MISSING — يتطلب نص شهادة.",
      placement: "Pending.",
      cardStyle: "Pending."
    }
  ],

  // ============================================================
  // TAB 6 — CASE STUDIES
  // ============================================================
  caseStudies: [
    {
      id: "diana-clinics",
      client: "Diana Clinics — Dr. Diana Samir",
      industry: "Aesthetics & Wellness · Therapeutic Nutrition",
      slug: "/case-studies/diana-clinics",
      timeline: "18 Months",
      starting: "Audience loaded with fake purchased followers · zero authentic engagement · no brand identity · severe camera shyness",
      challenge: "Three walls: fake legacy followers sabotaging the algorithm; no brand identity; camera shyness with poor production setup. Not a content refresh — a full rebuild of presence, identity, and the person.",
      strategy: "Solve for the human first. Coached camera confidence, redesigned filming environment with available lighting/locations. Built the brand from zero (visual + tone + positioning). Platform-by-platform content architecture with hook-first script training. Released the fake numbers and rebuilt from truth.",
      execution: "Brand Book · Social Media Launch · Audience Audit & Fake Follower Removal · Custom Script Creation · Full Project Development & Strategic Guidance.",
      results: {
        followers: "240,600+ authentic (from 0)",
        videos: "400+",
        viral: "1 video over 2M · 3 videos over 1M",
        avgViews: "47,800 / video",
        conversion: "High — self-sustaining content engine, audience now books appointments and refers"
      },
      proof: "Existing HTML draft: uploads/dina-asaad-case-study.html shares the visual system; Diana page has not yet been built but prior alfan.link is cleared.",
      summaryEN: "From a quarter-million fake followers to 240,600+ real believers in 18 months. A full rebuild of identity, content, and confidence — that now runs on its own.",
      summaryAR: "من أرقام جوفاء إلى أكثر من 240 ألف متابع حقيقي في 18 شهرًا. إعادة بناء كاملة للهوية والمحتوى والثقة — تعمل الآن من تلقاء نفسها.",
      homeHighlight: "240K · authentic followers · self-running content engine",
      cta: "See how we rebuilt Diana → /case-studies/diana-clinics"
    },
    {
      id: "dina-asaad",
      client: "Dr. Dina Asaad — Therapist & NLP Trainer",
      industry: "Therapy · NLP · Mental Health",
      slug: "/case-studies/dina-asaad",
      timeline: "6 Months",
      starting: "Zero followers. Zero presence. Zero content. Profound camera shyness — psychological barrier, not casual reluctance.",
      challenge: "Four barriers: zero digital presence, severe camera shyness, highly competitive niche (saturated mental health space), and the credibility-vs-virality tension (therapists risk diluting professionalism through superficial content).",
      strategy: "Three pillars — (I) Directed Comfort: the Photoshoot Protocol designing psychological safety, not just lighting; (II) Hook-First Storytelling using shock hooks that respect substance, not replace it; (III) Authority Architecture weaving NLP credentials and warmth into every piece.",
      execution: "Brand Book · Visual identity · Tone/positioning · Custom hook training · Cadence: zero publishing pressure month 1, debut month 2, momentum month 3, viral inflection months 4–5, 100K + fully booked month 6.",
      results: {
        followers: "~100,000 across all platforms (from 0)",
        videos: "100+",
        viral: "Multiple pieces at viral-level distribution",
        bookings: "Therapy schedule fully booked · NLP programmes at capacity"
      },
      proof: "uploads/dina-asaad-case-study.html (full case study HTML already produced — uses cream/forest/copper palette, can be re-skinned to brand spectrum or kept as a per-client themed page).",
      summaryEN: "The voice she never knew she had. Six months from zero to 100K — and a fully booked schedule.",
      summaryAR: "الصوت الذي لم تعرف أنها تملكه. ستة أشهر من الصفر إلى 100 ألف — وجدول مواعيد ممتلئ.",
      homeHighlight: "100K · 6 months · fear → fully booked",
      cta: "Read Dina's transformation → /case-studies/dina-asaad"
    },
    {
      id: "peter-moris",
      client: "Dr. Peter Moris — Plastic Surgeon",
      industry: "Plastic Surgery · Medical Tourism",
      slug: "/case-studies/peter-moris",
      timeline: "9 Months (since June 2025)",
      starting: "Zero social, zero brand identity. Predominantly local female patient base. No Gulf market presence.",
      challenge: "Plastic surgery is one of the most sensitive content categories on social — getting tone wrong damages trust irreparably. Plus an untapped opportunity: male aesthetic procedures (gynecomastia, body sculpting) that no surgeon was speaking to directly. Plus untapped Gulf medical tourism.",
      strategy: "Surgical-precision content scripting balancing education / conversion / reputation. Targeted male aesthetic audience explicitly. Built medical tourism packages (procedure + travel + aftercare).",
      execution: "Brand Book · Social Media Launch · Custom Script Creation · Project Development & Strategic Guidance.",
      results: {
        followers: "19,000+ in 9 months (from 0)",
        videos: "111+",
        avgViews: "44,100",
        male: "+80% rise in male patients",
        gulf: "50%+ patient base now from Gulf",
        bookings: "Fully booked schedule · structured medical tourism packages live"
      },
      proof: "alfan.link/dr.petermouris — confirmed live linktree.",
      summaryEN: "From no presence to no availability in 9 months. Half his patients now fly in from the Gulf.",
      summaryAR: "من غياب رقمي إلى جدول ممتلئ خلال 9 أشهر. نصف مرضاه الآن يأتون من الخليج.",
      homeHighlight: "19K · 50% Gulf patients · 9 months",
      cta: "See the medical tourism rebuild → /case-studies/peter-moris"
    },
    {
      id: "bassant-habash",
      client: "Dr. Bassant Habash — Nutritionist",
      industry: "Nutrition · Health & Wellness · Media",
      slug: "/case-studies/bassant-habash",
      timeline: "13 Months",
      starting: "Mansoura-based nutritionist with credentials and no platform. Outside Cairo = outside the conversation, historically.",
      challenge: "Geography (non-Cairo perceived as ceiling) · saturated misinformation-heavy nutrition space · ceiling was never just a full appointment book, it was influence (TV, events, movement-building) which had to be built from scratch.",
      strategy: "Build a national platform from a regional base. Trust over volume — be more useful, more consistent, more trusted than the diet-trend feed. Calibrate the brand to be ready for media and events when the demand showed up.",
      execution: "Brand Book · Social Media Launch · Custom Script Creation · Project Development & Strategic Guidance.",
      results: {
        followers: "96,800+ (from 0)",
        videos: "264+",
        viral: "1 video over 2M · 1 over 1M",
        avgViews: "39,400",
        bookings: "Fully booked 2 weeks in advance",
        media: "Television programs · live events · recognized national icon in field"
      },
      proof: "alfan.link/dr.basant.habash — linktree live.",
      summaryEN: "Mansoura stopped being a ceiling. National media came to her.",
      summaryAR: "المنصورة لم تعد سقفًا. الإعلام الوطني جاء إليها.",
      homeHighlight: "96.8K · TV + events · 13 months",
      cta: "How geography stopped being a ceiling → /case-studies/bassant-habash"
    },
    {
      id: "dalia-hosny",
      client: "Dalia Hosny — Social Entrepreneur",
      industry: "Social Entrepreneurship · Women Empowerment · Handcraft Economy",
      slug: "/case-studies/dalia-hosny",
      timeline: "12 Months",
      starting: "A movement doing real work for women breadwinners — quietly, with no visibility match.",
      challenge: "Mission and craft were extraordinary, but content quality didn't match the power of the story. Make what already existed impossible to ignore.",
      strategy: "Identity first (Brand Book about dignity, not pity). Cinematic-quality production as a form of respect. Storytelling that elevated the women themselves, not Dalia's role.",
      execution: "Brand Book · Social Media Build · Cinematic Content Production · Audience Growth · Strategic Guidance.",
      results: {
        followers: "56,800+ authentic",
        videos: "60+ produced",
        avgViews: "36,600 (depth-of-engagement hero metric)",
        recognition: "Recognized national voice in women empowerment"
      },
      proof: "alfan.link/dalia.hosny — linktree live.",
      summaryEN: "We didn't build a brand. We amplified a movement.",
      summaryAR: "لم نبنِ علامة. ضخّمنا حركة.",
      homeHighlight: "56.8K · 36.6K avg views · cinematic mission storytelling",
      cta: "Read the movement → /case-studies/dalia-hosny"
    },
    {
      id: "auzonia-kamel",
      client: "Mrs. Auzonia Kamel",
      industry: "Educational Content · Teacher Training · Online Learning",
      slug: "/case-studies/auzonia-kamel",
      timeline: "Approx. 12+ months (specific months not stated in doc)",
      starting: "Decades of classroom expertise, no digital platform, no brand. Age (63) perceived as a barrier in a youth-dominated content landscape.",
      challenge: "Build the first online educational creator brand for teachers in Egypt — a category that didn't exist — around a 63-year-old woman the algorithm 'shouldn't' favour.",
      strategy: "Frame age as authority, not as barrier. Storytelling-driven video production. Launch 'سبورة المحتوى' as the proof course. Speak directly to teachers' permanent emotional truths (overworked, underrespected, wanting to matter to a student).",
      execution: "Brand Book · Social Media Launch · Storytelling Video Production · Content Strategy · Course Launch (سبورة المحتوى) · Strategic Guidance.",
      results: {
        followers: "77,400+ (from 0)",
        videos: "200+",
        viral: "1 video over 2M · 1 over 1M",
        avgViews: "30,000",
        category: "First educational content creator for teachers in Egypt — category creation"
      },
      proof: "Course landing page live (see Courses tab — سبورة المحتوى).",
      summaryEN: "At 63, she didn't start over. She started something no one had ever done before.",
      summaryAR: "في الثالثة والستين، لم تبدأ من جديد — بدأت شيئًا لم يفعله أحد من قبل.",
      homeHighlight: "77.4K · category creator · age = authority",
      cta: "How we made age the asset → /case-studies/auzonia-kamel"
    },
    {
      id: "jozeph-ezzat",
      client: "Jozeph Ezzat — Digital Marketing Educator (also Optiiimum Managing Director)",
      industry: "Digital Marketing · Content Creation Education · Online Courses",
      slug: "/case-studies/jozeph-ezzat",
      timeline: "50 Months",
      starting: "Zero followers, zero students, zero courses live. Expertise + conviction + nothing else.",
      challenge: "Serve three distinct underserved audiences (beginners, medical professionals, teachers) with one brand wide enough to hold them all without going generic. Make virality serve transformation, not tricks.",
      strategy: "Multi-audience architecture · transformation-content over trend-content · course ecosystem as a ladder (each course the logical next step) · let student outcomes become the marketing.",
      execution: "Brand Book · Social Media Launch · Custom Script Creation · Course Development (7+ courses) · Project Development & Strategic Guidance over 50 months.",
      results: {
        followers: "978,000 authentic",
        videos: "960 produced",
        viral: "1 over 4M · 1 over 3M · 1 over 2M · 6 over 1M each",
        avgViews: "90,000",
        courses: "7+ live (12 with the latest additions)",
        students: "40,000+ paying students",
        livesChanged: "10,000+ now earning income from their phones"
      },
      proof: "All 12 course landing pages live on Teachable subdomain.",
      summaryEN: "978,000 followers. 40,000 students. 10,000 lives changed. Built from zero in 50 months.",
      summaryAR: "978 ألف متابع. 40 ألف طالب. 10 آلاف حياة تغيّرت. من الصفر، في 50 شهرًا.",
      homeHighlight: "978K · 40K students · 10K lives changed",
      cta: "Read the flagship case → /case-studies/jozeph-ezzat",
      note: "Strategically the flagship case study — also serves as About/Founder proof. Likely the top of the case-study list."
    },
    {
      id: "shift-tamrid",
      client: "Shift Tamrid — Nursing Media Brand & Podcast",
      industry: "Medical Media · Nursing · Podcast",
      slug: "/case-studies/shift-tamrid",
      timeline: "10 Months (per Data & Results sheet)",
      starting: "Zero presence. A vision that nursing — a profession of millions — deserved a media platform of its own. No template existed.",
      challenge: "Build a category, not just a brand. Nurses had been treated as invisible by Arab medical media for decades. No reference model. No prior podcast. No access to top-of-field guests yet.",
      strategy: "Category creation — claim the position of the FIRST nursing media brand permanently. Podcast as authority engine + social as amplification. Emotional resonance over information density. Pan-Arab positioning from day one (not Egypt-only).",
      execution: "Brand Build from Scratch · Social Media Launch & Setup · Podcast Production · Content Strategy · Brand Ambassador Program · Strategic Guidance.",
      results: {
        followers: "94,500–95,000+ authentic (from 0)",
        videos: "92+",
        viral: "1 video over 1M views",
        avgViews: "20,400",
        category: "First podcast in Egypt dedicated to nursing · authority across Egypt + Arab world",
        institutional: "Hosting the leading voices in medicine and nursing across the Arab world"
      },
      proof: "Files: uploads/shift تمريض.png (logo).",
      summaryEN: "A profession of millions. Zero platforms. Until now.",
      summaryAR: "مهنة بالملايين. صفر منصات. حتى الآن.",
      homeHighlight: "95K · 1M-view viral · category creator",
      cta: "How a category gets built → /case-studies/shift-tamrid"
    },
    {
      id: "dse",
      client: "DSE — Deutsche Sprachförderung Egypt",
      industry: "Education · Language Learning · Vocational Migration to Germany (Ausbildung)",
      slug: "/case-studies/dse",
      timeline: "13 Months",
      starting: "2,000 followers — a WhatsApp group, not a movement. Genuine pathway (Germany's Ausbildung program) almost entirely unknown to qualified Egyptian youth.",
      challenge: "Build a community of exactly the right 51K — qualified, motivated, ready Egyptian youth — not a generic 500K. Cut through cynicism in the migration-content space (which is loud with vague hype).",
      strategy: "Specificity over hype (exact qualifications, exact salaries, exact Cairo→Germany steps). Community over audience. Content that reveals dormant demand rather than manufacturing it. Audience precision = conversion potential.",
      execution: "Community Building · Social Media Growth · Content Strategy · Audience Development · Strategic Guidance.",
      results: {
        followers: "51,200+ (from 2,000) — 2,450% growth",
        posts: "220+ posts",
        avgViews: "12,000",
        positioning: "Most trusted voice in Egypt for Ausbildung / German vocational migration"
      },
      proof: "MISSING — no DSE social or logo file in uploads.",
      summaryEN: "From 2,000 to 51,000 in 13 months — a community of Egyptian youth on their way to Germany.",
      summaryAR: "من 2000 إلى 51 ألفًا في 13 شهرًا — مجتمع من الشباب المصري في طريقه إلى ألمانيا.",
      homeHighlight: "51K · 2,450% growth · precision community",
      cta: "See how DSE was built → /case-studies/dse"
    },
    {
      id: "sky-point",
      client: "Sky Point — Tourism (Finland)",
      industry: "Tourism · International",
      slug: "/case-studies/sky-point",
      timeline: "3 Months",
      starting: "270 followers.",
      challenge: "International market entry · build brand character + mascot system from scratch.",
      strategy: "Brand Character / Mascot system as differentiator in a category (tourism social) where most accounts feel interchangeable.",
      execution: "Brand Book · Brand Character / Mascot Creation · Audience Growth · Custom Content Script · Strategic Guidance.",
      results: {
        followers: "4,200–4,700 authentic (from 270) in 3 months",
        content: "60+ pieces",
        avgViews: "27,400"
      },
      proof: "alfan.link/sky_point.fi — linktree live.",
      summaryEN: "International proof — Finland tourism brand built with a custom mascot system.",
      summaryAR: "إثبات دولي — علامة سياحية فنلندية مبنية على نظام شخصية مميز.",
      homeHighlight: "Finland · mascot system · 17× growth in 3 months",
      cta: "See the international case → /case-studies/sky-point",
      note: "Documented in Data & Results.xlsx but no full narrative docx supplied — flag for short-form treatment unless full doc is added."
    }
  ],

  // Case study suggested page structure (one for all)
  caseStudyPageStructure: [
    "01 — Hero: client name · industry · timeline · single signature stat",
    "02 — The Starting Point: 4 bullet barriers, no spin",
    "03 — The Approach: 3 pillars (with one given prominence as the differentiator)",
    "04 — The Work: timeline strip OR scope blocks",
    "05 — Proof: embedded viral video(s) + screenshot grid",
    "06 — Results: stat strip with 4–6 numbers + qualitative outcome (bookings, media, conversion)",
    "07 — The Number That Mattered Most: pull-quote treatment of the one figure that defines the case",
    "08 — What This Case Study Proves: 3 transferable principles",
    "09 — Your Story is Next: CTA to discovery call"
  ],

  homepageCaseRail: "Suggested order on Home: Jozeph Ezzat (flagship) → Diana Clinics → Auzonia Kamel → Shift Tamrid → Dalia Hosny. Five carries the rail; the rest live on /case-studies.",

  // ============================================================
  // TAB 7 — CLIENT LOGOS
  // ============================================================
  clientLogos: {
    total: 35,
    list: [
      { file: "uploads/alex west.png",          name: "Alex West",                    industry: "Unknown" },
      { file: "uploads/allizanz.png",           name: "Allianz",                      industry: "Insurance · Enterprise" },
      { file: "uploads/aopr.png",               name: "AOPR",                         industry: "Unknown — likely PR/Agency" },
      { file: "uploads/cairokee.png",           name: "Cairokee",                     industry: "Music · Cultural" },
      { file: "uploads/careem.png",             name: "Careem",                       industry: "Tech · Mobility" },
      { file: "uploads/city center.png",        name: "City Centre",                  industry: "Retail · Real Estate" },
      { file: "uploads/dividaa+.png",           name: "Dividaa+",                     industry: "Unknown" },
      { file: "uploads/dove.png",               name: "Dove",                         industry: "FMCG · Beauty" },
      { file: "uploads/emmar.png",              name: "Emaar",                        industry: "Real Estate · Gulf" },
      { file: "uploads/Energizer.png",          name: "Energizer",                    industry: "FMCG · Electronics" },
      { file: "uploads/favelin.png",            name: "Favelin",                      industry: "Unknown" },
      { file: "uploads/Four Seasons.png",       name: "Four Seasons",                 industry: "Hospitality" },
      { file: "uploads/hayat.png",              name: "Hayat",                        industry: "FMCG (likely Hayat Holding)" },
      { file: "uploads/Hilton.png",             name: "Hilton",                       industry: "Hospitality" },
      { file: "uploads/karsmaa logo.png",       name: "Karsmaa",                      industry: "Unknown" },
      { file: "uploads/lipton.png",             name: "Lipton",                       industry: "FMCG · Beverage" },
      { file: "uploads/macdonald.png",          name: "McDonald's",                   industry: "QSR · F&B" },
      { file: "uploads/masar agbary.png",       name: "Masar Egbari",                 industry: "Music · Cultural (Egyptian band)" },
      { file: "uploads/mismon.png",             name: "Mismon",                       industry: "Unknown" },
      { file: "uploads/mnhd.png",               name: "MNHD (Madinet Nasr Housing)",  industry: "Real Estate · Egypt" },
      { file: "uploads/nissan.png",             name: "Nissan",                       industry: "Automotive" },
      { file: "uploads/pepsico.png",            name: "PepsiCo",                      industry: "FMCG · Beverage" },
      { file: "uploads/shezlong.png",           name: "Shezlong",                     industry: "HealthTech · Therapy" },
      { file: "uploads/shift تمريض.png",        name: "Shift Tamrid",                 industry: "Medical Media · Nursing" },
      { file: "uploads/sulfax.png",             name: "Sulfax",                       industry: "Unknown" },
      { file: "uploads/TOSHIPA.png",            name: "Toshiba",                      industry: "Electronics" },
      { file: "uploads/trio.png",               name: "Trio",                         industry: "Unknown" },
      { file: "uploads/unilever.png",           name: "Unilever",                     industry: "FMCG (parent of Dove, Lipton)" },
      { file: "uploads/vodafone (2).png",       name: "Vodafone",                     industry: "Telecom" },
      { file: "uploads/اتصالات.png",            name: "Etisalat",                     industry: "Telecom · Gulf" },
      { file: "uploads/مترو.png",               name: "Metro Market",                 industry: "Retail · Egypt" },
      { file: "uploads/معامل حساب.png",         name: "Hesab Labs",                   industry: "Healthcare · Medical Labs" },
      { file: "uploads/وزارة التراث.png",       name: "Ministry of Heritage (KSA?)",   industry: "Government · Public Sector" },
      { file: "uploads/وزارة الدخلية.png",      name: "Ministry of Interior",          industry: "Government · Public Sector" },
      { file: "uploads/egypt.png",              name: "Visit Egypt / Egypt mark",      industry: "Government · Tourism" },
      { file: "uploads/diana logo.png",         name: "Diana Clinics (also a case study)", industry: "Aesthetics" }
    ],
    industriesGrouped: {
      "Hospitality": ["Four Seasons","Hilton","City Centre"],
      "FMCG / Consumer": ["Dove","Energizer","Hayat","Lipton","PepsiCo","Unilever","McDonald's","Toshiba","Nissan"],
      "Telecom": ["Vodafone","Etisalat"],
      "Real Estate / Property": ["Emaar","MNHD","City Centre"],
      "Music / Cultural": ["Cairokee","Masar Egbari"],
      "Tech / Mobility / HealthTech": ["Careem","Shezlong"],
      "Government / Public Sector": ["Ministry of Heritage","Ministry of Interior","Visit Egypt"],
      "Insurance / Finance": ["Allianz"],
      "Healthcare / Medical": ["Hesab Labs","Diana Clinics","Shift Tamrid"],
      "Retail": ["Metro Market","City Centre"],
      "Unclassified (need confirmation)": ["AOPR","Dividaa+","Favelin","Karsmaa","Mismon","Sulfax","Trio","Alex West"]
    },
    homepagePreview: "Show 12 logos in a single horizontal row (or marquee) on home — choose the most globally recognizable: Four Seasons, Hilton, Dove, Lipton, PepsiCo, Unilever, Vodafone, Careem, McDonald's, Nissan, Allianz, Emaar.",
    fullClientsPage: "Sectioned wall grouped by Industry (the headers above) with monochrome-default + hover-color treatment. Number block at top: 'Trusted by 35+ brands across X industries in Y countries.'",
    treatment: "Light theme: monochrome charcoal #1F1F1F → full color on hover. Dark theme: monochrome warm grey #B8B5AE → full color on hover.",
    flags: [
      "8 logos lack confirmed industry labels — needs client to confirm.",
      "Some non-Latin filenames (وزارة التراث, وزارة الدخلية, مترو, اتصالات, شيفت تمريض) need careful path encoding when referenced from HTML — recommend renaming on upload OR URL-encoding consistently."
    ]
  },

  // ============================================================
  // TAB 8 — COURSES
  // ============================================================
  courses: [
    {
      id: "smart-man-crew",
      nameEN: "Smart Man Crew — Mobile Photography & Editing",
      nameAR: "كورس التصوير والمونتاج بالموبايل — Smart Man Crew",
      url: "https://jozeph-ezzat-danial-s-school.teachable.com/p/smart-man-crew",
      image: "uploads/كورس التصوير والمونتاج بالموبايل - Smart Man Crew.png",
      altImage: "uploads/كورس التصوير والمونتاج بالموبايل - Smart Man Crew-7218945b.png",
      category: "Production · Mobile",
      audience: "Anyone who wants to film and edit professional-grade content using only their phone.",
      learn: "Mobile cinematography fundamentals · light, framing, movement on a phone · editing workflow on mobile apps · publish-ready output.",
      benefit: "A studio in your pocket — no expensive equipment required.",
      cardEN: "Build studio-quality content with the device already in your pocket.",
      cardAR: "أنتج محتوى بجودة استوديو من الجهاز الموجود في جيبك.",
      ctaEN: "Enroll →",
      ctaAR: "ابدأ الآن →",
      slug: "/courses/smart-man-crew"
    },
    {
      id: "not-shy",
      nameEN: "Confidence on Camera (من غير كسوف)",
      nameAR: "كورس من غير كسوف — Confidence on Camera",
      url: "https://jozeph-ezzat-danial-s-school.teachable.com/p/not-shy",
      image: "uploads/كورس من غير كسوف - Confidence on Camera.png",
      altImage: "uploads/كورس من غير كسوف - Confidence on Camera-58d3bcef.png",
      category: "Personal Brand · Performance",
      audience: "Experts, professionals, and creators whose camera shyness is the only thing standing between them and the platform their work deserves.",
      learn: "Identify the specific source of your camera fear · build the on-camera environment that makes you safe · talk to a lens like you talk to a person · be unmistakably yourself on screen.",
      benefit: "Show up on camera with the same authority you have in your work.",
      cardEN: "The fear of the camera is a branding problem. We solve it.",
      cardAR: "الخوف من الكاميرا مشكلة علامة. نحن نحلّها.",
      ctaEN: "Get on camera →",
      ctaAR: "ابدأ من غير كسوف →",
      slug: "/courses/not-shy"
    },
    {
      id: "go-viral",
      nameEN: "Go Viral Course — كورس المليون مشاهدة",
      nameAR: "كورس المليون مشاهدة — Go Viral Course",
      url: "https://jozeph-ezzat-danial-s-school.teachable.com/p/go-viral",
      image: "uploads/كورس المليون مشاهدة - Go Viral Course.png",
      altImage: "uploads/كورس المليون مشاهدة - Go Viral Course-e9410cde.png",
      category: "Content Strategy · Distribution",
      audience: "Creators ready to design content for distribution, not just expression.",
      learn: "Hook architecture · the science of scroll-stoppers · structure of high-retention content · platform-by-platform distribution mechanics · pacing for the algorithm.",
      benefit: "Reach measured in millions, not thousands — by design.",
      cardEN: "Virality is engineered. Learn the system.",
      cardAR: "الفيرال ليس صدفة. تعلّم نظامه.",
      ctaEN: "Engineer your reach →",
      ctaAR: "ابدأ المليون →",
      slug: "/courses/go-viral",
      proof: "Powered by Jozeph's own track record: 1× 4M, 1× 3M, 1× 2M, 6× 1M videos, 90K average views across 960 videos."
    },
    {
      id: "mobile-marketing",
      nameEN: "Digital Marketing on Mobile",
      nameAR: "كورس التسويق الإلكتروني بالموبايل",
      url: "https://jozeph-ezzat-danial-s-school.teachable.com/p/6a65ea",
      image: "uploads/كورس التسويق الإلكتروني بالموبايل.png",
      altImage: "uploads/كورس التسويق الإلكتروني بالموبايل-25a3bd9b.png",
      category: "Marketing · Foundations",
      audience: "Founders, freelancers, and small-business owners running marketing from their phone.",
      learn: "Foundations of digital marketing executed entirely on mobile · ads · funnel basics · content distribution · measurement.",
      benefit: "Run an entire marketing function from your phone.",
      cardEN: "Run your marketing from your phone — properly.",
      cardAR: "ادر تسويقك من موبايلك — كاحترافي.",
      ctaEN: "Enroll →",
      ctaAR: "ابدأ الآن →",
      slug: "/courses/mobile-marketing"
    },
    {
      id: "teachers-content",
      nameEN: "سبورة المحتوى — Content Creation for Teachers",
      nameAR: "كورس سبورة المحتوى — Content Creation for Teachers",
      url: "https://jozeph-ezzat-danial-s-school.teachable.com/p/3ccc32",
      image: "uploads/كورس سبورة المحتوى - Content Creation for Teachers.png",
      altImage: "uploads/كورس سبورة المحتوى - Content Creation for Teachers-38560dba.png",
      category: "Niche · Educators",
      audience: "Egyptian teachers and educators ready to use content as a parallel income stream and credibility platform.",
      learn: "Content frameworks built specifically for the rhythm of a teacher's life · how to translate classroom expertise into 30-second content · the ladder from first video to first paid offer.",
      benefit: "Built by Mrs. Auzonia Kamel — Egypt's first educational content creator for teachers.",
      cardEN: "Egypt's first content course built specifically for teachers.",
      cardAR: "أول كورس محتوى مبني خصيصًا للمعلمين في مصر.",
      ctaEN: "Enroll →",
      ctaAR: "ابدأ الكورس →",
      slug: "/courses/teachers-content",
      ambassador: "Mrs. Auzonia Kamel"
    },
    {
      id: "fitness-content",
      nameEN: "ملعب المحتوى — Content Creation for Fitness & Coaches",
      nameAR: "كورس ملعب المحتوى — Content Creation for Fitness & Coaches",
      url: "https://jozeph-ezzat-danial-s-school.teachable.com/p/f6836e",
      image: "uploads/كورس ملعب المحتوى - Content Creation for Fitness & Coaches.png",
      altImage: "uploads/كورس ملعب المحتوى - Content Creation for Fitness & Coaches-662ab310.png",
      category: "Niche · Fitness / Coaching",
      audience: "Fitness coaches, personal trainers, and movement-focused creators.",
      learn: "Content formulas for transformation, technique, and trust · how to build a coaching brand that fills a roster · production tactics inside a gym.",
      benefit: "A content system designed for the realities of a coach's day.",
      cardEN: "Fill your roster with content that converts followers into clients.",
      cardAR: "املأ قائمة عملائك بمحتوى يحوّل المتابع إلى متمرّن.",
      ctaEN: "Enroll →",
      ctaAR: "ابدأ الآن →",
      slug: "/courses/fitness-content"
    },
    {
      id: "doctors-content",
      nameEN: "روشتة المحتوى — Doctors Content Creation",
      nameAR: "كورس روشتة المحتوى — Doctors Content Creation Course",
      url: "https://jozeph-ezzat-danial-s-school.teachable.com/p/doctors-content-creation-course",
      image: "uploads/كورس روشتة المحتوى - Doctors Content Creation Course.png",
      altImage: "uploads/كورس روشتة المحتوى - Doctors Content Creation Course-f0294ee2.png",
      category: "Niche · Medical",
      audience: "Doctors, surgeons, and medical specialists who want a content presence that builds patient trust before the first appointment.",
      learn: "Educate, convert, and protect professional reputation in equal measure · ethically navigate sensitive medical content · turn the practice into the pre-appointment.",
      benefit: "Built on the playbook proven with Diana Clinics, Dr. Peter Moris, and Dr. Bassant Habash.",
      cardEN: "The brand is the pre-appointment. Build yours.",
      cardAR: "العلامة هي الحجز الأول. ابنِها.",
      ctaEN: "Enroll →",
      ctaAR: "ابدأ الكورس →",
      slug: "/courses/doctors-content"
    },
    {
      id: "ai-business-3-days",
      nameEN: "AI × Business × 3 Days",
      nameAR: "كورس AI × Business × 3 Days",
      url: "https://jozeph-ezzat-danial-s-school.teachable.com/p/ai-x-x",
      image: "uploads/كورس AI × Business × 3 Days.png",
      altImage: "uploads/كورس AI × Business × 3 Days-d089c02e.png",
      category: "AI · Business · Intensive",
      audience: "Owners and operators who want to integrate AI into their business operations without rebuilding their stack.",
      learn: "AI-augmented marketing · AI for ops & content · prompt patterns that produce business-grade output · 3-day deployment plan.",
      benefit: "Walk in on day one. Walk out three days later with AI in your business.",
      cardEN: "Three days. AI in your business. No fluff.",
      cardAR: "ثلاثة أيام. AI داخل شركتك. بدون حشو.",
      ctaEN: "Reserve your seat →",
      ctaAR: "احجز مكانك →",
      slug: "/courses/ai-business-3-days"
    },
    {
      id: "ugc-7-days",
      nameEN: "UGC in 7 Days",
      nameAR: "كورس UGC في 7 أيام",
      url: "https://jozeph-ezzat-danial-s-school.teachable.com/p/7-ugc",
      image: "uploads/كورس UGC في 7 أيام.png",
      altImage: "uploads/كورس UGC في 7 أيام-802f7ead.png",
      category: "UGC · Creator Economy",
      audience: "Creators who want to monetize as a UGC creator for brands.",
      learn: "Build a UGC portfolio in 7 days · brief reading · brand-safe production · pricing your work · pitching to brands.",
      benefit: "A working UGC creator profile by the end of week one.",
      cardEN: "From zero to a paid UGC creator in 7 days.",
      cardAR: "من الصفر إلى UGC Creator مدفوع الأجر في 7 أيام.",
      ctaEN: "Start the 7 days →",
      ctaAR: "ابدأ الـ7 أيام →",
      slug: "/courses/ugc-7-days"
    },
    {
      id: "shift-digital-15-days",
      nameEN: "Shift Digital Program (15 Days)",
      nameAR: "مجموعة شيفت ديجيتال في 15 يوم — Shift Digital Program",
      url: "https://jozeph-ezzat-danial-s-school.teachable.com/p/shiftdigitalin15days",
      image: "MISSING — no thumbnail found in uploads.",
      category: "Bootcamp · Digital Foundations",
      audience: "Beginners who want a 15-day intensive shift into the digital field.",
      learn: "End-to-end fundamentals · platform mechanics · content + monetization basics · what to do every day for 15 days.",
      benefit: "A guided 15-day shift from offline to digital.",
      cardEN: "15 days. One shift. From offline to online.",
      cardAR: "15 يوم. تحوّل واحد. من الأوفلاين إلى الأونلاين.",
      ctaEN: "Enroll →",
      ctaAR: "ابدأ الـ15 يوم →",
      slug: "/courses/shift-digital-15-days"
    },
    {
      id: "digital-pro-max-30",
      nameEN: "Digital Pro Max — 30 Days",
      nameAR: "Digital Pro Max في 30 يوم",
      url: "https://jozeph-ezzat-danial-s-school.teachable.com/p/digital-pro-max-30",
      image: "uploads/Digital Pro Max في 30 يوم.png",
      altImage: "uploads/Digital Pro Max في 30 يوم-7cfebc28.png",
      category: "Flagship Bootcamp · Pro",
      audience: "Serious learners ready to commit to a 30-day pro-level transformation.",
      learn: "The full Optiiimum playbook compressed into 30 days · brand · content · ads · analytics · live coaching cadence.",
      benefit: "The most comprehensive course in the catalogue.",
      cardEN: "30 days to a Pro Max digital operator.",
      cardAR: "30 يوم لتصبح Pro Max في الديجيتال.",
      ctaEN: "Enroll →",
      ctaAR: "ابدأ الـ30 يوم →",
      slug: "/courses/digital-pro-max-30"
    },
    {
      id: "content-creation-7-days",
      nameEN: "Content Creation in 7 Days",
      nameAR: "صناعة المحتوى في 7 أيام",
      url: "MISSING — not listed in My Courses.docx (only thumbnail found).",
      image: "uploads/صناعة المحتوى في 7 ايام.png",
      altImage: "uploads/صناعة المحتوى في 7 ايام-79ed2fbb.png",
      category: "Content · Beginner",
      audience: "Beginners starting their content creation journey.",
      learn: "Daily content production rhythm · 7-day starter framework · scripts · publishing.",
      benefit: "Pending — needs landing page URL confirmed.",
      cardEN: "Seven days. From watching content to creating it.",
      cardAR: "سبعة أيام. من المتلقي إلى صانع المحتوى.",
      ctaEN: "Enroll →",
      ctaAR: "ابدأ الآن →",
      slug: "/courses/content-creation-7-days",
      flag: "MISSING URL — confirm with client."
    },
    {
      id: "kidia-ai-creators",
      nameEN: "Kidia AI Creators",
      nameAR: "Kidia AI Creators",
      url: "MISSING — explicitly noted in My Courses.docx: 'لا يوجد رابط Landing Page مذكور في الملف'",
      image: "MISSING — no thumbnail in uploads.",
      category: "Kids · AI · Creator Economy",
      audience: "Children entering the AI/creator space (likely with parental involvement).",
      learn: "Pending — copy not provided.",
      benefit: "Pending.",
      cardEN: "Pending — needs copy + URL + thumbnail.",
      cardAR: "Pending.",
      ctaEN: "Enroll →",
      ctaAR: "ابدأ الآن →",
      slug: "/courses/kidia-ai-creators",
      flag: "MISSING URL + thumbnail + course copy."
    }
  ],

  // ============================================================
  // TAB 9 — TEAM MEMBERS
  // ============================================================
  team: [
    { name: "Jozeph Ezzat",     title: "Managing Director",                       department: "Leadership",        image: "uploads/Jozeph -Managing irector.jpg", bioEN: "Founder & MD. Sets the strategy, holds the standard, and is also the brand at the centre of the agency's flagship case study (978K followers, 40K students, 10K lives changed).", bioAR: "المؤسس والمدير الإداري. يضع الاستراتيجية ويحرس المعيار، وهو أيضًا العلامة التي تتمحور حولها قصة النجاح الأبرز للوكالة." },
    { name: "Nancy",            title: "Head of Content & Account Managers",      department: "Operations",        image: "uploads/nancy - head of content and account mangers.jpg", bioEN: "Runs the content engine and the account management organism that keeps every client on track.", bioAR: "تدير محرّك المحتوى ومنظومة إدارة الحسابات." },
    { name: "Shiry",            title: "Head of Moderators",                      department: "Moderation",        image: "uploads/shiry - head of account mangers.jpg", bioEN: "Owns the front line of every client relationship.", bioAR: "صاحبة الخط الأمامي لكل علاقة مع العميل." },
    { name: "Marina Emad",      title: "Head of Account Managers — Associate",    department: "Account Management",image: "uploads/marina emad - head of account mangers associate.jpg", bioEN: "Co-leads account delivery alongside Shiry.", bioAR: "تشارك في قيادة فرق الحسابات." },
    { name: "Selvana",          title: "Head of Media Buyers",                    department: "Media Buying",      image: "uploads/selvana - head of media buyers.jpg", bioEN: "Leads the paid-media discipline.", bioAR: "تقود فريق Media Buying." },
    { name: "Sarah",            title: "Media Buyer",                             department: "Media Buying",      image: "uploads/sarah - Media Buyer.jpg", bioEN: "Performance media specialist.", bioAR: "متخصصة Performance Media." },
    { name: "Verina",           title: "Head of Moderators — Associate",          department: "Moderation",        image: "uploads/verina - head of moderators associate.jpg", bioEN: "Leads community moderation alongside the moderation team.", bioAR: "تقود فريق التعليقات والتفاعل المجتمعي." },
    { name: "Manar",            title: "Moderator",                               department: "Moderation",        image: "uploads/manar - Moderator.jpg" },
    { name: "Jesoica",          title: "Moderator",                               department: "Moderation",        image: "uploads/Jesoica - moderator.png" },
    { name: "Helana",           title: "Community Manager",                       department: "Moderation / Community", image: "uploads/helana - comunity manger.png" },
    { name: "Mohrael",          title: "Community Manager",                       department: "Moderation / Community", image: "uploads/mohrael - Community manger.png" },
    { name: "Nairoa",           title: "Community Manager",                       department: "Moderation / Community", image: "uploads/nairoa -  - community manger.jpg" },
    { name: "Norhan",           title: "Community Manager",                       department: "Moderation / Community", image: "uploads/norhan -  - community manger.jpg" },
    { name: "Schahd",           title: "Community Manager",                       department: "Moderation / Community", image: "uploads/schahd - community manger.jpg" },
    { name: "Pakinam",          title: "Traffic Manager",                         department: "Operations",        image: "uploads/pakinam- traffic manger.jpg", bioEN: "Owns the cadence and routing of work across the agency.", bioAR: "مسؤولة تدفّق العمل وإيقاعه عبر الوكالة." },
    { name: "Dody",             title: "People Manager",                          department: "People / HR",       image: "uploads/Dody - People Manger.png" },
    { name: "Safy",             title: "Art Director",                            department: "Design",            image: "uploads/safy - art director.png", bioEN: "Owns the visual standard across every client and the agency itself.", bioAR: "مسؤولة المعيار البصري للوكالة وكل عملائها." },
    { name: "Khaled",           title: "Designer",                                department: "Design",            image: "uploads/khaled - designer.jpeg" },
    { name: "Aziiz",            title: "Senior Editor",                           department: "Video Editing",     image: "uploads/aziiz - senior Editor.jpg" },
    { name: "Mario",            title: "Senior Editor",                           department: "Video Editing",     image: "uploads/mario- senior editor.jpg" },
    { name: "Toka",             title: "Video Editor",                            department: "Video Editing",     image: "uploads/Toka - Video Editor.png" },
    { name: "Alaa",             title: "Content Creator",                         department: "Content",           image: "uploads/alaa - content creator.jpg" },
    { name: "Israa",            title: "Content Creator",                         department: "Content",           image: "uploads/israa - content creator.png" },
    { name: "Veronia",          title: "Content Creator",                         department: "Content",           image: "uploads/veronia- Content Creator.png" },
    { name: "Youstina",         title: "Tele Sales",                              department: "Business Development", image: "uploads/youstina - tele sales.jpg" }
  ],
  teamGrouping: {
    "Leadership":              ["Jozeph Ezzat"],
    "Operations":              ["Nancy","Pakinam","Dody"],
    "Account Management":      ["Shiry","Marina Emad"],
    "Media Buying":            ["Selvana","Sarah"],
    "Content":                 ["Alaa","Israa","Veronia"],
    "Design":                  ["Safy","Khaled"],
    "Video Editing":           ["Aziiz","Mario","Toka"],
    "Moderation / Community":  ["Verina","Manar","Jesoica","Helana","Mohrael","Nairoa","Norhan","Schahd"],
    "Business Development":    ["Youstina"]
  },
  teamFlags: [
    "Several headshots have spelling/spacing artefacts in filenames (e.g. 'Managing irector', 'comunity manger', double-space in some). Recommend renaming on copy-in to canonical slugs.",
    "Bios are missing for most team members — only role/department known. Suggest one-paragraph bio per person (English + Arabic) before Team page goes live.",
    "Image quality / aspect ratios vary. Recommend a consistent crop pass: 1:1 800px portraits, neutral background, warm light."
  ],

  // ============================================================
  // TAB 10 — TEAM CULTURE / GALLERY (the IMG_9*.PNG set)
  // ============================================================
  culture: {
    note: "Approximately 145 IMG_9XXX.PNG screenshots / culture photos across the upload set. Without per-image review, captions cannot be authored. Below is the structural plan for using them once captioned.",
    estimatedCount: 145,
    fileRange: "uploads/IMG_9277.PNG → uploads/IMG_9555.PNG (with gaps)",
    likelyMix: [
      "Behind-the-scenes shoots with case-study clients",
      "Office / studio life",
      "Viral content screenshots (proof imagery for case studies)",
      "Event / live moments"
    ],
    suggestedUse: [
      { placement: "Home — culture mosaic strip (6–9 images)",          rationale: "Shows the agency is real, not just decks." },
      { placement: "About page — life-at-Optiiimum gallery (12–18)",    rationale: "Cultural credibility for prospective hires + clients." },
      { placement: "Case Studies — proof-screenshot grid per client",   rationale: "Match each client's IMGs to their case study." },
      { placement: "Team page — environment header band",                rationale: "Real workspace under team grid feels human." },
      { placement: "Services page — hero accent (1–2 images)",           rationale: "Anchors the abstract service to a real moment." }
    ],
    captioning: "MISSING — needs a half-day captioning pass with someone from Optiiimum to map each IMG_9XXX to its context (which client, what shoot, what date). Recommend a quick spreadsheet: IMG number | client/team | scene | quote-worthy | placement."
  },

  // ============================================================
  // TAB 11 — BLOG ARTICLES
  // ============================================================
  blogs: {
    source: "uploads/website Blogs.pdf — 38 pages, FlateDecode-compressed, Google Docs Renderer.",
    parseStatus: "PDF text extraction not possible from this environment (compressed binary stream).",
    recommendation: "Export the same Google Doc as DOCX or paste the 10 article texts into a single .md file in uploads. Once supplied, every article will be processed individually — title, slug, summary, category, cover direction, CTA, meta title/description, keywords, internal links, services/courses to promote.",
    placeholderStructure: [
      { id: "article-01", titleEN: "—", titleAR: "—", slug: "/blog/article-01", status: "Awaiting raw text" },
      { id: "article-02", titleEN: "—", titleAR: "—", slug: "/blog/article-02", status: "Awaiting raw text" },
      { id: "article-03", titleEN: "—", titleAR: "—", slug: "/blog/article-03", status: "Awaiting raw text" },
      { id: "article-04", titleEN: "—", titleAR: "—", slug: "/blog/article-04", status: "Awaiting raw text" },
      { id: "article-05", titleEN: "—", titleAR: "—", slug: "/blog/article-05", status: "Awaiting raw text" },
      { id: "article-06", titleEN: "—", titleAR: "—", slug: "/blog/article-06", status: "Awaiting raw text" },
      { id: "article-07", titleEN: "—", titleAR: "—", slug: "/blog/article-07", status: "Awaiting raw text" },
      { id: "article-08", titleEN: "—", titleAR: "—", slug: "/blog/article-08", status: "Awaiting raw text" },
      { id: "article-09", titleEN: "—", titleAR: "—", slug: "/blog/article-09", status: "Awaiting raw text" },
      { id: "article-10", titleEN: "—", titleAR: "—", slug: "/blog/article-10", status: "Awaiting raw text" }
    ],
    rule: "Do not merge articles. Each gets its own page. Each has a distinct meta + slug + cover."
  },

  // ============================================================
  // TAB 12 — CTAs & LINKS
  // ============================================================
  ctasAndLinks: {
    primaryCTAs: {
      en: [
        { label: "Start the conversation",   destination: "Booking link (MISSING)", placement: "Hero · sticky header · footer" },
        { label: "See our case studies",     destination: "/case-studies",          placement: "Hero secondary · home rail end" },
        { label: "Read the flagship case",   destination: "/case-studies/jozeph-ezzat", placement: "Home — flagship cell" },
        { label: "Enroll in a course",       destination: "/courses",               placement: "Home rail · service: Education" },
        { label: "Talk on WhatsApp",         destination: "WhatsApp link (MISSING)",placement: "Floating button · contact page" }
      ],
      ar: [
        { label: "ابدأ المحادثة",           destination: "Booking link (MISSING)", placement: "Hero · هيدر · فوتر" },
        { label: "تصفّح حالاتنا",            destination: "/ar/case-studies",       placement: "Hero ثانوي · نهاية الرصيف" },
        { label: "اقرأ الحالة الأبرز",       destination: "/ar/case-studies/jozeph-ezzat", placement: "الصفحة الرئيسية" },
        { label: "ابدأ كورسًا",             destination: "/ar/courses",            placement: "الرصيف · صفحة الخدمات" },
        { label: "تواصل عبر واتساب",         destination: "WhatsApp link (MISSING)",placement: "زر عائم · صفحة التواصل" }
      ]
    },
    confirmedExternalLinks: [
      "https://jozeph-ezzat-danial-s-school.teachable.com/p/smart-man-crew",
      "https://jozeph-ezzat-danial-s-school.teachable.com/p/not-shy",
      "https://jozeph-ezzat-danial-s-school.teachable.com/p/go-viral",
      "https://jozeph-ezzat-danial-s-school.teachable.com/p/6a65ea",
      "https://jozeph-ezzat-danial-s-school.teachable.com/p/3ccc32",
      "https://jozeph-ezzat-danial-s-school.teachable.com/p/f6836e",
      "https://jozeph-ezzat-danial-s-school.teachable.com/p/doctors-content-creation-course",
      "https://jozeph-ezzat-danial-s-school.teachable.com/p/ai-x-x",
      "https://jozeph-ezzat-danial-s-school.teachable.com/p/7-ugc",
      "https://jozeph-ezzat-danial-s-school.teachable.com/p/shiftdigitalin15days",
      "https://jozeph-ezzat-danial-s-school.teachable.com/p/digital-pro-max-30",
      "https://alfan.link/dr.diana.clinic",
      "https://alfan.link/dr.petermouris",
      "https://alfan.link/dr.basant.habash",
      "https://alfan.link/dalia.hosny",
      "https://alfan.link/sky_point.fi"
    ]
  },

  // ============================================================
  // TAB 13 — ARABIC COPY
  // ============================================================
  arabicCopy: {
    nav: [
      { en: "Home",          ar: "الرئيسية" },
      { en: "About",         ar: "عن الوكالة" },
      { en: "Services",      ar: "الخدمات" },
      { en: "Case Studies",  ar: "الحالات" },
      { en: "Ambassadors",   ar: "السفراء" },
      { en: "Courses",       ar: "الكورسات" },
      { en: "Clients",       ar: "العملاء" },
      { en: "Team",          ar: "الفريق" },
      { en: "Blog",          ar: "المدوّنة" },
      { en: "Contact",       ar: "تواصل معنا" }
    ],
    homeHero: {
      eyebrow: "وكالة نمو رقمي · القاهرة · الخليج · أوروبا · أمريكا الشمالية",
      h1: "نبني أنظمة نمو رقميّة. لا مجرد محتوى.",
      sub: "من الصفر إلى علامة قابلة للتوسّع — في الديجيتال، بدون اختصارات. أكثر من 35 علامة. أكثر من 13 قصة موثّقة. مليون مشاهدة فيديو واحد. 978 ألف متابع لعلامة شخصية واحدة. 10 آلاف حياة تغيّرت.",
      ctaPrimary: "ابدأ المحادثة",
      ctaSecondary: "تصفّح حالاتنا"
    },
    services: {
      h2: "نبني أنظمة، لا منشورات.",
      pillars: [
        { title: "بناء العلامة الشخصية",  body: "للأطباء، الخبراء، رواد الأعمال — هوية وصوت وأرشيف يحوّل الخبرة إلى مرجعية مدفوعة الثمن." },
        { title: "بناء العلامات المؤسسية", body: "هويات، إستراتيجيات محتوى، وميديا مدفوعة لشركات تطمح للسوقين الإقليمي والدولي." },
        { title: "إستراتيجية المحتوى",     body: "هياكل خطّافات، إيقاع نشر، ومنطق توزيع لكل منصّة — لا تكرار محتوى، تصميم لكل قناة." },
        { title: "الإنتاج السينمائي",      body: "تصوير ومونتاج بمعايير سينمائية — لأن جودة الإنتاج شكل من أشكال الاحترام." },
        { title: "الميديا المدفوعة",       body: "إنفاق إعلاني يحقّق نتيجة قابلة للقياس — لا حملات للزيمنة." },
        { title: "تطوير المنتج التعليمي",  body: "كورسات وبرامج تعليمية تتحوّل إلى دخل دائم لأصحاب الخبرة." }
      ]
    },
    finalCTA: {
      h2: "قصّتك التالية.",
      sub: "لو عندك خبرة تستحق جمهورًا، أو علامة تستحق نظامًا — نعرف بالضبط كيف نبنيها.",
      cta: "احجز محادثتك"
    },
    rtlNotes: [
      "الواجهة تنعكس بالكامل في النسخة العربية — التنقّل، الأيقونات الاتجاهية، والقوائم.",
      "الأرقام والإحصاءات تبقى بصيغتها (250K, 100K) لأن السوق المستهدف يقرأها فورًا، مع وضع تسمية عربية تحتها.",
      "الخط العربي: IBM Plex Sans Arabic أو Tajawal — ارتفاع سطر 1.7 لإراحة العين، مسافات واضحة بين الأسطر.",
      "محاذاة العناوين الكبيرة لليمين، الأرقام تبقى محاذاة جانبية حسب التصميم.",
      "تجنّب الترجمة الحرفية — كل عبارة تُكتب من جديد بإيقاع عربي يحترم القارئ."
    ]
  },

  // ============================================================
  // TAB 14 — ENGLISH COPY
  // ============================================================
  englishCopy: {
    nav: ["Home","About","Services","Case Studies","Ambassadors","Courses","Clients","Team","Blog","Contact"],
    homeHero: {
      eyebrow: "Digital growth agency · Cairo · Gulf · Europe · North America",
      h1: "We build digital growth systems. Not posts.",
      sub: "From zero to a brand that compounds — in digital, without shortcuts. 35+ brands. 13+ documented case studies. One video over 4M views. One personal brand at 978K. Ten thousand lives changed.",
      ctaPrimary: "Start the conversation",
      ctaSecondary: "See our case studies"
    },
    services: {
      h2: "We build systems. Not just social media.",
      pillars: [
        { title: "Personal Brand Building",       body: "For doctors, experts, and operators — identity, voice, and a content archive that turns expertise into a paid reference point." },
        { title: "Corporate Brand Building",      body: "Identities, content strategies, and paid media for companies serving regional and global markets." },
        { title: "Content Strategy",              body: "Hook architecture, posting cadence, and distribution logic per platform — never repurposed, always designed for the channel." },
        { title: "Cinematic Production",          body: "Mobile and full-rig production at cinematic standard — because production quality is a form of respect for the story." },
        { title: "Performance Media",             body: "Paid spend that produces measurable, defendable outcomes. Not awareness theatre." },
        { title: "Educational Product Development", body: "Course and program development that turns expertise into permanent income — proven across 12 launched courses." }
      ]
    },
    finalCTA: {
      h2: "Your story is next.",
      sub: "If your expertise deserves an audience, or your brand deserves a system — we know exactly how to build it.",
      cta: "Book a discovery call"
    },
    voiceNotes: [
      "Premium tone. Confident. Specific. Never hyped.",
      "Numbers do the heavy lifting. Adjectives don't.",
      "Use the agency 'we'. The case studies say 'we built'. The home page does too.",
      "Avoid agency clichés: 'innovative', 'cutting-edge', 'synergy', 'one-stop shop'.",
      "Sentences are short. Then the next one is also short. Then occasionally a long one carries the weight of the paragraph."
    ]
  },

  // ============================================================
  // TAB 15 — MISSING ASSETS / MISSING LINKS
  // ============================================================
  missing: {
    contact: [
      "Optiiimum corporate WhatsApp number",
      "Optiiimum corporate phone",
      "Optiiimum corporate email (sales / hello / info)",
      "Optiiimum booking / discovery-call link",
      "Confirmed primary domain (optiiimum.com referenced — confirm ownership & live status)",
      "Office addresses (Cairo + any Gulf presence)"
    ],
    social: [
      "Optiiimum corporate Instagram, Facebook, TikTok, LinkedIn, YouTube, X, Threads (any/all)",
      "Optiiimum WhatsApp Business link"
    ],
    ambassadors: [
      "Headshots: Dr. Diana Samir, Dr. Peter Moris, Dr. Bassant Habash, Dalia Hosny",
      "Testimonial copy (EN + AR) for: Dr. Mai, Hesham, Noureddine El Sherif, Hatoon",
      "Confirmation that 'Dr. Mai', 'Hesham', 'Noureddine El Sherif', 'Hatoon' are ambassadors vs. team vs. clients — context unclear from filenames alone"
    ],
    caseStudies: [
      "Sky Point — full narrative docx (only spreadsheet line and linktree available)",
      "DSE — logo / brand mark file",
      "Confirmation of one signature stat per case for hero treatment"
    ],
    clientLogos: [
      "Industry confirmation for: AOPR, Dividaa+, Favelin, Karsmaa, Mismon, Sulfax, Trio, Alex West",
      "Light/dark theme variants for any logo where the supplied file is single-color (will need to verify per file in build)",
      "Confirm 'وزارة التراث' = KSA Ministry of Heritage vs. another national entity",
      "Confirm 'وزارة الدخلية' = Egypt Ministry of Interior vs. another"
    ],
    courses: [
      "Landing page URL for 'Content Creation in 7 Days' (صناعة المحتوى في 7 أيام)",
      "Landing page URL + thumbnail + course copy for 'Kidia AI Creators'",
      "Thumbnail for 'Shift Digital Program' (15 Days)"
    ],
    team: [
      "One-paragraph bio per team member (EN + AR)",
      "Spelling clean-up of headshot filenames (Managing irector → Director, etc.)",
      "Consistent crop / aspect ratio pass on all 25 portraits"
    ],
    culture: [
      "Per-IMG_9XXX caption + placement assignment (~145 images)"
    ],
    blogs: [
      "10 article raw text in DOCX or Markdown (PDF text extraction blocked)"
    ],
    brand: [
      "Icon set (Optiiimum-specific or selected library)",
      "Pattern files (if any beyond the spectrum gradient and the 'O' loop)",
      "Brand guidelines PDF (logo clear-space, minimum size, dos and don'ts)",
      "Tagline confirmation — multiple candidates pulled from case studies; client should pick one or supply official"
    ]
  },

  // ============================================================
  // TAB 16 — PAGE-TO-ASSET MAPPING
  // ============================================================
  pageMapping: [
    {
      page: "Home (/)",
      goal: "Convert qualified prospects into discovery calls; establish credibility in one scroll.",
      sections: [
        "Brand reveal animation (gradient → 'O' → wordmark)",
        "Hero: H1 + sub + 2 CTAs",
        "Stat strip: 35 brands · 13 case studies · 978K largest personal brand · 10K lives changed",
        "Flagship case study cell (Jozeph Ezzat)",
        "Case study rail (4 more)",
        "Services trio (Personal Brand · Corporate Brand · Education)",
        "Client logo wall (12 marquee)",
        "Ambassador testimonials (3 carousel)",
        "Team culture mosaic (6–9 IMGs)",
        "Final CTA",
        "Footer"
      ],
      assetsNeeded: ["Logo set","Gradient","Jozeph headshot","5 case study clients (logos/portraits)","12 client logos","3 ambassador quotes + headshots","6–9 culture IMGs","Booking link"],
      copyEN: "englishCopy.homeHero · englishCopy.services · englishCopy.finalCTA",
      copyAR: "arabicCopy.homeHero · arabicCopy.services · arabicCopy.finalCTA",
      cta: "Start the conversation",
      seo: "Title: Optiiimum — Premium Digital Growth Agency · Egypt, Gulf, Europe · Description: We build digital growth systems for personal and corporate brands. 35+ brands. 13+ proven case studies."
    },
    {
      page: "About (/about)",
      goal: "Establish founder credibility, agency philosophy, the 'we build systems' positioning.",
      sections: ["Hero", "The story (founded by Jozeph Ezzat)", "Our philosophy (3 principles)", "How we work (process)", "Numbers that compound", "Team preview"],
      assetsNeeded: ["Jozeph portrait","Office IMGs","Team grid header","Stat highlights"],
      cta: "Meet the team / Start the conversation"
    },
    {
      page: "Services (/services)",
      goal: "Convert prospects who arrive aware of category, unaware of Optiiimum.",
      sections: ["Hero","6-pillar grid","Per-pillar deep dive","Process","Pricing posture","Final CTA"],
      assetsNeeded: ["1 hero IMG","6 service icons","Per-pillar case study attachment"],
      cta: "Discuss your project"
    },
    {
      page: "Case Studies (/case-studies)",
      goal: "Demonstrate proof depth — let the prospect self-select the most relevant story.",
      sections: ["Hero stat strip","Filter (industry/timeline)","Grid of 13 cards","Final CTA"],
      assetsNeeded: ["Each case study hero image / portrait / logo","Each signature stat"],
      cta: "Read the case · Start your case"
    },
    {
      page: "Case Study Detail (/case-studies/[slug])",
      goal: "Deep-trust artefact for prospects already considering. SEO anchor.",
      sections: caseStudyPageStructureRef(),
      assetsNeeded: ["Client portrait/logo","Per-case viral video embeds (from Case Studies xlsx)","Per-case screenshot grid","Stat strip","Author by-line (Optiiimum)"],
      cta: "Your story is next"
    },
    {
      page: "Ambassadors (/ambassadors)",
      goal: "Showcase the people Optiiimum has built into household names. Drives prestige + 'I want this' reaction.",
      sections: ["Hero","Card grid","Per-ambassador quote modal/page","Final CTA"],
      assetsNeeded: ["Ambassador portraits","One quote each","Link to their case study"],
      cta: "Become the next"
    },
    {
      page: "Courses (/courses)",
      goal: "Drive course enrollment via Teachable. Position courses as parallel to agency services.",
      sections: ["Hero","12-card grid (with images + Arabic + English title)","Featured course (Digital Pro Max 30)","Founder note from Jozeph","FAQ","CTA"],
      assetsNeeded: ["12 course thumbnails","12 Teachable URLs (1 missing, 1 unconfirmed)"],
      cta: "Enroll on Teachable"
    },
    {
      page: "Clients (/clients)",
      goal: "Comprehensive trust signal. SEO for brand-name searches ('Optiiimum Vodafone', etc.).",
      sections: ["Hero stat","Industry-grouped wall","Per-client mini-card (logo + 1 line if available)","Final CTA"],
      assetsNeeded: ["35 logos","Industry tags","(optional) per-client one-liner"],
      cta: "Become a client"
    },
    {
      page: "Team (/team)",
      goal: "Show that the work is delivered by a real, deep team. Recruiting + trust.",
      sections: ["Hero","Department grid","Leadership row","Department-by-department portraits","Culture mosaic","Hiring CTA"],
      assetsNeeded: ["25 team portraits","Bio per person (MISSING)","Department descriptions","Culture IMGs"],
      cta: "Join the team"
    },
    {
      page: "Blog (/blog)",
      goal: "SEO foundation. Long-form thought leadership.",
      sections: ["Hero","10 article cards","Filter by category","Newsletter CTA"],
      assetsNeeded: ["10 article texts (MISSING)","10 cover images (TBD per article)","Author by-lines"],
      cta: "Subscribe"
    },
    {
      page: "Blog Article (/blog/[slug])",
      goal: "Deep value content. Internal-link engine to services + courses + cases.",
      sections: ["Article hero","Author + date","Body","Pull quotes","Related case study","Related course","Final CTA"],
      assetsNeeded: ["Cover IMG","Author IMG","Body content"],
      cta: "Book a discovery call · Enroll in related course"
    },
    {
      page: "Contact (/contact)",
      goal: "Capture qualified leads with minimal friction.",
      sections: ["Hero","Form (name · email · phone · brand / project / timeline / budget bracket · message)","Direct channels (WhatsApp · email · booking link)","Office info","Map (optional)"],
      assetsNeeded: ["Form endpoint (MISSING)","WhatsApp link (MISSING)","Email (MISSING)","Booking link (MISSING)"],
      cta: "Send · WhatsApp · Book"
    }
  ],

  // ============================================================
  // TAB 17 — SEO PLAN
  // ============================================================
  seoPlan: {
    targetMarkets: ["Egypt","Gulf — KSA, UAE, Qatar, Kuwait","Europe (English-speaking searches)","Canada / North America"],
    primaryKeywordsEN: [
      "digital growth agency Egypt",
      "personal brand agency Cairo",
      "digital marketing agency Gulf",
      "doctor personal brand agency",
      "medical content agency",
      "social media agency for doctors",
      "content strategy agency Cairo",
      "Arabic digital marketing agency",
      "Optiiimum"
    ],
    primaryKeywordsAR: [
      "وكالة تسويق رقمي مصر",
      "بناء علامة شخصية للأطباء",
      "وكالة محتوى للأطباء",
      "إدارة سوشيال ميديا القاهرة",
      "وكالة تسويق رقمي الخليج",
      "كورس صناعة المحتوى",
      "كورس مونتاج بالموبايل"
    ],
    longTail: [
      "how to grow Instagram for a clinic in Cairo",
      "social media strategy for plastic surgeons in the Gulf",
      "كيف أبني علامة شخصية كطبيب",
      "إزاي أبدأ صناعة محتوى من الموبايل",
      "best digital marketing course for teachers Egypt"
    ],
    URLstructure: {
      strategy: "Locale-prefixed routing: /en/* and /ar/*. Default redirects /  → user-locale. Hreflang tags on every page pair.",
      example: ["/en/case-studies/jozeph-ezzat","/ar/case-studies/jozeph-ezzat"]
    },
    schemaRecommendations: [
      "Organization schema on home + about (with sameAs to all confirmed socials)",
      "Person schema for Jozeph + each ambassador (helps for personal-brand SEO)",
      "Article schema for blog posts",
      "Course schema for each /courses/[slug]",
      "BreadcrumbList on all interior pages"
    ],
    contentEngine: [
      "10 launch articles (the existing PDF) — ship at launch",
      "Per-case-study expansion articles (one teaching post per case, 13 articles)",
      "Per-course teaching articles (one article per course, 12 articles)",
      "Quarterly performance report (the agency's own case study about itself)",
      "Internal linking — every article must link to ≥1 case study and ≥1 course"
    ]
  },

  // ============================================================
  // TAB 18 — LIGHT / DARK THEME NOTES
  // ============================================================
  themeNotes: {
    defaultTheme: "Light is default for first visit. User preference is stored. Respect prefers-color-scheme on first paint.",
    lightPremiumRules: [
      "Background is warm soft white (#FAFAF7), never pure #FFFFFF — the warmth signals premium.",
      "Black on warm white. Never grey on white for body copy.",
      "Hairlines (1px #E6E3DB) over heavy borders.",
      "Shadows are soft and short: 0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.06).",
      "The gradient is the only place colour appears at full saturation. Everywhere else is restraint."
    ],
    darkPremiumRules: [
      "Background is warm near-black (#0B0B0B), never pure #000000.",
      "Warm off-white text (#F5F2EC), not pure white — preserves the warm-tone identity.",
      "Add a subtle 8–14% magenta glow behind the 'O' on hero only.",
      "Borders soften: 1px #2A2A28.",
      "Gradient feels more luminous in dark — let it carry slightly more presence than in light."
    ],
    clientLogosTreatment: [
      "Light theme default: monochrome charcoal #1F1F1F. Hover → full color.",
      "Dark theme default: monochrome warm grey #B8B5AE. Hover → full color.",
      "Logos with built-in color (e.g. PepsiCo) need a manually generated mono variant during build."
    ],
    screenshotsTreatment: [
      "Light: 1px #E6E3DB border + 12px radius + soft 8px shadow.",
      "Dark: 1px #2A2A28 border + 12px radius + 0 shadow + slight outer 1px highlight at top edge for separation."
    ],
    accessibilityNotes: [
      "Maintain ≥ 4.5:1 contrast for body text in both themes.",
      "Buttons retain full contrast — black on white (light) / off-white on near-black (dark).",
      "Reduced-motion: disable brand reveal animation, replace with static logo + 0.3s fade-in."
    ]
  }

};

// helper used inside pageMapping to keep the structure DRY
function caseStudyPageStructureRef() {
  return [
    "01 Hero — name · industry · timeline · signature stat",
    "02 Starting Point — 4 bullet barriers",
    "03 Approach — 3 pillars",
    "04 Work — timeline / scope blocks",
    "05 Proof — viral videos + screenshot grid",
    "06 Results — stat strip + qualitative outcomes",
    "07 The Number That Mattered Most — pull-quote",
    "08 What This Proves — 3 transferable principles",
    "09 Your Story Is Next — CTA"
  ];
}
