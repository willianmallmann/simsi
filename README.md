# simsi
This read.me file explains the basic architecture of simsi.com.br

# SIMSI — Quiz de Bem-Estar

Interactive quiz that recommends a personalized wellness ritual and directs users to the SIMSI store.

## Flow

1. **Breathing animation** — calming 15s cycle before the quiz starts
2. **4 questions** — objective → symptom → routine level → time available
3. **Lead capture** — name, email, newsletter consent
4. **Result** — ritual recommendation with a CTA link to the Shopify store

## Files

| File | Purpose |
|------|---------|
| `index.html` | All 7 screens (HTML structure) |
| `quiz.js` | Quiz logic, state, and lead submission |
| `styles.css` | All styling |
| `Code.gs` | Google Apps Script — deployed separately, writes leads to Google Sheets |

## Configuration

Edit the top of `quiz.js`:

```js
const SIMSI_CONFIG = {
  shopifyUrl:    'https://simsi.com.br',        // CTA destination
  sheetsWebhook: 'https://script.google.com/…', // Google Apps Script /exec URL
};
```

## Backend (Google Sheets)

1. Open [script.google.com](https://script.google.com), paste `Code.gs`, and deploy as a **Web App** (access: Anyone)
2. Copy the `/exec` URL into `SIMSI_CONFIG.sheetsWebhook`
3. Leads are written to the `Respostas` tab of the spreadsheet defined by `SPREADSHEET_ID` in `Code.gs`

Lead submission is non-blocking — quiz flow continues even if the webhook fails.

## Deployment (GitHub Pages)

The site is static — no build step.

1. Push to `main` on `github.com/willianmallmann/simsi`
2. Enable Pages: **Settings → Pages → branch `main` / root**
3. Set custom domain and add the matching CNAME record in your DNS provider
