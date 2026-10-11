const SECRET = "ghx_secure_key_2026"; // must match SECRET_KEY in Colab Step 1

function doGet(e) {
  const out = ContentService.createTextOutput();
  out.setMimeType(ContentService.MimeType.JSON);
  try {
    const key = (e.parameter.key || "");
    const email = (e.parameter.email || "").toLowerCase().trim();
    if (key !== SECRET) {
      return out.setContent(JSON.stringify({ status: "error", message: "bad key" }));
    }
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    let master = "ON";
    const cfg = ss.getSheetByName("Config");
    if (cfg) master = String(cfg.getRange("A1").getValue() || "ON").toUpperCase();
    if (master === "OFF") {
      return out.setContent(JSON.stringify({ status: "off" }));
    }

    const sh = ss.getSheetByName("Users");
    if (!sh) {
      return out.setContent(JSON.stringify({ status: "error", message: "no Users sheet" }));
    }

    const data = sh.getDataRange().getValues();
    // headers row 0; columns: email | plan | expires | active
    for (let i = 1; i < data.length; i++) {
      const rowEmail = String(data[i][0] || "").toLowerCase().trim();
      if (!rowEmail || rowEmail !== email) continue;

      const plan = String(data[i][1] || "");
      const expires = data[i][2];
      const active = String(data[i][3] || "yes").toLowerCase();

      if (active === "no" || active === "0" || active === "false") {
        return out.setContent(JSON.stringify({ status: "denied", plan: plan }));
      }

      let expStr = "";
      if (expires instanceof Date) {
        expStr = Utilities.formatDate(expires, Session.getScriptTimeZone(), "yyyy-MM-dd");
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (expires < today) {
          return out.setContent(JSON.stringify({ status: "expired", plan: plan, expires: expStr }));
        }
      } else if (expires) {
        expStr = String(expires).slice(0, 10);
        const parts = expStr.split("-");
        if (parts.length === 3) {
          const expDate = new Date(+parts[0], +parts[1] - 1, +parts[2]);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (expDate < today) {
            return out.setContent(JSON.stringify({ status: "expired", plan: plan, expires: expStr }));
          }
        }
      }

      return out.setContent(JSON.stringify({ status: "ok", plan: plan, expires: expStr }));
    }

    return out.setContent(JSON.stringify({ status: "denied" }));
  } catch (err) {
    return out.setContent(JSON.stringify({ status: "error", message: String(err) }));
  }
}
