export default {
  websiteNavLinks: [
    {
      id: 'about',
      title: 'About us',
      link: '/about',
      nav: false,
      footerGroup: 1,
    },
    {
      id: 'faq',
      title: 'FAQs',
      link: '/faq',
      nav: false,
      footerGroup: 1,
    },
    {
      id: 'contact-us',
      title: 'Contact us',
      link: '/contact-us',
      nav: false,
      footerGroup: 1,
    },
    {
      id: 'blog',
      title: 'Blog',
      link: '/blog',
      nav: false,
      footerGroup: 1,
    },
    {
      id: 'job-search',
      title: 'Job search',
      link: '/job-search',
      nav: true,
      footerGroup: 2,
    },
    {
      id: 'upload-resume',
      title: 'Upload resume',
      link: '/upload-resume',
      nav: true,
      footerGroup: 2,
    },
    {
      id: 'saved-jobs',
      title: 'Saved jobs',
      link: '/saved-jobs',
      nav: true,
      footerGroup: 2,
    },
    {
      id: 'ats',
      title: 'ATS',
      link: '/ats',
      nav: false,
      footerGroup: 2,
    },
    {
      id: 'terms',
      title: 'Terms',
      link: '/terms',
      nav: false,
      footerGroup: 3,
    },
    {
      id: 'privacy-policy',
      title: 'Privacy policy',
      link: '/privacy-policy',
      nav: false,
      footerGroup: 3,
    },
    {
      id: 'cookie-policy',
      title: 'Cookie policy',
      link: '/cookie-policy',
      nav: false,
      footerGroup: 3,
    },
  ],
  infoBar: {
    message:
      'We are creating a revolutionary tool to supercharge your recruitment process',
    ctaButtonText: 'Learn more',
  },
  footer: {
    title: 'Job search and recruitment automation',
  },
  homePage: {
    title: 'Discover Your Next Opportunity',
  },
  jobSearchPage: {
    jobApplicationTitle: 'Apply',
    jobApplicationBtnTxt: 'Apply',
    applyingForJobTxt: 'Applying for job...',
    jobApplicationSuccessTxt: 'Job application submitted',
    jobApplicationErrorTxt: 'Failed to apply for job, try again',
  },
  savedJobPage: {
    noSavedJobs: 'You have no saved jobs yet',
  },
  jobFilterTexts: {
    moreFiltersBtnTxt: 'More filters',
    title: 'Filters',
    filterSubmitBtnTxt: 'Search',
  },
  jobDescriptionTexts: {
    noDescriptionTxt: 'No description',
    moreDetailsBtnTxt: 'More details',
    applyBtnTxt: 'Apply',
    saveBtnTxt: 'Save',
  },
  jobFilters: {
    search: {
      keywordInputPlaceholder: 'Job title or keyword',
      cityInputPlaceholder: 'City',
      citySearchInputPlaceholder: 'Search city',
      countryInputPlaceholder: 'Country',
      countrySearchInputPlaceholder: 'Search country',
      jobSearchSubmitButtonText: 'Find jobs',
    },
    datePosted: {
      id: 'date-posted',
      title: 'Date posted',
      values: [
        { id: 'past-day', name: 'Past day', mxa: 1 },
        { id: 'past-3days', name: 'Past 3 days', mxa: 3 },
        { id: 'past-week', name: 'Past week', mxa: 7 },
        { id: 'past-month', name: 'Past month', mxa: 31 },
      ],
    },
    type: {
      id: 'type',
      title: 'Type',
      values: [
        { id: 'pt', name: 'Part time' },
        { id: 'ft', name: 'Full time' },
        { id: 'pm', name: 'Permanent' },
        { id: 'ct', name: 'Contract' },
      ],
    },
    salary: {
      id: 'salary',
      title: 'Salary',
      values: [
        { id: 'smn', name: 'Min' },
        { id: 'smx', name: 'Max' },
      ],
    },
    category: {
      id: 'category',
      title: 'Category',
      values: [
        {
          tag: 'unknown',
          label: 'All',
        },
        {
          label: 'Accounting & Finance Jobs',
          tag: 'accounting-finance-jobs',
        },
        {
          label: 'IT Jobs',
          tag: 'it-jobs',
        },
        {
          tag: 'sales-jobs',
          label: 'Sales Jobs',
        },
        {
          tag: 'customer-services-jobs',
          label: 'Customer Services Jobs',
        },
        {
          tag: 'engineering-jobs',
          label: 'Engineering Jobs',
        },
        {
          label: 'HR & Recruitment Jobs',
          tag: 'hr-jobs',
        },
        {
          label: 'Healthcare & Nursing Jobs',
          tag: 'healthcare-nursing-jobs',
        },
        {
          tag: 'hospitality-catering-jobs',
          label: 'Hospitality & Catering Jobs',
        },
        {
          tag: 'pr-advertising-marketing-jobs',
          label: 'PR, Advertising & Marketing Jobs',
        },
        {
          tag: 'logistics-warehouse-jobs',
          label: 'Logistics & Warehouse Jobs',
        },
        {
          tag: 'teaching-jobs',
          label: 'Teaching Jobs',
        },
        {
          label: 'Trade & Construction Jobs',
          tag: 'trade-construction-jobs',
        },
        {
          label: 'Admin Jobs',
          tag: 'admin-jobs',
        },
        {
          tag: 'legal-jobs',

          label: 'Legal Jobs',
        },
        {
          tag: 'creative-design-jobs',
          label: 'Creative & Design Jobs',
        },
        {
          tag: 'graduate-jobs',
          label: 'Graduate Jobs',
        },
        {
          tag: 'retail-jobs',
          label: 'Retail Jobs',
        },
        {
          tag: 'consultancy-jobs',
          label: 'Consultancy Jobs',
        },
        {
          tag: 'manufacturing-jobs',
          label: 'Manufacturing Jobs',
        },
        {
          tag: 'scientific-qa-jobs',
          label: 'Scientific & QA Jobs',
        },
        {
          label: 'Social work Jobs',
          tag: 'social-work-jobs',
        },
        {
          label: 'Travel Jobs',
          tag: 'travel-jobs',
        },
        {
          label: 'Energy, Oil & Gas Jobs',
          tag: 'energy-oil-gas-jobs',
        },
        {
          tag: 'property-jobs',
          label: 'Property Jobs',
        },
        {
          label: 'Charity & Voluntary Jobs',
          tag: 'charity-voluntary-jobs',
        },
        {
          tag: 'domestic-help-cleaning-jobs',
          label: 'Domestic help & Cleaning Jobs',
        },
        {
          tag: 'maintenance-jobs',
          label: 'Maintenance Jobs',
        },
        {
          tag: 'part-time-jobs',
          label: 'Part time Jobs',
        },
        {
          label: 'Other/General Jobs',
          tag: 'other-general-jobs',
        },
      ],
    },
  },
  noJobsError: {
    message: 'No jobs found',
    suggestions: [
      'Try more general keywords',
      'Check your spelling',
      'Replace abbreviations with the entire word',
    ],
  },
  uploadResumePage: {
    title: 'Upload your resume',
  },
  resumeUploadForm: {
    nameInputPlaceholder: 'Full Name',
    nameInputErrorMsg: 'Full name is required',
    emailInputPlaceholder: 'Email',
    emailInputErrorMsg: 'A valid email is required',
    uploadBtnTxt: 'Drag and drop or click to upload your resume',
    submitBtnTxt: 'Submit',
    uploadingResumeTxt: 'Submitting your resume...',
    resumeUploadSuccessTxt: 'Resume submitted!',
    resumeUploadErrorTxt: 'Failed to upload resume',
  },
  atsPage: {
    heroIntroText:
      'We are creating a revolutionary tool to supercharge your recruitment process',
    heroTitle:
      'Shortlist the right talents from hundreds of applications in seconds',
    benefits: {
      aiPowered: {
        id: 'ai-powered',
        display: 'powered',
      },
      reducedCost: {
        id: 'reduced-cost',
        display: '~ 40% cost savings in hiring process',
      },
      easySetup: {
        id: 'easy-setup',
        display: 'Quick setup',
      },
    },
    benefitsInfoTitle: 'Applicants',
    benefitsInfo1: 'Rank applicants based on your pre-defined parameters',
    benefitsInfo2: 'Filter applicants based on the job requirements.',
    applicantImageUrls: [
      'https://unrion-website-mages.s3.us-east-2.amazonaws.com/person-1.jpg',
      'https://unrion-website-mages.s3.us-east-2.amazonaws.com/person-2.jpg',
      'https://unrion-website-mages.s3.us-east-2.amazonaws.com/person-3.jpg',
    ],
    brandImageUrls: [
      'https://unrion-website-mages.s3.us-east-2.amazonaws.com/sliike.png',
      'https://unrion-website-mages.s3.us-east-2.amazonaws.com/costco.png',
      'https://unrion-website-mages.s3.us-east-2.amazonaws.com/applied-coding.png',
      'https://unrion-website-mages.s3.us-east-2.amazonaws.com/walgreens.png',
      'https://unrion-website-mages.s3.us-east-2.amazonaws.com/teraxle.png',
      'https://unrion-website-mages.s3.us-east-2.amazonaws.com/spectrum.png',
      'https://unrion-website-mages.s3.us-east-2.amazonaws.com/home-depot.png',
    ],
    features: {
      saveCost: {
        title: 'Save cost',
        description:
          'Screen hundreds of applications in seconds based on your criteria',
        imageUrl:
          'https://unrion-website-mages.s3.us-east-2.amazonaws.com/resumes.png',
      },
      bias: {
        title: 'Get rid of bias',
        description: 'Eliminate bias from your recruitment process',
        imageUrl:
          'https://unrion-website-mages.s3.us-east-2.amazonaws.com/bias-image-collage.png',
      },
      powerful: {
        title: 'Simple and powerful',
        description: 'Shortlist qualified candidates in no time',
        imageUrl:
          'https://unrion-website-mages.s3.us-east-2.amazonaws.com/international-group-of-people-male-and-female-image-collage.jpg',
        processes: [
          'Upload resumes or connect your career page',
          'Add screening requirements',
          'View shortlisted candidates. Filtered and ranked!',
        ],
      },
      schedule: {
        title: 'Schedule interviews',
        description:
          'Schedule interviews and sync with outlook or google calendars',
        imageUrl:
          'https://unrion-website-mages.s3.us-east-2.amazonaws.com/event-schedule.png',
      },
      engage: {
        title: 'Engage with messaging',
        description: 'Chat with candidates in real-time',
        imageUrl:
          'https://unrion-website-mages.s3.us-east-2.amazonaws.com/man-texting-in-a-bus.jpg',
        services: [
          {
            id: 'book-a-call',
            text: 'Book a call',
          },
          {
            id: 'send-reminders',
            text: 'Send reminders',
          },
          {
            id: 'info',
            text: 'Get quick information',
          },
        ],
      },
    },
    waitingListSection: {
      title: 'Join our waiting list',
      subTitle:
        'Be the first to unlock the benefits of noble ATS & get the first',
      subTitleSpotlightText: '1 month free',
      inputPlaceholder: 'Email',
      inputSubmitButtonText: 'Count me in',
      waitListEmailValidationErrorMessage: 'A valid email is required',
      addToWaitListErrorMessage: 'Failed to add to wailist. Please try again',
      addToWaitListSuccessMessage:
        'Thanks for the interest, you email has been added to our wait list!',
    },
  },
  faqSection: {
    titleQ: 'You have questions?',
    titleA: 'We have answers.',
    faqs: [
      {
        id: '1',
        question: 'How does Noble ATS work?',
        answer:
          'Noble ATS is an AI powered talent management software that automates recruitment process, improve quality of hire, and foster excellent candidate experience. Additionally, this is a web base software that can be integrated via API. Noble ATS will enable companies to find, attract and hire top talents in a fast and effective manual by using AI technologies.',
      },
      {
        id: '2',
        question: 'Why do company’s need ATS Systems?',
        answer:
          'Most companies need ATS to help them automate resume screening, hire candidates, improve internal communication, manage applicants, and provide excellent candidate experience. It can also be used as a reporting tool to enhance data driven decisions and to reduce redundant process.',
      },
      {
        id: '3',
        question: 'Why Noble ATS?',
        answer:
          'We have tremendous industry experience, and this tool is specifically designed to eliminate stress associated with reviewing resumes, scheduling interviews, tracking candidates progress, internal communication, decision making and onboarding. By using noble ATS you will save about 40% hiring cost and time to fill.  ',
      },
    ],
  },
};
