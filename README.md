# AI Safety Only Needs a Perp Walk

A running tally of reported felony-grade incidents involving four AI systems, and the person who answers for each one.

| System  | Company   | Responsible       |
|---------|-----------|-------------------|
| Claude  | Anthropic | Dario Amodei      |
| ChatGPT | OpenAI    | Sam Altman        |
| Grok    | xAI       | Elon Musk         |
| Gemini  | Google    | Sundar Pichai     |

Click a number on the board to open that system's case file: every incident with links to the news coverage.

## Running it

It is a static site. No build step.

```sh
open index.html            # works from the filesystem
# or
python3 -m http.server 8000 && open http://localhost:8000
```

## Publishing on GitHub Pages

1. Push this repo to GitHub.
2. Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site appears at `https://<user>.github.io/<repo>/`.

`.nojekyll` is already present so nothing gets mangled.

## Adding a case

Everything lives in [`data/incidents.js`](data/incidents.js). Add an object to the model's `incidents` array:

```js
{
  date: "2026-01-16",                       // incident or filing date, YYYY-MM-DD
  headline: "What happened, in one line",
  status: "Criminal investigation",         // or: Wrongful death suit, Class action, Company disclosure, Civil, settled ...
  summary: "Two or three factual sentences.",
  articles: [
    { outlet: "Reuters", title: "Headline as published", url: "https://..." }
  ]
}
```

The tally is the length of the array, so the number on the board updates by itself. Rules:

- At least one link to real coverage. No link, no entry.
- Entries are allegations, investigations, or company disclosures. Say which in `status`. Nothing here is a conviction unless the coverage says so.
- Keep summaries factual. The headline of the site does the editorializing.

## Layout

```
index.html          the board
cases.html          case file for one model (?model=claude|chatgpt|grok|gemini)
data/incidents.js   the docket. Edit this.
js/app.js           renders both pages from the docket
css/style.css       black, white, and the numbers in aggressive color
assets/heads/       grayscale portraits, lightly visible behind each row
assets/logos/       company logos, rendered grayscale
```

Image sources and licenses: [ATTRIBUTION.md](ATTRIBUTION.md).
