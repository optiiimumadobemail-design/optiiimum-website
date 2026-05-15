/* ============================================================
   courses-data.js — bilingual catalog of all 13 Optiiimum
   courses. Used by course.html (detail page) and rendered into
   Home.html + Courses.html previews/grids via script tags.
   ------------------------------------------------------------
   · Every course has bilingual title — `displayTitle` is shown
     in BOTH English and Arabic interfaces.
   · `descriptionEn` / `descriptionAr` swap with the page lang.
   · `purchaseLink` opens externally from the detail page CTA.
   ============================================================ */
window.COURSES = [
  {
    slug: "smart-man-crew",
    titleEn: "Smart Man Crew",
    titleAr: "كورس التصوير والمونتاج بالموبايل",
    displayTitle: "كورس التصوير والمونتاج بالموبايل — Smart Man Crew",
    categoryEn: "Production · Mobile",
    categoryAr: "إنتاج · موبايل",
    cover: "assets/courses Covers/كورس التصوير والمونتاج بالموبايل - Smart Man Crew.png",
    purchaseLink: "https://jozeph-ezzat-danial-s-school.teachable.com/p/smart-man-crew",
    shortEn: "Shoot and edit cinematic-grade content using only your phone.",
    shortAr: "صوّر وعدّل محتوى بمستوى سينمائي من موبايلك فقط.",
    durationEn: "Self-paced",
    durationAr: "ذاتي السرعة",
    accessEn: "Lifetime access",
    accessAr: "وصول مدى الحياة",
    overviewEn: "Smart Man Crew is the complete mobile filmmaking system used by Optiiimum's production team. From light and angle to colour, sound, and edit, you learn to produce founder-grade content without a single studio rental.",
    overviewAr: "كورس Smart Man Crew هو نظام التصوير الكامل بالموبايل اللي بيستخدمه فريق إنتاج Optiiimum. من الإضاءة والزوايا، للألوان والصوت والمونتاج، هتعرف تنتج محتوى بمستوى احترافي من غير ما تأجر استوديو.",
    learnEn: [
      "Master the four mobile-shoot fundamentals (light, frame, sound, stability)",
      "Build a 30-minute mobile content kit on any budget",
      "Edit reels, talking-heads, and product videos in CapCut + InShot",
      "Apply Optiiimum's colour and sound presets to every export",
      "Ship a complete content batch in under one production day"
    ],
    learnAr: [
      "أتقن أربع قواعد التصوير بالموبايل (إضاءة، كادر، صوت، ثبات)",
      "جهّز عدّة تصوير موبايل في ٣٠ دقيقة بأي ميزانية",
      "عدّل ريلز ومقاطع تكلّم ومنتجات في CapCut و InShot",
      "طبّق برسيتات الألوان والصوت الخاصة بـ Optiiimum على كل فيديو",
      "نزّل باتش محتوى كامل في يوم إنتاج واحد"
    ],
    forEn: ["Founders building a personal brand from their phone", "Creators tired of bad-looking content", "Coaches and consultants making short-form videos"],
    forAr: ["مؤسسون بيبنوا براند شخصي من موبايلهم", "صنّاع محتوى تعبوا من شكل فيديوهاتهم", "مدربون واستشاريون بيعملوا فيديوهات قصيرة"]
  },

  {
    slug: "confidence-on-camera",
    titleEn: "Confidence on Camera Course",
    titleAr: "كورس من غير كسوف",
    displayTitle: "كورس من غير كسوف — Confidence on Camera Course",
    categoryEn: "Personal Branding · Presence",
    categoryAr: "براند شخصي · حضور",
    cover: "assets/courses Covers/كورس من غير كسوف - Confidence on Camera.png",
    purchaseLink: "https://jozeph-ezzat-danial-s-school.teachable.com/p/not-shy",
    shortEn: "Stop freezing on camera. Speak with the same energy your audience needs.",
    shortAr: "بطّل تتجمّد قدّام الكاميرا. اتكلم بنفس الطاقة اللي جمهورك محتاجها.",
    durationEn: "Self-paced",
    durationAr: "ذاتي السرعة",
    accessEn: "Lifetime access",
    accessAr: "وصول مدى الحياة",
    overviewEn: "A speaker-coaching protocol designed for non-actors. You'll move from scripted stiffness to natural authority, with body, voice, and language exercises drilled by founders, doctors, and creators inside Optiiimum.",
    overviewAr: "بروتوكول تدريب تقديم مصمّم لغير الممثلين. هتنقل من الإلقاء المتيبّس إلى حضور طبيعي وسلطة في الكلام، عبر تمارين جسم وصوت ولغة بنشتغل بيها مع المؤسسين والأطباء وصنّاع المحتوى داخل Optiiimum.",
    learnEn: [
      "Beat camera freeze in the first 60 seconds of any take",
      "Use the Optiiimum 3-line opener that hooks instantly",
      "Speak in your real voice — not a 'creator voice'",
      "Control breath, pace, and body so the camera disappears",
      "Re-record less and use first-take footage 3× more often"
    ],
    learnAr: [
      "اتغلب على رهبة الكاميرا في أول ٦٠ ثانية من أي تصوير",
      "استخدم افتتاحية الـ ٣ سطور من Optiiimum اللي بتعلّق المتابع فورًا",
      "اتكلم بصوتك الحقيقي — مش بصوت 'الكريتور'",
      "اتحكّم في النفس والإيقاع والجسم لحد ما الكاميرا تختفي",
      "قلّل إعادة التسجيل وزوّد استخدام التيك الأول ٣ أضعاف"
    ],
    forEn: ["Doctors and experts who hate being on camera", "Founders launching their first content channel", "Anyone whose face is the brand"],
    forAr: ["أطباء وخبراء بيكرهوا الكاميرا", "مؤسسون بيطلقوا أول قناة محتوى ليهم", "أي حد وشّه هو البراند"]
  },

  {
    slug: "go-viral",
    titleEn: "Go Viral Course",
    titleAr: "كورس المليون مشاهدة",
    displayTitle: "كورس المليون مشاهدة — Go Viral Course",
    categoryEn: "Content · Virality",
    categoryAr: "محتوى · فيرال",
    cover: "assets/courses Covers/كورس المليون مشاهدة - Go Viral Course.png",
    purchaseLink: "https://jozeph-ezzat-danial-s-school.teachable.com/p/go-viral",
    shortEn: "Engineer a single piece of content that earns its way to a million views.",
    shortAr: "اصنع فيديو واحد بيستحق مليون مشاهدة بمعادلة واضحة.",
    durationEn: "Self-paced",
    durationAr: "ذاتي السرعة",
    accessEn: "Lifetime access",
    accessAr: "وصول مدى الحياة",
    overviewEn: "The same content engineering formula Optiiimum uses to push founders, brands, and doctors past 1M views — built on hook architecture, retention curves, and platform-specific publish rituals.",
    overviewAr: "نفس معادلة هندسة المحتوى اللي Optiiimum بتستخدمها لتعدّي بالمؤسسين والبراندات والأطباء حاجز المليون مشاهدة — مبنية على معمار الهوك، منحنيات الاستمرار، وطقوس النشر لكل منصة.",
    learnEn: [
      "Build a hook bank that survives the 3-second test",
      "Engineer retention curves with the 7-beat structure",
      "Reverse-engineer trends without copying them",
      "Plan posting windows per platform (Reels / TikTok / Shorts)",
      "Diagnose dead content and rescue it with one edit"
    ],
    learnAr: [
      "ابني بنك هوكس بيعدّي اختبار الـ ٣ ثواني",
      "صمّم منحنى استمرار باستخدام بنية الـ ٧ نبضات",
      "افهم الترند من غير ما تنسخه",
      "خطّط أوقات النشر لكل منصة (ريلز / تيك توك / شورتس)",
      "شخّص الفيديو الميت وأنقذه بتعديل واحد"
    ],
    forEn: ["Creators stuck below 5K views", "Brands wanting one breakout video", "Coaches selling through reach"],
    forAr: ["صنّاع محتوى عالقين تحت ٥ آلاف مشاهدة", "براندات عايزة فيديو واحد ينفجر", "مدربون بيبيعوا عبر الوصول"]
  },

  {
    slug: "digital-marketing-by-mobile",
    titleEn: "Digital Marketing & Social Media Course",
    titleAr: "كورس التسويق الإلكتروني بالموبايل",
    displayTitle: "كورس التسويق الإلكتروني بالموبايل — Digital Marketing & Social Media Course",
    categoryEn: "Marketing · Foundations",
    categoryAr: "تسويق · أساسيات",
    cover: "assets/courses Covers/كورس التسويق الإلكتروني بالموبايل.png",
    purchaseLink: "https://jozeph-ezzat-danial-s-school.teachable.com/p/6a65ea",
    shortEn: "Run a full marketing stack from your phone — content, ads, analytics, sales.",
    shortAr: "شغّل ستاك تسويق كامل من موبايلك — محتوى، إعلانات، تحليلات، مبيعات.",
    durationEn: "Self-paced",
    durationAr: "ذاتي السرعة",
    accessEn: "Lifetime access",
    accessAr: "وصول مدى الحياة",
    overviewEn: "A no-laptop-needed marketing programme. Strategy, content, ads, funnels, and analytics — all operated from your phone with the same workflow Optiiimum uses for solo founders.",
    overviewAr: "برنامج تسويق ما بيحتاجش لابتوب. استراتيجية، محتوى، إعلانات، فنلز، وتحليلات — كلها بتشتغل من موبايلك بنفس الـ workflow اللي بيستخدمه Optiiimum مع المؤسسين المستقلين.",
    learnEn: [
      "Plan a 90-day marketing system before spending a dollar",
      "Run Meta and TikTok ads directly from mobile",
      "Use AI shortcuts to draft, design, and edit in minutes",
      "Read analytics and pick the next bet weekly",
      "Build a 5-channel content engine from one phone"
    ],
    learnAr: [
      "خطّط نظام تسويق لـ ٩٠ يوم قبل ما تصرف جنيه",
      "شغّل إعلانات Meta و TikTok من الموبايل مباشرة",
      "استخدم اختصارات الذكاء الاصطناعي عشان تكتب وتصمّم وتعدّل في دقايق",
      "اقرا التحليلات واختار الخطوة الجاية كل أسبوع",
      "ابني محرّك محتوى متعدّد المنصات من موبايل واحد"
    ],
    forEn: ["Solo founders and small brand owners", "Marketers entering the field from zero", "Service providers wanting to control their channels"],
    forAr: ["مؤسسون مستقلون وأصحاب براندات صغيرة", "مسوّقون داخلين المجال من الصفر", "مقدّمو خدمات عايزين يتحكّموا في قنواتهم"]
  },

  {
    slug: "content-creation-for-teachers",
    titleEn: "Content Creation for Teachers",
    titleAr: "كورس سبورة المحتوى",
    displayTitle: "كورس سبورة المحتوى — Content Creation for Teachers",
    categoryEn: "Vertical · Educators",
    categoryAr: "قطاع · معلمون",
    cover: "assets/courses Covers/كورس سبورة المحتوى - Content Creation for Teachers.png",
    purchaseLink: "https://jozeph-ezzat-danial-s-school.teachable.com/p/3ccc32",
    shortEn: "Turn your classroom expertise into a magnetic online teaching brand.",
    shortAr: "حوّل خبرتك في الفصل إلى براند تعليمي مغناطيسي على الإنترنت.",
    durationEn: "Self-paced",
    durationAr: "ذاتي السرعة",
    accessEn: "Lifetime access",
    accessAr: "وصول مدى الحياة",
    overviewEn: "Built for teachers who want their voice to leave the classroom. You'll translate lessons into platform-ready content, build trust with parents, and turn followers into students.",
    overviewAr: "مصمّم للمعلمين اللي عايزين صوتهم يطلع برّا الفصل. هتترجم دروسك لمحتوى جاهز للمنصات، تبني ثقة الأهالي، وتحوّل المتابعين إلى طلاب.",
    learnEn: [
      "Translate lesson plans into 60-second content arcs",
      "Use the Whiteboard Format that parents share",
      "Build a parent-trust funnel without selling hard",
      "Record from a classroom or living room equally well",
      "Convert reach into private tutoring or course sales"
    ],
    learnAr: [
      "ترجم خطط الدرس إلى فيديوهات ٦٠ ثانية بمعمار واضح",
      "استخدم فورمات السبورة اللي الأهالي بيشاركوها",
      "ابني فنل ثقة مع الأهالي من غير بيع مباشر",
      "صوّر من الفصل أو من البيت بنفس الجودة",
      "حوّل الوصول إلى مجموعات خاصة أو مبيعات كورسات"
    ],
    forEn: ["School and private teachers across all grades", "Tutors building independent practices", "Academic course sellers"],
    forAr: ["معلمون في المدارس والدروس الخصوصية في كل المراحل", "مدرّسون بيبنوا ممارستهم المستقلة", "بائعو كورسات أكاديمية"]
  },

  {
    slug: "content-creation-for-fitness-coaches",
    titleEn: "Content Creation for Fitness & Coaches",
    titleAr: "كورس ملعب المحتوى",
    displayTitle: "كورس ملعب المحتوى — Content Creation for Fitness & Coaches",
    categoryEn: "Vertical · Fitness",
    categoryAr: "قطاع · لياقة",
    cover: "assets/courses Covers/كورس ملعب المحتوى - Content Creation for Fitness & Coaches.png",
    purchaseLink: "https://jozeph-ezzat-danial-s-school.teachable.com/p/f6836e",
    shortEn: "A content playbook engineered for trainers, coaches, and gym brands.",
    shortAr: "كتالوج محتوى مبني خصيصاً للمدربين، الكوتشز، وبراندات الجيم.",
    durationEn: "Self-paced",
    durationAr: "ذاتي السرعة",
    accessEn: "Lifetime access",
    accessAr: "وصول مدى الحياة",
    overviewEn: "From workout demos to transformation stories, this is the content protocol used by sports brands and athlete coaches inside Optiiimum. You shoot, edit, and post in a system that drives bookings, not just likes.",
    overviewAr: "من شرح التمارين لقصص التحوّل، ده بروتوكول المحتوى اللي بتستخدمه براندات الرياضة ومدربو الأبطال داخل Optiiimum. هتصوّر وتعدّل وتنشر في نظام بيجيب حجوزات — مش بس لايكات.",
    learnEn: [
      "Shoot demos that read clearly in 9:16",
      "Frame transformation stories without breaking trust",
      "Build a 4-week content calendar for gyms and coaches",
      "Convert reach into PT sessions and programmes",
      "Run small-scale ads to fill seats and slots"
    ],
    learnAr: [
      "صوّر شرح تمارين بيبان بوضوح في الـ 9:16",
      "احكي قصص التحوّل من غير ما تكسر الثقة",
      "ابني تقويم محتوى ٤ أسابيع للجيمز والمدربين",
      "حوّل الوصول لجلسات PT وبرامج تدريب",
      "شغّل إعلانات صغيرة عشان تملا الـ slots والمقاعد"
    ],
    forEn: ["Personal trainers and fitness coaches", "Gym owners and athletic brands", "Sports nutritionists and physiotherapists"],
    forAr: ["مدربون شخصيون وكوتشز لياقة", "أصحاب جيمز وبراندات رياضية", "خبراء تغذية رياضية وعلاج طبيعي"]
  },

  {
    slug: "doctors-content-creation",
    titleEn: "Doctors Content Creation Course",
    titleAr: "كورس روشتة المحتوى",
    displayTitle: "كورس روشتة المحتوى — Doctors Content Creation Course",
    categoryEn: "Vertical · Doctors",
    categoryAr: "قطاع · أطباء",
    cover: "assets/courses Covers/كورس روشتة المحتوى - Doctors Content Creation Course.png",
    purchaseLink: "https://jozeph-ezzat-danial-s-school.teachable.com/p/doctors-content-creation-course",
    shortEn: "A medical-grade content protocol — for doctors who refuse to sound like influencers.",
    shortAr: "بروتوكول محتوى بمستوى طبي — للأطباء اللي رافضين يبقوا 'إنفلونسرز'.",
    durationEn: "Self-paced",
    durationAr: "ذاتي السرعة",
    accessEn: "Lifetime access",
    accessAr: "وصول مدى الحياة",
    overviewEn: "Built with practising doctors inside Optiiimum's clinic case studies. You'll publish trust-first medical content that respects ethics, protects your reputation, and grows your practice.",
    overviewAr: "مبني مع أطباء ممارسين داخل دراسات حالة عيادات Optiiimum. هتنشر محتوى طبي قائم على الثقة، بيحترم الأخلاقيات، بيحمي سمعتك، وبيكبّر عيادتك.",
    learnEn: [
      "Build a medical content protocol that respects ethics",
      "Use the Trust-First content hierarchy used by clinics",
      "Translate medical jargon into platform-ready language",
      "Convert content viewers into clinic bookings",
      "Protect your reputation under any comment storm"
    ],
    learnAr: [
      "ابني بروتوكول محتوى طبي بيحترم الأخلاقيات",
      "استخدم هرم الثقة في المحتوى اللي بتستخدمه العيادات",
      "ترجم المصطلحات الطبية للغة جاهزة للنشر",
      "حوّل المشاهدين لحجوزات في العيادة",
      "احمي سمعتك في أي عاصفة تعليقات"
    ],
    forEn: ["GPs and specialist physicians", "Dentists, dermatologists, gynaecologists", "Clinic owners managing their personal brand"],
    forAr: ["أطباء عامون وأخصائيون", "أطباء أسنان وجلدية ونساء وتوليد", "أصحاب عيادات بيديروا براندهم الشخصي"]
  },

  {
    slug: "ai-x-business-3-days",
    titleEn: "AI × Business × 3 Days",
    titleAr: "الذكاء الاصطناعي في البيزنس خلال 3 أيام",
    displayTitle: "كورس AI × Business × 3 Days — الذكاء الاصطناعي في البيزنس خلال 3 أيام",
    categoryEn: "AI · 3 days",
    categoryAr: "ذكاء اصطناعي · ٣ أيام",
    cover: "assets/courses Covers/كورس AI × Business × 3 Days.png",
    purchaseLink: "https://jozeph-ezzat-danial-s-school.teachable.com/p/ai-x-x",
    shortEn: "Operationalise AI inside your business in 3 days — not 3 months.",
    shortAr: "فعّل الذكاء الاصطناعي جوّه شغلك في ٣ أيام — مش ٣ شهور.",
    durationEn: "3 days",
    durationAr: "٣ أيام",
    accessEn: "Lifetime access",
    accessAr: "وصول مدى الحياة",
    overviewEn: "An action-only programme. Day 1 you audit, Day 2 you automate, Day 3 you ship. We use the same AI playbooks Optiiimum applies inside its own studio, agency, and academy.",
    overviewAr: "برنامج تنفيذ بحت. اليوم الأول مراجعة، اليوم التاني أتمتة، اليوم التالت إطلاق. بنستخدم نفس بلايبوكاتنا في الذكاء الاصطناعي اللي Optiiimum بتطبّقها داخل الاستوديو والوكالة والأكاديمية.",
    learnEn: [
      "Identify the 5 AI levers any business can pull this week",
      "Build prompt libraries by role (marketing, sales, ops, support)",
      "Connect GPT, Claude, and image tools to your workflow",
      "Replace 80% of manual research with prompt routines",
      "Ship one AI-powered offer by the end of day 3"
    ],
    learnAr: [
      "حدّد الـ ٥ روافع AI اللي أي بيزنس يقدر يطبّقها الأسبوع ده",
      "ابني مكتبات برومبت لكل دور (تسويق، مبيعات، عمليات، دعم)",
      "اربط GPT و Claude وأدوات الصور بـ workflow شغلك",
      "استبدل ٨٠٪ من البحث اليدوي بروتين برومبتس",
      "نزّل عرض مدعوم بالذكاء الاصطناعي في نهاية اليوم التالت"
    ],
    forEn: ["Founders and SMB owners", "Marketing and operations leads", "Consultants productising knowledge"],
    forAr: ["مؤسسون وأصحاب أعمال صغيرة ومتوسطة", "قادة تسويق وعمليات", "استشاريون بيحوّلوا خبرتهم لمنتج"]
  },

  {
    slug: "ugc-in-7-days",
    titleEn: "User Generated Content Course",
    titleAr: "كورس UGC في 7 أيام",
    displayTitle: "كورس UGC في 7 أيام — User Generated Content Course",
    categoryEn: "Creator · UGC",
    categoryAr: "صانع محتوى · UGC",
    cover: "assets/courses Covers/كورس UGC في 7 أيام.png",
    purchaseLink: "https://jozeph-ezzat-danial-s-school.teachable.com/p/7-ugc",
    shortEn: "Become a paid UGC creator in 7 days — brands, briefs, deliverables.",
    shortAr: "ابقى صانع UGC مدفوع في ٧ أيام — براندات، بريفس، تسليمات.",
    durationEn: "7 days",
    durationAr: "٧ أيام",
    accessEn: "Lifetime access",
    accessAr: "وصول مدى الحياة",
    overviewEn: "The full UGC pipeline used by Optiiimum-trained creators working with regional and global brands. You'll learn to pitch, shoot, edit, deliver, and invoice — without a single follower count.",
    overviewAr: "خط الإنتاج الكامل لصنّاع الـ UGC اللي اتدرّبوا في Optiiimum واشتغلوا مع براندات إقليمية وعالمية. هتتعلّم تعمل بيتش وتصوّر وتعدّل وتسلّم وتقبض — من غير ما يكون عندك متابعين.",
    learnEn: [
      "Build a UGC pitch deck that lands replies",
      "Read briefs without overpromising deliverables",
      "Shoot product UGC in any room of your home",
      "Edit hooks and CTAs to brand standards",
      "Set rates and invoice professionally from day 1"
    ],
    learnAr: [
      "ابني بيتش UGC بيجيب ردود",
      "اقرا البريف من غير ما تقدّم وعود فوق الطاقة",
      "صوّر UGC للمنتجات في أي أوضة في البيت",
      "عدّل الهوكس والـ CTAs بمعايير البراندات",
      "حدّد أسعارك واطلع فاتورة احترافية من أول يوم"
    ],
    forEn: ["Aspiring UGC creators with 0 followers", "Stay-at-home parents earning from content", "Side-hustlers tired of freelance gigs that pay nothing"],
    forAr: ["صنّاع UGC طامحين ولسه ما عندهمش متابعين", "أهالي شغّالين من البيت بيكسبوا من المحتوى", "ناس بتدوّر على دخل جانبي تعبت من شغل الفريلانس قليل العائد"]
  },

  {
    slug: "shift-digital-15-days",
    titleEn: "Shift Digital Program",
    titleAr: "مجموعة شيفت ديجيتال في 15 يوم",
    displayTitle: "مجموعة شيفت ديجيتال في 15 يوم — Shift Digital Program",
    categoryEn: "Bundle · 15 days",
    categoryAr: "مجموعة · ١٥ يوم",
    cover: "assets/courses Covers/Shift Digital Bundle.png",
    purchaseLink: "https://jozeph-ezzat-danial-s-school.teachable.com/p/shiftdigitalin15days",
    shortEn: "A 15-day shift from non-digital to fully-operating digital business.",
    shortAr: "نقلة ١٥ يوم من بيزنس غير رقمي لبيزنس بيشتغل ديجيتال بالكامل.",
    durationEn: "15 days",
    durationAr: "١٥ يوم",
    accessEn: "Lifetime access",
    accessAr: "وصول مدى الحياة",
    overviewEn: "The Shift bundle compresses Optiiimum's digital onboarding into 15 working days — content, ads, AI, funnels, and execution rituals all sequenced to ship a real result by day 15.",
    overviewAr: "مجموعة Shift بتختصر تشغيل Optiiimum الديجيتالي في ١٥ يوم عمل — محتوى وإعلانات وذكاء اصطناعي وفنلز وطقوس تنفيذ، كلها بترتيب بيوصّلك لنتيجة حقيقية بحلول اليوم الـ ١٥.",
    learnEn: [
      "Run a 15-day shift plan with daily deliverables",
      "Set up content + ads + AI in parallel sprints",
      "Audit your current digital footprint and fix the 5 biggest leaks",
      "Build a 90-day post-Shift execution calendar",
      "Operate a fully digital business by the end of day 15"
    ],
    learnAr: [
      "نفّذ خطة Shift في ١٥ يوم بتسليمات يومية",
      "ركّب المحتوى والإعلانات والذكاء الاصطناعي في سبرنتس متوازية",
      "راجع وجودك الديجيتالي الحالي وصلّح أكبر ٥ تسريبات",
      "ابني تقويم تنفيذ ٩٠ يوم بعد Shift",
      "شغّل بيزنس ديجيتال بالكامل بحلول اليوم الـ ١٥"
    ],
    forEn: ["Traditional business owners going digital", "Founders re-launching after a stall", "Agencies onboarding new clients fast"],
    forAr: ["أصحاب أعمال تقليدية بينتقلوا للديجيتال", "مؤسسون بيعيدوا الإطلاق بعد توقف", "وكالات بتدخّل عملاء جدد بسرعة"]
  },

  {
    slug: "digital-pro-max-30-days",
    titleEn: "Digital Pro Max in 30 Days",
    titleAr: "Digital Pro Max في 30 يوم",
    displayTitle: "Digital Pro Max في 30 يوم — Digital Pro Max in 30 Days",
    categoryEn: "Flagship · 30 days",
    categoryAr: "رئيسي · ٣٠ يوم",
    cover: "assets/courses Covers/Digital Pro Max في 30 يوم.png",
    purchaseLink: "https://jozeph-ezzat-danial-s-school.teachable.com/p/digital-pro-max-30",
    shortEn: "The complete Optiiimum operating system in 30 days — strategy, content, ads, sales.",
    shortAr: "نظام تشغيل Optiiimum الكامل في ٣٠ يوم — استراتيجية، محتوى، إعلانات، مبيعات.",
    durationEn: "30 days",
    durationAr: "٣٠ يوم",
    accessEn: "Lifetime access",
    accessAr: "وصول مدى الحياة",
    overviewEn: "Optiiimum's flagship 30-day programme — the same operating system we run for paying clients, productised into 4 weeks of structured execution.",
    overviewAr: "البرنامج الرئيسي من Optiiimum في ٣٠ يوم — نفس نظام التشغيل اللي بنطبّقه مع العملاء، متحوّل لمنتج ٤ أسابيع تنفيذ منظّم.",
    learnEn: [
      "Week 1: Build the strategy and content architecture",
      "Week 2: Activate paid media and growth funnels",
      "Week 3: Launch personal-brand and authority content",
      "Week 4: Operate measurement, retention, and sales",
      "Exit with a live, running digital growth system"
    ],
    learnAr: [
      "الأسبوع ١: ابني الاستراتيجية ومعمار المحتوى",
      "الأسبوع ٢: فعّل الإعلانات الممولة وفنلز النمو",
      "الأسبوع ٣: أطلق محتوى البراند الشخصي والـ Authority",
      "الأسبوع ٤: شغّل القياس والاحتفاظ والمبيعات",
      "اخرج بنظام نمو رقمي شغّال على أرض الواقع"
    ],
    forEn: ["Founders ready to commit one month", "Marketing leads upgrading their playbook", "Agencies stealing internal frameworks"],
    forAr: ["مؤسسون مستعدين يخصّصوا شهر", "قادة تسويق بيرفعوا مستوى الـ playbook بتاعهم", "وكالات بتاخد أطرنا الداخلية"]
  },

  {
    slug: "kidia-ai-creators",
    titleEn: "AI Content Creation for Kids",
    titleAr: "Kidia AI Creators",
    displayTitle: "Kidia AI Creators — AI Content Creation for Kids",
    categoryEn: "AI · Kids",
    categoryAr: "ذكاء اصطناعي · أطفال",
    cover: "assets/courses Covers/Kidia AI Creators.png",
    purchaseLink: null,
    purchaseLinkStatus: "coming-soon",
    shortEn: "An AI-content programme designed for kids — safe, structured, future-ready.",
    shortAr: "برنامج محتوى بالذكاء الاصطناعي مصمّم للأطفال — آمن، منظّم، جاهز للمستقبل.",
    durationEn: "TBA",
    durationAr: "قريبًا",
    accessEn: "Lifetime access",
    accessAr: "وصول مدى الحياة",
    overviewEn: "Kidia AI Creators is Optiiimum's family-safe AI programme. Built for kids 9–15, the curriculum teaches creative AI thinking, storytelling, and content production with full parent oversight.",
    overviewAr: "Kidia AI Creators هو برنامج Optiiimum الآمن للعائلة في الذكاء الاصطناعي. مصمّم للأطفال من ٩ إلى ١٥ سنة، وبيعلّم التفكير الإبداعي والـ Storytelling وإنتاج المحتوى — مع رقابة كاملة من ولي الأمر.",
    learnEn: [
      "Use AI tools responsibly and creatively",
      "Build short stories, illustrations, and audio with AI",
      "Practice critical thinking around AI outputs",
      "Produce a small portfolio of safe AI projects",
      "Get a creator-grade head start in the AI era"
    ],
    learnAr: [
      "استخدم أدوات الذكاء الاصطناعي بمسؤولية وإبداع",
      "ابني قصص قصيرة ورسومات وصوت بالـ AI",
      "اتمرّن على التفكير النقدي حول مخرجات الذكاء الاصطناعي",
      "نزّل بورتفوليو صغير من مشاريع AI آمنة",
      "ابدأ بقوة في عصر الذكاء الاصطناعي"
    ],
    forEn: ["Kids aged 9–15 curious about AI", "Parents looking for safe AI exposure", "Schools building future-ready cohorts"],
    forAr: ["أطفال من ٩ إلى ١٥ سنة فضوليّين تجاه الذكاء الاصطناعي", "أهالي بيدوّروا على تعرّض آمن بالـ AI", "مدارس بتبني مجموعات جاهزة للمستقبل"]
  },

  {
    slug: "free-content-creation-7-days",
    titleEn: "Free Content Creation Course",
    titleAr: "كورس صناعة المحتوى في 7 أيام",
    displayTitle: "كورس صناعة المحتوى في 7 أيام — Free Content Creation Course",
    categoryEn: "Free · 7 days",
    categoryAr: "مجاني · ٧ أيام",
    cover: "assets/courses Covers/صناعة المحتوى في 7 ايام.png",
    purchaseLink: "https://youtube.com/playlist?list=PLnchMteOsvEZcTdvFprBe9vswQzN7hJE6&si=CuRMuQ5WxroIOrjS",
    purchaseLinkStatus: "youtube-free",
    shortEn: "Free 7-day YouTube series — the fastest way to start creating content.",
    shortAr: "سلسلة يوتيوب مجانية ٧ أيام — أسرع طريقة تبدأ تصنع محتوى.",
    durationEn: "7 days · Free",
    durationAr: "٧ أيام · مجاني",
    accessEn: "Public on YouTube",
    accessAr: "متاح مجانًا على يوتيوب",
    overviewEn: "Our free 7-day YouTube series — designed to help anyone start creating before they invest in a paid programme. Real Optiiimum frameworks, zero cost.",
    overviewAr: "سلسلة يوتيوب المجانية ٧ أيام — مصمّمة عشان أي حد يبدأ يصنع محتوى قبل ما يستثمر في برنامج مدفوع. أطر Optiiimum الحقيقية بدون أي تكلفة.",
    learnEn: [
      "Day 1–3: Master the content fundamentals",
      "Day 4–5: Build a one-week posting routine",
      "Day 6–7: Ship your first 5 pieces of public content",
      "Diagnose what's working before scaling effort",
      "Get a no-cost taste of the Optiiimum method"
    ],
    learnAr: [
      "اليوم ١–٣: أتقن أساسيات المحتوى",
      "اليوم ٤–٥: ابني روتين نشر لمدة أسبوع",
      "اليوم ٦–٧: انشر أول ٥ قطع محتوى عامّة ليك",
      "شخّص اللي بيشتغل قبل ما تكبّر المجهود",
      "خد ذوقة مجانية من منهج Optiiimum"
    ],
    forEn: ["First-time content creators", "Students and freelancers", "Anyone unsure if content is for them"],
    forAr: ["مبتدئون في صناعة المحتوى لأول مرة", "طلاب وفريلانسرز", "أي حد لسه مش متأكد لو المحتوى مناسب ليه"]
  }
];

// Render bilingual related-course chips for any course
window.COURSES_BY_SLUG = window.COURSES.reduce(function (m, c) { m[c.slug] = c; return m; }, {});
