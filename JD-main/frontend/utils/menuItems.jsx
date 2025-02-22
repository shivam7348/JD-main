export const menuItems = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About us',
      path: '/about',
      dropdownItems: [
        { title: "Director's Message", path: '/about/message' },
        { title: 'Vision', path: '/about/vision' },
        { title: 'Mission', path: '/about/mission' },

        
      ],
    },
    {
      title: 'Admission',
      path: '/admission',
    },
    
    {
      title: 'Academic Zone',
      path: '/academic-zone',
      dropdownItems: [
        { title: 'Activities', path: '/academic-zone/activities' },
        { title: 'Annual Planner', path: '/academic-zone/annual-planner' },
        { title: 'Examination Schedule', path: '/academic-zone/exam-schedule' },
      ],
    },
    {
      title: 'Session Information',
      path: '/sessioni-info',
      dropdownItems: [
        { title: 'School Timing', path: '/sessioni-info/schooltiming' },
        { title: 'Fee Regulation', path: '/sessioni-info/freeregulation' },
        { title: 'Rule Of Code And Conduct', path: '/sessioni-info/rulecode-condt' },
      ],
    },
    {
      title: 'Infrastructure',
      path: '/infrastructure',
      dropdownItems: [
        { title: 'School Campus', path: 'infrastructure/schoolcampus' },
        { title: 'Laboratory', path: '/infrastructure/laboratory' },
        { title: 'Smart Classes', path: '/Infrastructure/smartclasses' },
        { title: 'library', path: '/infrastructure/library' },
        { title: 'Sports Ground', path: '/infrastructure/sportsground' },
      ],
    },
    {
      title: 'Gallery',
      path: '/gallery',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ];