/* global React, ReactDOM, TweaksPanel, TweakSection, TweakToggle, TweakRadio, TweakSlider, TweakSelect, useTweaks */
(function () {
  const { useEffect } = React;

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "gradRotator": true,
    "gradEmphasis": false,
    "gradHeadings": false,
    "gradEyebrows": false,
    "gradPalette": "spectrum",
    "gradAngle": 120
  }/*EDITMODE-END*/;

  // Curated gradient palettes — keys map to CSS stop strings
  const PALETTES = {
    spectrum: "var(--grad-1), var(--grad-2), var(--grad-3), var(--grad-4), var(--grad-5), var(--grad-6)",
    warm:     "#FDD196, #FF966D, #E555C8, #BE6FD2",
    cool:     "#54B3EC, #00FEFF, #BE6FD2, #E555C8",
    sunset:   "#FDD196, #FF966D, #E555C8",
    aurora:   "#E555C8, #BE6FD2, #54B3EC, #00FEFF",
    mono:     "#FFFFFF, #D4D4D8, #A1A1AA"
  };

  function HomeTweaks() {
    const [t, setT] = useTweaks(TWEAK_DEFAULTS);

    // Apply all tweaks to <html> attributes + CSS vars
    useEffect(() => {
      const r = document.documentElement;
      r.setAttribute("data-grad-rotator",  t.gradRotator  ? "1" : "0");
      r.setAttribute("data-grad-emphasis", t.gradEmphasis ? "1" : "0");
      r.setAttribute("data-grad-headings", t.gradHeadings ? "1" : "0");
      r.setAttribute("data-grad-eyebrows", t.gradEyebrows ? "1" : "0");
      r.style.setProperty("--opt-grad-angle", `${t.gradAngle}deg`);
      r.style.setProperty("--opt-grad-stops", PALETTES[t.gradPalette] || PALETTES.spectrum);
    }, [t.gradRotator, t.gradEmphasis, t.gradHeadings, t.gradEyebrows, t.gradPalette, t.gradAngle]);

    return (
      <TweaksPanel title="Optiiimum gradient">
        <TweakSection label="Apply gradient to">
          <TweakToggle
            label="Hero rotating words"
            value={t.gradRotator}
            onChange={(v) => setT("gradRotator", v)}
          />
          <TweakToggle
            label="“People and companies”"
            value={t.gradEmphasis}
            onChange={(v) => setT("gradEmphasis", v)}
          />
          <TweakToggle
            label="Section headings"
            value={t.gradHeadings}
            onChange={(v) => setT("gradHeadings", v)}
          />
          <TweakToggle
            label="Section eyebrows"
            value={t.gradEyebrows}
            onChange={(v) => setT("gradEyebrows", v)}
          />
        </TweakSection>

        <TweakSection label="Gradient style">
          <TweakSelect
            label="Palette"
            value={t.gradPalette}
            onChange={(v) => setT("gradPalette", v)}
            options={[
              { value: "spectrum", label: "Full spectrum (brand)" },
              { value: "warm",     label: "Warm — gold → pink"   },
              { value: "cool",     label: "Cool — cyan → purple" },
              { value: "sunset",   label: "Sunset — gold → magenta" },
              { value: "aurora",   label: "Aurora — magenta → cyan" },
              { value: "mono",     label: "Mono — white → light grey" }
            ]}
          />
          <TweakSlider
            label="Angle"
            min={0} max={360} step={5}
            value={t.gradAngle}
            onChange={(v) => setT("gradAngle", v)}
            unit="°"
          />
        </TweakSection>
      </TweaksPanel>
    );
  }

  const mount = document.createElement("div");
  mount.id = "tweaks-root";
  document.body.appendChild(mount);
  ReactDOM.createRoot(mount).render(<HomeTweaks />);

  // Apply gradient defaults immediately (before React mounts) so the page
  // looks right even when Tweaks panel is closed.
  (function applyDefaults() {
    const r = document.documentElement;
    if (!r.hasAttribute("data-grad-rotator"))
      r.setAttribute("data-grad-rotator",  TWEAK_DEFAULTS.gradRotator  ? "1" : "0");
    if (!r.hasAttribute("data-grad-emphasis"))
      r.setAttribute("data-grad-emphasis", TWEAK_DEFAULTS.gradEmphasis ? "1" : "0");
    if (!r.hasAttribute("data-grad-headings"))
      r.setAttribute("data-grad-headings", TWEAK_DEFAULTS.gradHeadings ? "1" : "0");
    if (!r.hasAttribute("data-grad-eyebrows"))
      r.setAttribute("data-grad-eyebrows", TWEAK_DEFAULTS.gradEyebrows ? "1" : "0");
    r.style.setProperty("--opt-grad-angle", `${TWEAK_DEFAULTS.gradAngle}deg`);
    r.style.setProperty("--opt-grad-stops", PALETTES[TWEAK_DEFAULTS.gradPalette]);
  })();
})();
