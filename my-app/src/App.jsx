import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [verificationSent, setVerificationSent] = useState(false)
  const [captcha, setCaptcha] = useState('91689')
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaReady, setCaptchaReady] = useState(false)
  const [message, setMessage] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [registeredUsers, setRegisteredUsers] = useState([])
  const [activeDash, setActiveDash] = useState('Overview')
  const [refreshing, setRefreshing] = useState(false)

  const goTo = (nextPage) => {
    setPage(nextPage)
    setMessage('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [displayName, setDisplayName] = useState('G.lakshmi Narayana')

  if (page === 'dashboard') {
    const menu = [
      ['▦', 'Overview'], ['♜', 'Events'], ['◷', 'My Events'], ['✣', 'HackMate AI'], ['✧', 'IdeaCheck AI'], ['♙', 'Certificates'], ['▤', 'Digital Card'], ['♧', 'RuleBot AI'], ['♧', 'Student Guide'], ['♧', 'Official Communication'], ['♧', 'Notifications'], ['♧', 'Help & Support'], ['◎', 'Profile'],
    ]
    if (activeDash === 'My Events' || activeDash === 'Events') {
      const events = [
        { title: "ReBuild '26", type: 'Dashboard recreation hackathon', status: 'Registered', team: 'Benchmark Builder', badge: 'RE', colors: 'rebuild', date: 'Register by 5 Nov 2026' },
        { title: 'CodeSprint 2026', type: '48 hour product building challenge', status: 'Registration open', team: 'Build your team', badge: 'CS', colors: 'codesprint', date: 'Starts 14 Nov 2026' },
        { title: 'GreenTech Futures', type: 'Climate innovation designathon', status: 'Upcoming', team: 'Join a team', badge: 'GT', colors: 'greentech', date: 'Starts 22 Nov 2026' },
        { title: 'AI for Everyone', type: 'Applied AI student hackathon', status: 'Registration open', team: 'Build your team', badge: 'AI', colors: 'aifuture', date: 'Starts 3 Dec 2026' },
      ]
      return <main className="dashboard"><aside className="dash-sidebar"><a className="dash-brand" href="#overview" onClick={(event) => { event.preventDefault(); setActiveDash('Overview') }}><img className="brand-mark" src="/campuscode-logo.svg" alt="" /><span className="brand-copy"><strong>CAMPUSCODE</strong><small>HACKATHON ARENA</small></span></a><p className="dash-label">Workspace</p><nav>{menu.map(([icon,label])=><button key={label} className={activeDash===label?'active':''} onClick={()=>setActiveDash(label)}><span>{icon}</span>{label}{label==='RuleBot AI'&&<small>AI</small>}{activeDash===label&&<b>→</b>}</button>)}</nav><div className="dash-account"><p className="dash-label">Account</p><div className="account-person"><span className="avatar-small">{displayName.slice(0,1)}</span><span><b>{displayName}</b><small>Student</small></span></div><button className="logout" onClick={()=>{setCaptchaReady(false);setCaptchaInput('');goTo('home')}}>↪ Log out</button></div></aside><section className="dash-main"><header className="dash-top"><div><small>Campuscode / Student</small><b>{activeDash}</b></div><div className="dash-actions"><button className="bell" aria-label="Notifications">♧<i>1</i></button><button className="refresh" onClick={()=>{setRefreshing(true);setTimeout(()=>setRefreshing(false),700)}}><span className={refreshing?'spin':''}>⟳</span> Refresh</button><span className="avatar-large">👩🏽‍🎓</span><b className="profile-name">{displayName}</b></div></header><div className="events-content"><div className="events-heading"><div><p className="dash-kicker">My activity / Live data</p><h1>MY EVENTS<span>.</span></h1><p>Every event you joined, in one place. Open one to see its rounds, team, results and certificates.</p></div><div className="events-count"><b>{String(events.length).padStart(2,'0')}</b><small>Live data</small></div></div><div className="event-list">{events.map((event,index)=><article className="registered-event" key={event.title}><div className={`event-banner ${event.colors}`}><div className="banner-mark"><i/><i/><i/></div><div className="banner-copy"><small>CAMPUSCODE PRESENTS</small><b>{event.title}</b><strong>{event.type}</strong><span>✦ CERTIFICATES &nbsp; • &nbsp; ✦ STUDENT OPPORTUNITY &nbsp; • &nbsp; {event.date.toUpperCase()}</span></div><div className="banner-angle"/></div><div className="event-register"><span>REGISTRATION</span><b>{index===0?'78772f88-a0bd-4fe4-b071-be0efe8bf9df':'CC26-'+String(index+1).padStart(4,'0')+'-STUDENT'}</b></div><div className="event-card-info"><div><span className={`event-badge ${event.colors}`}>{event.badge}</span><h2>{event.title}</h2></div><p>STATUS: <b>{event.status}</b></p><p>TEAM: <b>{event.team}</b></p><button onClick={()=>setActiveDash('Events')}>Open journey <span>↗</span></button></div></article>)}</div></div></section></main>
    }
    return <main className="dashboard"><aside className="dash-sidebar"><a className="dash-brand" href="#overview" onClick={(event) => { event.preventDefault(); setActiveDash('Overview') }}><img className="brand-mark" src="/campuscode-logo.svg" alt="" /><span className="brand-copy"><strong>CAMPUSCODE</strong><small>HACKATHON ARENA</small></span></a><p className="dash-label">Workspace</p><nav>{menu.map(([icon, label]) => <button key={label} className={activeDash === label ? 'active' : ''} onClick={() => setActiveDash(label)}><span>{icon}</span>{label}{label === 'RuleBot AI' && <small>AI</small>}{activeDash === label && <b>→</b>}</button>)}</nav><div className="dash-account"><p className="dash-label">Account</p><div className="account-person"><span className="avatar-small">{displayName.slice(0, 1)}</span><span><b>{displayName}</b><small>Student</small></span></div><button className="logout" onClick={() => { setCaptchaReady(false); setCaptchaInput(''); goTo('home') }}>↪ Log out</button></div></aside><section className="dash-main"><header className="dash-top"><div><small>Campuscode / Student</small><b>{activeDash}</b></div><div className="dash-actions"><button className="bell" aria-label="Notifications">♧<i>1</i></button><button className="refresh" onClick={() => { setRefreshing(true); setTimeout(() => setRefreshing(false), 700) }}><span className={refreshing ? 'spin' : ''}>⟳</span> Refresh</button><span className="avatar-large">👩🏽‍🎓</span><b className="profile-name">{displayName}</b></div></header><div className="dash-content"><p className="dash-kicker">Student workspace / Live</p><h1>WELCOME BACK, <span>{displayName.split(' ')[0].toUpperCase()}.</span></h1><p className="dash-subtitle">Your CampusCode activity is loaded directly from the backend.</p><article className="featured-event"><div className="event-copy"><p className="dash-kicker">Build · Learn · Collaborate</p><h2>ReBuild '26</h2><p>ReBuild '26 is an individual dashboard-recreation hackathon by CampusCode. You participate alone, but you must create a team name for tracking and use it on your Unstop registration, the CampusCode portal, and every submission. Round 1: Recreate the CampusCode user flow faithfully — Dashboard, Login, Register, and Student dashboard — and submit your demo any time till 10 PM. Round 2: Build a complete new UI in CampusCode's vibe. Frontend only, mock data is fine. Prizes: Winner certificate + CampusCode internship with ₹15,000 stipend, runner-up certificate, and participation certificates for all.</p><button onClick={() => setActiveDash('Events')}>Open event <span>↗</span></button></div><div className="event-art"><span className="event-avatar">👩🏽‍🎓</span><b>RE</b></div></article><div className="stat-grid">{[['Registered','1'],['Ongoing','1'],['Completed','0'],['Certificates','0']].map(([label,value])=><article key={label}><small>{label}</small><b>{value}</b><span>From backend</span></article>)}</div><article className="lower-panel"><p className="dash-kicker">Your workspace</p><h3>{activeDash === 'Overview' ? 'Keep building your momentum.' : activeDash}</h3><p>Explore events, track your progress, and find your next opportunity in the CampusCode community.</p></article></div></section></main>
  }

  if (page !== 'home') {
    return (
      <main className="auth-page">
        <header className="auth-header">
          <a className="auth-brand" href="#home" onClick={(event) => { event.preventDefault(); goTo('home') }} aria-label="Campuscode home">
            <img className="brand-mark" src="/campuscode-logo.svg" alt="" /><span className="brand-copy"><strong>CAMPUSCODE</strong><small>HACKATHON ARENA</small></span>
          </a>
          <button className="back-home" onClick={() => goTo('home')}>← Back to home</button>
        </header>
        <div className="auth-layout">
          <section className="auth-intro">
            <p className="auth-eyebrow"><span className="green-dot" />Campuscode / {page === 'login' ? 'Authentication' : 'Registration'}</p>
            <p className="auth-access">{page === 'login' ? 'Access' : 'Create'} <span>{page === 'login' ? '01 / 02' : '02 / 02'}</span></p>
            <h1>{page === 'login' ? <>ENTER<br />THE<br /><span className="outline">ARENA.</span></> : <>JOIN<br />THE<br /><span className="outline">ARENA.</span></>}</h1>
            <p className="auth-tagline">{page === 'login' ? 'Sign in to continue building, collaborating and competing with the CampusCode community.' : 'Create your CampusCode identity and become part of a student ecosystem designed around ideas, teams, technology and competition.'}</p>
            <div className="auth-pillars">{page === 'login' ? <><div><small>01</small><b>BUILD</b></div><div><small>02</small><b>COMPETE</b></div><div><small>03</small><b>SHIP</b></div></> : <><div><small>01&nbsp;&nbsp; IDENTITY</small><b>CREATE</b><em>Build your student profile and enter the CampusCode ecosystem.</em></div><div><small>02&nbsp;&nbsp; TEAM</small><b>COLLABORATE</b><em>Find teammates and build projects together.</em></div><div><small>03&nbsp;&nbsp; ARENA</small><b>COMPETE</b><em>Join hackathons and turn ideas into submissions.</em></div></>}</div>
            <div className="auth-status"><span><i />{page === 'login' ? 'Authentication ready' : 'Registration open'}</span><span>{page === 'login' ? 'Secure access' : 'Student innovation network'}</span><span>2026</span></div>
          </section>
          <section className="auth-card" aria-label={page === 'login' ? 'Login' : 'Create account'}>
            <div className="auth-card-topline" />
            <div className="card-heading"><div><p className="card-kicker">{page === 'login' ? 'Existing account' : 'New account'}</p><h2>{page === 'login' ? 'LOGIN' : 'REGISTER'}</h2><p className="card-description">{page === 'login' ? 'Access your CampusCode account.' : 'Create your CampusCode account.'}</p></div><span className="card-code">CC<br />{page === 'login' ? '01' : '02'}</span></div>
            <form className="auth-form" onSubmit={(event) => { event.preventDefault(); if (page === 'login' && !captchaReady) { setCaptchaReady(true); setMessage('Security check complete.'); return } if (captchaInput !== captcha) { setMessage('The code does not match. Please try again.'); if (page === 'login') setCaptchaReady(false); return } if (page === 'create' && password !== confirmPassword) { setMessage('Your passwords do not match.'); return } if (page === 'create') { const form = event.currentTarget; const email = form.querySelector('input[autocomplete="email"]')?.value?.toLowerCase(); if (registeredUsers.some((user) => user.email === email)) { setMessage('An account with this email already exists. Please log in.'); return } setRegisteredUsers((users) => [...users, { email, password, name: form.querySelector('input[autocomplete="name"]')?.value }]); setVerificationSent(true); setMessage('Account created for this session. You can now log in.'); return } const account = registeredUsers.find((user) => user.email === loginEmail.toLowerCase()); if (!account) { window.alert('Please create an account before logging in.'); setMessage('Please create an account before logging in.'); return } const enteredPassword = event.currentTarget.querySelector('input[autocomplete="current-password"]')?.value; if (account.password !== enteredPassword) { setMessage('Incorrect password. Please try again.'); return } setDisplayName(account.name || loginEmail.split('@')[0].replace(/[._-]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())); goTo('dashboard') }}>
              {page === 'create' && <label className="field-label">FULL NAME<div className="input-wrap"><span className="input-icon">Aa</span><input type="text" placeholder="Your full name" autoComplete="name" required /></div></label>}
              <label className="field-label">EMAIL ADDRESS<div className="input-wrap"><span className="input-icon">@</span><input type="email" placeholder="you@example.com" autoComplete="email" required autoFocus value={page === 'login' ? loginEmail : undefined} onChange={page === 'login' ? (event) => setLoginEmail(event.target.value) : undefined} /></div></label>
              {page === 'create' && <><label className="field-label">ACCOUNT TYPE<div className="input-wrap"><span className="input-icon">◆</span><select className="account-type" defaultValue="student"><option value="student">STUDENT</option><option value="organizer">ORGANIZER</option></select></div></label><p className="organizer-note">Organizer? Accounts are created by our team — contact<br /><a href="mailto:campuscode@gmail.com">campuscode@gmail.com</a></p></>}
              <label className="field-label">PASSWORD<div className="input-wrap"><span className="input-icon">•</span><input type={showPassword ? 'text' : 'password'} placeholder={page === 'login' ? 'Enter your password' : 'Create a password'} autoComplete={page === 'login' ? 'current-password' : 'new-password'} value={page === 'create' ? password : undefined} onChange={page === 'create' ? (event) => setPassword(event.target.value) : undefined} required minLength="8" /><button className="show-password" type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button></div></label>
              {page === 'create' && <label className="field-label">CONFIRM PASSWORD<div className="input-wrap"><span className="input-icon">•</span><input type={showConfirmPassword ? 'text' : 'password'} placeholder="Repeat your password" autoComplete="new-password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required minLength="8" /><button className="show-password" type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? 'Hide' : 'Show'}</button></div></label>}
              {page === 'login' && <div className="captcha-block"><span className="field-label">CAPTCHA</span><div className="captcha-row"><div className="captcha-image" aria-label={`Security code ${captcha.split('').join(' ')}`}>{captcha.split('').map((digit, index) => <span key={`${digit}-${index}`} style={{ '--rotate': `${index % 2 ? 11 : -10}deg`, '--captcha-color': ['#e94dba','#8570f9','#8fca24','#b1ce53','#9365ef'][index] }}>{digit}</span>)}</div><button type="button" className="new-captcha" onClick={() => { setCaptcha(String(Math.floor(10000 + Math.random() * 90000))); setCaptchaInput(''); setCaptchaReady(false) }}>↻ New</button></div><input className="captcha-input" value={captchaInput} onChange={(event) => { setCaptchaInput(event.target.value); setCaptchaReady(event.target.value === captcha) }} placeholder="Enter the code above" inputMode="numeric" aria-label="Enter captcha code" required /></div>}
              {page === 'create' && <><div className="captcha-block"><span className="field-label">CAPTCHA</span><div className="captcha-row"><div className="captcha-image" aria-label={`Security code ${captcha.split('').join(' ')}`}>{captcha.split('').map((digit, index) => <span key={`${digit}-${index}`} style={{ '--rotate': `${index % 2 ? 11 : -10}deg`, '--captcha-color': ['#e94dba','#8570f9','#8fca24','#b1ce53','#9365ef'][index] }}>{digit}</span>)}</div><button type="button" className="new-captcha" onClick={() => { setCaptcha(String(Math.floor(10000 + Math.random() * 90000))); setCaptchaInput(''); setCaptchaReady(false) }}>↻ New</button></div><input className="captcha-input" value={captchaInput} onChange={(event) => setCaptchaInput(event.target.value)} placeholder="Enter the code above" inputMode="numeric" aria-label="Enter captcha code" required /></div><label className="age-confirm"><input type="checkbox" required /><span>I confirm that I am <b>18 years of age or older.</b></span></label></>}
              {page === 'login' && <button type="button" className={`security-check ${captchaReady ? 'is-ready' : ''}`} onClick={() => { setCaptchaReady(true); setMessage('Security check complete.') }}><span className="mini-mascot"><i /><i /><i /><b /><b /></span><span className="sleep-label">Zzz</span><strong>{captchaReady ? 'VERIFIED' : 'READY'}</strong><i className="check-bar" /></button>}
              {message && <p className="form-message" role="status">{message}</p>}
              <button className="submit-auth" type="submit">{page === 'login' ? 'LOGIN' : verificationSent ? 'VERIFICATION CODE SENT' : 'SEND VERIFICATION CODE'}<span>↗</span></button>
            </form>
            {page === 'login' && <button className="forgot-link" onClick={() => setMessage('Password recovery is ready to connect to your authentication service.')}>Forgot password?</button>}
            <div className="card-footer"><span>{page === 'login' ? "Don't have an account?" : 'Already have an account?'}</span><button onClick={() => goTo(page === 'login' ? 'create' : 'login')}>{page === 'login' ? 'Create account' : 'Login'} →</button></div>
          </section>
        </div>
        <footer className="auth-footer"><span>AUTH / 2026</span><span><i /> Secure {page === 'login' ? 'login' : 'registration'}</span></footer>
      </main>
    )
  }

  return (
    <main className="landing">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Campuscode home">
          <img className="brand-mark" src="/campuscode-logo.svg" alt="" />
          <span className="brand-copy"><strong>CAMPUSCODE</strong><small>HACKATHON ARENA</small></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#how">How it works</a><a href="#hackathons">Hackathons</a><a href="#community">Community</a>
        </nav>
        <div className="account-nav"><a href="#login" onClick={(event) => { event.preventDefault(); goTo('login') }}>Login</a><a className="join" href="#join" onClick={(event) => { event.preventDefault(); goTo('create') }}>Join Campuscode <span>↗</span></a></div>
      </header>
      <div className="eyebrow"><span className="green-dot" />The digital home for student innovation</div>
      <div className="location"><span className="purple-dot" />Chennai <b>•</b> India</div>
      <section className="hero" id="home">
        <svg className="orbits" viewBox="0 0 1880 820" preserveAspectRatio="none" aria-hidden="true">
          <path d="M100 60 C260 195 405 130 555 135 S760 260 875 345 S1060 105 1220 145 S1435 380 1590 390 S1770 255 1900 145" />
          <path d="M-50 625 C130 470 230 575 405 550 S660 445 780 295 S920 110 1060 140 S1250 330 1395 470 S1620 510 1735 425 S1830 450 1920 570" />
          <path d="M380 820 C560 650 665 630 820 520 S1010 430 1150 495 S1350 650 1500 590 S1720 430 1850 350" />
        </svg>
        <span className="node node-one" /><span className="node node-two" /><span className="node node-three" /><span className="node node-four" /><span className="node node-five" />
        <div className="hero-inner">
          <p className="page-index">CAMPUSCODE / 001</p>
          <h1><span>BUILD</span><span className="outline">COMPETE</span><span>SHIP<span className="period">.</span></span></h1>
          <div className="hero-bottom"><p>A digital arena for students<br />who don't just have ideas.<br />They build them.</p><a className="explore" href="#hackathons">Explore hackathons <span>↗</span></a></div>
        </div>
      </section>
    </main>
  )
}

export default App

