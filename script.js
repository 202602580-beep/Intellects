

const FLASHCARD_DATA = {
  appdev:[
    {q:"What is an algorithm?",a:"A step-by-step set of instructions used to solve a problem or complete a task."},
    {q:"What is a variable?",a:"A named storage location in memory used to hold a value that can change during program execution."},
    {q:"What is a loop?",a:"A control structure that repeats a block of code multiple times until a condition is met."},
    {q:"What is a conditional statement?",a:"A statement (like IF/ELSE) that executes different code depending on whether a condition is true or false."},
    {q:"What is pseudocode?",a:"A plain-language description of the steps in an algorithm, written in a structured but non-code format."},
    {q:"What is a logic operator?",a:"Operators like AND, OR, NOT used to combine or negate conditions in decision-making."},
    {q:"What does 'input' mean in programming?",a:"Data received by a program from the user or another source (e.g. keyboard, file)."},
    {q:"What is a function?",a:"A named, reusable block of code designed to perform a specific task."},
  ],
  ictfund:[
    {q:"What is hardware?",a:"The physical components of a computer system — CPU, RAM, storage, keyboard, monitor, etc."},
    {q:"What is software?",a:"Programs and operating information used by a computer — includes system software and application software."},
    {q:"What is an operating system?",a:"System software that manages hardware resources and provides services for application software (e.g. Windows, Linux)."},
    {q:"What is a network?",a:"A group of interconnected computers and devices that can share data and resources."},
    {q:"What does ICT stand for?",a:"Information and Communication Technology."},
    {q:"What is the Internet?",a:"A global network of interconnected computers that allows the sharing of information and communication worldwide."},
    {q:"What is data?",a:"Raw facts and figures that have no meaning on their own until processed into information."},
    {q:"What is cloud storage?",a:"Storing data on remote servers accessed via the internet rather than on local hardware."},
  ],
  webdev:[
    {q:"What does HTML stand for?",a:"HyperText Markup Language — the standard language used to create and structure web pages."},
    {q:"What is a tag in HTML?",a:"A keyword enclosed in angle brackets (e.g. <p>) used to define elements on a web page."},
    {q:"What is the purpose of the <head> tag?",a:"It contains metadata about the document — title, links to stylesheets, scripts — not displayed on the page."},
    {q:"What does the <a> tag do?",a:"Creates a hyperlink that links to another page or resource using the href attribute."},
    {q:"What is CSS?",a:"Cascading Style Sheets — a language used to style and layout HTML elements (colours, fonts, spacing)."},
    {q:"What is the <body> tag?",a:"Contains all the visible content of a web page — text, images, links, tables, etc."},
    {q:"What is an attribute in HTML?",a:"Additional information added to an HTML tag, e.g. src in <img src='photo.jpg'>."},
    {q:"What is a URL?",a:"Uniform Resource Locator — the address used to access a resource on the internet, e.g. https://google.com."},
  ]
};

const QUIZ_DATA = {
  appdev:[
    {q:"What symbol is commonly used for assignment in pseudocode?",opts:["=","←","==",":="],a:1,exp:"The ← symbol is the standard assignment operator in pseudocode."},
    {q:"Which loop is guaranteed to execute at least once?",opts:["FOR loop","WHILE loop","DO-WHILE loop","IF statement"],a:2,exp:"A DO-WHILE loop executes the body first, then checks the condition."},
    {q:"What is the purpose of an algorithm?",opts:["To store data","To provide step-by-step instructions to solve a problem","To display output","To connect to the internet"],a:1,exp:"An algorithm is a set of step-by-step instructions for solving a problem."},
    {q:"Which of the following is a logic operator?",opts:["PRINT","INPUT","AND","LOOP"],a:2,exp:"AND, OR and NOT are logic operators used in conditions."},
    {q:"What does a variable store?",opts:["A fixed value","A changing value in memory","A file on disk","An internet address"],a:1,exp:"A variable is a named memory location that can hold a changing value."},
  ],
  ictfund:[
    {q:"Which of the following is an input device?",opts:["Monitor","Printer","Keyboard","Speaker"],a:2,exp:"A keyboard is an input device — it sends data to the computer."},
    {q:"What does RAM stand for?",opts:["Read All Memory","Random Access Memory","Rapid Application Module","Run All Memory"],a:1,exp:"RAM = Random Access Memory — temporary, fast storage used while the computer is on."},
    {q:"Which type of software manages hardware resources?",opts:["Application software","Utility software","Operating system","Browser"],a:2,exp:"The operating system manages all hardware resources and runs application software."},
    {q:"What is a LAN?",opts:["Large Area Network","Local Access Node","Local Area Network","Long-range Application Network"],a:2,exp:"LAN = Local Area Network — connects devices within a small area like a building."},
    {q:"What is the purpose of a firewall?",opts:["Speed up internet","Block unauthorised access","Store files","Print documents"],a:1,exp:"A firewall monitors and controls network traffic to block unauthorised access."},
  ],
  webdev:[
    {q:"Which HTML tag creates the largest heading?",opts:["<h6>","<h1>","<header>","<title>"],a:1,exp:"<h1> creates the largest heading; <h6> the smallest."},
    {q:"What attribute is used to add a link destination in <a>?",opts:["src","link","href","url"],a:2,exp:"The href attribute specifies the URL of the link destination."},
    {q:"Which tag is used to display an image?",opts:["<image>","<pic>","<img>","<photo>"],a:2,exp:"<img src='...'> is the correct HTML tag for displaying images."},
    {q:"What does CSS stand for?",opts:["Computer Style Syntax","Cascading Style Sheets","Creative Styling System","Code Style Sheet"],a:1,exp:"CSS = Cascading Style Sheets — used to style HTML pages."},
    {q:"Which tag creates an unordered list?",opts:["<ol>","<li>","<ul>","<list>"],a:2,exp:"<ul> creates an unordered (bulleted) list; <ol> creates an ordered (numbered) list."},
  ]
};

const TRACKER_DATA = {
  appdev:{name:"💻 Applications Development",topics:["Variables & Data Types","Algorithms & Flowcharts","Decision Making (IF/ELSE)","Logic Operators (AND/OR/NOT)","FOR Loops","WHILE Loops","Functions & Procedures","Problem Solving Techniques"]},
  ictfund:{name:"🌐 ICT Fundamentals",topics:["Hardware Components","Software Types","Operating Systems","Networking Basics","Internet & WWW","Email & Communication","Data & Information","Computer Security"]},
  webdev:{name:"🖥️ Web Development",topics:["HTML Structure","Headings & Paragraphs","Lists & Tables","Images & Links","Forms Basics","CSS Introduction","Page Layout","Publishing Websites"]}
};

const TIPS_DATA = [
  {module:"general",title:"Read questions carefully",body:"Always read each question at least twice before answering. Identify keywords like 'define', 'explain', 'list' or 'describe' — each requires a different type of answer."},
  {module:"general",title:"Manage your time wisely",body:"Divide your exam time by the number of questions. Spend proportionate time on each. If stuck, skip and come back — never spend too long on one question."},
  {module:"general",title:"Use all your study resources",body:"Don't rely on notes alone — practice with past papers, use flashcards, and test yourself with quizzes on this platform before your exam."},
  {module:"general",title:"Study in short focused bursts",body:"Use the Pomodoro timer on this site: 25 minutes focused study, 5 minutes break. Research shows this improves retention significantly compared to long sessions."},
  {module:"appdev",title:"Trace through your algorithms",body:"When writing or checking algorithms, trace through each step manually with sample data. This reveals logic errors before they cost you marks."},
  {module:"appdev",title:"Learn the difference between = and ==",body:"In pseudocode, ← or = is assignment (storing a value), while == is comparison (checking if values are equal). Mixing these up is a common mistake."},
  {module:"appdev",title:"Understand loop types",body:"Know when to use FOR loops (known number of repetitions) vs WHILE loops (unknown repetitions, condition-based). Examiners often test this distinction."},
  {module:"ictfund",title:"Know your hardware vs software",body:"Hardware is physical (CPU, RAM, hard drive). Software is programs (OS, apps). Be able to classify and give examples of each — this appears in almost every exam."},
  {module:"ictfund",title:"Remember network types",body:"LAN = Local Area Network (single building), WAN = Wide Area Network (multiple locations). Know the difference and be able to give real-world examples."},
  {module:"ictfund",title:"Data vs Information",body:"Data = raw, unprocessed facts (numbers, letters). Information = data that has been processed and given context or meaning. Examiners love to test this distinction."},
  {module:"webdev",title:"Memorise essential HTML tags",body:"Know these cold: <html>, <head>, <body>, <h1>–<h6>, <p>, <a href>, <img src>, <ul>, <ol>, <li>, <table>, <tr>, <td>. These appear in every web dev exam."},
  {module:"webdev",title:"Always close your tags",body:"Every opening tag like <p> needs a closing tag </p>. Forgetting to close tags causes layout errors and can cost marks in practical questions."},
  {module:"webdev",title:"Understand href vs src",body:"href is used in <a> tags for links. src is used in <img> tags for images. Don't mix them up — this is a common exam trap."},
];

const VIDEO_DATA = [
  {module:"💻 App Dev",title:"Introduction to Algorithms",desc:"Visual explanation of algorithms, flowcharts and pseudocode basics.",emoji:"💻",url:"https://www.youtube.com/results?search_query=algorithms+for+beginners+pseudocode"},
  {module:"💻 App Dev",title:"Variables & Data Types Explained",desc:"Learn what variables are, how to declare them and different data types.",emoji:"📦",url:"https://www.youtube.com/results?search_query=variables+data+types+programming+beginners"},
  {module:"💻 App Dev",title:"Loops: FOR and WHILE",desc:"Understand how loops work with practical examples and step-by-step traces.",emoji:"🔄",url:"https://www.youtube.com/results?search_query=for+while+loops+programming+tutorial"},
  {module:"🌐 ICT Fund",title:"Hardware vs Software",desc:"Clear explanation of hardware components and software categories with examples.",emoji:"🖥",url:"https://www.youtube.com/results?search_query=hardware+vs+software+ICT+basics"},
  {module:"🌐 ICT Fund",title:"How Networks Work",desc:"LAN, WAN, the internet and how devices communicate with each other.",emoji:"🌐",url:"https://www.youtube.com/results?search_query=computer+networks+LAN+WAN+explained+beginners"},
  {module:"🌐 ICT Fund",title:"Introduction to Cybersecurity",desc:"Firewalls, viruses, passwords and basic security concepts for ICT students.",emoji:"🔐",url:"https://www.youtube.com/results?search_query=cybersecurity+basics+ICT+students"},
  {module:"🖥️ Web Dev",title:"HTML for Absolute Beginners",desc:"Build your first web page from scratch using HTML tags step by step.",emoji:"📄",url:"https://www.youtube.com/results?search_query=HTML+for+beginners+full+tutorial"},
  {module:"🖥️ Web Dev",title:"HTML Tags You Must Know",desc:"The essential HTML tags every web development student needs to memorise.",emoji:"🏷",url:"https://www.youtube.com/results?search_query=essential+HTML+tags+web+development"},
  {module:"🖥️ Web Dev",title:"CSS Basics — Styling Web Pages",desc:"Introduction to CSS: colours, fonts, margins and basic page styling.",emoji:"🎨",url:"https://www.youtube.com/results?search_query=CSS+basics+for+beginners+styling+web+pages"},
];

const SEARCH_INDEX = [
  ...TIPS_DATA.map(t=>({type:"tip",title:t.title,snippet:t.body.substring(0,80)+"...",module:t.module,page:"tips"})),
  {type:"resource",title:"Applications Development — Question Paper",snippet:"Past exam question paper for Applications Development module.",module:"appdev",page:"modules"},
  {type:"resource",title:"Applications Development — Study Notes",snippet:"Comprehensive notes covering variables, algorithms, loops and more.",module:"appdev",page:"modules"},
  {type:"resource",title:"ICT Fundamentals — Question Paper",snippet:"Past exam question paper for ICT Fundamentals module.",module:"ictfund",page:"modules"},
  {type:"resource",title:"ICT Fundamentals — Study Notes",snippet:"Notes on hardware, software, networks, internet and data management.",module:"ictfund",page:"modules"},
  {type:"resource",title:"Web Development — Question Paper",snippet:"Past exam question paper for Web Development module.",module:"webdev",page:"modules"},
  {type:"resource",title:"Web Development — Study Notes",snippet:"HTML, CSS, links, images and web page structure notes.",module:"webdev",page:"modules"},
  ...VIDEO_DATA.map(v=>({type:"video",title:v.title,snippet:v.desc,module:"video",page:"videos"})),
  {type:"tool",title:"Pomodoro Focus Timer",snippet:"25-minute focused study sessions with 5-minute breaks.",module:"tools",page:"tools"},
  {type:"tool",title:"Module Flashcards",snippet:"Flip cards to test your knowledge on all three ICT modules.",module:"tools",page:"tools"},
  {type:"tool",title:"Module Quiz",snippet:"Multiple choice questions to test yourself on Applications Dev, ICT and Web Dev.",module:"tools",page:"tools"},
  {type:"tool",title:"Progress Tracker",snippet:"Mark topics as studied and track your completion across all modules.",module:"tools",page:"tools"},
  {type:"tool",title:"Exam Countdown",snippet:"Set your exam date and count down the days, hours and minutes remaining.",module:"tools",page:"tools"},
];

// ════════════ STORAGE ════════════
const USERS_KEY = "itb_users_v3";
const SESSION_KEY = "itb_session";
const FEEDBACK_KEY = "itb_feedback_v2";
const BOOKMARKS_KEY_PREFIX = "itb_bm_";
const PROGRESS_KEY_PREFIX = "itb_prog_";
const DOWNLOADS_KEY = "itb_downloads";
const COUNTDOWN_KEY_PREFIX = "itb_cd_";
const ANNOUNCE_KEY = "itb_announcements";
const SESSIONS_KEY = "itb_pom_sessions";

function getUsers(){try{return JSON.parse(localStorage.getItem(USERS_KEY)||"[]")}catch{return[]}}
function saveUsers(u){localStorage.setItem(USERS_KEY,JSON.stringify(u))}
function getSession(){return sessionStorage.getItem(SESSION_KEY)}
function isLoggedIn(){return!!getSession()}
function isAdmin(){return getSession()==="admin"}

function getBookmarks(){
  const u=getSession(); if(!u)return[];
  try{return JSON.parse(localStorage.getItem(BOOKMARKS_KEY_PREFIX+u)||"[]")}catch{return[]}
}
function saveBookmarks(bm){localStorage.setItem(BOOKMARKS_KEY_PREFIX+getSession(),JSON.stringify(bm))}
function addBookmark(label){
  const bm=getBookmarks();
  if(!bm.find(b=>b.label===label)){bm.push({label,date:new Date().toLocaleDateString()});saveBookmarks(bm);showToast("Bookmarked: "+label,"success")}
  else showToast("Already bookmarked!","info");
}

function getProgress(){
  const u=getSession(); if(!u)return{};
  try{return JSON.parse(localStorage.getItem(PROGRESS_KEY_PREFIX+u)||"{}")}catch{return{}}
}
function saveProgress(p){localStorage.setItem(PROGRESS_KEY_PREFIX+getSession(),JSON.stringify(p))}

function getDownloads(){try{return JSON.parse(localStorage.getItem(DOWNLOADS_KEY)||"[]")}catch{return[]}}
function trackDownload(name){
  const dl=getDownloads(); dl.push({name,user:getSession(),date:new Date().toISOString()});
  localStorage.setItem(DOWNLOADS_KEY,JSON.stringify(dl));
}

function getAnnouncements(){try{return JSON.parse(localStorage.getItem(ANNOUNCE_KEY)||"[]")}catch{return[]}}
function saveAnnouncements(a){localStorage.setItem(ANNOUNCE_KEY,JSON.stringify(a))}

// ════════════ AUTH ════════════
function registerUser(username,password){
  if(username.length<3)return{success:false,error:"Username must be at least 3 characters."};
  if(password.length<6)return{success:false,error:"Password must be at least 6 characters."};
  if(username.toLowerCase()==="admin")return{success:false,error:"That username is reserved."};
  const users=getUsers();
  if(users.find(u=>u.username.toLowerCase()===username.toLowerCase()))return{success:false,error:"Username already taken — try another."};
  users.push({username,password,joined:new Date().toLocaleDateString()});
  saveUsers(users);return{success:true};
}
function loginUser(username,password){
  if(username.toLowerCase()==="admin"&&password==="admin123"){
    sessionStorage.setItem(SESSION_KEY,"admin");return{success:true,role:"admin"};
  }
  const users=getUsers();
  const user=users.find(u=>u.username.toLowerCase()===username.toLowerCase()&&u.password===password);
  if(user){sessionStorage.setItem(SESSION_KEY,user.username);return{success:true,role:"student"}}
  return{success:false,error:"Incorrect username or password. Please try again."};
}
function logoutUser(){sessionStorage.removeItem(SESSION_KEY)}

// ════════════ NAV ════════════
const allSections=document.querySelectorAll('.page-section');
let currentPage="home";
function switchPage(pageId){
  allSections.forEach(s=>s.classList.remove('active-section'));
  const t=document.getElementById(pageId+'-section');
  if(t){t.classList.add('active-section');window.scrollTo(0,0)}
  currentPage=pageId;renderNav();
  if(pageId==="profile")renderProfile();
  if(pageId==="admin"&&isAdmin())renderAdmin();
  if(pageId==="tools"){initTracker();initCountdownFromStorage()}
  if(pageId==="tips")renderTips();
  if(pageId==="videos")renderVideos();
  if(pageId==="home")renderHomeBanner();
}

function renderNav(){
  const nav=document.getElementById('dynamicNav'); if(!nav)return;
  nav.innerHTML='';
  const darkBtn=document.createElement('button');
  darkBtn.className='dark-toggle';darkBtn.title='Toggle dark mode';
  darkBtn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';
  darkBtn.onclick=()=>{document.body.classList.toggle('dark');darkBtn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';localStorage.setItem('itb_dark',document.body.classList.contains('dark'))};
  nav.appendChild(darkBtn);
  if(!isLoggedIn()){
    [['Login','login'],['Sign Up','signup']].forEach(([name,page])=>{
      const a=mkNavLink(name,page);nav.appendChild(a);
    });
    return;
  }
  const links=isAdmin()
    ?[['Home','home'],['Modules','modules'],['Admin','admin'],['Contact','contact']]
    :[['Home','home'],['About','about'],['Modules','modules'],['Tools','tools'],['Tips','tips'],['Videos','videos'],['Search','search'],['Profile','profile'],['Contact','contact']];
  links.forEach(([name,page])=>{nav.appendChild(mkNavLink(name,page))});
  const w=document.createElement('span');w.className='welcome-text';w.textContent='👋 '+getSession();nav.appendChild(w);
  const lb=document.createElement('a');lb.textContent='Logout';lb.className='logout-btn';lb.style.cursor='pointer';
  lb.onclick=e=>{e.preventDefault();logoutUser();showToast('Logged out successfully.','success');renderNav();switchPage('login')};
  nav.appendChild(lb);
}
function mkNavLink(name,page){
  const a=document.createElement('a');a.textContent=name;
  if(currentPage===page)a.classList.add('active');
  a.href='#';a.onclick=e=>{e.preventDefault();switchPage(page)};
  return a;
}
window.addEventListener('scroll',()=>{document.getElementById('mainNav').classList.toggle('scrolled',scrollY>10)});

// ════════════ TOAST ════════════
function showToast(msg,type='success'){
  const c=document.getElementById('toastContainer');
  const t=document.createElement('div');t.className='toast toast-'+type;
  const icon={success:'✅',error:'❌',info:'ℹ️'}[type]||'ℹ️';
  t.innerHTML=`<span class="toast-icon">${icon}</span><span>${msg}</span><button class="toast-dismiss">&times;</button>`;
  c.appendChild(t);
  t.querySelector('.toast-dismiss').onclick=()=>t.remove();
  setTimeout(()=>{if(t.parentNode)t.remove()},4000);
}

// ════════════ POMODORO ════════════
let pomInterval=null,pomSeconds=25*60,pomIsRunning=false,pomIsBreak=false,pomCompletedSessions=parseInt(localStorage.getItem(SESSIONS_KEY)||'0');
function updatePomDisplay(){
  const m=Math.floor(pomSeconds/60).toString().padStart(2,'0');
  const s=(pomSeconds%60).toString().padStart(2,'0');
  document.getElementById('pomTime').textContent=m+':'+s;
  const total=pomIsBreak?5*60:25*60;
  const pct=Math.max(0,pomSeconds/total)*100;
  document.getElementById('pomCircle').style.setProperty('--pom-prog',pct+'%');
}
function pomToggle(){
  if(pomIsRunning){clearInterval(pomInterval);pomIsRunning=false;document.getElementById('pomStart').textContent='▶ Resume'}
  else{
    pomIsRunning=true;document.getElementById('pomStart').textContent='⏸ Pause';
    pomInterval=setInterval(()=>{
      pomSeconds--;updatePomDisplay();
      if(pomSeconds<=0){
        clearInterval(pomInterval);pomIsRunning=false;
        if(!pomIsBreak){pomCompletedSessions++;localStorage.setItem(SESSIONS_KEY,pomCompletedSessions);document.getElementById('pomSessions').textContent='Sessions completed: '+pomCompletedSessions;showToast('🎉 Focus session complete! Take a break.','success')}
        else showToast('☕ Break over! Back to work.','info');
        pomIsBreak=!pomIsBreak;pomSeconds=pomIsBreak?5*60:25*60;
        document.getElementById('pomMode').textContent=pomIsBreak?'Break':'Focus';
        document.getElementById('pomStart').textContent='▶ Start';
        updatePomDisplay();
      }
    },1000);
  }
}
function pomReset(){clearInterval(pomInterval);pomIsRunning=false;pomIsBreak=false;pomSeconds=25*60;document.getElementById('pomMode').textContent='Focus';document.getElementById('pomStart').textContent='▶ Start';updatePomDisplay()}
function pomSwitch(){pomReset();pomIsBreak=true;pomSeconds=5*60;document.getElementById('pomMode').textContent='Break';updatePomDisplay()}

// ════════════ FLASHCARDS ════════════
let fcIndex=0,fcCards=[],fcFlipped=false;
function loadFlashcards(){
  const mod=document.getElementById('fcModuleSelect')?.value||'appdev';
  fcCards=FLASHCARD_DATA[mod];fcIndex=0;showCard();
}
function showCard(){
  fcFlipped=false;
  const card=document.getElementById('flashcard');
  if(card)card.classList.remove('flipped');
  document.getElementById('fcFront').textContent=fcCards[fcIndex].q;
  document.getElementById('fcBack').textContent=fcCards[fcIndex].a;
  document.getElementById('fcCounter').textContent=(fcIndex+1)+' / '+fcCards.length;
}
function flipCard(){const c=document.getElementById('flashcard');fcFlipped=!fcFlipped;c.classList.toggle('flipped',fcFlipped)}
function nextCard(){fcIndex=(fcIndex+1)%fcCards.length;showCard()}
function prevCard(){fcIndex=(fcIndex-1+fcCards.length)%fcCards.length;showCard()}
document.addEventListener('DOMContentLoaded',()=>{if(document.getElementById('fcModuleSelect'))loadFlashcards()});

// ════════════ PROGRESS TRACKER ════════════
function initTracker(){
  const wrap=document.getElementById('trackerModules');if(!wrap)return;
  wrap.innerHTML='';
  const prog=getProgress();
  Object.entries(TRACKER_DATA).forEach(([modKey,modData])=>{
    const checked=prog[modKey]||[];
    const pct=Math.round((checked.length/modData.topics.length)*100);
    const el=document.createElement('div');el.className='tracker-mod';
    el.innerHTML=`<div class="tracker-mod-header"><div class="tracker-mod-name">${modData.name}</div><div class="tracker-pct">${pct}%</div></div>
    <div class="tracker-topics">${modData.topics.map((t,i)=>`<label class="tracker-topic${checked.includes(i)?' done':''}" style="display:flex;align-items:center;gap:10px;cursor:pointer"><input type="checkbox" ${checked.includes(i)?'checked':''} data-mod="${modKey}" data-idx="${i}" onchange="toggleTopic(this)"><span>${t}</span></label>`).join('')}</div>
    <div class="tracker-prog-wrap"><div class="tracker-prog" style="width:${pct}%" id="tprog_${modKey}"></div></div>`;
    wrap.appendChild(el);
  });
}
function toggleTopic(cb){
  const mod=cb.dataset.mod,idx=parseInt(cb.dataset.idx);
  const prog=getProgress();
  if(!prog[mod])prog[mod]=[];
  if(cb.checked){if(!prog[mod].includes(idx))prog[mod].push(idx)}
  else prog[mod]=prog[mod].filter(i=>i!==idx);
  saveProgress(prog);
  const label=cb.closest('label');if(label)label.classList.toggle('done',cb.checked);
  const pct=Math.round((prog[mod].length/TRACKER_DATA[mod].topics.length)*100);
  const pbar=document.getElementById('tprog_'+mod);if(pbar)pbar.style.width=pct+'%';
  const headers=document.querySelectorAll('[data-mod-header="'+mod+'"]');
  const modEl=cb.closest('.tracker-mod');
  if(modEl){const h=modEl.querySelector('.tracker-pct');if(h)h.textContent=pct+'%'}
  if(isLoggedIn()&&currentPage==='profile')renderProfile();
}

// ════════════ EXAM COUNTDOWN ════════════
let cdInterval=null;
function updateCountdown(){
  const nameEl=document.getElementById('examName'),dateEl=document.getElementById('examDate');
  if(!dateEl||!dateEl.value)return;
  const name=nameEl?.value||'Exam';
  const key=COUNTDOWN_KEY_PREFIX+getSession();
  localStorage.setItem(key,JSON.stringify({name,date:dateEl.value}));
  startCountdown(name,dateEl.value);
}
function initCountdownFromStorage(){
  const key=COUNTDOWN_KEY_PREFIX+getSession();
  try{const d=JSON.parse(localStorage.getItem(key)||'null');
    if(d){document.getElementById('examName').value=d.name;document.getElementById('examDate').value=d.date;startCountdown(d.name,d.date)}
  }catch{}
}
function startCountdown(name,dateStr){
  if(cdInterval)clearInterval(cdInterval);
  function tick(){
    const now=new Date(),target=new Date(dateStr);
    const diff=target-now;
    const display=document.getElementById('countdownDisplay'),past=document.getElementById('countdownPast');
    if(!display)return;
    if(diff<=0){display.style.display='none';past.style.display='block';clearInterval(cdInterval);return}
    past.style.display='none';display.style.display='grid';
    const days=Math.floor(diff/86400000),hours=Math.floor((diff%86400000)/3600000),mins=Math.floor((diff%3600000)/60000),secs=Math.floor((diff%60000)/1000);
    document.getElementById('cdDays').textContent=days;document.getElementById('cdHours').textContent=hours;document.getElementById('cdMins').textContent=mins;document.getElementById('cdSecs').textContent=secs;
  }
  tick();cdInterval=setInterval(tick,1000);
}

// ════════════ QUIZ ════════════
let quizState={mod:'appdev',qIndex:0,score:0,answered:false};
function startQuiz(){
  quizState={mod:document.getElementById('quizModSelect')?.value||'appdev',qIndex:0,score:0,answered:false};
  renderQuiz();
}
function renderQuiz(){
  const body=document.getElementById('quizBody'),progFill=document.getElementById('quizProgFill');
  const qs=QUIZ_DATA[quizState.mod];
  if(quizState.qIndex>=qs.length){
    const pct=Math.round((quizState.score/qs.length)*100);
    const emoji=pct>=80?'🎉':pct>=60?'👍':'💪';
    body.innerHTML=`<div class="quiz-score"><div class="quiz-score-num">${quizState.score}/${qs.length}</div><div class="quiz-score-label">${pct}% — ${emoji} ${pct>=80?'Excellent!':pct>=60?'Good job! Keep practising.':'Keep studying — you\'ve got this!'}</div><br><button class="pom-btn pom-btn-primary" onclick="startQuiz()" style="margin-top:16px">↺ Try Again</button></div>`;
    progFill.style.width='100%';return;
  }
  const q=qs[quizState.qIndex];progFill.style.width=((quizState.qIndex/qs.length)*100)+'%';
  body.innerHTML=`<div class="quiz-q">${q.q}</div>
  <div class="quiz-opts">${q.opts.map((o,i)=>`<button class="quiz-opt" onclick="answerQuiz(${i})">${o}</button>`).join('')}</div>
  <div id="qFeedback"></div>
  <div class="quiz-nav"><span style="font-size:13px;color:var(--muted)">Question ${quizState.qIndex+1} of ${qs.length}</span><button class="pom-btn pom-btn-primary btn-sm" id="qNextBtn" style="display:none" onclick="nextQuestion()">Next →</button></div>`;
}
function answerQuiz(idx){
  if(quizState.answered)return;quizState.answered=true;
  const q=QUIZ_DATA[quizState.mod][quizState.qIndex];
  const opts=document.querySelectorAll('.quiz-opt');
  opts.forEach(o=>o.disabled=true);
  opts[q.a].classList.add('correct');
  const fb=document.getElementById('qFeedback'),nextBtn=document.getElementById('qNextBtn');
  if(idx===q.a){quizState.score++;fb.className='quiz-feedback correct';fb.textContent='✅ Correct! '+q.exp}
  else{opts[idx].classList.add('wrong');fb.className='quiz-feedback wrong';fb.textContent='❌ Incorrect. '+q.exp}
  if(nextBtn)nextBtn.style.display='inline-flex';
}
function nextQuestion(){quizState.qIndex++;quizState.answered=false;renderQuiz()}

// ════════════ EXAM TIPS ════════════
let currentFilter='all';
function renderTips(filter){
  filter=filter||currentFilter;currentFilter=filter;
  const grid=document.getElementById('tipsGrid');if(!grid)return;
  const tips=filter==='all'?TIPS_DATA:TIPS_DATA.filter(t=>t.module===filter);
  const labelMap={general:'General',appdev:'App Dev',ictfund:'ICT Fund',webdev:'Web Dev'};
  grid.innerHTML=tips.map(t=>`<div class="tip-card" data-module="${t.module}">
    <span class="tip-badge ${t.module}">${labelMap[t.module]||t.module}</span>
    <h3>${t.title}</h3><p>${t.body}</p>
    <button class="mod-link" style="background:none;border:none;cursor:pointer;margin-top:10px;font-family:inherit" onclick="addBookmark('Tip: ${t.title.replace(/'/g,'')}')">🔖 Bookmark</button>
  </div>`).join('');
}
function filterTips(btn,filter){
  document.querySelectorAll('.tip-filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');renderTips(filter);
}
