import type { IssuerBrand } from "@/components/IssuerLogo";
import type { Publication } from "@/components/PublicationCard";

export type Certification = {
  id: string;
  brand: IssuerBrand;
  issuerLine: string;
  name: string;
  verifyUrl: string;
};

export type ContactLinkIcon = "linkedin" | "scholar" | "researchgate" | "orcid" | "webofscience";

export type ContactLink = {
  id: string;
  label: string;
  href: string;
  icon: ContactLinkIcon;
};

export const site = {
  name: "Showrov Azam",
  title: "NLP Researcher | Peer Reviewer @ ACM TALLIP",
  bio: [
    "I am a Computer Science and Engineering graduate (Class of 2025) from Daffodil International University. My research focuses on how machine intelligence can serve communities whose languages are underrepresented in NLP benchmarks and tooling.",
    "Currently, I serve as a Peer Reviewer for the Transactions on Asian and Low-Resource Language Information Processing (TALLIP), contributing to the quality of emerging literature in Asian language technologies.",
    "My research direction centers on bridging state-of-the-art models with regional Bangla dialects—preserving nuance, code-mixing, and everyday usage rather than flattening them into a single standard.",
    "I am preparing applications for competitive US graduate programs (Fall 2027) where I can deepen work on low-resource NLP, evaluation, and human-centered deployment.",
  ],
  stats: [
    { label: "Publications", value: "4" },
    { label: "Journal reviewer roles", value: "1" },
    { label: "Certifications", value: "7" },
  ],
  journal: {
    role: "Peer Reviewer",
    venue: "ACM Transactions on Asian and Low-Resource Language Information Processing (TALLIP)",
    detail:
      "Invited reviewer for manuscript evaluation, methodology soundness, and clarity of contribution in Asian and low-resource language NLP.",
    peerReviewVerificationUrl:
      "https://drive.google.com/file/d/1Ih89_s1esr651TGNzDktSMZ7VXN5yCcP/view?usp=sharing",
  },
  publications: [
    {
      id: "boishommo-hate",
      title: "BOISHOMMO: Holistic Approach for Bangla Hate Speech",
      venue: "arXiv preprint · April 2025",
      description:
        "Multi-label Bangla hate speech dataset and benchmarks with fine-grained abusive categories. Co-authored with Md Abdullah Al Kafi, Sumit Kumar Banshal, Md Sadman Shakib, and Tamanna Alam Tabashom.",
      license: "CC BY-NC-SA 4.0",
      researchGateUrl:
        "https://www.researchgate.net/publication/390749631_BOISHOMMO_Holistic_Approach_for_Bangla_Hate_Speech",
      arxivUrl: "https://arxiv.org/abs/2504.08408",
      doiUrl: "https://doi.org/10.48550/arXiv.2504.08408",
    },
    {
      id: "icccnt-qg-bangla",
      title:
        "Question Generation in Bangla Using Large Language Models: Evaluating Transformer Based Models for Low-Resource Languages",
      venue: "16th IEEE ICCCNT · July 2025",
      description:
        "Evaluates transformer-based models for Bangla question generation in low-resource settings. Co-authored with Sayma Jannat, Washik Wali Faieaz, Eftakhairul Islam, Md Sazzadur Ahamed, and colleagues.",
      researchGateUrl:
        "https://www.researchgate.net/publication/394085664_Question_Generation_in_Bangla_Using_Large_Language_Models_Evaluating_Transformer_Based_Models_for_Low-Resource_Languages",
    },
    {
      id: "idaa-sadhu-cholit",
      title: "From Classical to Colloquial: Leveraging LLMs for Sadhu-Cholit Register Identification in Bangla",
      venue: "International Conference on Intelligent Data Analysis and Applications (IDAA) · December 2025",
      description:
        "LLM-based approach to Sadhu–Cholit register identification for Bangla. Co-authored with Rasel Parvez, Md Anwar Hossain, Md. Sadekur Rahman, and colleagues.",
      researchGateUrl:
        "https://www.researchgate.net/publication/399155998_From_Classical_to_Colloquial_Leveraging_LLMs_for_Sadhu-Cholit_Register_Identification_in_Bangla",
    },
    {
      id: "idaa-boishommo-imbalance",
      title: "BOISHOMMO: Benchmarking Class Imbalance in Bangla Multi-Label Hate Speech Detection",
      venue:
        "International Conference on Intelligent Data Analysis and Applications (IDAA) · December 2025 · Daffodil International University, Dhaka, Bangladesh",
      description:
        "Benchmarking class imbalance in multi-label Bangla hate speech detection within the BOISHOMMO setting. Co-authored with Sifat Khan, Rashed Hossain, MD Abdullah Al Kafi, and colleagues.",
      researchGateUrl:
        "https://www.researchgate.net/publication/402021615_BOISHOMMO_Benchmarking_Class_Imbalance_in_Bangla_Multi-Label_Hate_Speech_Detection",
    },
  ] satisfies Publication[],
  volunteering: [
    {
      org: "Take Off",
      role: "Programming contest organization",
      detail:
        "Coordinated problem sets, judge workflows, and contest logistics to run fair, engaging competitive programming events for students.",
    },
    {
      org: "Unlock the Algorithm",
      role: "Contest operations & outreach",
      detail:
        "Supported outreach, participant onboarding, and day-of operations to grow the local algorithms community and mentorship pipeline.",
    },
  ],
  work: [
    {
      company: "Flowmingo AI",
      role: "Talent Acquisition Specialist",
      period: "Recent",
      detail:
        "Partnered with technical leadership to identify research-minded engineers and operators; structured interviews and candidate experience aligned with a fast-moving AI product team.",
      imageSrc: "/flw.jpg",
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      school: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      period: "2022–2025",
      grade: "CGPA 3.68/4.00",
      detail:
        "Focused on dialectal Bengali automatic speech recognition (ASR) and preservation of linguistic diversity through deep learning; coursework across algorithms, systems, and machine learning.",
      thesis:
        "Final Year Thesis: 'A Two-Stage Framework for Dialectal Bengali ASR and Standardization using Whisper and BanglaT5' supervised by Amit Chakraborty Chhoton. This research addresses the digital exclusion of regional speakers by enabling AI to understand unique phonology and nuances rather than flattening them into a single standard.",
      thesisSupervisor: {
        name: "Amit Chakraborty Chhoton",
        role: "Assistant Professor, Department of CSE, Daffodil International University",
        facultyUrl: "https://faculty.daffodilvarsity.edu.bd/profile/cse/amit-cse.html",
        scholarUrl: "https://scholar.google.com/citations?user=O_HC94EAAAAJ&hl=en",
      },
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      school: "Dinajpur Government College",
      location: "Dinajpur, Bangladesh",
      period: "2020",
      grade: "A+ (5.00/5.00)",
      detail: "Science group; foundation for university-level CS and quantitative work.",
    },
    {
      degree: "Secondary School Certificate (Science)",
      school: "St. Philip's High School and College",
      location: "Dinajpur, Bangladesh",
      period: "2018",
      grade: "A+ (5.00/5.00)",
      detail: "Secondary studies with emphasis on mathematics and science.",
    },
  ],
  certifications: [
    {
      id: "ibm-python-ds-ai",
      brand: "ibm",
      issuerLine: "IBM · Coursera",
      name: "Python for Data Science, AI & Development",
      verifyUrl: "https://coursera.org/verify/5R5H37Y6FMSB",
    },
    {
      id: "michigan-python-everybody",
      brand: "michigan",
      issuerLine: "University of Michigan · Coursera",
      name: "Programming for Everybody (Getting Started with Python)",
      verifyUrl: "https://coursera.org/verify/43GB7AERK42K",
    },
    {
      id: "google-get-started-python",
      brand: "google",
      issuerLine: "Google · Coursera",
      name: "Get Started with Python",
      verifyUrl: "https://coursera.org/verify/C4VAXRQ8YXR6",
    },
    {
      id: "google-fods",
      brand: "google",
      issuerLine: "Google · Coursera",
      name: "Foundations of Data Science",
      verifyUrl: "https://coursera.org/verify/DGMZCU6KA1X7",
    },
    {
      id: "ibm-what-is-ds",
      brand: "ibm",
      issuerLine: "IBM · Coursera",
      name: "What is Data Science?",
      verifyUrl: "https://coursera.org/verify/ETG77LTNND8H",
    },
    {
      id: "ibm-ml-python",
      brand: "ibm",
      issuerLine: "IBM · Coursera",
      name: "Machine Learning with Python",
      verifyUrl: "https://coursera.org/verify/UTZGAYXZI7CN",
    },
    {
      id: "deeplearning-supervised-ml",
      brand: "deeplearning",
      issuerLine: "DeepLearning.AI & Stanford · Coursera",
      name: "Supervised Machine Learning: Regression and Classification",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/ZETL9BDB9IRS",
    },
  ] satisfies Certification[],
  contact: {
    links: [
      {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/showrov-azam-7aa832241/",
        icon: "linkedin",
      },
      {
        id: "scholar",
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=tYGtPaQAAAAJ&hl=en",
        icon: "scholar",
      },
      {
        id: "researchgate",
        label: "ResearchGate",
        href: "https://www.researchgate.net/profile/Showrov-Azam",
        icon: "researchgate",
      },
      {
        id: "orcid",
        label: "ORCID",
        href: "https://orcid.org/0009-0008-6647-7166",
        icon: "orcid",
      },
      {
        id: "webofscience",
        label: "Web of Science",
        href: "https://www.webofscience.com/wos/author/record/POU-4135-2026",
        icon: "webofscience",
      },
    ] satisfies ContactLink[],
    email: {
      address: "azam15-5843@diu.edu.bd",
      href: "mailto:azam15-5843@diu.edu.bd",
    },
    whatsapp: {
      display: "+880 1926 886 230",
      href: "https://wa.me/8801926886230",
    },
  },
  resume: {
    href: "/resume.pdf",
    downloadFileName: "Showrov-Azam-resume.pdf",
    googleDriveUrl:
      "https://drive.google.com/file/d/1uLtqQmA_cvol1xKeTif2-6drK7KN7_SE/view?usp=sharing",
  },
};