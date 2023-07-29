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
      link: '/contact',
      nav: false,
      footerGroup: 1,
    },
    // {
    //   id: 'blog',
    //   title: 'Blog',
    //   link: '/blog',
    //   nav: false,
    //   footerGroup: 1,
    // },
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
        'Be the first to unlock the benefits of Unrion ATS & get the first',
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
        question: 'How does Unrion ATS work?',
        answer:
          'Unrion ATS is an AI powered talent management software that automates recruitment process, improve quality of hire, and foster excellent candidate experience. Additionally, this is a web base software that can be integrated via API. Unrion ATS will enable companies to find, attract and hire top talents in a fast and effective manual by using AI technologies.',
      },
      {
        id: '2',
        question: 'Why do company’s need ATS Systems?',
        answer:
          'Most companies need ATS to help them automate resume screening, hire candidates, improve internal communication, manage applicants, and provide excellent candidate experience. It can also be used as a reporting tool to enhance data driven decisions and to reduce redundant process.',
      },
      {
        id: '3',
        question: 'Why Unrion ATS?',
        answer:
          'We have tremendous industry experience, and this tool is specifically designed to eliminate stress associated with reviewing resumes, scheduling interviews, tracking candidates progress, internal communication, decision making and onboarding. By using unrion ATS you will save about 40% hiring cost and time to fill.',
      },
    ],
  },
  aboutUs: {
    title: 'We simplify recruitment.',
    subTitle: 'Discover, Connect, and Hire effortlessly',
    titleText:
      'We are dedicated to revolutionizing the job search and recruitment process. As a leading provider of cutting-edge ATS software and a comprehensive job search portal, we empower both job seekers and employers to connect, collaborate, and unlock their full potential.',
    employerInfo: {
      title: 'Employers',
      description:
        '<p>Our AI ATS software is designed to streamline your hiring process, offering powerful features such as automated candidate screening, intuitive applicant tracking, and seamless collaboration tools.</p><br/><p>With our innovative AI technology, you can efficiently manage job postings, track candidate progress, and make data-driven hiring decisions with ease.</p><br/><p>We believe that by leveraging the power of technology, we can help companies find the perfect fit for their teams while saving valuable time and resources.</p>',
    },
    jobSeekersInfo: {
      title: 'Job seekers',
      description:
        "<p>Our job search portal provides a user-friendly platform to discover and apply for a wide range of opportunities.</p><br/><p>With our advanced search filters, personalized recommendations, and real-time updates, we aim to empower you in your quest for professional growth.</p><br/><p>Whether you're a seasoned professional or just starting your career journey, our portal offers wealth of resources, including resume-building tools, interview tips, and industry insights to support your success.</p>",
    },
  },
  contactUs: {
    title: 'We love to hear from you,',
    subTitle: 'Get in touch 👋',
    form: {
      nameInputPlaceholder: 'Full Name',
      nameInputErrorMsg: 'Full name is required',
      emailInputPlaceholder: 'Email',
      emailInputErrorMsg: 'A valid email is required',
      messageInputPlaceholder: 'Your message',
      messageInputErrorMsg: 'A message is required 😊',
      submitBtnTxt: 'Send',
      sendingMessageTxt: 'Sending message...',
      contactUsSuccessTxt: 'Your message has been sent!',
      contactUsErrorTxt: 'Failed to send message',
    },
    address: 'Unit 280, 23 Sunpark Drive SE, Calgary, AB, Canada, Alberta',
    phone: '+1 (403) 879-6819',
    connect: 'connect@nobled.ca',
  },
  terms: {
    title: 'Terms of service',
    document: `<div>
  <h2>1. Introduction</h2>
  <p>Welcome to Unrion, a software application ("the App") provided by Noble, a company based in Calgary, Alberta, Canada ("the Company"). These Terms of Service ("the Agreement") apply to all users of the Unrion App. By accessing and using the App, you agree to be bound by the terms and conditions of this Agreement. If you do not agree with any part of this Agreement, please do not use the App.</p>
  <h2>2. Definitions</h2>
  <p>In this Agreement:</p>
  <ul>
    <li>"User" refers to any individual or entity accessing or using the App;</li>
    <li>"Customer" refers to users who engage with the job search and recruitment services offered by the App;</li>
    <li>"Content" encompasses any text, graphics, images, or other materials made available through the App.</li>
  </ul>
  <h2>3. Acceptance of Terms</h2>
  <p>By creating an account or accessing the App, you agree to the terms and conditions of this Agreement. If you do not agree with any part of this Agreement, please refrain from using the App.</p>
  <h2>4. Account Creation and Responsibilities</h2>
  <p>In order to access certain features of the App, you may be required to create a user account. You agree to provide accurate and complete information during the registration process and to keep your account credentials secure. You are solely responsible for all activities that occur under your account. If you suspect any unauthorized use of your account, please notify us immediately.</p>
  <h2>5. Job Search and Recruitment Services</h2>
  <p>The App provides job search and recruitment services to assist Customers in finding potential employment opportunities. The availability and suitability of job listings are subject to change, and the Company does not guarantee employment or job placement.</p>
  <h2>6. Application Tracking System (ATS)</h2>
  <p>The App may include an Application Tracking System (ATS) to facilitate the recruitment process. By using the ATS, you acknowledge and consent to the collection, storage, and use of your personal information and application data for recruitment purposes. The Company will handle your data in accordance with its Privacy Policy.</p>
  <h2>7. User Obligations and Conduct</h2>
  <p>As a User of the App, you agree to:</p>
  <ul>
    <li>Comply with all applicable laws and regulations;</li>
    <li>Use the App only for lawful purposes and in a manner consistent with this Agreement;</li>
    <li>Refrain from engaging in any fraudulent, deceptive, or malicious activities on the App;</li>
    <li>Respect the intellectual property rights of the Company and other users;</li>
    <li>Not upload, post, or transmit any content that is unlawful, harmful, defamatory, obscene, or otherwise objectionable;</li>
    <li>Not attempt to gain unauthorized access to the App or any user accounts;</li>
    <li>Comply with any additional guidelines or policies provided by the Company regarding the use of the App.</li>
  </ul>
  <h2>8. Intellectual Property</h2>
  <p>The App and all Content provided within the App are the property of Noble and protected by intellectual property laws. Users are granted a limited, non-exclusive, non-transferable license to access and use the App and its Content for personal, non-commercial purposes. Users shall not reproduce, distribute, modify, or create derivative works based on the App or its Content without the Company's express written consent.</p>
  <h2>9. Privacy and Data Protection</h2>
  <p>Your privacy is important to us. By using the App, you acknowledge and agree to the collection, use, storage, and disclosure of your personal information as outlined in our Privacy Policy. The Company implements reasonable security measures to protect your data, but cannot guarantee absolute security.</p>
  <h2>10. Limitation of Liability</h2>
  <p>To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising out of your use of the App or any Content accessed through the App. The total liability of the Company shall not exceed the amount paid by you (if any) for accessing or using the App.</p>
  <h2>11. Termination and Modification</h2>
  <p>The Company reserves the right to suspend or terminate your access to the App, in whole or in part, at any time and for any reason without prior notice. The Company may also modify this Agreement at any time, and updated versions will be posted on the App. Your continued use of the App after any modifications constitutes your acceptance of the modified Agreement.</p>
  <h2>12. Governing Law and Dispute Resolution</h2>
  <p>This Agreement shall be governed by and construed in accordance with the laws of the Province of Alberta, Canada. Any dispute arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts located in Calgary, Alberta.</p>
  <h2>13. Entire Agreement</h2>
  <p>This Agreement constitutes the entire agreement between you and the Company regarding the use of the App and supersedes any prior or contemporaneous understandings or agreements, whether written or oral.</p>
  <h2>14. Contact Information</h2>
  <p>If you have any questions or concerns regarding this Agreement or the App, please contact us at <a href="mailto:connect@nobled.ca">connect@nobled.ca</a>.</p>
  <h2>15. Acceptance of Agreement</h2>
  <p>By using the Unrion App, I acknowledge that I have read and agree to the terms and conditions outlined in this Agreement.</p>
</div>`,
  },
  privacy: {
    title: 'Privacy policy',
    document: `<div>

    <h2>1. Introduction</h2>
    <p>The Unrion App is designed to provide job search and recruitment services, assisting Users in their employment endeavors. The Company recognizes the importance of privacy and is dedicated to protecting User information. By using the App, Users acknowledge and consent to the practices described in this Policy.</p>

    <h2>2. Information Collection</h2>
    <p>The Company may collect various types of personal information from Users, which may include but is not limited to:</p>
    <ul>
        <li>Name, address, email address, and phone number</li>
        <li>Employment history, qualifications, and professional skills</li>
        <li>Information provided in resumes, cover letters, or application forms</li>
    </ul>
    <p>Sensitive information, such as racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data, or health information, is not intentionally collected. Users are advised not to provide any sensitive information through the App.</p>
    <p>The Company may collect personal information through User input and automated technologies, such as cookies and analytics tools, to enhance User experience and improve the functionality of the App.</p>

    <h2>3. Use of Information</h2>
    <p>The personal information collected from Users is used for the following purposes:</p>
    <ul>
        <li>Providing job search and recruitment services</li>
        <li>Assisting in application tracking and processing</li>
        <li>Communicating with Users regarding job opportunities and employment-related matters</li>
        <li>Improving the App's features, functionality, and performance</li>
    </ul>
    <p>The Company may share User information with trusted third parties, including potential employers, recruiters, and service providers, to facilitate the aforementioned purposes. However, the Company does not sell, rent, or disclose personal information to unrelated third parties for marketing purposes.</p>

    <h2>4. Data Security</h2>
    <p>The Company implements reasonable physical, technical, and administrative security measures to protect User data from unauthorized access, disclosure, alteration, or destruction. These measures include:</p>
    <ul>
        <li>Encryption of sensitive data during transmission</li>
        <li>Restricted access controls to personal information</li>
        <li>Regular security assessments to identify and address vulnerabilities</li>
    </ul>
    <p>While the Company takes reasonable precautions, no method of data transmission over the internet or electronic storage is entirely secure. Users should be aware of this inherent risk when providing personal information through the App.</p>

    <h2>5. User Rights</h2>
    <p>Users have the following rights regarding their personal information:</p>
    <ul>
        <li>Right to access: Users can request access to their personal information held by the Company.</li>
        <li>Right to rectification: Users can update or correct their personal information if it is inaccurate or incomplete.</li>
        <li>Right to erasure: Users can request the deletion of their personal information, subject to applicable legal requirements.</li>
        <li>Right to object: Users can object to the processing of their personal information in certain circumstances.</li>
        <li>Right to restriction: Users can request the limitation of processing their personal information under certain conditions.</li>
    </ul>
    <p>To exercise these rights, Users can contact the Company using the contact information provided in Section 10.</p>

    <h2>6. Cookies and Tracking Technologies</h2>
    <p>The App may use cookies or similar tracking technologies to enhance User experience and collect certain information. These technologies may collect:</p>
    <ul>
        <li>IP addresses and device identifiers</li>
        <li>App usage data and preferences</li>
        <li>Aggregate information on User interactions with the App</li>
    </ul>
    <p>Users can manage their cookie preferences through their device or browser settings. However, disabling cookies may limit the functionality and features of the App.</p>

    <h2>7. International Data Transfers</h2>
    <p>The Company may transfer User information to countries outside of Canada for the purposes outlined in this Policy. In such cases, the Company will ensure appropriate safeguards are in place to protect User data in accordance with applicable laws and regulations.</p>

    <h2>8. Children's Privacy</h2>
    <p>The App is not intended for use by children under the age of 16. The Company does not knowingly collect personal information from children. If a parent or guardian becomes aware that their child has provided personal information through the App, they should contact the Company immediately.</p>

    <h2>9. Changes to the Privacy Policy</h2>
    <p>The Company may update this Policy from time to time to reflect changes in privacy practices or legal requirements. Material changes will be communicated to Users through appropriate means. By continuing to use the App after such changes, Users signify their acceptance of the revised Policy.</p>

    <h2>10. Contact Information</h2>
    <p>If Users have any questions, concerns, or inquiries regarding this Policy or the Company's privacy practices, they can contact the Company at:</p>
    <p>Noble<br>
    Address: Unit 280, 23 Sunpark Drive SE, Calgary, AB, Canada, Alberta<br>
    Email: <a href="mailto:connect@nobled.ca">connect@nobled.ca</a><br>
    Phone: +1 (403) 879-6819</p>
    <p>Users should direct their privacy-related communications to the attention of the Privacy Officer.</p>
</div>`,
  },
  cookiePolicy: {
    title: 'Cookie policy',
    document: `<div>
  <h2>1. Explanation of Cookies</h2>
  <p>Unrion, developed by Noble, uses cookies to enhance your experience, improve functionality, and provide personalized content and advertisements. Cookies are small text files stored on your device when you visit our application.</p>
  <p>We utilize the following types of cookies:</p>
  <ul>
    <li><strong>Functional cookies:</strong> These cookies are necessary for the app to function properly and provide basic features.</li>
    <li><strong>Analytical cookies:</strong> We use these cookies to analyze app usage, gather insights, and enhance performance.</li>
    <li><strong>Advertising cookies:</strong> These cookies help us deliver personalized advertisements based on your interests and browsing behavior.</li>
  </ul>
  <h2>2. Cookie Collection and Consent</h2>
  <p>By using Unrion, you consent to the collection and storage of cookies on your device. Cookies are collected automatically as you interact with the app. You can provide or withdraw consent by adjusting your cookie settings.</p>
  <h2>3. Third-Party Cookies</h2>
  <p>Unrion may utilize third-party cookies for specific purposes. These cookies may be set by third-party services or vendors and are subject to their privacy policies. Third-party cookies are used to enhance functionality or deliver personalized content and advertisements.</p>
  <p>Examples of third-party services or vendors that may have access to cookies include:</p>
  <ul>
    <li>Analytics providers</li>
    <li>Advertising networks</li>
    <li>Social media platforms</li>
  </ul>
  <h2>4. Cookie Management</h2>
  <p>You have the option to manage and control your cookie preferences within Unrion. By personalizing your cookie settings, you may impact the functionality and your experience within the app. You can delete cookies at any time using the settings of your device or browser.</p>
  <p>For further information or support regarding cookies, please refer to your device or browser's help documentation.</p>
  <h2>5. Updates to the Cookie Policy</h2>
  <p>This cookie policy is subject to updates or changes. The most recent version of the policy will be effective as of the last revised date. Please review the latest version of our cookie policy regularly.</p>
  <p>Last revised: July 2023</p>
  <hr>
  <p>For any questions or concerns about our cookie policy, please contact us at <a href="mailto:legal@unrion.com">legal@unrion.com</a>.</p>
</div>`,
  },
};
