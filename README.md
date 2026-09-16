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
  status: "Criminal investigation",         // or: Wrongful death suit, Class action, Company disclosure, Settled for $X ...
  track: "civil",                           // only for government civil actions; omit otherwise
  summary: "Two or three factual sentences.",
  statute: {
    jurisdiction: "United States (federal)",
    citation: "18 U.S.C. § 1030(a)(5)(A)",
    title: "Computer Fraud and Abuse Act",
    quote: "verbatim operative text from the official source",
    translation: "English, if the quote is not in English",   // optional
    penalty: "Up to 10 years' imprisonment.",       // or `remedy:` for a civil entry
    note: "How the facts map onto the elements, and who the defendant would be.",  // optional
    url: "https://www.law.cornell.edu/uscode/text/18/1030"
  },
  articles: [
    { outlet: "Reuters", title: "Headline as published", url: "https://..." }
  ]
}
```

The tally is the length of the array, so the number on the board updates by itself. Rules:

- **Only the model.** In scope: how it was trained, what it generated, what it did, and human actions taken at its behest or with its help. Out of scope: corporate conduct that doesn't run through the model, such as data centers, labor, or securities.
- **Felony or government.** Every entry names one statute, quoted verbatim from the official source and linked. It gets in one of two ways. Either the conduct, if the allegation is true, violates a statute that carries more than a year of imprisonment or that its jurisdiction classes as a felony, crime, or indictable offense. Or a government entity has brought a civil action, investigation, or subpoena, in which case the entry cites the civil statute, states the remedy, and is labeled civil. Private civil suits that can't clear the felony bar stay off. Shady isn't enough.
- **Civil counts, and is marked.** Government civil actions count in the tally. They are tagged CIVIL on the case file, and the board shows how many of a model's entries are civil.
- **Dismissed civil-only cases are out.** Not listed, not counted. A case dismissed in part stays if claims survived, and the status says what survived.
- **Settlements stay when they read as a concession.** A settlement whose size and terms show the conduct was egregious is kept, with the amount in the status. A nuisance-value settlement is not.
- **Only trusted sources.** See [SOURCES.md](SOURCES.md). Every link on an entry has to come from the trusted tiers. Company press releases and incident reports count as primary documents; add them whenever one exists.
- **One entry per proceeding or event.** A lawsuit, an investigation, a court order, a ban, and a company disclosure are each one entry, even when they stem from the same underlying behavior.
- **Say what it is.** `status` names the kind of action: criminal investigation, wrongful death suit, class action, regulatory finding, company disclosure. Nothing here is a conviction unless the coverage says so.
- **Keep summaries factual.** The headline of the site does the editorializing.

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
