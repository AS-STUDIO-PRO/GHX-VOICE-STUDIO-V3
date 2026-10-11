# Sheet + Apps Script setup (GHX VOICE STUDIO V3)

Use a **new** Google Sheet (separate from GHX Voice Studio V4) so user lists do not mix.

## 1. Create the Sheet

1. Go to https://sheets.google.com → Blank spreadsheet.
2. Name it e.g. **GHX V3 Access**.
3. Rename the first tab to **`Users`**.

### Row 1 (headers) — exact

| A | B | C | D |
|---|---|---|---|
| email | plan | expires | active |

### Row 2+ (users)

| email | plan | expires | active |
|-------|------|---------|--------|
| gulhassankalera787@gmail.com | admin | 2027-12-31 | yes |
| customer@gmail.com | monthly | 2026-11-30 | yes |

- **expires** format: `YYYY-MM-DD` (example: `2026-12-31`)
- **active**: `yes` or `no`
- **plan**: any label (`weekly`, `monthly`, `6month`, `yearly`, `admin`, …)

### Optional master switch

- New tab name: **`Config`**
- Cell **A1**: `ON` or `OFF`

## 2. Apps Script

1. In the same Sheet: **Extensions → Apps Script** (use a computer browser).
2. Delete any default code.
3. Paste everything from **`GHX_Access_Control_AppsScript.gs`**.
4. Save (Ctrl+S). Project name e.g. **GHX V3 Access**.

## 3. Deploy (get API URL)

1. **Deploy → New deployment**
2. Type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. **Deploy** → Authorize (Advanced → Go to… → Allow)
6. Copy **Web app URL** (must end with `/exec`)

## 4. Colab

In **GHX_Voice_Studio_V3.ipynb** → Step 1:

- **EMAIL** = registered Gmail  
- **API_URL** = the Web app URL from step 3  

`SECRET_KEY` in the notebook is `ghx_secure_key_2026` — must match `SECRET` in the script.

## 5. Test

1. Run Step 1 → expect **✅ ACCESS GRANTED**
2. Run Step 2 → open `.gradio.live` link

## Duration examples (set `expires` only)

| Package | Example expires (if today is 2026-10-11) |
|---------|------------------------------------------|
| 1 day | 2026-10-12 |
| 1 week | 2026-10-18 |
| 1 month | 2026-11-11 |
| 6 months | 2027-04-11 |
| 1 year | 2027-10-11 |
