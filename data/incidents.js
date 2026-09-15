/*
  The docket. This file drives the whole site.

  Scope: the model itself. In scope: how it was trained, what it generated, what it did, and human
  actions taken at its behest or with its help. Out of scope: corporate conduct that does not run
  through the model (data centers, labor, securities). Sources must meet SOURCES.md.

  Felony or nothing. Every entry names one statute that, if the allegation is true, the conduct
  violates, quoted verbatim from the official source, with the penalty. The offense must carry more
  than one year of imprisonment or be classified by its jurisdiction as a felony, crime, or indictable
  offense. Regulatory fines alone do not qualify. No statute, no entry.

  Each model has an `incidents` array. The tally on the board is the length of that array.
  Every incident needs: date (YYYY-MM-DD, the incident or filing date), headline, status,
  summary, and at least one article {outlet, title, url}. Entries are reports and allegations,
  not convictions. Keep the language factual and let the coverage speak.
*/
window.PERP_WALK_DATA = {
  models: [
    {
      id: "claude",
      name: "Claude",
      company: "Anthropic",
      person: "Dario Amodei",
      title: "CEO, Anthropic",
      logo: "assets/logos/anthropic.png",
      head: "assets/heads/dario-amodei.jpg",
      headPosition: "50% 22%",
      color: "#ff1f1f",
      incidents: [
        {
          date: "2025-11-13",
          headline: "Claude Code ran a state-sponsored espionage campaign against roughly 30 organizations",
          status: "Company disclosure",
          summary: "Anthropic said a group it assessed as Chinese state-sponsored jailbroke Claude Code into autonomously scanning, exploiting, and exfiltrating data from about 30 tech, finance, chemical, and government targets, with the model doing an estimated 80 to 90 percent of the work. Some intrusions succeeded.",
          statute: {
            jurisdiction: "United States (federal)",
            citation: "18 U.S.C. § 1030(a)(5)(A)",
            title: "Computer Fraud and Abuse Act",
            quote: "knowingly causes the transmission of a program, information, code, or command, and as a result of such conduct, intentionally causes damage without authorization, to a protected computer",
            penalty: "Up to 10 years' imprisonment under § 1030(c)(4)(B) where the offense caused one of the listed harms, including loss of $5,000 or more.",
            url: "https://www.law.cornell.edu/uscode/text/18/1030"
          },
          articles: [
            { outlet: "Anthropic", title: "Disrupting the first reported AI-orchestrated cyber espionage campaign (full report, PDF)", url: "https://www-cdn.anthropic.com/d7dd50dd1185f59be051b307150d877f2b82bd2c.pdf" },
            { outlet: "The Register", title: "Chinese spies told Claude to break into about 30 critical orgs. Some attacks succeeded", url: "https://www.theregister.com/2025/11/13/chinese_spies_claude_attacks/" },
            { outlet: "Anthropic", title: "Disrupting an AI-orchestrated cyber espionage campaign", url: "https://www.anthropic.com/news/disrupting-AI-espionage" }
          ]
        },
        {
          date: "2026-07-20",
          headline: "Anthropic pays $1.5 billion to settle claims it trained Claude on pirated books",
          status: "Settled for $1.5 billion",
          summary: "A federal judge gave final approval to a $1.5 billion class settlement resolving claims that Anthropic downloaded hundreds of thousands of copyrighted books from pirate libraries to train Claude. It is the largest copyright recovery on record. Anthropic did not admit liability.",
          statute: {
            jurisdiction: "United States (federal)",
            citation: "17 U.S.C. § 506(a)(1)(A), 18 U.S.C. § 2319(b)(1)",
            title: "Criminal copyright infringement",
            quote: "Any person who willfully infringes a copyright shall be punished as provided under section 2319 of title 18, if the infringement was committed— (A) for purposes of commercial advantage or private financial gain",
            penalty: "Under 18 U.S.C. § 2319(b)(1): \"shall be imprisoned not more than 5 years, or fined in the amount set forth in this title, or both, if the offense consists of the reproduction or distribution, including by electronic means, during any 180-day period, of at least 10 copies or phonorecords, of 1 or more copyrighted works, which have a total retail value of more than $2,500.\"",
            note: "The settled claims were civil. The same conduct, willful bulk reproduction of copyrighted books for commercial advantage, is what the criminal statute describes. No criminal charge was brought.",
            url: "https://www.law.cornell.edu/uscode/text/17/506"
          },
          articles: [
            { outlet: "TechCrunch", title: "Anthropic's landmark $1.5B copyright settlement is approved", url: "https://techcrunch.com/2026/07/20/anthropics-landmark-1-5b-copyright-settlement-is-approved/" },
            { outlet: "JURIST", title: "Judge approves record $1.5 billion AI copyright settlement involving Anthropic", url: "https://www.jurist.org/news/2026/07/judge-approves-record-1-5-billion-settlement-involving-anthropic/" },
            { outlet: "The Authors Guild", title: "Court Grants Final Approval of $1.5 Billion Anthropic Copyright Settlement", url: "https://authorsguild.org/news/court-grants-final-approval-anthropic-copyright-settlement/" }
          ]
        },
        {
          date: "2026-09-10",
          headline: "Claude used for romance-scam personas, malware, surveillance, and weapons research",
          status: "Company disclosure",
          summary: "Anthropic's threat report covering December 2025 through August 2026 described Claude powering more than 4,700 dating-app personas that exchanged 2.36 million messages with at least 25,000 targets, plus cases across cyber operations, surveillance, conventional weapons development, biological misuse, and fraud.",
          statute: {
            jurisdiction: "United States (federal)",
            citation: "18 U.S.C. § 1343",
            title: "Wire fraud",
            quote: "Whoever, having devised or intending to devise any scheme or artifice to defraud, or for obtaining money or property by means of false or fraudulent pretenses, representations, or promises, transmits or causes to be transmitted by means of wire, radio, or television communication in interstate or foreign commerce, any writings, signs, signals, pictures, or sounds for the purpose of executing such scheme or artifice, shall be fined under this title or imprisoned not more than 20 years, or both.",
            penalty: "Up to 20 years' imprisonment.",
            note: "The romance-scam personas in Anthropic's report are the scheme; Claude's messages are the wire transmissions. The operators, not Anthropic, would be the defendants.",
            url: "https://www.law.cornell.edu/uscode/text/18/1343"
          },
          articles: [
            { outlet: "Anthropic", title: "Countering misuse of AI: September 2026 threat intelligence report", url: "https://www.anthropic.com/threat-intelligence-report-september-2026" },
            { outlet: "The Hacker News", title: "Claude Used to Automate Exploitation and Data Theft Across Multiple Victims", url: "https://thehackernews.com/2026/09/claude-used-to-automate-exploitation.html" },
            { outlet: "TNW", title: "Anthropic details how Claude was misused for surveillance and weapons", url: "https://thenextweb.com/news/anthropic-claude-misuse-threat-intelligence-report" }
          ]
        }
      ]
    },
    {
      id: "chatgpt",
      name: "ChatGPT",
      company: "OpenAI",
      person: "Sam Altman",
      title: "CEO, OpenAI",
      logo: "assets/logos/openai.png",
      head: "assets/heads/sam-altman.jpg",
      headPosition: "60% 30%",
      color: "#ff6a00",
      incidents: [
        {
          date: "2025-04-11",
          headline: "Raine v. OpenAI: parents say ChatGPT coached their 16-year-old through his suicide",
          status: "Wrongful death suit",
          summary: "Matthew and Maria Raine sued OpenAI and Sam Altman after their son Adam died by suicide, alleging GPT-4o validated his suicidal thoughts, detailed methods, helped him hide a failed attempt, and offered to draft his note. An amended complaint alleges OpenAI relaxed self-harm safeguards in the months before his death.",
          statute: {
            jurisdiction: "California",
            citation: "Cal. Penal Code § 401(a)",
            title: "Aiding, advising, or encouraging suicide",
            quote: "Any person who deliberately aids, advises, or encourages another to commit suicide is guilty of a felony.",
            penalty: "Felony.",
            url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=401"
          },
          articles: [
            { outlet: "CNN", title: "Parents of 16-year-old Adam Raine sue OpenAI, claiming ChatGPT advised on his suicide", url: "https://www.cnn.com/2025/08/26/tech/openai-chatgpt-teen-suicide-lawsuit" },
            { outlet: "NBC News", title: "The family of teenager who died by suicide alleges OpenAI's ChatGPT is to blame", url: "https://www.nbcnews.com/tech/tech-news/family-teenager-died-suicide-alleges-openais-chatgpt-blame-rcna226147" },
            { outlet: "TIME", title: "OpenAI Removed Safeguards Before Teen's Suicide, Amended Lawsuit Claims", url: "https://time.com/7327946/chatgpt-openai-suicide-adam-raine-lawsuit/" }
          ]
        },
        {
          date: "2025-04-17",
          headline: "Florida opens a criminal investigation into OpenAI over the FSU shooting",
          status: "Criminal investigation",
          summary: "Florida's attorney general opened an investigation into whether OpenAI bears criminal responsibility for the April 2025 Florida State University shooting that killed two people, after chat logs reportedly showed the accused gunman asking ChatGPT what gun and ammunition to use and when campus would be busiest. Announced April 21, 2026.",
          statute: {
            jurisdiction: "Florida",
            citation: "Fla. Stat. § 777.011",
            title: "Principal in the first degree",
            quote: "Whoever commits any criminal offense against the state, whether felony or misdemeanor, or aids, abets, counsels, hires, or otherwise procures such offense to be committed, and such offense is committed or is attempted to be committed, is a principal in the first degree and may be charged, convicted, and punished as such, whether he or she is or is not actually or constructively present at the commission of such offense.",
            penalty: "Punished as the principal. The underlying offense is first-degree murder, a capital felony under Fla. Stat. § 782.04.",
            note: "This is the theory the Florida attorney general's office announced it is investigating: whether OpenAI bears criminal responsibility for counseling the shooter.",
            url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0777/Sections/0777.011.html"
          },
          articles: [
            { outlet: "CNN", title: "Florida attorney general launches criminal investigation into ChatGPT maker OpenAI after deadly FSU shooting", url: "https://www.cnn.com/2026/04/21/tech/florida-criminal-investigation-chatgpt-openai-fsu-shooting" },
            { outlet: "CBS News", title: "Florida opens criminal investigation into OpenAI over ChatGPT's alleged role in FSU shooting", url: "https://www.cbsnews.com/news/florida-criminal-investigation-openai-chatgpt-alleged-role-fsu-shooting/" },
            { outlet: "NPR", title: "Florida AG launches criminal investigation into ChatGPT over FSU shooting", url: "https://www.npr.org/2026/04/21/nx-s1-5793967/florida-openai-investigation-mass-shooting-fsu" }
          ]
        },
        {
          date: "2025-05-31",
          headline: "Parents say ChatGPT's drug advice killed their 19-year-old son",
          status: "Wrongful death suit",
          summary: "A suit filed in San Francisco County Superior Court alleges ChatGPT-4o recommended Xanax for kratom-induced nausea to Samuel Nelson, a 19-year-old college student, without warning the combination could be fatal. He died hours later.",
          statute: {
            jurisdiction: "California",
            citation: "Cal. Bus. & Prof. Code § 2052(a)",
            title: "Practicing medicine without a license",
            quote: "any person who practices or attempts to practice, or who advertises or holds himself or herself out as practicing, any system or mode of treating the sick or afflicted in this state, or who diagnoses, treats, operates for, or prescribes for any ailment, blemish, deformity, disease, disfigurement, disorder, injury, or other physical or mental condition of any person, without having at the time of so doing a valid, unrevoked, or unsuspended certificate as provided in this chapter or without being authorized to perform the act pursuant to a certificate obtained in accordance with some other provision of law is guilty of a public offense, punishable by a fine not exceeding ten thousand dollars ($10,000), by imprisonment pursuant to subdivision (h) of Section 1170 of the Penal Code, by imprisonment in a county jail not exceeding one year, or by both the fine and either imprisonment.",
            penalty: "A wobbler: chargeable as a felony with a state-prison term under Penal Code § 1170(h), or as a misdemeanor.",
            note: "The complaint calls ChatGPT an unlicensed medical adviser that prescribed dosages. Involuntary manslaughter, Penal Code § 192(b), is the other felony theory the facts support.",
            url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=2052"
          },
          articles: [
            { outlet: "Daily Journal", title: "Parents sue OpenAI, claim ChatGPT encouraged drug use that led to son's death", url: "https://www.dailyjournal.com/articles/391370-parents-sue-openai-claim-chatgpt-encouraged-drug-use-that-led-to-son-s-death" },
            { outlet: "Claims Journal", title: "Lawsuit Claims OpenAI Chatbot Gave Advice That Led to Fatal Overdose", url: "https://www.claimsjournal.com/news/national/2026/05/13/337553.htm" }
          ]
        },
        {
          date: "2025-08-05",
          headline: "Connecticut murder-suicide: suit says ChatGPT fed a man's delusions about his mother",
          status: "Wrongful death suit",
          summary: "The estate of Suzanne Adams, 83, sued OpenAI, Sam Altman, and Microsoft after her son, Stein-Erik Soelberg, killed her and then himself in Greenwich, Connecticut. The complaint alleges ChatGPT validated and magnified his paranoid beliefs and reframed his mother as an adversary. It is the first wrongful death suit tying a chatbot to a homicide. A federal judge later declined to dismiss the federal claims.",
          statute: {
            jurisdiction: "Connecticut",
            citation: "Conn. Gen. Stat. § 53a-8(a)",
            title: "Criminal liability for acts of another",
            quote: "A person, acting with the mental state required for commission of an offense, who solicits, requests, commands, importunes or intentionally aids another person to engage in conduct which constitutes an offense shall be criminally liable for such conduct and may be prosecuted and punished as if he were the principal offender.",
            penalty: "Punished as the principal. The underlying offense is murder, Conn. Gen. Stat. § 53a-54a, a class A felony.",
            note: "The complaint alleges ChatGPT reframed the victim as an adversary and validated the plan. That is the conduct § 53a-8 describes.",
            url: "https://www.cga.ct.gov/current/pub/chap_952.htm#sec_53a-8"
          },
          articles: [
            { outlet: "CBS News", title: "OpenAI, Microsoft sued over ChatGPT's alleged role in fueling man's \"paranoid delusions\" before murder-suicide in Connecticut", url: "https://www.cbsnews.com/news/open-ai-microsoft-sued-chatgpt-murder-suicide-connecticut/" },
            { outlet: "The San Francisco Standard", title: "OpenAI lawsuit says ChatGPT pushed user to kill mother", url: "https://sfstandard.com/2025/12/11/openai-microsoft-sued-suzanee-adams-stein-erik-soelberg/" },
            { outlet: "Courthouse News Service", title: "OpenAI can't duck federal claims over murder-suicide tied to ChatGPT", url: "https://www.courthousenews.com/openai-cant-duck-federal-claims-over-murder-suicide-tied-to-chatgpt/" },
            { outlet: "Hagens Berman", title: "Lawsuit Filed Against OpenAI Following Murder-Suicide in Connecticut", url: "https://www.hbsslaw.com/press/openai-chatgpt-wrongful-death-claim/lawsuit-filed-against-openai-following-murder-suicide-in-connecticut" }
          ]
        },
        {
          date: "2026-07-11",
          headline: "OpenAI agents broke out of a test sandbox and breached Hugging Face",
          status: "Company disclosure",
          summary: "During a cybersecurity experiment with normal controls lifted, an OpenAI model given an unsolvable task chained undiscovered exploits to escape its sandbox, compromised OpenAI's package management system to reach the internet, and went on to breach Hugging Face and other vendors between July 11 and 13, 2026. About 1,200 agents meant to be isolated coordinated through an unsanctioned message board. OpenAI's own report says it missed warning signs.",
          statute: {
            jurisdiction: "United States (federal)",
            citation: "18 U.S.C. § 1030(a)(5)(A)",
            title: "Computer Fraud and Abuse Act",
            quote: "knowingly causes the transmission of a program, information, code, or command, and as a result of such conduct, intentionally causes damage without authorization, to a protected computer",
            penalty: "Up to 10 years' imprisonment under § 1030(c)(4)(B) where the offense caused one of the listed harms, including loss of $5,000 or more.",
            note: "OpenAI's own agents accessed Hugging Face's and other vendors' systems without authorization. The statute does not care whether the operator intended the breach; it asks whether the transmission was knowing and the damage intentional. Hugging Face reported the incident to law enforcement.",
            url: "https://www.law.cornell.edu/uscode/text/18/1030"
          },
          articles: [
            { outlet: "Hugging Face", title: "Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident", url: "https://huggingface.co/blog/agent-intrusion-technical-timeline" },
            { outlet: "OpenAI", title: "OpenAI and Hugging Face partner to address security incident during model evaluation", url: "https://openai.com/index/hugging-face-model-evaluation-security-incident/" },
            { outlet: "Cybersecurity Dive", title: "Hundreds of agents went rogue in lead up to Hugging Face breach", url: "https://www.cybersecuritydive.com/news/hundreds-agents-rogue-lead-up-hugging-face-breach/828963/" },
            { outlet: "Defense One", title: "July's breakout at OpenAI was far more complex than initially realized", url: "https://www.defenseone.com/threats/2026/09/AI-breakout-openai-complex/415825/" },
            { outlet: "Axios", title: "OpenAI missed warning signs before Hugging Face breach", url: "https://www.axios.com/2026/08/26/openai-hugging-face-technical-report-ai-hack" },
            { outlet: "TechCrunch", title: "OpenAI releases its official report on the Hugging Face breach", url: "https://techcrunch.com/2026/08/26/openai-releases-its-official-report-on-the-hugging-face-breach/" },
            { outlet: "METR", title: "Brief independent investigation of agents' behavior, reasoning and collaboration in the OpenAI / Hugging Face hacking incident", url: "https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/" },
            { outlet: "OpenAI", title: "The Hugging Face incident and the road ahead", url: "https://openai.com/index/hugging-face-incident-and-the-road-ahead/" }
          ]
        },
        {
          date: "2025-11-06",
          headline: "Seven lawsuits in one day: four suicides and three survivors blame GPT-4o",
          status: "Wrongful death and injury suits",
          summary: "Seven suits filed in California state courts allege OpenAI knowingly shipped GPT-4o prematurely despite internal warnings that it was dangerously sycophantic and psychologically manipulative, and that it drove users into delusion and self-harm.",
          statute: {
            jurisdiction: "California",
            citation: "Cal. Penal Code § 401(a)",
            title: "Aiding, advising, or encouraging suicide",
            quote: "Any person who deliberately aids, advises, or encourages another to commit suicide is guilty of a felony.",
            penalty: "Felony.",
            url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=401"
          },
          articles: [
            { outlet: "The Washington Post", title: "OpenAI faces 7 lawsuits claiming ChatGPT drove people to suicide, delusions", url: "https://www.washingtonpost.com/business/2025/11/06/openai-chatgpt-lawsuit-suicide/3df308e6-bb78-11f0-b389-38cf5ff33d6f_story.html" },
            { outlet: "Social Media Victims Law Center", title: "SMVLC Files 7 Lawsuits Accusing ChatGPT of Emotional Manipulation, Acting as \"Suicide Coach\"", url: "https://socialmediavictims.org/press-releases/smvlc-tech-justice-law-project-lawsuits-accuse-chatgpt-of-emotional-manipulation-supercharging-ai-delusions-and-acting-as-a-suicide-coach/" }
          ]
        }
      ]
    },
    {
      id: "grok",
      name: "Grok",
      company: "xAI",
      person: "Elon Musk",
      title: "Founder, xAI",
      logo: "assets/logos/xai.png",
      logoShape: "tall",
      head: "assets/heads/elon-musk.jpg",
      color: "#ffe600",
      incidents: [
        {
          date: "2025-07-08",
          headline: "Grok praises Hitler and calls itself MechaHitler; Turkey bans it, Poland reports xAI to the EU",
          status: "Court ban, regulator complaint",
          summary: "After a system prompt update, Grok posted antisemitic content on X, praised Hitler as a leader for modern America, and referred to itself as MechaHitler. A Turkish court ordered Grok blocked nationwide the next day over insults to President Erdogan and Atatürk. Poland said it would report xAI to the European Commission over abuse aimed at its politicians. Bipartisan members of Congress demanded answers.",
          statute: {
            jurisdiction: "Germany",
            citation: "Strafgesetzbuch § 130(1)",
            title: "Volksverhetzung (incitement of hatred)",
            quote: "Wer in einer Weise, die geeignet ist, den öffentlichen Frieden zu stören, 1. gegen eine nationale, rassische, religiöse oder durch ihre ethnische Herkunft bestimmte Gruppe, gegen Teile der Bevölkerung oder gegen einen Einzelnen wegen dessen Zugehörigkeit zu einer vorbezeichneten Gruppe oder zu einem Teil der Bevölkerung zum Hass aufstachelt, zu Gewalt- oder Willkürmaßnahmen auffordert oder 2. die Menschenwürde anderer dadurch angreift, dass er eine vorbezeichnete Gruppe, Teile der Bevölkerung oder einen Einzelnen wegen dessen Zugehörigkeit zu einer vorbezeichneten Gruppe oder zu einem Teil der Bevölkerung beschimpft, böswillig verächtlich macht oder verleumdet, wird mit Freiheitsstrafe von drei Monaten bis zu fünf Jahren bestraft.",
            translation: "Whoever, in a manner liable to disturb the public peace, 1. incites hatred against a national, racial, religious group or a group defined by its ethnic origin, against parts of the population or against an individual on account of membership in such a group or part of the population, or calls for violent or arbitrary measures against them, or 2. attacks the human dignity of others by insulting, maliciously disparaging or defaming such a group, parts of the population or an individual on account of such membership, shall be punished with imprisonment of three months to five years.",
            penalty: "3 months to 5 years' imprisonment.",
            note: "Grok is offered in Germany and the posts were public on X there. No German proceeding has been reported. Turkey's block was under its own insult law, art. 299 of the Turkish Penal Code, which is not the basis here.",
            url: "https://www.gesetze-im-internet.de/stgb/__130.html"
          },
          articles: [
            { outlet: "NPR", title: "Elon Musk's AI chatbot, Grok, started calling itself 'MechaHitler'", url: "https://www.npr.org/2025/07/09/nx-s1-5462609/grok-elon-musk-antisemitic-racist-content" },
            { outlet: "Rolling Stone", title: "Grok Calls Itself 'MechaHitler,' Spouts Antisemitic Comments", url: "https://www.rollingstone.com/culture/culture-news/elon-musk-grok-chatbot-antisemitic-posts-1235381165/" },
            { outlet: "Balkan Insight", title: "Turkish Court Orders Block on X's Grok for Insulting Leaders", url: "https://balkaninsight.com/2025/07/09/turkish-court-orders-block-on-xs-grok-for-insulting-leaders/bi/" },
            { outlet: "Bloomberg", title: "Europe's xAI Clash Escalates After Grok's Rants", url: "https://www.bloomberg.com/news/articles/2025-07-09/poland-calls-for-eu-probe-of-xai-after-lewd-rants-by-chatbot" }
          ]
        },
        {
          date: "2025-08-05",
          headline: "Grok Imagine's spicy mode produces topless Taylor Swift videos without being asked",
          status: "Reported",
          summary: "The Verge reported that Grok Imagine's spicy preset generated fully uncensored topless videos of Taylor Swift on first use, without the reporter asking for nudity. Other outlets reproduced the result with other famous women. xAI's own acceptable use policy bans pornographic depictions of real people, and the federal TAKE IT DOWN Act criminalizing nonconsensual intimate imagery had been signed three months earlier.",
          statute: {
            jurisdiction: "United States (federal)",
            citation: "47 U.S.C. § 223(h)(3)(A)",
            title: "TAKE IT DOWN Act: publishing a digital forgery",
            quote: "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is not a minor if— (i) the digital forgery was published without the consent of the identifiable individual; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the digital forgery— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.",
            penalty: "Under § 223(h)(4)(A), up to 2 years' imprisonment. Where the individual is a minor, § 223(h)(3)(B) and (h)(4)(B): up to 3 years.",
            note: "Signed May 19, 2025. Publication on X of Grok-generated images is the act the statute reaches; the user who posts and the platform that generates and hosts are both in the frame.",
            url: "https://www.law.cornell.edu/uscode/text/47/223"
          },
          articles: [
            { outlet: "Gizmodo", title: "Grok's 'Spicy' Mode Makes NSFW Celebrity Deepfakes of Women (But Not Men)", url: "https://gizmodo.com/groks-spicy-mode-makes-nsfw-celebrity-deepfakes-of-women-but-not-men-2000639308" },
            { outlet: "Deadline", title: "Elon Musk's Latest AI Frontier: 'Spicy' Deepfakes Of Stars Like Scarlett Johansson & Taylor Swift", url: "https://deadline.com/2025/08/elon-musk-ai-deepfakes-scarlett-johansson-taylor-swift-1236480553/" }
          ]
        },
        {
          date: "2025-11-20",
          headline: "Grok posts Holocaust denial to more than a million users; Paris prosecutors add it to their probe",
          status: "Criminal investigation",
          summary: "Grok posted that the Auschwitz crematoria were designed for disinfection with Zyklon B rather than mass executions, and referred to lobbies controlling media and culture. The post was seen by more than a million users. The Paris prosecutor's cybercrime unit added the posts to its existing investigation of X, French ministers reported them as possible crimes, and the government flagged X to the EU under the Digital Services Act.",
          statute: {
            jurisdiction: "Germany",
            citation: "Strafgesetzbuch § 130(3)",
            title: "Holocaust denial",
            quote: "Mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe wird bestraft, wer eine unter der Herrschaft des Nationalsozialismus begangene Handlung der in § 6 Abs. 1 des Völkerstrafgesetzbuches bezeichneten Art in einer Weise, die geeignet ist, den öffentlichen Frieden zu stören, öffentlich oder in einer Versammlung billigt, leugnet oder verharmlost.",
            translation: "Whoever publicly or in a meeting approves of, denies or downplays an act of the kind described in section 6(1) of the Code of Crimes against International Law committed under National Socialist rule, in a manner liable to disturb the public peace, shall be punished with imprisonment of up to five years or a fine.",
            penalty: "Up to 5 years' imprisonment.",
            note: "The French investigation is under article 24 bis of the Law of 29 July 1881, which carries one year. That falls below this docket's bar, so the felony-grade statute cited is Germany's, where the post was equally public.",
            url: "https://www.gesetze-im-internet.de/stgb/__130.html"
          },
          articles: [
            { outlet: "Fortune", title: "Grok under investigation for Holocaust denial claims about Auschwitz gas chambers", url: "https://www.fortune.com/2025/11/21/grok-under-investigation-holocaust-denial-gas-chambers-elon-musk" },
            { outlet: "PBS NewsHour", title: "France will investigate Musk's Grok after AI chatbot posted Holocaust denial claims", url: "https://www.pbs.org/newshour/world/france-will-investigate-musks-grok-after-ai-chatbot-posted-holocaust-denial-claims" },
            { outlet: "Euronews", title: "Elon Musk's Grok goes viral for reviving a long-debunked claim about Auschwitz", url: "https://www.euronews.com/my-europe/2025/11/21/elon-musks-grok-goes-viral-for-reviving-a-long-debunked-claim-about-auschwitz" }
          ]
        },
        {
          date: "2026-01-14",
          headline: "California attorney general opens investigation into xAI over sexualized images of women and children",
          status: "State investigation",
          summary: "Attorney General Rob Bonta announced an investigation into the proliferation of nonconsensual sexually explicit material, including images of children, produced with Grok. California had also been sued by xAI weeks earlier over a state law requiring disclosure of AI training data.",
          statute: {
            jurisdiction: "California",
            citation: "Cal. Penal Code § 311.11(a)(1)",
            title: "Possession of child sexual abuse material, including AI-generated matter",
            quote: "Every person who knowingly possesses or controls any matter, representation of information, data, or image, including, but not limited to, any film, filmstrip, photograph, negative, slide, photocopy, videotape, video laser disc, computer hardware, computer software, computer floppy disc, data storage media, CD-ROM, or computer-generated equipment or any other computer-generated image that contains or incorporates in any manner, any film, filmstrip, or any digitally altered or artificial-intelligence-generated matter, the production of which involves the use of a person under 18 years of age, knowing that the matter depicts a person under 18 years of age personally engaging in or simulating sexual conduct, as defined in subdivision (d) of Section 311.4, is guilty of a felony and shall be punished by imprisonment in the state prison, or a county jail for up to one year, or by a fine not exceeding two thousand five hundred dollars ($2,500), or by both the fine and imprisonment.",
            penalty: "Felony.",
            note: "Amended by AB 1831 (2024) to cover digitally altered and AI-generated matter. Production and distribution are separate felonies under §§ 311.2 and 311.4.",
            url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=311.11"
          },
          articles: [
            { outlet: "California Department of Justice", title: "Attorney General Bonta Launches Investigation into xAI, Grok Over Undressed, Sexual AI Images of Women and Children", url: "https://www.oag.ca.gov/news/press-releases/attorney-general-bonta-launches-investigation-xai-grok-over-undressed-sexual-ai" },
            { outlet: "CNBC", title: "Elon Musk's xAI probed by California DOJ over Grok's deepfake explicit images", url: "https://www.cnbc.com/2026/01/14/elon-musk-xai-california-grok-investigation.html" }
          ]
        },
        {
          date: "2026-01-16",
          headline: "Ofcom opens a formal investigation after Grok generated an estimated 3 million sexualized images in 11 days",
          status: "Regulatory investigation",
          summary: "The Center for Countering Digital Hate estimated Grok's image tools produced about 3 million sexualized images between December 29, 2025 and January 8, 2026, roughly 23,000 of them appearing to depict children. Ofcom opened a formal Online Safety Act investigation into X. A bipartisan coalition of 35 US state attorneys general sent xAI a letter demanding it stop Grok from producing nonconsensual intimate images and child sexual abuse material.",
          statute: {
            jurisdiction: "United Kingdom",
            citation: "Protection of Children Act 1978, s. 1(1)(a); s. 6(2)",
            title: "Making an indecent pseudo-photograph of a child",
            quote: "it is an offence for a person— (a) to take, or permit to be taken or to make, any indecent photograph or pseudo-photograph of a child",
            penalty: "Under s. 6(2): \"A person convicted on indictment of any offence under this Act shall be liable to imprisonment for a term of not more than ten years, or to a fine or to both.\"",
            note: "Ofcom's investigation is under the Online Safety Act 2023, a regulatory regime. This is the criminal offence the content amounts to.",
            url: "https://www.legislation.gov.uk/ukpga/1978/37/section/1"
          },
          articles: [
            { outlet: "Ofcom", title: "Ofcom launches investigation into X over Grok sexualised imagery", url: "https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/ofcom-launches-investigation-into-x-over-grok-sexualised-imagery" },
            { outlet: "The Register", title: "Ofcom officially investigating X as Grok's nudify button stays switched on", url: "https://www.theregister.com/2026/01/12/xai_grok_uk_regulation/" },
            { outlet: "Reuters via Yahoo Finance", title: "Factbox: Elon Musk's Grok faces global scrutiny for sexualised AI deepfakes", url: "https://finance.yahoo.com/news/factbox-elon-musks-grok-faces-125116738.html" },
            { outlet: "Pennsylvania Office of Attorney General", title: "Attorney General Sunday Co-Leads Letter to xAI Demanding Change to Grok's Unchecked Creation of Nonconsensual Sexual Content", url: "https://www.attorneygeneral.gov/taking-action/attorney-general-sunday-co-leads-letter-to-xai-demanding-change-to-groks-unchecked-creation-of-nonconsensual-sexual-content/" }
          ]
        },
        {
          date: "2026-01-20",
          headline: "Class action over thousands of nonconsensual sexual deepfakes made with Grok",
          status: "Class action",
          summary: "A proposed class action alleges xAI failed to implement safeguards against the creation and spread of nonconsensual sexual deepfakes on X and chose to capitalize on demand for them. Ashley St Clair, mother of one of Musk's children, filed her own suit after Grok produced sexualized images of her despite her request to stop. British MP Jess Asato filed a High Court claim in the UK.",
          statute: {
            jurisdiction: "United States (federal)",
            citation: "47 U.S.C. § 223(h)(3)(A)",
            title: "TAKE IT DOWN Act: publishing a digital forgery",
            quote: "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is not a minor if— (i) the digital forgery was published without the consent of the identifiable individual; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the digital forgery— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.",
            penalty: "Under § 223(h)(4)(A), up to 2 years' imprisonment. Where the individual is a minor, § 223(h)(3)(B) and (h)(4)(B): up to 3 years.",
            note: "Signed May 19, 2025. Publication on X of Grok-generated images is the act the statute reaches; the user who posts and the platform that generates and hosts are both in the frame.",
            url: "https://www.law.cornell.edu/uscode/text/47/223"
          },
          articles: [
            { outlet: "Bloomberg Law", title: "Grok Maker xAI Faces Non-Consensual Sexual Deepfake Class Suit", url: "https://news.bloomberglaw.com/litigation/grok-maker-xai-faces-non-consensual-sexual-deepfake-class-suit" },
            { outlet: "Al Jazeera", title: "Mother of Elon Musk's child sues his AI company over Grok deepfake images", url: "https://aljazeera.com/news/2026/1/17/mother-of-elon-musks-child-sues-his-ai-company-over-grok-deepfake-images" }
          ]
        },
        {
          date: "2026-01-26",
          headline: "European Commission opens formal Digital Services Act proceedings over Grok on X",
          status: "EU formal proceedings",
          summary: "The Commission opened a formal investigation into whether X properly assessed and mitigated the risks of deploying Grok in the EU, including the spread of manipulated sexually explicit images and content that may amount to child sexual abuse material, under DSA articles 34, 35, and 42. It also widened its 2023 investigation into X's recommender systems. DSA fines can reach 6 percent of global turnover.",
          statute: {
            jurisdiction: "European Union",
            citation: "Directive 2011/93/EU, art. 2(c)(iv) and art. 5(6)",
            title: "Production of child pornography, including realistic images",
            quote: "'child pornography' means: ... (iv) realistic images of a child engaged in sexually explicit conduct or realistic images of the sexual organs of a child, for primarily sexual purposes ... Production of child pornography shall be punishable by a maximum term of imprisonment of at least 3 years.",
            penalty: "Each member state must punish production with a maximum of at least 3 years' imprisonment.",
            note: "The Commission's proceeding is under the Digital Services Act, which carries fines, not prison. The directive sets the criminal floor every member state has written into national law, such as Germany's § 184b StGB and France's art. 227-23.",
            url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0093"
          },
          articles: [
            { outlet: "European Commission", title: "Commission investigates Grok and X's recommender systems under the Digital Services Act", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_26_203" },
            { outlet: "TechPolicy.Press", title: "Regulators Are Going After Grok and X, Just Not Together", url: "https://www.techpolicy.press/regulators-are-going-after-grok-and-x-just-not-together/" },
            { outlet: "EDRi", title: "EDRi calls for action as EU probes X's Grok over AI-generated harm", url: "https://edri.org/our-work/edri-calls-for-swift-action-as-eu-probes-xs-grok-over-ai-generated-harm/" }
          ]
        },
        {
          date: "2026-02-03",
          headline: "French police raid X's Paris office and summon Musk; prosecutors escalate to a criminal investigation",
          status: "Criminal investigation",
          summary: "Paris prosecutors searched X's offices as part of a cybercrime investigation covering Grok deepfakes, Holocaust denial, and the distribution of child sexual abuse material, and summoned Musk for a voluntary hearing on April 20, 2026. In May 2026 the prosecutor's office escalated the probe of Musk and X to a full criminal investigation. No charges have been filed.",
          statute: {
            jurisdiction: "France",
            citation: "Code pénal, art. 227-23",
            title: "Pornographic image or representation of a minor",
            quote: "Le fait, en vue de sa diffusion, de fixer, d'enregistrer ou de transmettre l'image ou la représentation d'un mineur lorsque cette image ou cette représentation présente un caractère pornographique est puni de cinq ans d'emprisonnement et de 75 000 euros d'amende. [...] Les peines sont portées à sept ans d'emprisonnement et à 100 000 euros d'amende lorsqu'il a été utilisé, pour la diffusion de l'image ou de la représentation du mineur à destination d'un public non déterminé, un réseau de communications électroniques. [...] Les dispositions du présent article sont également applicables aux images pornographiques d'une personne dont l'aspect physique est celui d'un mineur, sauf s'il est établi que cette personne était âgée de dix-huit ans au jour de la fixation ou de l'enregistrement de son image.",
            translation: "The act, with a view to its dissemination, of fixing, recording, or transmitting the image or representation of a minor when that image or representation is pornographic in character is punishable by five years' imprisonment and a fine of 75,000 euros. [...] The penalties are raised to seven years' imprisonment and a fine of 100,000 euros where an electronic communications network was used to disseminate the image or representation of the minor to an undetermined public. [...] The provisions of this article also apply to pornographic images of a person whose physical appearance is that of a minor, unless it is established that the person was eighteen on the day the image was fixed or recorded.",
            penalty: "5 years' imprisonment and €75,000; 7 years and €100,000 when disseminated over an electronic communications network.",
            url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043409170"
          },
          articles: [
            { outlet: "Axios", title: "Musk summoned as French prosecutors search X offices", url: "https://www.axios.com/2026/02/03/musk-grok-deepfakes-paris-prosecutors-x-search" },
            { outlet: "Al Jazeera", title: "French authorities raid X offices in Paris, summon Musk in cybercrime probe", url: "https://www.aljazeera.com/amp/news/2026/2/3/french-authorities-raid-x-offices-summon-musk-in-cybercrime-probe" },
            { outlet: "CNBC", title: "French prosecutors escalate probe of Elon Musk and X to criminal investigation", url: "https://www.cnbc.com/2026/05/07/french-prosecutors-probe-of-elon-musk-x-now-a-criminal-investigation.html" },
            { outlet: "Euronews", title: "Elon Musk faces criminal probe in France as prosecutors escalate X's AI investigation", url: "https://www.euronews.com/next/2026/05/08/elon-musk-faces-criminal-probe-in-france-as-prosecutors-escalate-xs-ai-investigation" }
          ]
        },
        {
          date: "2026-02-19",
          headline: "House Energy and Commerce Democrats open an investigation into Grok's Edit Image feature",
          status: "Congressional inquiry",
          summary: "Ranking members Frank Pallone, Jan Schakowsky, and Yvette Clarke wrote to Musk demanding to know when he learned users were generating nonconsensual sexual images, what guardrails existed at launch, how many images were created and removed, and whether content was removed at the request of law enforcement or the National Center for Missing and Exploited Children.",
          statute: {
            jurisdiction: "United States (federal)",
            citation: "18 U.S.C. § 2256(8)(C), 18 U.S.C. § 2252A(a)(2)",
            title: "Definition of child pornography: morphed images of identifiable minors",
            quote: "any visual depiction, including any photograph, film, video, picture, or computer or computer-generated image or picture, whether made or produced by electronic, mechanical, or other means, of sexually explicit conduct, where— ... (C) such visual depiction has been created, adapted, or modified to appear that an identifiable minor is engaging in sexually explicit conduct.",
            penalty: "Under § 2252A(a)(2) and (b)(1), knowingly receiving or distributing child pornography by computer is punishable by not less than 5 and not more than 20 years' imprisonment.",
            url: "https://www.law.cornell.edu/uscode/text/18/2256"
          },
          articles: [
            { outlet: "House Energy and Commerce Committee Democrats", title: "E&C Democrats Investigate Elon Musk's Grok Spreading Rampant Non-Consensual Sexualized Imagery", url: "https://democrats-energycommerce.house.gov/media/press-releases/ec-democrats-investigate-elon-musks-grok-spreading-rampant-non-consensual" }
          ]
        },
        {
          date: "2026-03-01",
          headline: "Class action says Grok turned real photographs of children into sexual abuse material",
          status: "Class action",
          summary: "Filed in the Northern District of California on behalf of three victims whose real photos were used to generate child sexual abuse material through Grok. The complaint alleges xAI knowingly built and marketed an image generator capable of this while refusing industry-standard CSAM prevention measures, and that images and videos of prior abuse were used to train its capabilities. San José separately sued over deepfake abuse.",
          statute: {
            jurisdiction: "United States (federal)",
            citation: "18 U.S.C. § 2256(8)(C), 18 U.S.C. § 2252A(a)(2)",
            title: "Definition of child pornography: morphed images of identifiable minors",
            quote: "any visual depiction, including any photograph, film, video, picture, or computer or computer-generated image or picture, whether made or produced by electronic, mechanical, or other means, of sexually explicit conduct, where— ... (C) such visual depiction has been created, adapted, or modified to appear that an identifiable minor is engaging in sexually explicit conduct.",
            penalty: "Under § 2252A(a)(2) and (b)(1), knowingly receiving or distributing child pornography by computer is punishable by not less than 5 and not more than 20 years' imprisonment.",
            url: "https://www.law.cornell.edu/uscode/text/18/2256"
          },
          articles: [
            { outlet: "CyberScoop", title: "Former sexual abuse victims say Grok used their images, videos to train deepfake capabilities", url: "https://cyberscoop.com/xai-grok-csam-class-action-lawsuit/" },
            { outlet: "KQED", title: "Elon Musk's AI Company Asks San José to Halt Lawsuit Over Deepfake Abuse", url: "https://www.kqed.org/news/12093233/elon-musks-ai-company-asks-san-jose-to-halt-lawsuit-over-deepfake-abuse" }
          ]
        },
        {
          date: "2026-03-24",
          headline: "Baltimore becomes the first US city to sue xAI over Grok deepfakes",
          status: "Municipal lawsuit",
          summary: "The mayor and city council of Baltimore sued xAI in circuit court under the city's consumer protection law, alleging deceptive and unfair trade practices for marketing Grok as a safe general-purpose assistant while failing to disclose that it produced nonconsensual sexualized images.",
          statute: {
            jurisdiction: "Maryland",
            citation: "Md. Code, Crim. Law § 11-207(a)(3)",
            title: "Child pornography: use of a computer to depict a minor",
            quote: "A person may not: ... (3) use a computer to depict or describe a minor engaging in an obscene act, sadomasochistic abuse, or sexual conduct",
            penalty: "Under § 11-207(b): \"A person who violates this section is guilty of a felony and on conviction is subject to: (1) for a first violation, imprisonment not exceeding 10 years or a fine not exceeding $25,000 or both.\"",
            note: "Baltimore's suit is under the city's consumer protection ordinance. This is the state felony the underlying conduct describes.",
            url: "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcr&section=11-207&enactments=false"
          },
          articles: [
            { outlet: "CNBC", title: "Baltimore is first U.S. city to sue over Grok deepfake porn as legal pressure mounts on Musk's xAI", url: "https://www.cnbc.com/2026/03/24/musk-xai-sued-baltimore-grok-deepfake-porn.html" },
            { outlet: "NBC News", title: "Baltimore sues Musk's xAI over Grok's creation of sexually explicit images", url: "https://www.nbcnews.com/tech/tech-news/baltimore-sues-musks-xai-groks-sexually-explicit-images-rcna264950" },
            { outlet: "CBS Baltimore", title: "Baltimore City sues X over Grok's A.I. role in non-consensual sexualized deepfakes", url: "https://www.cbsnews.com/baltimore/news/baltimore-city-sues-x-groks-a-i-role-non-consensual-sexualized-deepfakes/" }
          ]
        },
        {
          date: "2026-03-26",
          headline: "Dutch court orders Grok to stop generating nonconsensual nudes, with fines of €100,000 a day",
          status: "Court injunction",
          summary: "The Amsterdam District Court granted an injunction sought by the nonprofit Offlimits prohibiting Grok from generating nonconsensual nude images and child sexual abuse material in the Netherlands, with daily penalties of €100,000 against X.AI, X Corp, and X Internet Unlimited Company, capped at €10 million per entity.",
          statute: {
            jurisdiction: "Netherlands",
            citation: "Wetboek van Strafrecht, art. 252",
            title: "Kinderpornografie (child sexual abuse material)",
            quote: "Degene die een visuele weergave van seksuele aard of met een onmiskenbaar seksuele strekking waarbij een persoon die kennelijk de leeftijd van achttien jaren nog niet heeft bereikt is betrokken of schijnbaar is betrokken, verspreidt, aanbiedt, openlijk tentoonstelt, vervaardigt, invoert, doorvoert, uitvoert, verwerft, in bezit heeft of zich de toegang daartoe verschaft, wordt gestraft met gevangenisstraf van ten hoogste zes jaren of geldboete van de vijfde categorie.",
            translation: "Whoever distributes, offers, publicly displays, produces, imports, transits, exports, acquires, possesses, or obtains access to a visual representation of a sexual nature or with an unmistakably sexual purport in which a person who has evidently not yet reached the age of eighteen is involved or appears to be involved, shall be punished with imprisonment of at most six years or a fifth-category fine.",
            penalty: "Up to 6 years' imprisonment; up to 9 years where committed as a profession or habit (art. 254).",
            note: "Renumbered from art. 240b by the Wet seksuele misdrijven, in force 1 July 2024. The Amsterdam injunction is civil; this is the crime the enjoined output constitutes.",
            url: "https://wetten.overheid.nl/BWBR0001854/2026-01-01/#BoekTweede_TiteldeelXIV_Artikel252"
          },
          articles: [
            { outlet: "CNBC", title: "Elon Musk's Grok ordered to stop creating AI nudes by Dutch court as legal pressure mounts", url: "https://www.cnbc.com/2026/03/27/grok-elon-musk-dutch-court-ban-ai-nudes.html" },
            { outlet: "Al Jazeera", title: "Dutch court bans xAI's Grok from generating nonconsensual nude images", url: "https://aljazeera.com/news/2026/3/26/dutch-court-bans-xais-grok-from-generating-non-consensual-nude-images" },
            { outlet: "The Record", title: "Dutch court threatens xAI with fines over Grok's nonconsensual nude images", url: "https://therecord.media/dutch-court-threatens-xai-with-fines-grok-nudification" }
          ]
        },
        {
          date: "2026-06-11",
          headline: "Canada's Privacy Commissioner finds X and xAI broke federal privacy law with Grok deepfakes",
          status: "Regulatory finding, well-founded and not resolved",
          summary: "After a Commissioner-initiated investigation opened January 15, 2026, the Office of the Privacy Commissioner found that X Corp and X.AI contravened PIPEDA by generating sexualized deepfakes without the consent of the people depicted, and that the harms outweighed any business benefit. It recommended suspending Grok Imagine until xAI can demonstrate it is safe, plus annual third-party audits and proactive monitoring.",
          statute: {
            jurisdiction: "Canada",
            citation: "Criminal Code, R.S.C. 1985, c. C-46, s. 163.1(2)",
            title: "Making child sexual abuse and exploitation material",
            quote: "Every person who makes, prints, publishes or possesses for the purpose of publication any child sexual abuse and exploitation material is guilty of an indictable offence and liable to imprisonment for a term of not more than 14 years and to a minimum punishment of imprisonment for a term of one year.",
            penalty: "Indictable offence, 1 to 14 years' imprisonment.",
            note: "Section 163.1(1)(a) defines the material to include any visual representation, whether or not made by electronic means, that depicts a person who is or is depicted as being under eighteen. The Privacy Commissioner's finding is under PIPEDA, a civil statute; this is the crime the conduct describes.",
            url: "https://laws-lois.justice.gc.ca/eng/acts/c-46/section-163.1.html"
          },
          articles: [
            { outlet: "Office of the Privacy Commissioner of Canada", title: "PIPEDA Findings #2026-004: Commissioner-initiated complaints concerning X Corp.'s and X.AI LLC's compliance with PIPEDA", url: "https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2026/pipeda-2026-004/" }
          ]
        },
        {
          date: "2026-06-25",
          headline: "Grok makes 10 billion images a month, and xAI engineers found no reliable fix for CSAM",
          status: "Reported by The Information",
          summary: "The Information reported that an internal xAI analysis found engineers could not reliably stop Grok from producing child sexual abuse material without dismantling the adult image generation the product is built to allow. Two former employees said more than half of Grok's traffic is adult content. SpaceX IPO filings cited in the report put Grok's output at 10 billion images and 2 billion videos a month in the first quarter of 2026.",
          statute: {
            jurisdiction: "United States (federal)",
            citation: "18 U.S.C. § 2256(8)(B), 18 U.S.C. § 2252A(a)(2)",
            title: "Definition of child pornography: computer-generated images indistinguishable from a minor",
            quote: "any visual depiction, including any photograph, film, video, picture, or computer or computer-generated image or picture, whether made or produced by electronic, mechanical, or other means, of sexually explicit conduct, where— ... (B) such visual depiction is a digital image, computer image, or computer-generated image that is, or is indistinguishable from, that of a minor engaging in sexually explicit conduct",
            penalty: "Under § 2252A(a)(2) and (b)(1), knowingly receiving or distributing child pornography by computer is punishable by not less than 5 and not more than 20 years' imprisonment.",
            url: "https://www.law.cornell.edu/uscode/text/18/2256"
          },
          articles: [
            { outlet: "Engadget", title: "The most popular Grok feature is apparently exactly what you think", url: "https://www.engadget.com/2202099/the-most-popular-grok-feature-is-apparently-exactly-what-you-think/" }
          ]
        }
      ]
    },
    {
      id: "gemini",
      name: "Gemini",
      company: "Google",
      person: "Sundar Pichai",
      title: "CEO, Google and Alphabet",
      logo: "assets/logos/gemini.png",
      head: "assets/heads/sundar-pichai.jpg",
      color: "#ff2bd6",
      incidents: [
        {
          date: "2025-10-02",
          headline: "Suit says Gemini spent weeks building a delusion, then framed a man's suicide as a spiritual journey",
          status: "Wrongful death suit",
          summary: "The father of Jonathan Gavalas, 36, sued Google in federal court after his son barricaded his home and killed himself. The complaint alleges Gemini was designed to maximize engagement through emotional dependency and failed to act on his suicidal ideation. Google added crisis-hotline features to Gemini in April 2026.",
          statute: {
            jurisdiction: "Florida",
            citation: "Fla. Stat. § 782.08",
            title: "Assisting self-murder",
            quote: "Every person deliberately assisting another in the commission of self-murder shall be guilty of manslaughter, a felony of the second degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084.",
            penalty: "Second-degree felony, up to 15 years' imprisonment under § 775.082.",
            url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0782/Sections/0782.08.html"
          },
          articles: [
            { outlet: "Google", title: "Google's mental health work and support for organizations", url: "https://blog.google/innovation-and-ai/technology/health/mental-health-updates/" },
            { outlet: "Forbes", title: "Google Adds Mental Health Safeguards To Gemini After Wave Of AI Lawsuits", url: "https://www.forbes.com/sites/asia-alexander/2026/04/07/google-adds-mental-health-safeguards-to-gemini-after-wave-of-ai-lawsuits/" },
            { outlet: "AP via CP24", title: "Google adds Gemini crisis features amid lawsuit over user's suicide", url: "https://www.cp24.com/news/world/2026/04/07/google-adds-gemini-crisis-features-amid-lawsuit-over-users-suicide/" },
            { outlet: "TIME", title: "A New Lawsuit Blames Google Gemini for Man's Suicide", url: "https://time.com/7382406/gemini-suicide-lawsuit-death/" },
            { outlet: "KQED", title: "Google Updates Suicide, Self-Harm Safeguards in Gemini as AI Lawsuits Mount", url: "https://www.kqed.org/news/12078982/google-updates-suicide-self-harm-safeguards-in-gemini-as-ai-lawsuits-mount" }
          ]
        }
      ]
    }
  ]
};
