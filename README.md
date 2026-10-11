<div align="center">

# 🎙️ GHX VOICE STUDIO V3

**Professional multilingual voice cloning, design and production — by GHX STUDIO.**

**Access:** Paid (email verification) · **Support:** WhatsApp **0341-4657696**

<!-- GitHub pe upload ke baad neeche USER/REPO apne se badlo -->
<a href="https://colab.research.google.com/github/YOUR_GITHUB_USER/GHX-VOICE-STUDIO-V3/blob/main/GHX_Voice_Studio_V3.ipynb">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

<br/>
<a href="https://colab.research.google.com/github/YOUR_GITHUB_USER/GHX-VOICE-STUDIO-V3/blob/main/GHX_Voice_Studio_V3.ipynb"><b>Open in Colab</b></a>

</div>

---

## ✨ Features

| Tab | What it does |
|---|---|
| **Voice Clone** | Clone a voice from a 3–10 second clip. Reference transcript is optional (auto-transcribed). Save the voice for later. |
| **Voice Design** | Build a voice from scratch: gender, age, pitch, style, accent, plus one-click presets (Narrator, News Anchor, Storyteller, Presenter, Soft Whisper). |
| **Auto Voice** | Let the studio pick a voice automatically. |
| **Expressions** | Insert non-verbal tags such as `[laughter]` and `[sigh]` directly into your script. Supports phoneme-based pronunciation fixes. |
| **Voice Library** | Reuse saved voices across sessions without re-uploading the reference. |
| **Batch Export** | One line per file. Renders every line and downloads everything as a single ZIP. |
| **Advanced settings** | Language (600+ languages), fixed Duration and Guidance scale, shared by every tab. Denoise, Preprocess Prompt and Postprocess Output are separate toggles. Voice Clone also has an optional Instruct box, and Voice Design offers extra accents and Chinese dialects. |
| **Guide** | Live system status, tips and responsible-use notes. |

Also included: automatic sentence-level splitting for long scripts, adjustable quality and speaking speed, silence control, advanced generation settings, live processing timer in the Colab log, 24 kHz WAV output, and a clean interface for desktop and mobile.

---

## 🚀 Quick start (Google Colab)

1. Click **Open in Colab** (badge above), **or** upload **`GHX_Voice_Studio_V3.ipynb`** at [colab.research.google.com](https://colab.research.google.com).
2. **Runtime → Change runtime type → T4 GPU**.
3. **Step 1 — Verify Access:** enter your registered Gmail and the **API_URL** (from your Apps Script Web App).
4. After **✅ ACCESS GRANTED**, run **Step 2 — Launch**.
5. Open the public **`.gradio.live`** link. Keep the Colab tab open while you work.

### First-time admin setup (one time)

1. Create a **new** Google Sheet (do not reuse the V4 sheet if you want separate user lists).
2. Sheet tab name: **`Users`**

| email | plan | expires | active |
|-------|------|---------|--------|
| you@gmail.com | admin | 2027-12-31 | yes |

3. Optional sheet **`Config`**, cell **A1** = `ON` (or `OFF` to disable everyone).
4. **Extensions → Apps Script** → paste code from **`GHX_Access_Control_AppsScript.gs`** → Save.
5. **Deploy → New deployment → Web app**  
   - Execute as: **Me**  
   - Who has access: **Anyone**  
6. Copy the Web App URL (`…/exec`) into Step 1 **API_URL**.

Full sheet steps: see **`SHEET_SETUP.md`**.

---

## 📦 What is in this package

```text
GHX_Voice_Studio_V3_Package/
├── GHX_Voice_Studio_V3.ipynb          # Colab notebook (paid gate + launch)
├── GHX_Access_Control_AppsScript.gs   # Paste into Google Apps Script
├── SHEET_SETUP.md                     # Users sheet + deploy guide
├── NOTICE.md                          # Third-party credits
└── README.md                          # This file
```

Engine runtime is pulled from the open AS VOICE STUDIO V3 project at launch; this package applies **GHX branding**, **WhatsApp support**, and **email access control** only.

---

## 💬 Support

| | |
|--|--|
| **WhatsApp** | [0341-4657696](https://wa.me/923414657696) |
| **Email** | gulhassankalera787@gmail.com |
| **Developer** | GHX STUDIO |

---

## 🎯 Tips for best results

- Use a **clean 3–10 second** reference clip with no background noise or music.
- Keep the **reference and target language the same** to avoid accent carry-over.
- Quality: **16** = fast, **32** = balanced, **48+** = studio.
- Write numbers as words (`123` → `one hundred twenty-three`).
- Long scripts are split at sentence boundaries automatically.
- **Preprocess Prompt** trims silence in the reference. **Postprocess Output** removes long silences from the result.

---

## 🛠️ Troubleshooting

| Problem | Fix |
|---|---|
| API_URL empty / ADMIN SETUP | Paste your **new** Web App URL in Step 1. |
| Access Denied | Email must match **Users** sheet; `active` = `yes`; `expires` in the future. |
| credential propagation | Normal on some browsers; tool falls back to sheet email check. |
| Very slow generation | Enable **T4 GPU**. |
| Public link missing | Wait for model download on first run; re-run Step 2. |
| Processing failed | Non-empty script + valid reference; check Colab log. |

---

## ⚠️ Responsible use

Do not clone anyone's voice without explicit permission. Do not use this tool for fraud, impersonation, harassment, or illegal purposes. You are responsible for how you use it.

---

## 🙏 Credits

Voice engine and interface logic based on open-source components (see [NOTICE.md](NOTICE.md)).  
**Product / access / branding:** GHX STUDIO.

---

<div align="center">Made by <b>GHX STUDIO</b> · WhatsApp <b>0341-4657696</b></div>
