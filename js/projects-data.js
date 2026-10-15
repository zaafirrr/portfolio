/* =====================================================================
   PROJECTS — used by the homepage (latest 3) and projects.html (all)

   To add a project, copy one { ... } block and fill it in.
     date:   "YYYY-MM"   (newest projects appear first)
     status: "done" | "wip" | "ongoing" | "plan"
     cat:    a key from CATS below
     with:   a key from WITH below
     emoji:  one emoji shown after the title (optional)
     label:  short type label shown at the top of the card
     tags:   tools used (the card shows 5, then "+N")
     repo:   GitHub link (optional) — shows the GitHub button on the card
   Every piece of text has an English (en) and French (fr) version.
   ===================================================================== */

const CATS = {
  ai:    { en:"AI & Automation",     fr:"IA & Automatisation" },
  sec:   { en:"Cybersecurity",       fr:"Cybersécurité" },
  cloud: { en:"Cloud & Microsoft",   fr:"Cloud & Microsoft" },
  infra: { en:"IT & Infrastructure", fr:"IT & Infrastructure" },
  data:  { en:"Data & Programming",  fr:"Données & Programmation" },
  web:   { en:"Web & Design",        fr:"Web & Design" },
};

const WITH = {
  personal:       { en:"Personal",       fr:"Personnel",   chip:{ en:"Personal project", fr:"Projet personnel" } },
  client:         { en:"Client",         fr:"Client",      chip:{ en:"Client · via Zinath Solutions", fr:"Client · via Zinath Solutions" } },
  zinath:         { en:"Zinath",         fr:"Zinath",      chip:{ en:"Zinath Solutions", fr:"Zinath Solutions" } },
  apprenticeship: { en:"Apprenticeship", fr:"Alternance", chip:{ en:"AI & Automation Apprenticeship", fr:"Alternance IA & Automatisation" } },
  education:      { en:"Coursework / School Work", fr:"Travaux scolaires", chip:{ en:"Coursework / School Work", fr:"Travaux scolaires" } },
};

const PROJECTS = [
  /* ---------------- 2026 ---------------- */
  { date:"2026-10", status:"wip", cat:"cloud", with:"zinath", emoji:"🛠️", repo:"",
    label:{ en:"Endpoint Management", fr:"Gestion de postes" },
    title:{ en:"Intune App Deployment", fr:"Déploiement d'application Intune" },
    desc:{ en:"Configured and deployed an application through Microsoft Intune, including a post-install step that edits the config file and generates an XML datastore. Diagnosed a failure in the post-install script and tested the fix safely on a test machine before rolling out.",
           fr:"Configuration et déploiement d'une application via Microsoft Intune, avec une étape post-installation qui modifie le fichier de configuration et génère un fichier XML. Diagnostic d'un échec du script post-installation et test du correctif sur une machine de test avant déploiement." },
    tags:["Microsoft Intune","Windows","App deployment","XML config","Test machine"] },

  { date:"2026-10", status:"done", cat:"sec", with:"apprenticeship", emoji:"📧", repo:"",
    label:{ en:"Security Tool", fr:"Outil de sécurité" },
    title:{ en:"DMARC Domain Scanner", fr:"Scanner de domaines DMARC" },
    desc:{ en:"An automated tool that checks a domain's SPF, DKIM and DMARC records through DNS lookups and produces a clear report of the findings. Built with AI-assisted development using Claude, drawing on my email security work at Zinath Solutions.",
           fr:"Un outil automatisé qui vérifie les enregistrements SPF, DKIM et DMARC d'un domaine via des requêtes DNS et produit un rapport clair. Développé avec l'aide de l'IA Claude, à partir de mon expérience en sécurité des e-mails chez Zinath Solutions." },
    tags:["Claude","DNS","SPF","DKIM","DMARC","GitHub"] },

  { date:"2026-10", status:"ongoing", cat:"cloud", with:"zinath", emoji:"☁️", repo:"",
    label:{ en:"Day-to-Day Administration", fr:"Administration quotidienne" },
    title:{ en:"Microsoft 365 & Endpoint Management", fr:"Microsoft 365 et gestion des postes" },
    desc:{ en:"Managing Microsoft 365 administration, identity management, device configuration, application deployment and endpoint troubleshooting for business clients on a day-to-day basis.",
           fr:"Gestion quotidienne de l'administration Microsoft 365, de la gestion des identités, de la configuration des appareils, du déploiement d'applications et du dépannage des postes pour des clients." },
    tags:["Microsoft 365","Entra ID","Intune","Defender","Exchange Online","Windows"] },

  { date:"2026-09", status:"done", cat:"cloud", with:"client", emoji:"🔑", repo:"",
    label:{ en:"Identity & Licensing", fr:"Identité et licences" },
    title:{ en:"Entra ID Licence Management", fr:"Gestion des licences Entra ID" },
    desc:{ en:"Managed Microsoft Entra ID Plan 1 licence assignments across a client tenant, handling user provisioning and ongoing licence administration.",
           fr:"Gestion des attributions de licences Microsoft Entra ID Plan 1 sur un tenant client, avec le provisionnement des utilisateurs et l'administration continue des licences." },
    tags:["Entra ID","Entra ID P1","Microsoft 365 admin","Licensing"] },

  { date:"2026-08", status:"done", cat:"ai", with:"personal", emoji:"🤖", repo:"",
    label:{ en:"AI Agent", fr:"Agent IA" },
    title:{ en:"Sales Analyser AI Agent", fr:"Agent IA Sales Analyser" },
    desc:{ en:"Built an AI agent in Microsoft Foundry that analyses Northwind Traders sales data in Excel and generates business insights. I configured the model, model routing and the agent's instructions, and it successfully analysed the data.",
           fr:"Création d'un agent IA dans Microsoft Foundry qui analyse les données de ventes Northwind Traders sous Excel et en tire des enseignements. J'ai configuré le modèle, le routage et les instructions de l'agent, qui a analysé les données avec succès." },
    tags:["Microsoft Foundry","GPT-5-mini","Model routing","AI agents","Excel"] },

  { date:"2026-06", status:"done", cat:"sec", with:"client", emoji:"🛡️", repo:"",
    label:{ en:"Compliance Assessment", fr:"Évaluation de conformité" },
    title:{ en:"Aramco CCC Cybersecurity Assessment", fr:"Évaluation de cybersécurité Aramco CCC" },
    desc:{ en:"Delivered an Aramco CCC (Cybersecurity Compliance Certificate) assessment for a client covering 33 controls — assigned tasks, collected evidence and tracked progress through to completion.",
           fr:"Réalisation d'une évaluation Aramco CCC (certificat de conformité en cybersécurité) pour un client couvrant 33 contrôles — attribution des tâches, collecte des preuves et suivi de l'avancement jusqu'à la fin." },
    tags:["Excel","Microsoft 365","Entra ID","Control documentation","Evidence tracking"] },

  { date:"2026-04", status:"plan", cat:"ai", with:"apprenticeship", emoji:"⚙️", repo:"",
    label:{ en:"Workflow Automation", fr:"Automatisation de flux" },
    title:{ en:"Power Automate Business Workflow", fr:"Flux métier Power Automate" },
    desc:{ en:"A workflow that processes requests, validates the information, routes approvals and records the outcome, documented before and after with test cases.",
           fr:"Un flux qui traite les demandes, valide les informations, gère les approbations et enregistre le résultat, documenté avant et après avec des cas de test." },
    tags:["Power Automate","Connectors","Approvals","Microsoft Forms"] },

  { date:"2026-04", status:"done", cat:"cloud", with:"personal", emoji:"🧪", repo:"",
    label:{ en:"Identity Lab", fr:"Laboratoire d'identité" },
    title:{ en:"Entra ID Identity & Access Lab", fr:"Laboratoire Entra ID identité et accès" },
    desc:{ en:"Built a hands-on lab environment for identity management and access control — created test users and groups, configured role assignments and set up identity policies in Entra ID.",
           fr:"Création d'un environnement de laboratoire pratique pour la gestion des identités et le contrôle d'accès — création d'utilisateurs et groupes de test, attribution de rôles et mise en place de politiques d'identité dans Entra ID." },
    tags:["Entra ID","Test users & groups","Access control","Identity config"] },

  { date:"2026-04", status:"done", cat:"web", with:"zinath", emoji:"🎨", repo:"",
    label:{ en:"Portal Customisation", fr:"Personnalisation de portail" },
    title:{ en:"Freshservice Portal Customisation", fr:"Personnalisation du portail Freshservice" },
    desc:{ en:"Customised the Freshservice service desk portal with CSS to improve its branding, styling and user experience. The customisation is live.",
           fr:"Personnalisation du portail service desk Freshservice en CSS pour améliorer l'image de marque, le style et l'expérience utilisateur. La personnalisation est en ligne." },
    tags:["Freshservice","CSS","UI customisation"] },

  /* ---------------- 2025 ---------------- */
  { date:"2025-12", status:"done", cat:"infra", with:"personal", emoji:"🐧", repo:"",
    label:{ en:"Linux Lab", fr:"Laboratoire Linux" },
    title:{ en:"Linux Foundations Virtual Lab", fr:"Laboratoire virtuel Linux Foundations" },
    desc:{ en:"Built an Ubuntu virtual machine environment and worked through Linux terminal commands, Bash scripting and system administration as part of the HackPath Linux Foundations bootcamp.",
           fr:"Création d'un environnement de machine virtuelle Ubuntu et mise en pratique des commandes du terminal Linux, du scripting Bash et de l'administration système dans le cadre du bootcamp HackPath Linux Foundations." },
    tags:["Linux","Ubuntu VM","Terminal","Bash"] },

  { date:"2025-09", status:"ongoing", cat:"data", with:"zinath", emoji:"📊", repo:"",
    label:{ en:"Business Operations", fr:"Opérations de l'entreprise" },
    title:{ en:"IT Operations & Financial Administration", fr:"Opérations IT et administration financière" },
    desc:{ en:"Managing business operations including expense reports, invoices, VAT-related administration, documentation and spreadsheet-based tracking.",
           fr:"Gestion des opérations de l'entreprise : notes de frais, factures, administration de la TVA, documentation et suivi sur tableur." },
    tags:["Excel","Microsoft 365","Odoo","Documentation"] },

  { date:"2025-08", status:"ongoing", cat:"web", with:"client", emoji:"🌐", repo:"",
    label:{ en:"Websites", fr:"Sites web" },
    title:{ en:"Website Development & Maintenance", fr:"Création et maintenance de sites web" },
    desc:{ en:"Creating and maintaining Wix websites for business clients, including content and presentation updates.",
           fr:"Création et maintenance de sites Wix pour des entreprises clientes, avec la mise à jour du contenu et de la présentation." },
    tags:["Wix","Content management","Web design"] },

  { date:"2025-07", status:"done", cat:"web", with:"education", emoji:"🖌️", repo:"",
    label:{ en:"Web & Graphics", fr:"Web et graphisme" },
    title:{ en:"Web Development & Graphic Design", fr:"Développement web et design graphique" },
    desc:{ en:"Coursework covering website development, digital graphics and 2D/3D design.",
           fr:"Travaux sur le développement de sites web, les graphismes numériques et le design 2D/3D." },
    tags:["HTML","Adobe Photoshop","Adobe Illustrator","Autodesk Maya"] },

  /* ---------------- 2024 ---------------- */
  { date:"2024-10", status:"done", cat:"data", with:"personal", emoji:"📈", repo:"",
    label:{ en:"Dashboard", fr:"Tableau de bord" },
    title:{ en:"IT Service Desk Analytics Dashboard", fr:"Tableau de bord analytique du service desk" },
    desc:{ en:"Built an Excel dashboard that organises and visualises service desk data, giving the team clear operational reporting and performance analysis at a glance.",
           fr:"Création d'un tableau de bord Excel qui organise et visualise les données du service desk, offrant à l'équipe un reporting opérationnel et une analyse de performance en un coup d'œil." },
    tags:["Excel","Formulas","Charts","Data organisation"] },

  { date:"2024-05", status:"done", cat:"data", with:"education", emoji:"🗃️", repo:"",
    label:{ en:"Databases", fr:"Bases de données" },
    title:{ en:"Database & Spreadsheet Modelling", fr:"Bases de données et modélisation sur tableur" },
    desc:{ en:"Coursework on database management, organising information and spreadsheet modelling.",
           fr:"Travaux sur la gestion de bases de données, l'organisation de l'information et la modélisation sur tableur." },
    tags:["Microsoft Access","Excel","Queries","Formulas"] },

  { date:"2024-02", status:"done", cat:"data", with:"education", emoji:"🐍", repo:"",
    label:{ en:"Programming", fr:"Programmation" },
    title:{ en:"Python Programming Coursework", fr:"Travaux de programmation Python" },
    desc:{ en:"Programming coursework covering Python fundamentals, completed as part of my BTEC Level 3 National Extended Diploma in IT.",
           fr:"Travaux de programmation sur les bases de Python, réalisés dans le cadre de mon BTEC Level 3 National Extended Diploma en informatique." },
    tags:["Python","Programming fundamentals"] },
];

/* Newest first */
PROJECTS.sort((a, b) => b.date.localeCompare(a.date));
