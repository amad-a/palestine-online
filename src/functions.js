//set saved wallpaper on load or set random wallpaper on first load
let randomWallpaper = Math.floor(Math.random() * 20);

let curFrame;
let prevFrame;
let curSiteId;
let prevSiteId;

if (localStorage.getItem('wallpaper') === null) {
  let wallpaperString = randomWallpaper.toString();
  document.documentElement.id = 'b' + wallpaperString;
  localStorage.setItem('wallpaper', wallpaperString);
} else {
  document.documentElement.id =
    'b' + localStorage.getItem('wallpaper');
}

let pagesTour = [
  {
    id: 'asa-group',
    title: 'Asa Group',
    year: '2001',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20011129082722/http://www.angelfire.com/pa/asagroup/',
    url: 'sites/www.angelfire.com/pa/asagroup/index.html',
    description: '',
  },
  {
    id: 'doctor-hani',
    title: "Doctor Hani's site",
    year: '2001',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20010607183034/http://gurlpages.com/doctorhani/',
    url: 'https://web.archive.org/web/20010607183034/http://gurlpages.com/doctorhani/',
    description: '',
  },
  {
    id: 'index',
    title: 'Welcome to Palestine Online',
    year: '2024',
    label: '',
    headerText: '',
    waybackUrl: '',
    url: '',
    description: '',
  },
  {
    id: 'hanieh-middle-east-report',
    title: 'Adam Hanieh in Middle East Report',
    year: '1999',
    label: 'Early WWW Efforts in Palestine',
    headerText: 'The WWW: An Informational & Organizing Tool',
    waybackUrl:
      'https://web.archive.org/web/20000819005425/http://www.merip.org/mer/mer213/213_hanieh.html',
    url: 'sites/middle-east-report/middle-east-report.html',
    description:
      'An article by Adam Hanieh, then webmaster at Birzeit University and graduate student at Al Quds University, discussing the potential of the emerging World Wide Web for Palestinians to disseminate information, become more organized, and take control of their own narrative on a global scale in the face of traditional, primarily Western media which has obscured and misconstrued these perspectives.',
  },
  {
    id: 'parry-open-letter',
    title: "Nigel Parry's Appeal to Palestinian Diaspora",
    year: '2000',
    label: 'Early WWW Efforts in Palestine',
    headerText: 'The WWW: A Key New Arena For Palestine',
    waybackUrl:
      'https://web.archive.org/web/20020602032311/http://www.nigelparry.com/help-addameer.html',
    url: 'sites/nigel-parry-open-letter/open-letter.html',
    description:
      'An appeal by Nigel Parry, a British photojournalist who lived in the West Bank from 1994 to 1998, for diaspora Palestinians to donate money for funding computer and networking infrastructure in Palestine. In the West Bank, Parry became heavily involved in documenting and recording conflict in the region, as well as becoming the first webmaster at Birzeit University and leading the creation of several major early Palestinian web projects and resources.',
  },
  {
    id: 'birzeit-guide-to-palestinian-websites',
    title:
      "Birzeit University's Complete Guide to Palestine's Websites",
    year: '2000',
    label: 'Early WWW Efforts in Palestine',
    headerText: "A Guide To Palestine's Websites",
    waybackUrl:
      'https://web.archive.org/web/20000619143219/http://www.birzeit.edu/links/index.html',
    url: 'sites/www.birzeit.edu/links/index.html',
    description:
      'The first effort of this scale to compile, catalogue, and organize Palestinian websites. Here you can find sites of Palestinian academic institutions, businesses, personal homepages, news site, political parties, and more, with detailed descriptions and links. NOTE: most external links here 404 on clicking out, as I have not included them. I encourage you to explore this site on the Wayback Machine if you want to go through the linked websites on this guide!',
  },
  {
    id: 'birzeit-golden-olive-awards',
    title: '1998 Golden Olive Awards',
    year: '1998',
    label: 'Early WWW Efforts in Palestine',
    headerText: 'Palestinian Webbys',
    waybackUrl:
      'https://web.archive.org/web/20021018121536/http://www.birzeit.edu/links/go98.html',
    url: 'sites/www.birzeit.edu/links/go98.html',
    description:
      'With the Golden Olive Awards, Birzeit University’s Internet Team recognized exceptional Palestinian websites every year. They encouraged a high quality internet presence, and would sometimes even forgo awarding any sites awards in certain categories if they felt none made the cut. Presigious! in ’98, only 13% of websites received awards.',
  },
  {
    id: 'palnet',
    title: 'Palnet ISP',
    year: '2000',
    label: 'Early Infrastructure',
    headerText: 'Early Infrastructure',
    waybackUrl:
      'https://web.archive.org/web/20000815100141/http://www.palnet.com/',
    url: 'https://web.archive.org/web/20000815100141/http://www.palnet.com/',
    description: '',
  },
  {
    id: 'planetedu',
    title: 'Planet.edu',
    year: '2000',
    label: 'Early Infrastructure',
    headerText: 'Early Infrastructure',
    waybackUrl:
      'https://web.archive.org/web/20001021080806/http://www.planet.edu/index.html',
    url: 'https://web.archive.org/web/20001021080806/http://www.planet.edu/index.html',
    description: '',
  },
  {
    id: 'palestine-yellow-pages',
    title: 'Palestine Yellow Pages',
    year: '2000',
    label: 'Early Infrastructure',
    headerText: 'Early Infrastructure',
    waybackUrl:
      'https://web.archive.org/web/20001028114733/http://www.palestine-yellowpages.com/',
    url: 'https://web.archive.org/web/20001028114733/http://www.palestine-yellowpages.com/',
    description: '',
  },
  {
    id: 'palsoft',
    title: 'Palsoft Internet Cafe',
    year: '2001',
    label: 'Early Infrastructure',
    headerText: 'Early Infrastructure',
    waybackUrl:
      'https://web.archive.org/web/20010331104253/http://www.pal-soft.com/',
    url: 'sites/palsoft/palsoft.html',
    description:
      'Website for an Internet Cafe in Ramallah, which also sells PCs, Digital Media, VHS Digitization, Print Services, among other goods and services.',
  },
  {
    id: 'zaytonasoft',
    title: 'Zaytonasoft ISP',
    year: '2003',
    label: 'Early Infrastructure',
    headerText: 'Early Infrastructure',
    waybackUrl:
      'https://web.archive.org/web/20030320151328/http://www.zaytona.com:80/',
    url: 'https://web.archive.org/web/20030320151328/http://www.zaytona.com:80/',
    description:
      'Website for Zaytonasoft, an early Palestinian Internet Service Provider. Much of the site is built on Macromedia (Later Adobe) Flash, and contains information about services offered as well as answers to general tech support questions, and a slick flash animation showing different variations of the ISP’s Internet Cards.',
  },
  {
    id: 'noursoft',
    title: 'Noursoft Software',
    year: '2001',
    label: 'Early Infrastructure',
    headerText: 'Early Infrastructure',
    waybackUrl:
      'https://web.archive.org/web/20010926021218/http://www.noursoft.com/',
    url: 'sites/noursoft/noursoft.html',
    description:
      'Website for a software company that specializes in Library Management systems, Educational Institutional Management Systems, and Document Management + Imaging Systems.',
  },
  {
    id: 'palestine-net-geography',
    title: 'Palestine Net Cities Homepages',
    year: '2002',
    label: 'Putting Places Online',
    headerText: 'Putting Places Online',
    waybackUrl:
      'https://web.archive.org/web/20020803230608/http://www.palestine-net.com/geography/kth.html',
    url: 'sites/www.palestine-net.com/index.html',
    description: '',
  },
  {
    id: 'ramallah-city',
    title: 'Ramallah City',
    year: '2001',
    label: 'Putting Places Online',
    headerText: 'Putting Places Online',
    waybackUrl:
      'https://web.archive.org/web/20010406063839/http://www.ramallah-city.org/index.html',
    url: 'https://web.archive.org/web/20010406063839/http://www.ramallah-city.org/index.html',
    description: '',
  },
  {
    id: 'salfeet',
    title: 'Salfeet Municipality',
    year: '2001',
    label: 'Putting Places Online',
    headerText: 'Putting Places Online',
    waybackUrl: 'https://web.archive.org/web/20010929184447/http://www.salfeet.org',
    url: 'sites/www.salfeet.org/index.html',
    description: '',
  },
  {
    id: 'jerusalem-hotel',
    title: 'Jerusalem Hotel',
    year: '2001',
    label: 'Putting Places Online',
    headerText: 'Putting Places Online',
    waybackUrl: 'https://web.archive.org/web/20010422010252/http://www.jrshotel.com/',
    url: 'sites/jrshotel.com/index.html',
    description: '',
  },
  {
    id: 'ministry-tourism',
    title: 'Ministry of Tourism and Antiquities',
    year: '2001',
    label: 'Putting Places Online',
    headerText: 'Putting Places Online',
    waybackUrl: 'https://web.archive.org/web/20010301220900/http://www.visit-palestine.com',
    url: 'crystal-clear/www.visit-palestine.com/index.html',
    description: '',
  },
  {
    id: 'municipality-gaza',
    title: 'Municipality of Gaza',
    year: '2002',
    label: 'Putting Places Online',
    headerText: 'Putting Places Online',
    waybackUrl: '?',
    url: 'sites/www.mogaza.org/index.html',
    description: '',
  },
  {
    id: 'gaza-airport',
    title: 'Gaza International Airport',
    year: '2002',
    label: 'Putting Places Online',
    headerText: 'Putting Places Online',
    waybackUrl: '?',
    url: 'sites/www.gaza-airport.org:80/index.html',
    description: '',
  },
  {
    id: 'planet-message-board',
    title: 'planet.edu Message Board',
    year: '2000',
    label: 'Online Commonts ',
    headerText: 'Palestinians Communicating Online',
    waybackUrl:
      'https://web.archive.org/web/20000930105048/http://www.planet.edu/board/posting.shtml',
    url: 'https://web.archive.org/web/20000930105048/http://www.planet.edu/board/posting.shtml',
    description: '',
  },
  {
    id: 'barghouti-guestbook',
    title: 'Barghouti.com Guestbook',
    year: '2001',
    label: 'Palestinians Communicating Online',
    headerText: 'Palestinians Communicating Online',
    waybackUrl: '?',
    url: 'sites/www.barghouti.com/guestbook/index.html',
    description: '',
  },
  {
    id: 'al-karmel-guestbook',
    title: 'Al Karmel Guestbook',
    year: '2000',
    label: 'Palestinians Communicating Online',
    headerText: 'Palestinians Communicating Online',
    waybackUrl:
      'https://web.archive.org/web/20000824104858/http://www.alkarmel.org/guestbook/guestbook.html',
    url: 'https://web.archive.org/web/20000824104858/http://www.alkarmel.org/guestbook/guestbook.html',
    description: '',
  },
  {
    id: 'pal-voice-forums-2005',
    title: 'Pal Voice Forums',
    year: '2005',
    label: 'Palestinians Communicating Online',
    headerText: 'Palestinians Communicating Online',
    waybackUrl:
      'https://web.archive.org/web/20051208025038/http://www.palvoice.com/forums/',
    url: 'https://web.archive.org/web/20051208025038/http://www.palvoice.com/forums/',
    description: '',
  },
  {
    id: 'pal-voice-forums-2006',
    title: 'Pal Voice Forums',
    year: '2006',
    label: 'Palestinians Communicating Online',
    headerText: 'Palestinians Communicating Online',
    waybackUrl:
      'https://web.archive.org/web/20060209015646/http://www.palvoice.com/forums/',
    url: 'https://web.archive.org/web/20060209015646/http://www.palvoice.com/forums/',
    description: '',
  },
  {
    id: 'al-quds-news',
    title: 'Al Quds News Front Page',
    year: '2001',
    label: 'Palestinian News Online',
    headerText: 'Arabic Text as Image',
    waybackUrl:
      'https://web.archive.org/web/20011008235951/http://www.alquds.com/',
    url: 'sites/NEWS/al-quds/alquds.html',
    description:
      'Website of the largest circulating Palestinian newspaper at the time. Features Arabic text as images to get around potential Arabic language compatibility issues in a pre-unicode computer and internet space.',
  },
  {
    id: 'alayyam-news',
    title: 'Alayyam News Front Page',
    year: '2001',
    label: 'Palestinian News Online',
    headerText: 'Arabic Text as Image',
    waybackUrl:
      'https://web.archive.org/web/20001009045427/http://www.al-ayyam.com/',
    url: 'sites/alayyam-news/alayyam-news.html',
    description:
      'Website of Alayyam News. According to Birzeit’s “The Complete Guide to Palestine’s Websites”, the newspaper offer “a more independent outlook” than Al-Quds, the largest circulating newspaper in Palestine at the time. Features Arabic text as images to get around potential Arabic language compatibility issues in a pre-unicode computer and internet space.',
  },
  {
    id: 'palestinian-information-center',
    title: 'The Palestinian Information Center',
    year: '2001',
    label: 'Palestinian News Online',
    headerText: 'Palestinian News Online',
    waybackUrl:
      'https://web.archive.org/web/20011101233059/http://www.palestine-info.com/index_e.htm',
    url: 'sites/NEWS/palestine-info/palestine-info-center.html',
    description:
      'Front page of a very vocally anti-Israeli occupation website which contains new stories and political analysis, mainly highlighting specific instances of Zionist oppression and violence towards Palestinians.',
  },
  {
    id: 'palestinian-information-center-hamas',
    title: 'Hamas Information Site',
    year: '2001',
    label: 'Palestinian News Online',
    headerText: 'Palestinian News Online',
    waybackUrl:
      'https://web.archive.org/web/20011110015607/http://www.palestine-info.com/hamas/index.htm',
    url: 'sites/NEWS/hamas/hamas/index.html',
    description:
      'Section of Palestine Information Center Website compiling official statements from and information about the Hamas Islamic Resistance Movement, its goals and positions, and its leadership. Unsure how officially affiliated with Hamas this website is - Hamas has their own official website during this time (in Arabic) that contains similar information, it will probably also be added here soon.',
  },
  {
    id: 'hanthala',
    title: 'Hanthala Magazine',
    year: '2001',
    label: 'Palestinian News Online',
    headerText: 'Palestinian News Online',
    waybackUrl:
      'https://web.archive.org/web/20040930222249/http://www.falasteen.com/',
    url: 'crystal-clear/hanthala.virtualave.net/index.html',
    description:
      'Front page of a primarily educational and literary Arabic language magazine.',
  },
  {
    id: 'jerusalem-i-love-you',
    title: 'Jerusalem, I Love You',
    year: '2001',
    label: 'Online Magazines in the Diaspora',
    headerText: 'Online Magazines in the Diaspora',
    waybackUrl:
      'https://web.archive.org/web/20011127024512/http://www.ojerusalem.com/',
    url: 'sites/MAGS/jerusalem-i-love-you/index.html',
    description:
      'Monthly magazine based out of Saint Paul, Minneapolis, featuring writing on culture, news articles, pictures, readers mail, and links.',
  },
  {
    id: 'palestine-times-uk',
    title: 'Palestine Times UK',
    year: '2001',
    label: 'Online Magazines in the Diaspora',
    headerText: 'Online Magazines in the Diaspora',
    waybackUrl:
      'https://web.archive.org/web/20011125020216/http://www.ptimes.com/issue105/index0.htm',
    url: 'sites/MAGS/palestine-times-uk/index.html',
    description:
      'Front page of a primarily educational and literary Arabic language magazine.',
  },
  {
    id: 'palestine-history-timeline',
    title: 'Palestine History Timeline',
    year: '2002',
    label: 'Innovative Uses of the Early Web',
    headerText: 'Hypermedia as Virtual Museum',
    waybackUrl:
      'https://web.archive.org/web/20020610032520/http://palestinehistory.com/ptime.htm',
    url: 'sites/palestinehistory.com/ptime.htm',
    description:
      'An interactive timeline of events in Palestinian History, from 1845 to 2001. Built using HTML Frames and a timeline made of a single image with clickable markers to navigate through the different events.',
  },
  {
    id: 'al-aqsa-tour',
    title: 'Al Aqsa Mosque Tour',
    year: '2002',
    label: 'Innovative Uses of the Early Web',
    headerText: 'Hypermedia as Virtual Museum',
    waybackUrl:
      'https://web.archive.org/web/20020802093511/http://www.palestinehistory.com:80/aqsa/index.html',
    url: 'sites/art-culture-history/al-aqsa-tour/aqsa/index.html',
    description:
      'An interactive virtual tour of Al Aqsa and the various structures within it. Built using HTML frames, and featuring a clickable map to navigate through different parts of the mosque and view photos and information.',
  },
  {
    id: 'villages-map',
    title: 'Destroyed Palestinian Villages Map',
    year: '2000',
    label: 'Innovative Uses of the Early Web',
    headerText: 'Hypermedia as Virtual Museum',
    waybackUrl:
      'https://web.archive.org/web/20001005055610/http://www.birzeit.edu/crdps/village@.html',
    url: 'sites/www.birzeit.edu/crdps/village@.html',
    description:
      'An interactive map containing various destroyed Palestinian villages, which click out to open pages with more information and history on the villages.',
  },
  {
    id: 'news-comparison',
    title: 'Palestine Media Watch News Comparison',
    year: '2002',
    label: 'Innovative Uses of the Early Web',
    headerText: 'Comparative Hypermedia',
    waybackUrl:
      'https://web.archive.org/web/20021201121927/http://www.pmwatch.org/pmw/cast/cnnvsmsnbc.html',
    url: 'sites/www.pmwatch.org/pmw/cast/cnnvsmsnbc.html',
    description:
      'A page made of HTML frames which compiles together news stories scraped directly from the websites of CNN and MSNBC, as well as independent notes comparing each outlet’s coverage. Shows the interconnectivity potential of hypertext and frames, and how this allowed opportunity for new scrutiny of Western reporting online, a practice that unfortunately Palestinians and allies still have to do today.',
  },
  {
    id: 'jukebox-arabia',
    title: 'Jukebox Arabia',
    year: '2002',
    label: 'Innovative Uses of the Early Web',
    headerText: 'Sharing Music Online',
    waybackUrl:
      'https://web.archive.org/web/20021003111700/http://www.student.nada.kth.se/~t97_aif/music.html',
    url: 'sites/www.student.nada.kth.se/t97_aif/index.html',
    description:
      'A page compiling various audio files of Arabic music across different categories including Popular Music, Classical and Oldies, and National Music. Audio files are in the long obsolete RealAudio format. Will convert the still existing, not yet lost files to playable mp3 in the near future :)',
  },
  {
    id: 'tutorials-in-arabic',
    title: 'HTML Tutorial',
    year: '2002',
    label: 'Innovative Uses of the Early Web',
    headerText: 'Computer Education in Arabic',
    waybackUrl:
      'https://web.archive.org/web/20011207123828/http://www.geocities.com/siliconvalley/lab/1832/index.html',
    url: 'sites/www.geocities.com/siliconvalley/lab/1832/index.html',
    description:
      'A Geocities website containing tutorials for HTML and Paint Shop Pro in Arabic. Shows early Palestinian computer knowledge building and dissemination which extended past existing, English dominant guides to encourage computer users whose Arabic might be stronger than their English to participate in the newly emerging web space. Palestinian pride can be seen in one of the tutorials which uses a photo of the Dome of the Rock to demonstrate how to create and size an image on an HTML page!',
  },
  {
    id: 'barghouti-memorial',
    title: 'Memorial for the Martyr Alaa Barghouti',
    year: '2002',
    label: 'Documenting and Memorializing under Occupation',
    headerText: 'Sites of Memorialization',
    waybackUrl:
      'https://web.archive.org/web/20020415024646/http://www.barghouti.com/alaa/',
    url: 'sites/personal-pages/barghouti/alaa/index.html',
    description:
      'A memorial in GIF form for Alaa Barghouti, a martyr killed during the Second Intifada, created by his cousin. Technically rudimentary and crude, yet visually moving in a very unique way.',
  },
  {
    id: 'ramallah-1996',
    title: 'On the Ground in Ramallah',
    year: '1996',
    label: 'Documenting and Memorializing under Occupation',
    headerText: 'Independent Reporting of Conflict',
    waybackUrl:
      'https://web.archive.org/web/19970614161613/http://www.birzeit.edu/palnews/war/index2.html',
    url: 'sites/www.birzeit.edu/palnews/war/index.html',
    description:
      'A website built by Nigel Parry reporting the events of the September 1996 clashes, primarily in Ramallah where Parry was based in at the time. Also included here are quotes from Birzeit University students and staff on the events, and a photo diary documenting demonstrations and attacks in Ramallah. This website offers alternative “on the ground” coverage as a more accurate counter-perspective to the biased and misconstrued Israeli and Western coverage on Palestine that Parry noticed.',
  },
  {
    id: 'september-1996-memorial',
    title: 'September 1996 Memorial',
    year: '1998',
    label: 'Documenting and Memorializing under Occupation',
    headerText: 'Sites of Memorialization',
    waybackUrl:
      'https://web.archive.org/web/19980421001051/http://www.birzeit.edu/martyrs/september96/index.html',
    url: 'sites/www.birzeit.edu/martyrs/september96/index.html',
    description:
      'A website built by Nigel Parry which compiles stories and photos of Palestinian martyrs killed in the September 1996 clashes, originally sparked by the opening of a tunnel beneath Jerusalem into the Muslim Quarter by then newly elected Prime Minister of Israel Benjamin Netanyahu. This website is the culmination of an extensive project which involved a number of interviewers and writers to record the stories of martyrs from loved ones, and demonstrates the new potential of the web for amplifying Palestinian voices and stories that Parry and Adam Hanieh saw.',
  },
  {
    id: 'september-2000-info',
    title: 'September 2000 Clashes Information Center',
    year: '2001',
    label: 'Documenting and Memorializing under Occupation',
    headerText: 'Documenting and Memorializing under Occupation',
    waybackUrl:
      'https://web.archive.org/web/20011106171654/http://www.addameer.org/september2000/',
    url: 'sites/www.addameer.org/september2000/index.html',
    description:
      'A website built by Nigel Parry for Addameer, a Palestinian NGO that monitors the treatment of and provides legal assistance to Palestinian political prisoners, to record names of and information about martyrs of the Second Intifada. Site also has links to media reports and coverage and other related information.',
  },
  {
    id: 'hanna-safieh',
    title: 'Hanna Safieh Photographs',
    year: '2000',
    label: 'Palestinian Art and Artists on the Early Web',
    headerText: 'Palestinian Art and Artists on the Early Web',
    waybackUrl:
      'https://web.archive.org/web/20011130122507/http://omayya.com/',
    url: 'crystal-clear/raffi/index.html',
    description:
      'The personal/portfolio website of Omayyah Joha, a Palestinian political cartoonist and caricaturist for Al Quds Newspaper. Included on this site are her cartoons on various subjects including Palestine, Israel, the United States, and the greater Arab World.',
  },
  {
    id: 'omayya-joha',
    title: "Omayya Joha's Site",
    year: '2001',
    label: 'Palestinian Art and Artists on the Early Web',
    headerText: 'Digital Portfolio, Digital Canvas',
    waybackUrl:
      'https://web.archive.org/web/20011130122507/http://omayya.com/',
    url: 'sites/art-culture-history/omayya/index.html',
    description:
      'The personal/portfolio website of Omayyah Joha, a Palestinian political cartoonist and caricaturist for Al Quds Newspaper. Included on this site are her cartoons on various subjects including Palestine, Israel, the United States, and the greater Arab World.',
  },
  {
    id: 'samia-halaby',
    title: "Samia Halaby's Site",
    year: '1998',
    label: 'Palestinian Art and Artists on the Early Web',
    headerText: 'Digital Portfolio, Digital Canvas',
    waybackUrl:
      'https://web.archive.org/web/20000610054314/http://art.net/~samia/pal/samsub.html',
    url: 'sites/art-culture-history/samia-halaby/pal/samsub.html',
    description:
      "The 'Palestine' section of pioneering visual artist Samia Halaby’s site on art.net. Included here are (quite beautiful!!) diary entries by Halaby on Palestine and on various stories and experiences in her life, interspersed by digital artworks while illustrate the content of these entries.",
  },
  {
    id: 'barghouti',
    title: 'Barghouti (Folklore and Poetry)',
    year: '1998',
    label: 'Palestinian Art and Artists on the Early Web',
    headerText: 'Palestinian Art and Artists on the Early Web',
    waybackUrl: '?',
    url: 'sites/www.barghouti.com/index.html',
    description: '',
  },
  {
    id: "palestine-embroider",
    title: "Palestine Embroidery",
    year: "2001",
    label: "Palestinian Art and Artists",
    headerText: "Palestinian Art and Artists",
    waybackUrl: "https://web.archive.org/web/20011202120634/http://palestinianembroider.tripod.com/",
    url: "sites/palestinianembroider.tripod.com/index.html",
    description: ""
  },
  {
    id: 'sakakini',
    title: 'Khalil Sakakini Cultural Centre',
    year: '2000',
    label: 'Palestinian Art and Artists on the Early Web',
    headerText: 'Palestinian Art and Artists on the Early Web',
    waybackUrl:
      'https://web.archive.org/web/20001018043301/http://www.sakakini.org/open.htm',
    url: 'https://web.archive.org/web/20001018043301/http://www.sakakini.org/open.htm',
    description: '',
  },
  {
    id: 'people-of-palestine',
    title: 'The People of Palestine & friends',
    year: '2001',
    label: 'The People of Palestine, Online',
    headerText: 'The People of Palestine, Online',
    waybackUrl:
      'https://web.archive.org/web/20011129075839/http://www.geocities.com/shabah_88/palestinians.html',
    url: 'sites/www.geocities.com/shabah_88/palestinians.html',
    description:
      'A directory listing personal homepages and short descriptions of Palestinians on the internet, in Palestine and the Diaspora.',
  },
  {
    id: 'the-holly-land',
    title: 'The holly land......Palestine',
    year: '2002',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20021122153153/http://uk.geocities.com/palestinegaza/index.htm',
    url: 'sites/HOMEPAGES/holly-land/index.htm',
    description:
      'A homepage created on Geocities compiling various links to English and Arabic websites, which bookend gifs of The Dome of the Rock and footage of the murder of Mohammad al Durrah, two common visual motifs in the early Palestinian Web during the Second Intifada.',
  },
  {
    id: 'aqwa-man',
    title: "Ali Almallah's Page",
    year: '2003',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20091024084830/http://geocities.com/aqwa_man/index.html?992483146710',
    url: 'sites/HOMEPAGES/aqwa_man/aqwa.html',
    description:
      'A homepage created by Ali Almallah, a Palestinian student in Chicago, Illinois, compiling various links and populated by Gifs characteristic of Geocities pages at the time.',
  },
  {
    id: 'jayyousi-pages',
    title: "Jayyousi's Pages",
    year: '2001',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20011129082723/http://www.angelfire.com/il/Waleed/',
    url: 'sites/nidal-jayyousi/nidal-jayyousi.html',
    description:
      "The webpage of Nidal Jayyousi, a man from Tulkarm, West Bank, Palestine, featuring beautiful photos of himself and his children. But wait! There’s also a special secret second page! This Angelfire page used to belong to Nidal’s brother Waled, who had since moved on to the far superior Geocities. You can visit Waleed’s new page by clicking 'Here'. Waleed is an engineer living in Chicago, who also maintains a website on the brothers’ home city of Tulkarm (coming soon!)",
  },
  {
    id: 'amnah-site',
    title: "Amnah's Site",
    year: '2002',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20021210011824/http://www.geocities.com/amnah_samara/',
    url: 'sites/personal-pages/amnah_samara/index.html',
    description:
      'Geocities website of Amnah, a then recent medical school graduate from the University of Jordan. Here you’ll find pics of her with her graduating class, school notes, a section dedicated to the Second Intifada, as well as the cutest baby pic you’ve ever seen.',
  },
  {
    id: 'palestine-oasis',
    title: 'Palestine Oasis',
    year: '2002',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20020121054739/http://palestine-oasis.tripod.com/',
    url: 'sites/palestine-oasis/palestine-oasis.html',
    description:
      'Some really good gifs and beautiful writing in here, but can’t figure out how to get to the rest of the page. “Palestine is engraved only in the memory of the millions of displaced Palestinians Its a poignant cry and hope of many to rekindle the flame of hope before it evaporates and dissolves into the rivers and oceans.',
  },
  {
    id: 'esam-shashaa-bio',
    title: "Esam Shashaa's Bio",
    year: '2002',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20021015200356fw_/http://www.palestinehistory.com/aqsa/esam.htm',
    url: 'sites/art-culture-history/al-aqsa-tour/aqsa/esam.htm',
    description:
      'Bio page of Esam Shashaa, who built the Interactive Palestine History Timeline and Al Aqsa mosque Tour. A UAE national from Gaza who is a self proclaimed internet lover.',
  },
  {
    id: 'faaz',
    title: 'Faaz',
    year: '2002',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20011129081201/http://www.members.tripod.com/~faaz/',
    url: 'https://web.archive.org/web/20011129081201/http://www.members.tripod.com/~faaz/',
    description: '',
  },
  {
    id: 'hopes-space',
    title: "Hope's Space",
    year: '1999',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/19991008145305/http://www.geocities.com/Athens/Parthenon/3078/Israel_in_Palestine.htm',
    url: 'https://web.archive.org/web/19991008145305/http://www.geocities.com/Athens/Parthenon/3078/Israel_in_Palestine.htm',
    description: '',
  },
  {
    id: 'musa-budieri',
    title: "Musa Budieri's site",
    year: '2000',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20011202065123/http://www.musabudeiri.freeserve.co.uk/',
    url: 'https://web.archive.org/web/20011202065123/http://www.musabudeiri.freeserve.co.uk/',
    description: '',
  },
  {
    id: 'aimans-site',
    title: "Aiman's Site",
    year: '1998',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20011129082722/http://www.angelfire.com/pa/asagroup/',
    url:
      'https://web.archive.org/web/20011129082722/http://www.angelfire.com/pa/asagroup/',
    description: '',
  },
  {
    id: 'asa-group',
    title: 'Asa Group',
    year: '2001',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20011129082722/http://www.angelfire.com/pa/asagroup/',
    description: '',
  },
  {
    id: 'doctor-hani',
    title: "Doctor Hani's site",
    year: '2001',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20010607183034/http://gurlpages.com/doctorhani/',
    url: 'https://web.archive.org/web/20010607183034/http://gurlpages.com/doctorhani/',
    description: '',
  },
  {
    id: 'alsharabatis-homepages',
    title: "Alsharabatis' Homepages",
    year: '2001',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20011125020207/http://www.angelfire.com/ms/sharbati/',
    url: 'sites/sharbati/sharbati.html',
    description:
      "Angelfire Homepage of Mohammad Alsharabati, a student of medicine at University of Jordan. He maintains a gallery of his favorite pictures, including the German Soccer Team, Dome of the Rock, and favorite car (Mercedes 600SL). He also links to his sister Lina's page, who seems really into the Titanic and Princess Diana",
  },
  {
    id: 'abboud-page',
    title: "Abboud's Page",
    year: '2001',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20011129082723/http://maxpages.com/abdo/Home',
    url: 'https://web.archive.org/web/20011129082723/http://maxpages.com/abdo/Home',
    description:
      'Homepage of Abboud, an at the time 12(!) year old in Palestine, humorously warns visitors of his website of an email virus going around, shortly before encouraging visitors to send a virus to his friend’s email.',
  },
  {
    id: 'zuhair-page',
    title: "Zuhair's Page",
    year: '2009',
    label: 'The People of Palestine, Online',
    headerText: 'The Personal Homepage',
    waybackUrl:
      'https://web.archive.org/web/20090416091814/http://www.geocities.com/zuhairhm/Zuhair/about_me.htm',
    url: 'sites/personal-pages/zuhairhm/zuhairhm.html',
    description:
      'A verrrrrry long single page created by Zuhair, filled with beautiful gifs, detailed stories of his (long lived!) life, photos of/from his farm, photos of himself, his star sign (Sagittarius), poetry, and more!',
  },
  {
    id: 'reality-of-palestine',
    title: 'Reality of Palestine',
    year: '2009',
    label: 'The People of Palestine, Online',
    headerText: 'From the River to the Sea',
    waybackUrl:
      'https://web.archive.org/web/20091027035216/http://geocities.com/realityofpalestine/',
    url: 'sites/personal-pages/realityofpalestine/index.html',
    description:
      'A Geocities page promising to show the visitor the truth about Palestine. Some killer gifs, could not find any of the linked pages in Wayback Machine though :(',
  },
  {
    id: 'gazelle',
    title: 'Gazelle: The Palestinian Biological Bulletin',
    year: '2003',
    label: '',
    headerText: '',
    waybackUrl: 'https://web.archive.org/web/20030830220740/http://www.gazelle.8m.net/',
    url: 'https://web.archive.org/web/20030830220740/http://www.gazelle.8m.net/',
    description: '',
  },
  {
    id: 'gaza-mental-health',
    title: 'Gaza Community Mental Health Programme',
    year: '2000',
    label: '',
    headerText: '',
    waybackUrl: 'https://web.archive.org/web/19991104171312/http://www.gcmhp.net:80/main.htm',
    url: 'https://web.archive.org/web/19991104171312/http://www.gcmhp.net:80/main.htm',
    description: '',
  },
  {
    id: 'palestine-wildlife-society',
    title: 'Palestine Wildlife Society',
    year: '2003-2007',
    label: '',
    headerText: '',
    waybackUrl: 'https://web.archive.org/web/20070127225716/http://www.wildlife-pal.org/toc.htm',
    url: 'sites/www.wildlife-pal.org/index.html',
    description: '',
  },
  {
    id: 'omars-site',
    title: "Omar's Site",
    year: '2001',
    label: '',
    headerText: '',
    waybackUrl: 'https://web.archive.org/web/20011117093728/http://www.chem.metu.edu.tr/omara/',
    url: 'sites/www.chem.metu.edu.tr/omara/index.html',
    description: '',
  },
  {
    id: 'aaa-ny',
    title: "AAA NY",
    year: '2024',
    label: '',
    headerText: '',
    waybackUrl: '',
    url: 'sites/aaa-ny.html',
    description: '',
  },
  {
    id: 'pr-preso-2024',
    title: "Processing Fellowship Documentation",
    year: '2024',
    label: '',
    headerText: '',
    waybackUrl: '',
    url: 'https://palestineonline.net/processing-org-fellowship.html',
    description: '',
  },
  {
    id: 'web-4',
    title: "'Images of the early Palestinian Web' Presentation",
    year: '2024',
    label: '',
    headerText: '',
    waybackUrl: '',
    url: 'sites/secret-project-riso/web-4.html',
    description: '',
  },
  {
    id: 'tulkarm',
    title: "Tulkarm",
    year: '2002',
    label: '',
    headerText: '',
    waybackUrl: 'https://web.archive.org/web/20020530035142/http://www.geocities.com/Heartland/Acres/3200/',
    url: 'https://web.archive.org/web/20020530035142/http://www.geocities.com/Heartland/Acres/3200/',
    description: '',
  },

  {
    id: 'attil',
    title: "Attil",
    year: '2002',
    label: '',
    headerText: '',
    waybackUrl: '',
    url: 'https://web.archive.org/web/20020817045008/http://www.geocities.com/SouthBeach/Strand/4051/index.html',
    description: 'https://web.archive.org/web/20020817045008/http://www.geocities.com/SouthBeach/Strand/4051/index.html',
  },
  {
    id: 'shuqba',
    title: "Shuqba",
    year: '2001',
    label: '',
    headerText: '',
    waybackUrl: 'https://web.archive.org/web/20010806072345/http://www.cyberpalestine.org/Wael/shuqba/Shuqba.htm',
    url: 'https://web.archive.org/web/20010806072345/http://www.cyberpalestine.org/Wael/shuqba/Shuqba.htm',
    description: '',
  },
  {
    id: 'bethlehem',
    title: "Bethlehem City",
    year: '2024',
    label: '',
    headerText: '',
    waybackUrl: '',
    url: 'sites/secret-project-riso/web-4.html',
    description: '',
  },
  {
    id: 'jericho',
    title: "Jericho",
    year: '2002',
    label: '',
    headerText: '',
    waybackUrl: 'https://web.archive.org/web/20020802051640/http://jericho-city.org',
    url: 'https://web.archive.org/web/20020802051640/http://jericho-city.org',
    description: '',
  },
  {
    id: 'crdps',
    title: "Center For Research & Documentation of Palestinian Society",
    year: '1997',
    label: '',
    headerText: '',
    waybackUrl: '',
    url: '/sites/www.birzeit.edu/crdps/palarch.html',
    description: '',
  },
  {
    id: 'carma-cyber-club',
    title: "Carma Cyber Club",
    year: '2000',
    label: '',
    headerText: '',
    waybackUrl: 'https://web.archive.org/web/20000816224913/http://www.al-carma.com',
    url: 'https://web.archive.org/web/20000816224913/http://www.al-carma.com',
    description: '',
  },


];

function toggleInfo() {
  let panel = document.getElementById('info-panel-container');
  panel.style.visibility === 'hidden'
    ? (panel.style.visibility = 'visible')
    : (panel.style.visibility = 'hidden');
}

function setWallpaper() {
  const currentWallpaper = localStorage.getItem('wallpaper');
  let num = parseInt(currentWallpaper) || 0;
  num += 1;
  if (num > 20) num = 0;
  document.documentElement.id = 'b' + num.toString();
  localStorage.setItem('wallpaper', num.toString());
}

function createTreeView(obj) {
  const ul = document.createElement('ul');
  ul.append(
    ...Object.entries(obj).map(([key, value]) => {
      const li = document.createElement('li');

      if (typeof value === 'object' && value !== null) {
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        const summaryChild = document.createElement('span');
        summaryChild.classList.add('summary-category')

        const siteCount = countTotalSites(value);
        summaryChild.textContent = `${key} (${siteCount})`;
        summary.appendChild(summaryChild);
        const nestedUl = createTreeView(value);

        details.append(summary, nestedUl);
        li.appendChild(details);
      } else {
        const pageMatch = pagesTour.filter(
          (page) => page.id === value
        )[0];
        li.id = `${value}-link`;
        let redClass = '';
        // if (!pageMatch.url.startsWith('sites')) {
        //   console.log('page match url red', pageMatch.url);
        //   redClass = 'red-class'
        // }

        li.innerHTML = `<a class="menu-link" onclick="queryUpdate('${value}')">${pageMatch.title} <i>${pageMatch.year}</i></a>`;

      }
      return li;
    })
  );
  return ul;
}

// async function navHoverImage(pageId) {
//   if (window.innerWidth < 450) {
//     return;
//   }

//   const imageUrl = `public/preview-images/${pageId}.webp`
//   fetch(imageUrl)
//     .then(response => {
//       if (response.ok) {
//         const frame = document.getElementById('frame');
//         const dropdown = document.getElementById('dropdown-content');
//         dropdown.classList.add('dropdown-hover-transparent');
//         frame.style.visibility = "hidden";
//         const frameContainer = document.getElementById('frame-container');
//         frameContainer.style.backgroundImage = `url('public/preview-images/${pageId}.webp')`
//         frameContainer.classList.add('frame-preview-image');
//       } else {
//         console.error('Image not found:', imageUrl);
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching image:', error);
//     });
// }

// function navHoverLeave() {
//   const frame = document.getElementById('frame');
//   frame.style.visibility = "visible";
//   const dropdown = document.getElementById('dropdown-content');
//   dropdown.classList.remove('dropdown-hover-transparent');

//   const frameContainer = document.getElementById('frame-container');
//   frameContainer.classList.remove('frame-preview-image');

//   frameContainer.style.backgroundImage = "none";
// }

const flags = ['sites/secret-project-riso/imgs/palestine-flag2.gif', 'sites/secret-project-riso/imgs/gifs/flag2.gif', 'sites/secret-project-riso/imgs/palestine1.gif', 'sites/secret-project-riso/imgs/gifs/waveflag.gif']

function showInformation() {
  // dropdownContent.classList.toggle('open');
  document.getElementById('frame').classList.toggle('closed');
  document.getElementById('info-panel').classList.toggle('closed');

  if (!document.getElementById('info-panel').classList.contains('closed')) {
    document.getElementById('info-flag').src = flags[Math.floor(Math.random()*flags.length)];
  }
}

function historyNav(window, dir = 'back') {

  let iframe = document.getElementById('frame');
  if (dir === 'back') {
    window.history.back();
  } else {
    window.history.forward();
    setTimeout(() => {
      console.log(':) after', iframe.src);
      // your code
    }, 0);
  }
}



function queryUpdate(pageId) {
  const dropdown = document.getElementById('dropdown-content');
  const mobileDropdown = document.getElementById('mobile-dropdown-content');
  const infoPanel = document.getElementById('info-panel');
  
  if (dropdown.classList.contains('open')) {
    dropdown.classList.remove('open');
  }
  
  if (mobileDropdown.classList.contains('open')) {
    mobileDropdown.classList.remove('open');
  }

  if (!infoPanel.classList.contains('closed')) {
    showInformation();
  }

  let presenterQuery = '';

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  let mode = params.get('mode');

  if (mode === 'presenter') presenterQuery = '&mode=presenter'

  console.log('HISTORY', history, window.history);

  if (history.pushState) {
    let newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '?site=' +
      pageId + 
      presenterQuery;
    window.history.pushState({ path: newurl }, '', newurl);
  }
  // navHoverImage(pageId);
  setFramePage(pageId);
}

// Helper function to count the number of leaf nodes
function countTotalSites(obj) {
  return Object.values(obj).reduce((count, value) => {
    if (typeof value === 'object' && value !== null) {
      return count + countTotalSites(value);
    }
    return count + 1;
  }, 0);
}

function setFramePage(reset = false) {
  const browserInfo = getBrowserInfo();
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  let siteParam = params.get('site');
  let pageParam = params.get('page');
  let scrollParam = params.get('scroll');

  if (!siteParam) {
    siteParam = getRandomSiteFromSiteTree(siteTree);
    queryUpdate(siteParam);
  }

  const siteSrc = pagesTour.find((page) => page.id === siteParam);

  if (pageParam && !reset) {
    document.getElementById('frame').src = '/sites/' + pageParam;
  } else {
    if (browserInfo.browser === 'Safari') {
      console.log('🐘');
      document.getElementById('frame').src = siteSrc.url;
    } else {
      console.log('🏎️');
      document.getElementById('frame').contentWindow.location.replace(siteSrc.url);
    }
  }
    // document.getElementById('loading').style.display = 'block';
  
    document.getElementById('frame').addEventListener('load', function() {
      console.log('Iframe has finished loading!');
      // navHoverLeave();
      document.getElementById('loading').style.display = 'none';
    });

  document.getElementById(
    'current-site'
  ).innerHTML = `${siteSrc.title} <i>${siteSrc.year}</i>`;

  document.getElementById(
    'address-bar-text'
  ).innerHTML = `${siteSrc.title} <i>${siteSrc.year}</i>`;

  // if (siteParam) setBreadcrumbs(siteParam);
}

function changeZoom(currentValue, document) {
  console.log('doccy', document);
  const scale = currentValue / 10;
  const frameStyle = document.getElementById('frame').contentWindow.document.body.style;
  frameStyle.transform = `scale(${scale})`;
  frameStyle.width = `${100 / scale}%`;
  frameStyle.height = `${100 / scale}%`;
  frameStyle.transformOrigin = `0 0`;

  zoomValue = currentValue;
}

function setRandomPage() {
  const randomPageId = getRandomSiteFromSiteTree(siteTree);
  queryUpdate(randomPageId);
  setFramePage();
}

function getRandomSiteFromSiteTree(siteTree) {
  const allStrings = [];

  function traverse(obj) {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        // If the value is an array, push its elements into allStrings
        allStrings.push(...obj[key]);
      } else if (typeof obj[key] === 'object') {
        // If the value is an object, recurse into it
        traverse(obj[key]);
      }
    }
  }

  // Traverse the siteTree to collect all strings
  traverse(siteTree);

  // Fetch a random string from the collected strings
  if (allStrings.length > 0) {
    const randomIndex = Math.floor(Math.random() * allStrings.length);
    return allStrings[randomIndex];
  }

  return null; // Return null if no strings were found
}

const siteTree = {
  'Gaza': ['gaza-airport', 'municipality-gaza', 'gaza-mental-health'],
  'Art and Culture':
    ['samia-halaby', 'hanna-safieh', 'omayya-joha', 'al-aqsa-tour', 'barghouti', 'al-karmel-guestbook', 'jukebox-arabia', 'palestine-embroider', 'sakakini', 'palestine-history-timeline']
    // 'Visual Art': ['samia-halaby', 'hanna-safieh', 'omayya-joha', 'al-aqsa-tour'],
    // 'Literature': ['barghouti', 'al-karmel-guestbook'],
    // 'Music': ['jukebox-arabia'],
    // 'Crafts': ['palestine-embroider'],
    // 'Institutions': ['sakakini', 'aaa-ny'],
  ,
  'Personal Homepages':
    ['people-of-palestine', 'the-holly-land', 'jayyousi-pages', 'amnah-site', 'palestine-oasis', 'esam-shashaa-bio', 'hopes-space', 'omars-site', 'musa-budieri', 'aimans-site', 'asa-group', 'doctor-hani', 'alsharabatis-homepages', 'abboud-page', 'zuhair-page', 'reality-of-palestine'],
  'Guides and Directories': [
    'palestine-net-geography', 'people-of-palestine', 'birzeit-guide-to-palestinian-websites', 'palestine-yellow-pages'
  ],
  'News': ['al-quds-news', 'alayyam-news', 'palestinian-information-center','hanthala', 'palestinian-information-center-hamas'],
  'Documenting and Memorializing': ['barghouti-memorial', 'ramallah-1996', 'september-1996-memorial', 'villages-map', 'crdps'],
  'Tourism and Travel': [ 'jerusalem-hotel', 'ministry-tourism'],
  'Cities & Villages Online': [
    'palestine-net-geography', 'ramallah-city', 'salfeet', 'municipality-gaza', 'tulkarm', 'attil', 'shuqba', 'bethlehem', 'jericho'
  ],
  'Message Boards & Guestbooks': ['planet-message-board', 'barghouti-guestbook', 'al-karmel-guestbook', 'pal-voice-forums-2005'],
  'Internet Cafes & Infrastructure': ['palsoft', 'carma-cyber-club', 'zaytonasoft', 'planetedu', 'palnet', 'tutorials-in-arabic'],
  'Nature': ['gazelle', 'palestine-wildlife-society'],
  'Magazines': ['jerusalem-i-love-you', 'palestine-times-uk'],
  // 'Birzeit University': ['parry-open-letter','birzeit-guide-to-palestinian-websites', 'birzeit-golden-olive-awards', 'hanieh-middle-east-report'],
  'Palestine Online Documentation': ['pr-preso-2024', 'web-4']

  // blog posts
  //
};

function shareCurrentSite(mode = 'desktop') {
  const scrollPosition = document.getElementById('frame').contentWindow.scrollY;

  let dummy = document.createElement('input'),
  windowLocation = (window.location.href).replace(/&page=.*$/, '');
  
  const regex = /\/sites\/(.*)/;
  
  const path = (document.getElementById("frame").contentWindow.location.href).match(regex)[1];
  console.log('path', path);
  windowLocation += `&page=${path}`;
  document.body.appendChild(dummy);
  dummy.value = windowLocation;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);

  const tooltip = document.getElementById('share-page-tooltip');
  tooltip.innerHTML = 'Link copied.';

  if (mode === 'desktop') {
    setTimeout(() => tooltip.innerHTML = 'Share Page' , 2500)
  }
  if (mode = 'mobile') {
    let mobileShareAlert = document.querySelector(".mobile-share-alert");

    mobileShareAlert.style.visibility = 'visible';
    setTimeout(() => mobileShareAlert.style.visibility = 'hidden', 2500)
  }
};

let zoomValue;

function initDocumentSetup(document) {
  const mobileZoomOut = document.getElementById('mobile-zoom-out');
  const mobileZoomIn = document.getElementById('mobile-zoom-in');
  const zoomSlider = document.getElementById('zoom-slider');


  let addressBar = document.querySelector(".address-bar");
  addressBar.disabled = true;

  let sliderButton = document.getElementById("zoomSlider");
  sliderButton.disabled = true;

  let mobileShareAlert = document.querySelector(".mobile-share-alert");
  mobileShareAlert.disabled = true;

  mobileZoomOut.addEventListener('touchstart', () => {
    zoomSlider.value -= 1;
    changeZoom(zoomSlider.value, document)
  });

  mobileZoomIn.addEventListener('touchstart', () => {
    zoomSlider.value++;
    changeZoom(zoomSlider.value, document)
  });

  // change wallpaper on click of page body  
  document.body.addEventListener('click', function (event) {
    setWallpaper();
  });
  // but not window
  document.querySelector('.window-grid').addEventListener('click', function (event) {
    event.stopPropagation();
  });

  // adjust dropdown size based on flex address bar
  document.querySelector('#current-site').addEventListener('click', function () {
    const dropdownContent = document.querySelector('#dropdown-content');
    dropdownContent.style.width = `${document.querySelector('.dropdown-container').offsetWidth - 2}px`;
    dropdownContent.classList.toggle('open');
  });

  // add event listener to dropdown bar and button
  document.querySelector('.dropdown').addEventListener('click', function () {
    const dropdownContent = document.querySelector('#dropdown-content');
    dropdownContent.style.width = `${document.querySelector('.dropdown-container').offsetWidth - 3}px`;
    dropdownContent.classList.toggle('open');
  });

  document.querySelector('.mobile-top-nav').addEventListener('click', function () {
    const dropdownContent1 = document.querySelector('#mobile-dropdown-content');
    dropdownContent1.classList.toggle('open');
  });

  const treeViewContainer = document.getElementById('tree');
  const treeViewContainerOriginal = document.getElementById('tree-original');

  // Create the tree view from the data object and append it to the container
  treeViewContainer.appendChild(createTreeView(siteTree));
  treeViewContainerOriginal.appendChild(createTreeView(siteTree));



  // const path = curFrame.match(regex)[1];
  const iframe = document.getElementById('frame');
  const slashRegex = /^[^\/]*\/[^\/]*\/[^\/]*/;

  window.addEventListener('pushstate', (event) => {
    console.log('🥩', iframe?.contentWindow.location.pathname);
   });
  
  iframe.onload = function () {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    try {
      prevSiteId = curSiteId;
      curSiteId = params.get('site');

      prevFrame = curFrame;
      curFrame = (iframe?.contentWindow.location.pathname).match(slashRegex)[0]; 
console.log('🌹', curFrame, prevFrame);

      changeZoom(zoomValue, document);
      document.getElementById('zoom-panel').style.visibility = "visible";
      document.getElementById('zoom-unavailable').style.visibility = "hidden";
      console.log("🎨 zoomer", curFrame);
    } catch(err) {
      console.log("🎨 zoomer", iframe);
      console.log('🔒 zoom unavailable');
      document.getElementById('zoom-panel').style.visibility = "hidden";
      document.getElementById('zoom-unavailable').style.visibility = "visible";
    }
  }
}

function presenterModeSetup(document) {
  const demoIds = 
  // EARLY INFRASTRUCTURE
  ['hanieh-middle-east-report', // atrocities in gaza
  'birzeit-guide-to-palestinian-websites', // adam hanieh was a webmaster of first guide to Pal websites, pre proliferation of search engines, yahoo -> google maps
  'birzeit-golden-olive-awards',
  'planetedu', // [not archived] WAN, web statistics
  'palestine-yellow-pages', // [not archived]
  'palsoft',

  // PLACES
  'palestine-net-geography', // cities/municipalities homepages, placemaking ofc nothing new but definitely held a particular significance for 
  'salfeet', // gif slideshows, 3d animations and custom buttons which were the norm, scale of these websites allowed very volunteer-y, singular efforts, designer 
  'municipality-gaza', // as the web matured we saw more robust sites like municipality of gaza - centers -> public library, gaza city -> photo gallery
  'gaza-airport', // tone of hope and looking to the future, flight schedules, even in seemingly mundane info
  'jerusalem-hotel', // tourism efforts emerge : services -> quick view -> history
  'ministry-tourism', // reclaim the image of palestine as a destination, esp by the PA here
  // NEWS
  'al-quds-news', // on the flipside, news esp during the second intifada stands in stark contrast: the graphically and typographically dense news print is translated on the virtual hypertext document,
  'alayyam-news', // arabic text as images

  // ART, CULTURE, HERITAGE
  'sakakini', // institutional websites ofc [not archived]
  'palestine-wildlife-society', // official, for large orgs
  'hanna-safieh', // the web as a bridge for older, traditional artists, their father
  'omayya-joha', // political cartoonist who animated static analogue drawings w the then new GIF form
  'samia-halaby', // maybe most prolific pali artist who used tech was samia halaaby : words about palestine, kinetic painting
  'barghouti', // other than indivual artists, you had collective efforts or anonymous projects to translate existing palestinian culture to the web
  'palestine-embroider', //cross stitch - wedding, pillows TATRIZ
  'jukebox-arabia',
  // though web tech was limited compared to what we are used to today, 
  'villages-map', //bzu center for pal ?
  'palestine-history-timeline', // also independent efforts -> palestine history
  'al-aqsa-tour', // 
  'esam-shashaa-bio',
  'tutorials-in-arabic', // people were able to make their own websites 
  'web-4',

  // RECORDKEEPING, HONORING MARTYRS
  'ramallah-1996', // earliest days -> documentation, photo diary 
  'september-1996-memorial', // british guy: efforts to collect palestinian voices and saw potential of them , and as evidence and appeal to westerners who he said were often unfamiliar w the conflict 
  'september-2000-info', // martyrs list
  'barghouti-memorial', // blood gif, titled blood bar.gif, tho crude by todays standards, used by palestinians

  // PEOPLE OF PALESTINE ONLINE
  'people-of-palestine', // directory of people, hand collected 
  'the-holly-land', // anonymous, homepage type websites
  'amnah-site', // what you could find on a more personal site, often times students would take a class on web development, like we saw w barghouti, the demarcation of web1.0 and having a martyrs section, black and red
  'jayyousi-pages', // connection
  'asa-group', //
  'zuhair-page',
  'reality-of-palestine'
  ]
  let demoCounter = 0;
  queryUpdate(demoIds[demoCounter]);

  document.addEventListener("keydown", (e) => {
    if (!e.repeat &&  (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
      if (e.key === 'ArrowRight') demoCounter++;
      if (e.key === 'ArrowLeft') demoCounter--;
      if (demoCounter < 0) demoCounter = demoIds.length - 1;
      if (demoCounter > demoIds.length - 1) demoCounter = 0;
      console.log(`DEMO COUNTER "${demoCounter} ${demoIds[demoCounter]}"`);
      queryUpdate(demoIds[demoCounter]);
    } else {
      console.log(`Key "${e.key}" repeating [event: keydown]`);
    }
  });
}

function getBrowserInfo() {
  const ua = navigator.userAgent;
  let browser = "Unknown";
  let version = "Unknown";

  // Chrome
  if (ua.includes("Chrome")) {
    const chromeMatch = ua.match(/Chrome\/(\d+)/);
    if (chromeMatch) {
      browser = "Chrome";
      version = chromeMatch[1];
    }
  }
  // Firefox
  else if (ua.includes("Firefox")) {
    const firefoxMatch = ua.match(/Firefox\/(\d+)/);
    if (firefoxMatch) {
      browser = "Firefox";
      version = firefoxMatch[1];
    }
  }
  // Safari
  else if (ua.includes("Safari") && !ua.includes("Chrome")) {
    const safariMatch = ua.match(/Version\/(\d+)/);
    if (safariMatch) {
      browser = "Safari";
      version = safariMatch[1];
    }
  }
  // Edge (Chromium-based)
  else if (ua.includes("Edg")) {
    const edgeMatch = ua.match(/Edg\/(\d+)/);
    if (edgeMatch) {
      browser = "Edge";
      version = edgeMatch[1];
    }
  }
  // Opera
  else if (ua.includes("OPR") || ua.includes("Opera")) {
    const operaMatch = ua.match(/(?:OPR|Opera)\/(\d+)/);
    if (operaMatch) {
      browser = "Opera";
      version = operaMatch[1];
    }
  }
  // Internet Explorer
  else if (ua.includes("MSIE") || ua.includes("Trident/")) {
    const ieMatch = ua.match(/(?:MSIE |rv:)(\d+)/);
    if (ieMatch) {
      browser = "Internet Explorer";
      version = ieMatch[1];
    }
  }

  return {
    browser,
    version,
    userAgent: ua,
    isMobile: /Mobile|Android|iPhone|iPad|iPod/i.test(ua)
  };
}

// function setBreadcrumbs(pageId) {
//   const pageMatch = pagesTour.filter((page) => page.id === pageId)[0];

//   breadcrumbs = [];
//   breadcrumbs.push({
//     breadcrumbText: `${pageMatch.title}`,
//     breadcrumbNode: null,
//   });

//   traverseUpTree(document.getElementById(`${pageId}-link`));
//   breadcrumbs.reverse();

//   let crumbsDiv = document.getElementById('breadcrumbs');
//   crumbsDiv.innerHTML = '';
//   breadcrumbs.forEach((crumb) => {
//     crumbsDiv.innerHTML += `<p class="status-bar-field">${crumb.breadcrumbText}</p>`;
//   });
// }

// function traverseUpTree(node) {
//   let parent = node.parentElement.parentElement.firstChild;
//   if (parent.nodeName === 'SUMMARY') {
//     const breadcrumbItem = {
//       breadcrumbText: `${node.parentElement.parentElement.firstChild.textContent.replace(
//         /\s*\(.*?\)\s*/g,
//         ''
//       )} ›`,
//       breadcrumbNode: node.parentElement.parentElement.firstChild,
//     };
//     breadcrumbs.push(breadcrumbItem);
//     traverseUpTree(node.parentElement.parentElement.parentElement);
//   }
// }
