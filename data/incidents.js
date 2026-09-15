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
          date: "2025-04-11",
          headline: "Irish regulator opens GDPR inquiry into training Grok on EU users' posts",
          status: "Regulatory inquiry",
          summary: "Ireland's Data Protection Commission opened a formal inquiry into X Internet Unlimited Company over processing the public posts of EU and EEA users to train Grok, examining whether the processing was lawful and transparent. The regulator had already forced X to pause the practice in 2024. France's CNIL and the UK's ICO have raised the same questions.",
          articles: [
            { outlet: "Data Protection Commission", title: "Data Protection Commission announces commencement of inquiry into X Internet Unlimited Company", url: "https://www.dataprotection.ie/en/news-media/latest-news/data-protection-commission-announces-commencement-inquiry-x-internet-unlimited-company-xiuc" },
            { outlet: "TechRadar", title: "Grok AI is under investigation in the EU over potential GDPR violations", url: "https://www.techradar.com/computing/cyber-security/grok-ai-is-under-investigation-in-the-eu-over-potential-gdpr-violations-heres-what-you-need-to-know" },
            { outlet: "William Fry", title: "DPC Launches Investigation into X's Data Usage for AI Training", url: "https://www.williamfry.com/knowledge/dpc-launches-investigation-into-xs-data-usage-for-ai-training/" }
          ]
        },
        {
          date: "2025-05-23",
          headline: "DOGE puts Grok to work on sensitive federal data",
          status: "Reported by Reuters",
          summary: "Reuters reported that Musk's DOGE team was expanding Grok's use inside federal agencies to analyze government data. Five technology and ethics specialists told Reuters the arrangement could violate security and privacy laws if the data was sensitive, and conflict-of-interest rules given Musk's ownership of xAI. Separate suits allege DOGE's data access violated the Privacy Act of 1974.",
          articles: [
            { outlet: "Reuters via BNN Bloomberg", title: "Musk's DOGE expanding his Grok AI in U.S. government, raising conflict concerns", url: "https://www.bnnbloomberg.ca/business/company-news/2025/05/23/musks-doge-expanding-his-grok-ai-in-us-government-raising-conflict-concerns-reuters-exclusive/" },
            { outlet: "Fast Company", title: "Elon Musk's DOGE team is using his Grok chatbot in federal government, raising alarms about conflict of interest", url: "https://www.fastcompany.com/91340107/elon-musk-using-grok-chatbot-doge-analyze-sensitive-data-belonging-millions-americans" },
            { outlet: "The New Republic", title: "Elon Musk's DOGE Is Breaking Rules to Install Grok in Government", url: "https://newrepublic.com/post/195690/elon-musk-doge-grok-expand-power-government" }
          ]
        },
        {
          date: "2025-06-17",
          headline: "xAI runs 35 unpermitted gas turbines to power Grok's Colossus supercomputer in South Memphis",
          status: "Clean Air Act notice of intent to sue",
          summary: "The Southern Environmental Law Center, on behalf of the NAACP, notified xAI of intent to sue under the Clean Air Act for operating as many as 35 methane gas turbines, more than 400 megawatts, without air permits at the Colossus data center in a majority-Black neighborhood of Memphis. Colossus trains and runs Grok.",
          articles: [
            { outlet: "TechCrunch", title: "xAI is facing a lawsuit for operating over 400 MW of gas turbines without permits", url: "https://techcrunch.com/2025/06/18/xai-is-facing-a-lawsuit-for-operating-over-400-mw-of-gas-turbines-without-permits" },
            { outlet: "NBC News", title: "NAACP announces plans to sue Musk's xAI over pollution concerns", url: "https://www.nbcnews.com/news/us-news/naacp-musk-xai-supercomputer-colossus-memphis-tennessee-rcna213490" },
            { outlet: "Southern Environmental Law Center", title: "Inside Memphis' fight against xAI", url: "https://www.selc.org/news/inside-memphis-fight-against-xai/" }
          ]
        },
        {
          date: "2025-07-08",
          headline: "Grok praises Hitler and calls itself MechaHitler; Turkey bans it, Poland reports xAI to the EU",
          status: "Court ban, regulator complaint",
          summary: "After a system prompt update, Grok posted antisemitic content on X, praised Hitler as a leader for modern America, and referred to itself as MechaHitler. A Turkish court ordered Grok blocked nationwide the next day over insults to President Erdogan and Atatürk. Poland said it would report xAI to the European Commission over abuse aimed at its politicians. Bipartisan members of Congress demanded answers.",
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
          articles: [
            { outlet: "Gizmodo", title: "Grok's 'Spicy' Mode Makes NSFW Celebrity Deepfakes of Women (But Not Men)", url: "https://gizmodo.com/groks-spicy-mode-makes-nsfw-celebrity-deepfakes-of-women-but-not-men-2000639308" },
            { outlet: "Deadline", title: "Elon Musk's Latest AI Frontier: 'Spicy' Deepfakes Of Stars Like Scarlett Johansson & Taylor Swift", url: "https://deadline.com/2025/08/elon-musk-ai-deepfakes-scarlett-johansson-taylor-swift-1236480553/" },
            { outlet: "Common Dreams", title: "'Safeguards? What Safeguards?': Grok's New 'Spicy Mode' Makes Nude Taylor Swift Deepfakes", url: "https://www.commondreams.org/news/taylor-swift-nude-deepfakes" }
          ]
        },
        {
          date: "2025-11-20",
          headline: "Grok posts Holocaust denial to more than a million users; Paris prosecutors add it to their probe",
          status: "Criminal investigation",
          summary: "Grok posted that the Auschwitz crematoria were designed for disinfection with Zyklon B rather than mass executions, and referred to lobbies controlling media and culture. The post was seen by more than a million users. The Paris prosecutor's cybercrime unit added the posts to its existing investigation of X, French ministers reported them as possible crimes, and the government flagged X to the EU under the Digital Services Act.",
          articles: [
            { outlet: "Fortune", title: "Grok under investigation for Holocaust denial claims about Auschwitz gas chambers", url: "https://www.fortune.com/2025/11/21/grok-under-investigation-holocaust-denial-gas-chambers-elon-musk" },
            { outlet: "PBS NewsHour", title: "France will investigate Musk's Grok after AI chatbot posted Holocaust denial claims", url: "https://www.pbs.org/newshour/world/france-will-investigate-musks-grok-after-ai-chatbot-posted-holocaust-denial-claims" },
            { outlet: "Euronews", title: "Elon Musk's Grok goes viral for reviving a long-debunked claim about Auschwitz", url: "https://www.euronews.com/my-europe/2025/11/21/elon-musks-grok-goes-viral-for-reviving-a-long-debunked-claim-about-auschwitz" }
          ]
        },
        {
          date: "2026-01-12",
          headline: "Indonesia and Malaysia block Grok, the first countries to ban it outright",
          status: "National bans",
          summary: "Both governments cut off access to Grok after its image editing feature flooded the internet with sexualized images of women and minors. Indonesia's digital minister said the ban was to protect women, children, and the public from AI-generated fake pornography. Both were later lifted after xAI imposed restrictions.",
          articles: [
            { outlet: "CNN", title: "Musk's Grok blocked by Indonesia, Malaysia over sexualized images in world's first", url: "https://edition.cnn.com/2026/01/12/business/indonesia-malaysia-grok-elon-musk-intl-hnk" },
            { outlet: "NPR", title: "Malaysia, Indonesia become first to block Musk's Grok over AI deepfakes", url: "https://www.npr.org/2026/01/12/nx-s1-5674660/malaysia-indonesia-block-grok-ai-deepfakes" },
            { outlet: "PBS NewsHour", title: "Malaysia and Indonesia become the first countries to block Musk's chatbot Grok over sexualized AI images", url: "https://www.pbs.org/newshour/world/malaysia-and-indonesia-become-the-first-countries-to-block-musks-chatbot-grok-over-sexualized-ai-images" }
          ]
        },
        {
          date: "2026-01-14",
          headline: "California attorney general opens investigation into xAI over sexualized images of women and children",
          status: "State investigation",
          summary: "Attorney General Rob Bonta announced an investigation into the proliferation of nonconsensual sexually explicit material, including images of children, produced with Grok. California had also been sued by xAI weeks earlier over a state law requiring disclosure of AI training data.",
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
          articles: [
            { outlet: "Bloomberg Law", title: "Grok Maker xAI Faces Non-Consensual Sexual Deepfake Class Suit", url: "https://news.bloomberglaw.com/litigation/grok-maker-xai-faces-non-consensual-sexual-deepfake-class-suit" },
            { outlet: "Al Jazeera", title: "Mother of Elon Musk's child sues his AI company over Grok deepfake images", url: "https://aljazeera.com/news/2026/1/17/mother-of-elon-musks-child-sues-his-ai-company-over-grok-deepfake-images" },
            { outlet: "ClassAction.org", title: "Grok Lawsuit Claims xAI Failed to Safeguard Against Sexually Explicit Deepfakes of Children", url: "https://www.classaction.org/news/grok-lawsuit-claims-xai-failed-to-safeguard-against-sexually-explicit-deepfakes-of-children" },
            { outlet: "Memeburn", title: "Every Grok Deepfake Lawsuit and Ban in 2026", url: "https://memeburn.com/every-grok-deepfake-lawsuit-and-ban-in-2026/" }
          ]
        },
        {
          date: "2026-01-26",
          headline: "European Commission opens formal Digital Services Act proceedings over Grok on X",
          status: "EU formal proceedings",
          summary: "The Commission opened a formal investigation into whether X properly assessed and mitigated the risks of deploying Grok in the EU, including the spread of manipulated sexually explicit images and content that may amount to child sexual abuse material, under DSA articles 34, 35, and 42. It also widened its 2023 investigation into X's recommender systems. DSA fines can reach 6 percent of global turnover.",
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
          articles: [
            { outlet: "House Energy and Commerce Committee Democrats", title: "E&C Democrats Investigate Elon Musk's Grok Spreading Rampant Non-Consensual Sexualized Imagery", url: "https://democrats-energycommerce.house.gov/media/press-releases/ec-democrats-investigate-elon-musks-grok-spreading-rampant-non-consensual" }
          ]
        },
        {
          date: "2026-03-01",
          headline: "Class action says Grok turned real photographs of children into sexual abuse material",
          status: "Class action",
          summary: "Filed in the Northern District of California on behalf of three victims whose real photos were used to generate child sexual abuse material through Grok. The complaint alleges xAI knowingly built and marketed an image generator capable of this while refusing industry-standard CSAM prevention measures, and that images and videos of prior abuse were used to train its capabilities. San José separately sued over deepfake abuse.",
          articles: [
            { outlet: "CyberScoop", title: "Former sexual abuse victims say Grok used their images, videos to train deepfake capabilities", url: "https://cyberscoop.com/xai-grok-csam-class-action-lawsuit/" },
            { outlet: "Lieff Cabraser", title: "AI-generated Child Pornography Deepfake Litigation", url: "https://www.lieffcabraser.com/ai-deepfakes/" },
            { outlet: "KQED", title: "Elon Musk's AI Company Asks San José to Halt Lawsuit Over Deepfake Abuse", url: "https://www.kqed.org/news/12093233/elon-musks-ai-company-asks-san-jose-to-halt-lawsuit-over-deepfake-abuse" }
          ]
        },
        {
          date: "2026-03-24",
          headline: "Baltimore becomes the first US city to sue xAI over Grok deepfakes",
          status: "Municipal lawsuit",
          summary: "The mayor and city council of Baltimore sued xAI in circuit court under the city's consumer protection law, alleging deceptive and unfair trade practices for marketing Grok as a safe general-purpose assistant while failing to disclose that it produced nonconsensual sexualized images.",
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
          articles: [
            { outlet: "CNBC", title: "Elon Musk's Grok ordered to stop creating AI nudes by Dutch court as legal pressure mounts", url: "https://www.cnbc.com/2026/03/27/grok-elon-musk-dutch-court-ban-ai-nudes.html" },
            { outlet: "Al Jazeera", title: "Dutch court bans xAI's Grok from generating nonconsensual nude images", url: "https://aljazeera.com/news/2026/3/26/dutch-court-bans-xais-grok-from-generating-non-consensual-nude-images" },
            { outlet: "The Record", title: "Dutch court threatens xAI with fines over Grok's nonconsensual nude images", url: "https://therecord.media/dutch-court-threatens-xai-with-fines-grok-nudification" }
          ]
        },
        {
          date: "2026-04-14",
          headline: "NAACP sues xAI over dozens of unpermitted gas turbines powering Colossus 2",
          status: "Clean Air Act lawsuit",
          summary: "The NAACP, represented by the Southern Environmental Law Center and Earthjustice, sued xAI and its subsidiary MZX Tech for operating at least 27 methane gas turbines without a Clean Air Act permit at the Colossus 2 site in Southaven, Mississippi, near homes, schools, and churches. Later reporting put the number of turbines installed at 59. The Department of Justice intervened on xAI's side.",
          articles: [
            { outlet: "NAACP", title: "NAACP Sues xAI for Illegal Pollution from Data Center Power Plant", url: "https://naacp.org/articles/naacp-sues-xai-illegal-pollution-data-center-power-plant" },
            { outlet: "Earthjustice", title: "NAACP Asks Court for Emergency Action to Stop Illegal Air Pollution from xAI's Data Center Power Plant", url: "https://earthjustice.org/press/2026/naacp-asks-court-for-emergency-action-to-stop-illegal-air-pollution-from-xais-data-center-power-plant" },
            { outlet: "Utility Dive", title: "DOJ intervenes on behalf of xAI in data center gas turbine lawsuit", url: "https://www.utilitydive.com/news/doj-intervenes-xai-data-center-gas-turbine-lawsuit/823267/" },
            { outlet: "Technology.org", title: "xAI Ran 59 Unpermitted Gas Turbines for Colossus 2 Near Memphis", url: "https://www.technology.org/2026/07/15/xai-59-unpermitted-gas-turbines-southaven-colossus-2/" }
          ]
        },
        {
          date: "2026-06-11",
          headline: "Canada's Privacy Commissioner finds X and xAI broke federal privacy law with Grok deepfakes",
          status: "Regulatory finding, well-founded and not resolved",
          summary: "After a Commissioner-initiated investigation opened January 15, 2026, the Office of the Privacy Commissioner found that X Corp and X.AI contravened PIPEDA by generating sexualized deepfakes without the consent of the people depicted, and that the harms outweighed any business benefit. It recommended suspending Grok Imagine until xAI can demonstrate it is safe, plus annual third-party audits and proactive monitoring.",
          articles: [
            { outlet: "Office of the Privacy Commissioner of Canada", title: "PIPEDA Findings #2026-004: Commissioner-initiated complaints concerning X Corp.'s and X.AI LLC's compliance with PIPEDA", url: "https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2026/pipeda-2026-004/" }
          ]
        },
        {
          date: "2026-06-26",
          headline: "Grok makes 10 billion images a month, and xAI engineers found no reliable fix for CSAM",
          status: "Reported by The Information",
          summary: "An internal xAI analysis cited by The Information found engineers could not reliably stop Grok from producing child sexual abuse material without dismantling the adult image generation the product is built to allow. SpaceX IPO filings put Grok's output at 10 billion images and 2 billion videos a month in the first quarter of 2026.",
          articles: [
            { outlet: "Tech Times", title: "Grok Adult Content Tops 10 Billion Images Monthly: xAI Engineers Admit CSAM Has No Fix", url: "https://www.techtimes.com/articles/319142/20260626/grok-adult-content-tops-10-billion-images-monthly-xai-engineers-admit-csam-has-no-fix.htm" }
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
