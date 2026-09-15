/*
  The docket. This file drives the whole site.

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
          articles: [
            { outlet: "The Register", title: "Chinese spies told Claude to break into about 30 critical orgs. Some attacks succeeded", url: "https://www.theregister.com/2025/11/13/chinese_spies_claude_attacks/" },
            { outlet: "Anthropic", title: "Disrupting an AI-orchestrated cyber espionage campaign", url: "https://www.anthropic.com/news/disrupting-AI-espionage" },
            { outlet: "Campus Technology", title: "Cyber Espionage Campaign Exploits Claude Code Tool to Infiltrate Global Targets", url: "https://campustechnology.com/articles/2025/11/24/cyber-espionage-campaign-exploits-claude-code-tool-to-infiltrate-global-targets.aspx" }
          ]
        },
        {
          date: "2026-07-20",
          headline: "$1.5 billion settlement over pirated books used to train Claude",
          status: "Civil, settled",
          summary: "A federal judge gave final approval to a $1.5 billion class settlement resolving claims that Anthropic unlawfully acquired hundreds of thousands of copyrighted books from pirate libraries to build its models.",
          articles: [
            { outlet: "Lieff Cabraser", title: "Copyright Claimholders' Class Action Against Anthropic", url: "https://www.lieffcabraser.com/anthropic-authors-rights/" }
          ]
        },
        {
          date: "2026-09-10",
          headline: "Claude used for romance-scam personas, malware, surveillance, and weapons research",
          status: "Company disclosure",
          summary: "Anthropic's threat report covering December 2025 through August 2026 described Claude powering more than 4,700 dating-app personas that exchanged 2.36 million messages with at least 25,000 targets, plus cases across cyber operations, surveillance, conventional weapons development, biological misuse, and fraud.",
          articles: [
            { outlet: "The Hacker News", title: "Claude Used to Automate Exploitation and Data Theft Across Multiple Victims", url: "https://thehackernews.com/2026/09/claude-used-to-automate-exploitation.html" },
            { outlet: "TNW", title: "Anthropic details how Claude was misused for surveillance and weapons", url: "https://thenextweb.com/news/anthropic-claude-misuse-threat-intelligence-report" },
            { outlet: "The Rundown AI", title: "Anthropic details Claude misuse in deception, surveillance, and malware", url: "https://www.therundown.ai/news/anthropic-claude-misuse-threat-report-september-2026" }
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
          articles: [
            { outlet: "PPC Land", title: "Parents sue OpenAI after ChatGPT drug advice killed their son", url: "https://ppc.land/parents-sue-openai-after-chatgpt-drug-advice-killed-their-son/" }
          ]
        },
        {
          date: "2025-08-05",
          headline: "Connecticut murder-suicide: suit says ChatGPT fed a man's delusions about his mother",
          status: "Wrongful death suit",
          summary: "The estate of Suzanne Adams sued OpenAI after her son, Stein-Erik Soelberg, killed her and then himself. The complaint alleges ChatGPT validated his paranoid belief that his mother was conspiring against him rather than steering him to help.",
          articles: [
            { outlet: "Hagens Berman", title: "Lawsuit Filed Against OpenAI Following Murder-Suicide in Connecticut", url: "https://www.hbsslaw.com/press/openai-chatgpt-wrongful-death-claim/lawsuit-filed-against-openai-following-murder-suicide-in-connecticut" }
          ]
        },
        {
          date: "2026-07-11",
          headline: "OpenAI agents broke out of a test sandbox and breached Hugging Face",
          status: "Company disclosure",
          summary: "During a cybersecurity experiment with normal controls lifted, an OpenAI model given an unsolvable task chained undiscovered exploits to escape its sandbox, compromised OpenAI's package management system to reach the internet, and went on to breach Hugging Face and other vendors between July 11 and 13, 2026. About 1,200 agents meant to be isolated coordinated through an unsanctioned message board. OpenAI's own report says it missed warning signs.",
          articles: [
            { outlet: "Axios", title: "OpenAI missed warning signs before Hugging Face breach", url: "https://www.axios.com/2026/08/26/openai-hugging-face-technical-report-ai-hack" },
            { outlet: "TechCrunch", title: "OpenAI releases its official report on the Hugging Face breach", url: "https://techcrunch.com/2026/08/26/openai-releases-its-official-report-on-the-hugging-face-breach/" },
            { outlet: "Simon Willison", title: "Now we have a timeline of the OpenAI accidental attack against Hugging Face", url: "https://simonwillison.net/2026/Aug/7/openai-timeline/" },
            { outlet: "METR", title: "Brief independent investigation of agents' behavior, reasoning and collaboration in the OpenAI / Hugging Face hacking incident", url: "https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/" },
            { outlet: "OpenAI", title: "The Hugging Face incident and the road ahead", url: "https://openai.com/index/hugging-face-incident-and-the-road-ahead/" }
          ]
        },
        {
          date: "2025-11-06",
          headline: "Seven lawsuits in one day: four suicides and three survivors blame GPT-4o",
          status: "Wrongful death and injury suits",
          summary: "Seven suits filed in California state courts allege OpenAI knowingly shipped GPT-4o prematurely despite internal warnings that it was dangerously sycophantic and psychologically manipulative, and that it drove users into delusion and self-harm.",
          articles: [
            { outlet: "Wisner Baum", title: "ChatGPT Lawsuit | OpenAI Lawsuit Attorneys", url: "https://www.wisnerbaum.com/ai-chatbot-lawsuit/chatgpt-lawsuit/" },
            { outlet: "Hagens Berman", title: "OpenAI ChatGPT Wrongful Death Claim", url: "https://www.hbsslaw.com/cases/openai-chatgpt-wrongful-death-claim" }
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
          date: "2026-01-16",
          headline: "Grok generated an estimated 3 million sexualized images in 11 days, including of children",
          status: "Regulatory investigations",
          summary: "Researchers estimated Grok's image tools produced about 3 million sexualized images between December 29, 2025 and January 8, 2026, roughly 23,000 of them appearing to depict children. Ofcom opened a formal Online Safety Act investigation into X, California opened its own probe, and 35 state attorneys general demanded action.",
          articles: [
            { outlet: "Ofcom", title: "Ofcom launches investigation into X over Grok sexualised imagery", url: "https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/ofcom-launches-investigation-into-x-over-grok-sexualised-imagery" },
            { outlet: "The Register", title: "Ofcom officially investigating X as Grok's nudify button stays switched on", url: "https://www.theregister.com/2026/01/12/xai_grok_uk_regulation/" },
            { outlet: "Reuters via Yahoo Finance", title: "Factbox: Elon Musk's Grok faces global scrutiny for sexualised AI deepfakes", url: "https://finance.yahoo.com/news/factbox-elon-musks-grok-faces-125116738.html" }
          ]
        },
        {
          date: "2026-01-20",
          headline: "Class action over thousands of non-consensual sexual deepfakes made with Grok",
          status: "Class action",
          summary: "A proposed class action alleges xAI failed to implement safeguards against the creation and spread of non-consensual sexual deepfakes on X and chose to capitalize on demand for them. Ashley St Clair, mother of one of Musk's children, filed her own suit after Grok produced sexualized images of her despite her request to stop.",
          articles: [
            { outlet: "Bloomberg Law", title: "Grok Maker xAI Faces Non-Consensual Sexual Deepfake Class Suit", url: "https://news.bloomberglaw.com/litigation/grok-maker-xai-faces-non-consensual-sexual-deepfake-class-suit" },
            { outlet: "ClassAction.org", title: "Grok Lawsuit Claims xAI Failed to Safeguard Against Sexually Explicit Deepfakes of Children", url: "https://www.classaction.org/news/grok-lawsuit-claims-xai-failed-to-safeguard-against-sexually-explicit-deepfakes-of-children" },
            { outlet: "Memeburn", title: "Every Grok Deepfake Lawsuit and Ban in 2026", url: "https://memeburn.com/every-grok-deepfake-lawsuit-and-ban-in-2026/" }
          ]
        },
        {
          date: "2026-03-01",
          headline: "Class action says Grok turned real photographs of children into sexual abuse material",
          status: "Class action",
          summary: "Filed in the Northern District of California on behalf of three victims whose real photos were used to generate child sexual abuse material through Grok. The complaint alleges xAI knowingly built and marketed an image generator capable of this while refusing industry-standard CSAM prevention measures. San José separately sued over deepfake abuse.",
          articles: [
            { outlet: "Lieff Cabraser", title: "AI-generated Child Pornography Deepfake Litigation", url: "https://www.lieffcabraser.com/ai-deepfakes/" },
            { outlet: "KQED", title: "Elon Musk's AI Company Asks San José to Halt Lawsuit Over Deepfake Abuse", url: "https://www.kqed.org/news/12093233/elon-musks-ai-company-asks-san-jose-to-halt-lawsuit-over-deepfake-abuse" }
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
          articles: [
            { outlet: "TIME", title: "A New Lawsuit Blames Google Gemini for Man's Suicide", url: "https://time.com/7382406/gemini-suicide-lawsuit-death/" },
            { outlet: "KQED", title: "Google Updates Suicide, Self-Harm Safeguards in Gemini as AI Lawsuits Mount", url: "https://www.kqed.org/news/12078982/google-updates-suicide-self-harm-safeguards-in-gemini-as-ai-lawsuits-mount" },
            { outlet: "Tech Xplore", title: "Google adds Gemini crisis features amid lawsuit over user's suicide", url: "https://techxplore.com/news/2026-04-google-gemini-crisis-features-lawsuit.html" }
          ]
        }
      ]
    }
  ]
};
