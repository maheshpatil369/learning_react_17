import React, { useEffect, useState } from 'react';
import './Rateus.css';
import './popupfeedbacksctioncss.css';
import './aboutus.css';
import './testimonial.css';
import './caduceus.css';
import './patient-portal.css';
import './chatbox.css';
import './index.css';
import './googletranslate.css';

// Import images
import rdLogo from './images/rd.png';
import caduceusImg from './img/2jghCPWR6g8S6w5Nv6bF6WCSHzJ.svg';
import aboutImg from './img/about.png';
import doctor1 from './img/doctors/1.png';
import doctor2 from './img/doctors/2.png';
import doctor3 from './img/doctors/3.png';
import doctor4 from './img/doctors/4.png';
import doctor5 from './img/doctors/Image(13).png';
import profile1 from './images/profile1.webp';
import profile2 from './images/profile2.webp';
import profile3 from './images/profile3.webp';
import profile4 from './images/profile4.webp';
import profile5 from './images/profile5.webp';
import feedbackTick from './Feedback Tick.png';

const Home = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [selectedGif, setSelectedGif] = useState('');
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [feedbackFormData, setFeedbackFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  useEffect(() => {
    // Initialize any required scripts here
    if (typeof window !== 'undefined') {
      // Initialize emailjs
      if (window.emailjs) {
        window.emailjs.init({
          publicKey: "o6kveYmOSDrs0l1Mg",
        });
      }

      // Load Google Translate if needed
      if (window.loadGoogleTranslate) {
        window.loadGoogleTranslate();
      }
    }
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleEmojiClick = (emoji, gifSrc) => {
    setSelectedEmoji(emoji);
    setSelectedGif(gifSrc);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setShowFeedbackMessage(true);
    setTimeout(() => {
      setShowFeedbackPopup(true);
      setShowFeedbackMessage(false);
    }, 2000);
  };

  const closeFeedback = () => {
    setShowFeedbackPopup(false);
  };

  const closePopup = () => {
    setShowFeedbackPopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeedbackInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="home-container">
      {/* Preloader */}
      <div className="pre">
        <div className="loader"></div>
      </div>

      {/* Caduceus Animation */}
      <div id="caduceus-container">
        <div className="rope"></div>
        <img id="caduceus" src={caduceusImg} alt="Caduceus" />
      </div>

      {/* Header */}
      <header className="header_container nav-h">
        <div className="img">
          <img id="rd-logo" style={{ width: '90px', height: 'auto' }} src={rdLogo} alt="RapiDoc Logo" />
        </div>
        <nav className="nav_menu">
          <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="mobile-logo-text">RAPIDOC</div>
          <ul className={`nav_link ${menuActive ? 'active' : ''}`}>
            <li><a href="index.html"><i className="bi bi-house-door-fill"></i> Home</a></li>
            <li><a href="about.html"><i className="bi bi-info-circle-fill"></i> About</a></li>
            <li><a href="news.html"><i className="bi bi-newspaper"></i> News</a></li>
            <li><a href="dex.html"><i className="bi bi-gear"></i> Service</a></li>
            <li><a href="portal.html"><i className="bi bi-person"></i> Patient Portal</a></li>
            <li><a href="Html-Files/appointment.html"><i className="bi bi-person"></i> Appointment</a></li>
            <li><a href="#doctors"><i className="bi bi-person-circle"></i> Doctor</a></li>
            <li><a href="#contact"><i className="bi bi-telephone"></i> Contact us</a></li>
            <li><a href="#feedback"><i className="bi bi-star"></i> Rate Us</a></li>
            <li><a href="log/login.html"><i className="bi bi-box-arrow-right"></i> Sign in/Sign up</a></li>
            <a href="Html-Files/Doctor Experience.html"><button className="btn1">Find a Doctor</button></a>
          </ul>
        </nav>
      </header>

      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <a href="#appointment" className="appointment-btn scrollto">
            <span className="d-md-inline">EMERGENCY</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container" style={{ display: 'flex' }}>
        <div className="content">
          <h1 style={{ fontSize: '65px', marginTop: '10px' }}>
            Welcome to <span style={{ color: '#55a5ea' }}>RapiDoc!</span> <br /> Your one-stop digital <br /> healthcare destination
          </h1>
        </div>
        <img className="sec-img" src={rdLogo} alt="" id="sec-img" style={{ padding: '0 0 0 0' }} />
      </div>

      {/* Main Content */}
      <main id="main">
        {/* Featured Services Section */}
        <section id="featured-services" className="featured-services">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon1"><i className="fas fa-heartbeat"></i></div>
                  <h4 className="title"><a href="checkup.html"> Normal checkup</a></h4>
                  <p className="description">Detect medical issues, identify risk factors and illnesses before they start to cause problems.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                  <div className="icon2"><i className="fas fa-dna"></i></div>
                  <h4 className="title"><a href="test.html">Blood Test</a></h4>
                  <p className="description"> Get your tests done to look for signs of disease or agents that cause disease.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon3"><i className="fas fa-temperature-high"></i></div>
                  <h4 className="title"><a href="">Body temperature</a></h4>
                  <p className="description">Body temperature can be anywhere from 97 F to 99 F. Babies and children have a little higher range: 97.9 F to 100.4 F.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon4"><i className="fas fa-hand-holding-medical"></i></div>
                  <h4 className="title"><a href="medicine.html">Medicine use</a></h4>
                  <p className="description">Know what to use when to use and how to use.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div id="about-us">
            <h1 className="about-us-heading">About Us</h1>
            <section className="about-service">
              <div className="sec-1">
                <img src={aboutImg} className="about-img" alt="About Us" />
              </div>
              <div className="sec-2">
                <div className="a-1">
                  <div className="a-l">
                    <div className="h-icon">
                      <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#2F7F81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="a-r">
                    <div className="head-1">HEALTH CHECKUPS</div>
                    <div className="head-2">Bootcamps, personalised check-ups,newsletter, it's all here</div>
                  </div>
                </div>
                <div className="a-2">
                  <div className="b-l">
                    <div className="a-icon">
                      <svg height="28px" width="28px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                        <g>
                          <polygon className="st0" points="501.539,169.221 453.886,86.7 303.669,173.449 303.669,0 208.365,0 208.365,173.479 58.114,86.73 
                            10.461,169.261 160.674,255.99 10.501,342.71 58.154,425.231 208.365,338.482 208.365,512 303.669,512 303.669,338.542 
                            453.846,425.271 501.499,342.74 351.267,255.99" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="b-r">
                    <div className="head-1">EMERGENCY WARDS</div>
                    <div className="head-2">Avoid rush and get immediate medical assistance, the wards and vacancies.</div>
                  </div>
                </div>
                <div className="a-3">
                  <div className="c-l">
                    <div className="q-icon">
                      <svg width="44px" height="44px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>question</title>
                        <g id="Page-1" stroke="none" strokeWidth="0.5" fill="none" fillRule="evenodd">
                          <g id="add" fill="#2F7F81" transform="translate(42.666667, 42.666667)">
                            <path d="M291.76704,163.504 C291.76704,177.01952 288.33216,188.82176 281.479253,198.90112 C275.828267,207.371093 266.358187,216.549547 253.042987,226.434987 C245.378987,231.682347 240.331947,236.618667 237.916587,241.257813 C234.87744,246.90624 233.376213,255.371093 233.376213,266.666667 L190.710827,266.666667 C190.710827,249.530027 192.53504,237.027413 196.165333,229.162667 C200.394453,219.679573 209.571627,210.098773 223.686187,200.42048 C230.350293,195.374933 235.188693,190.2368 238.214827,184.994773 C241.839787,179.143253 243.664,172.49216 243.664,165.028693 C243.664,153.13024 240.125013,144.26304 233.070293,138.404907 C227.4336,134.177067 220.56768,132.059947 212.501333,132.059947 C199.39328,132.059947 189.911467,136.398507 184.065067,145.069013 C179.829333,151.518293 177.7056,159.787733 177.7056,169.868587 L177.7056,170.173227 L132.34368,170.173227 C132.34368,143.751253 140.703147,123.790507 157.43488,110.274773 C171.554773,98.9922133 189.007787,93.3346133 209.77344,93.3346133 C227.933653,93.3346133 243.865813,96.86848 257.571627,103.9232 C280.37504,115.62624 291.76704,135.494827 291.76704,163.504 Z M426.666667,213.333333 C426.666667,331.153707 331.153707,426.666667 213.333333,426.666667 C95.51296,426.666667 3.55271368e-14,331.153707 3.55271368e-14,213.333333 C3.55271368e-14,95.51168 95.51296,3.55271368e-14 213.333333,3.55271368e-14 C331.153707,3.55271368e-14 426.666667,95.51168 426.666667,213.333333 Z M384,213.333333 C384,119.226667 307.43872,42.6666667 213.333333,42.6666667 C119.227947,42.6666667 42.6666667,119.226667 42.6666667,213.333333 C42.6666667,307.43872 119.227947,384 213.333333,384 C307.43872,384 384,307.43872 384,213.333333 Z M213.332053,282.666667 C198.60416,282.666667 186.665387,294.60544 186.665387,309.333333 C186.665387,324.061227 198.60416,336 213.332053,336 C228.059947,336 239.99872,324.061227 239.99872,309.333333 C239.99872,294.60544 228.059947,282.666667 213.332053,282.666667 Z" id="Shape" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="c-r">
                    <div className="head-1">SERVICES</div>
                    <div className="head-2">An apple a day won't keep Rapidoc away. We are always here at your service, bringing to you the best facilities.</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Counts Section */}
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" id="abc">
                <div className="count-box">
                  <i className="fas fa-user-md"></i>
                  <span data-purecounter-start="0" data-purecounter-end="95" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Doctors Available</strong> <br /><br />Doctors listed on our website.</p><br />
                  <a href="#doctors" className="count-a">Find out more &raquo;</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" id="abc">
                <div className="count-box">
                  <i className="fas fa-bed"></i>
                  <span data-purecounter-start="0" data-purecounter-end="36" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Beds Available</strong> <br /><br />Nearby emergency beds available.</p><br />
                  <a href="" className="count-a">Find out more &raquo;</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" id="abc">
                <div className="count-box">
                  <i className="fas fa-flask-vial"></i>
                  <span data-purecounter-start="0" data-purecounter-end="23" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Nearest Labs</strong> <br /><br />Test labs and clinics near you.</p><br />
                  <a href="" className="count-a">Find out more &raquo;</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" id="abc">
                <div className="count-box">
                  <i className="fas fa-trophy"></i>
                  <span data-purecounter-start="0" data-purecounter-end="1250" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>User Reviews</strong><br /> <br />Over 1K positive reviews.</p><br />
                  <a href="#test" className="count-a">Find out more &raquo;</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <center>
          <section id="services" className="services">
            <div className="section-title">
              <h2 style={{ textAlign: 'center' }}>Services</h2>
              <p>Our services are for your good health. We are with you at every digital step.</p>
            </div>
            <div className="services container">
              <div className="align-items-stretch ">
                <div className="icon-box">
                  <div className="icon"><i className="fas fa-heartbeat"></i></div>
                  <h4><a href="/Html-Files/input.html">Clinics/Labs</a></h4>
                  <p>Locate the best healthcare facilities around you hassle-free.From routine check-ups to specialized treatments, find the right clinic or lab that meets your needs. Our database is updated regularly to ensure you have the most accurate information.</p>
                </div>
              </div>
              <div className="align-items-stretch ">
                <div className="icon-box">
                  <div className="icon"><i className="fas fa-pills"></i></div>
                  <h4><a href="https://www.1mg.com">Pharmacy</a></h4>
                  <p>Get your prescribed medicines delivered at your doorstep.Our pharmacy service ensures you never miss a dose with timely reminders and easy refill options. Enjoy the convenience of home delivery and exclusive discounts on a wide range of medicines.</p>
                </div>
              </div>
              <div className="align-items-stretch ">
                <div className="icon-box">
                  <div className="icon"><i className="fas fa-hospital-user"></i></div>
                  <h4><a href="">Daily Feed</a></h4>
                  <p>Access to heath benefits like bootcamps, vaccination drives and much more.Stay informed about the latest health trends, wellness tips, and upcoming events in your area. Participate in community health initiatives and boost your wellbeing.</p>
                </div>
              </div>
              <div className="align-items-stretch ">
                <div className="icon-box">
                  <div className="icon"><i className="fas fa-dna"></i></div>
                  <h4><a href="./Html-Files/blood.html">Blood Bank</a></h4>
                  <p>Know the blood banks and blood groups available around you. No one should suffer in emergencies.Find the nearest blood donation centers, check blood availability, and get information on how to donate or request blood in urgent situations.</p>
                </div>
              </div>
              <div className="align-items-stretch ">
                <div className="icon-box">
                  <div className="icon"><i className="fas fa-wheelchair"></i></div>
                  <h4><a href="">Disabled Person</a></h4>
                  <p>Convenient medical care is here. Wheelchair accessible hospitals and clinics, find all in one go.Access resources and support tailored to the needs of individuals with disabilities, ensuring a seamless healthcare experience for everyone.</p>
                </div>
              </div>
              <div className="align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="fas fa-notes-medical"></i></div>
                  <h4><a href="https://www.medicalnewstoday.com/">Health Post</a></h4>
                  <p>Weekly, monthly, yearly or each day, however you like it! Subscribe to our health post for expert articles, tips, and insights to help you make informed health decisions.</p>
                </div>
              </div>
            </div>
          </section>
        </center>

        {/* Doctors Section */}
        <section id="doctors" className="doctors">
          <div className="section-title">
            <h2>Doctors</h2>
            <p>Don't compromise your health when we have listed the best doctors for you!</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="member d-flex align-items-start">
                  <div className="pic"><img src={doctor1} className="img-fluid" alt="" style={{ width: '188px', height: '188px' }} /></div>
                  <div className="member-info">
                    <h4>Dermatologist</h4>
                    <br />
                    <div className="nxt-pg"><a href="Html-Files/derma.html"><button type="" className="doc-app">Appoint a Doctor</button></a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="member d-flex align-items-start">
                  <div className="pic"><img src={doctor2} className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Gynecologist</h4>
                    <br />
                    <div className="nxt-pg"><a href="Html-Files/gynaco.html"><button type="" className="doc-app">Appoint a Doctor</button></a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic"><img src={doctor3} className="img-fluid" alt="" style={{ width: '188px', height: '188px' }} /></div>
                  <div className="member-info">
                    <h4>Cardiologist</h4>
                    <br />
                    <div className="nxt-pg"><a href="Html-Files/cardio.html"><button type="" className="doc-app">Appoint a Doctor</button></a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic"><img src={doctor4} className="img-fluid" alt="" style={{ width: '188px', height: '188px' }} /></div>
                  <div className="member-info">
                    <h4>ENT</h4>
                    <br />
                    <div className="nxt-pg"><a href="Html-Files/ent.html"><button type="" className="doc-app">Appoint a Doctor</button></a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic"><img src={doctor5} className="img-fluid" alt="" style={{ width: '188px', height: '188px' }} /></div>
                  <div className="member-info">
                    <h4>Pediatrician</h4>
                    <br />
                    <div className="nxt-pg"><a href="Html-Files/pediatrition.html"><button type="" className="doc-app">Appoint a Doctor</button></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Located your appointment. Feel free to give us feedback and help us improve our digital med care.</p>
          </div>
          <div className="container">
            {/* Google map */}
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8055368048804!2d77.22981385036265!3d28.6655407892513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683919c3b%3A0xf5fc331b74c2b9e2!2sIndira%20Gandhi%20Delhi%20Technical%20University%20for%20Women!5e0!3m2!1sen!2sin!4v1679424592719!5m2!1sen!2sin"></iframe>
                <a href="https://www.fnfgo.com/">FNF Mods</a>
              </div>
            </div>
            <br />
            <div className="row mt-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-around' }}>
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="fa fa-location-dot"></i>
                    <h4>Location:</h4>
                    <p><a href="https://www.google.com/maps/search/?api=1&query=IGDTUW,Delhi" target="_blank" rel="noopener noreferrer">IGDTUW, Delhi</a></p>
                  </div>
                  <div className="email">
                    <i className="fa fa-envelope"></i>
                    <h4>Email:</h4>
                    <p><a href="mailto:rapidoc@mail.com">rapidoc@mail.com</a></p>
                  </div>
                  <div className="phone">
                    <i className="fa fa-phone"></i>
                    <h4>Call:</h4>
                    <p><a href="tel:+91 1234567890">+91 1234567890</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-5 mt-lg-0">
                <form id="contactForm" action="" role="form" className="php-email-form">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control enhanced-input" id="name" placeholder=" Your Name" required value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div className="form-group mt-3">
                    <input type="email" className="form-control enhanced-input" name="email" id="email" placeholder=" Your Email" required value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control enhanced-input" name="subject" id="subject" placeholder=" Subject" required value={formData.subject} onChange={handleInputChange} />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control enhanced-textarea" name="message" rows="5" placeholder="Message" required value={formData.message} onChange={handleInputChange}></textarea>
                  </div>
                  <div className="text-center"><button type="submit" className="btn-submit">Send Message</button></div>
                </form>
                <div id="confirmationMessage" className="confirmation-message">
                  Thank you for your message. We will get back to you shortly.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="test" className="testimonals">
          <h2 className="h2 section-title has-underline" style={{ marginTop: '15px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            What our Patients Say
          </h2>
          <div className="testimonals-content">
            <div className="swiper testimonals-slider js-testimonals-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide testimonals-item">
                  <div className="info">
                    <img src={profile1} alt="" />
                    <div className="text-box">
                      <h3 className="name">Dinesh</h3>
                      <span className="job">Bangalore</span>
                    </div>
                  </div>
                  <p>This website is an excellent platform for providing healthcare facilities to users. It offers information about hospital availability, including bed availability, the total number of patients, and more.</p>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <div className="swiper-slide testimonals-item">
                  <div className="info">
                    <img src={profile2} alt="" />
                    <div className="text-box">
                      <h3 className="name">Virat</h3>
                      <span className="job">Delhi</span>
                    </div>
                  </div>
                  <p>Using this platform, I could easily prebook my OPD appointments. It saved me a lot of time and effort. Highly recommended!</p>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <div className="swiper-slide testimonals-item">
                  <div className="info">
                    <img src={profile3} alt="" />
                    <div className="text-box">
                      <h3 className="name">Smrithi</h3>
                      <span className="job">Mumbai</span>
                    </div>
                  </div>
                  <p>The website's feature to check the availability of blood groups in hospitals is very helpful. It made my search much easier and quicker.</p>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <div className="swiper-slide testimonals-item">
                  <div className="info">
                    <img src={profile4} alt="" />
                    <div className="text-box">
                      <h3 className="name">John</h3>
                      <span className="job">Chennai</span>
                    </div>
                  </div>
                  <p>The detailed information about hospital facilities and patient management is commendable. This platform is a must-use for everyone.</p>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <div className="swiper-slide testimonals-item">
                  <div className="info">
                    <img src={profile5} alt="" />
                    <div className="text-box">
                      <h3 className="name">Shikha</h3>
                      <span className="job">Kolkata</span>
                    </div>
                  </div>
                  <p>Excellent service and very user-friendly interface. It helped me find the right hospital and prebook my appointment without any hassle.</p>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination js-testimonals-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </section>

        {/* Feedback Popup */}
        <div id="overlay" className={`overlay ${showFeedbackPopup ? 'active' : ''}`}></div>

        <div id="feedback-wrapper" className={`feedback-wrapper ${showFeedbackPopup ? 'active' : ''}`}>
          <div className="feedback-form">
            <span className="close-btn" onClick={closeFeedback}>&times;</span>
            <h2>We'd Love Your Feedback!</h2>
            <p>Let us know how we're doing and how we can improve. <br /> <span style={{ color: 'hwb(181 21% 19%)' }}><strong>RapiDoc</strong> Healthcare</span></p>
            <p>This is a confused face emoji: &#x1f615;</p>
            <div>
              <label htmlFor="rating" className="rate-us"> <strong>Please Rate us below</strong></label>
              <div className="container" style={{ textAlign: 'center' }}>
                <div className="emoji-gifs">
                  <img src="emoji1.gif" alt="Emoji 1" className="emoji-gif" data-emoji="😡" data-gif-src="emoji1.gif" width="50px" height="50px" onClick={() => handleEmojiClick('😡', 'emoji1.gif')} />
                  <img src="emoji2.gif" alt="Emoji 2" className="emoji-gif" data-emoji="☹️" data-gif-src="emoji2.gif" width="50px" height="50px" onClick={() => handleEmojiClick('☹️', 'emoji2.gif')} />
                  <img src="emoji3.gif" alt="Emoji 3" className="emoji-gif" data-emoji="😐" data-gif-src="emoji3.gif" width="50px" height="50px" onClick={() => handleEmojiClick('😐', 'emoji3.gif')} />
                  <img src="emoji5.gif" alt="Emoji 4" className="emoji-gif" data-emoji="😊" data-gif-src="emoji5.gif" width="50px" height="50px" onClick={() => handleEmojiClick('😊', 'emoji5.gif')} />
                  <img src="emoji4.gif" alt="Emoji 5" className="emoji-gif" data-emoji="😍" data-gif-src="emoji4.gif" width="50px" height="50px" onClick={() => handleEmojiClick('😍', 'emoji4.gif')} />
                </div>
                <div className="selected-emoji" style={{ textAlign: 'center' }}>
                  <p>You selected: <span id="selected-emoji">{selectedEmoji}</span></p>
                  {selectedGif && <img id="selected-gif" src={selectedGif} alt="Selected GIF" width="50px" height="50px" />}
                </div>
              </div>
              <form id="feedback-form" onSubmit={handleFeedbackSubmit}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your name" required value={feedbackFormData.name} onChange={handleFeedbackInputChange} name="name" />
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="Enter your email" required value={feedbackFormData.email} onChange={handleFeedbackInputChange} name="email" />
                <label htmlFor="feedback">Your Feedback</label>
                <textarea id="feedback" rows="5" placeholder="Let us know how we can improve..." required value={feedbackFormData.feedback} onChange={handleFeedbackInputChange} name="feedback"></textarea>
                <button type="submit" className="btn" style={{ width: '11rem', marginLeft: '100px' }}>Submit Feedback</button>
              </form>
            </div>
          </div>
        </div>
        <div id="feedback-message" className={showFeedbackMessage ? 'active' : ''}>Thanks for the feedback! ❤️</div>
        <div id="popup" className={`popup ${showFeedbackPopup ? 'active' : ''}`}>
          <div className="popup-content">
            <h2>Thank you for your Feedback! 💚</h2>
            <div className="popup-icon">
              <img src={feedbackTick} width="84" alt="✔️" />
            </div>
            <p>Your feedback has been received.<br /> We appreciate the input you provide.</p>
            <button className="popup-button" onClick={closePopup}><a className="active" aria-current="page">Back to Home</a></button>
          </div>
        </div>
        <br />

        {/* Visitor Counter */}
        <div className="visitor-counter">
          <div>Visitor</div>
          <div className="website-counter"></div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-wrapper">
          <div className="footer-columns">
            <div className="other-columns">
              <section>
                <h4>Quick Links</h4><br />
                <ul className="links">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="index.html#contact">Contact Us</a></li>
                  <li><a href="dex.html">Services</a></li>
                  <li><a href="#doctors">Doctors</a></li>
                  <li><a href="./faq.html">FAQ</a></li>
                </ul>
              </section>
              <section>
                <h4>Explore</h4><br />
                <ul className="links">
                  <li><a href="Html-Files/appointment.html">Appointment</a></li>
                  <li><a href="portal.html">Patient Portal</a></li>
                  <li><a href="log/login.html">Login account</a></li>
                  <li><a href="helpline.html">Helplines</a></li>
                  <li><a href="index.html#contact">Location</a></li>
                </ul>
              </section>
              <section>
                <h4>Legal</h4><br />
                <ul className="links">
                  <li><a href="Html-Files/customer_agreement.html">Customer Agreement</a></li>
                  <li><a href="Html-Files/privacy_policy_page.html">Privacy Policy</a></li>
                  <li><a href="Html-Files/terms_and_conditions.html">Terms and Conditions</a></li>
                  <li><a href="#">GDPR</a></li>
                </ul>
              </section>
              <section className="footer-col">
                <div>
                  <h4>RAPIDOC Newsletter</h4><br />
                  <p>
                    Subscribe to our newsletter for a weekly dose
                    of news, updates, helpful tips, and
                    exclusive offers.
                  </p>
                </div>
                <form action="#" className="subscribe-form" id="subscribeForm">
                  <input type="email" id="emailInput" placeholder="Your email" required />
                  <button type="submit" id="subscribeButton" className="b">SUBSCRIBE</button>
                </form>
              </section>
              <div id="subscribeBanner">
                <p>Thanks for subscribing!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-wrapper">
            <small id="ss"> <span id="year"></span><span> </span></small>
            <div className="social-wrapper">
              <div className="social-links">
                <div style={{ marginLeft: '300px', fontFamily: 'sans-serif' }}><i>Follow&nbsp;Us&nbsp;:&nbsp;</i></div>
                <div id="insta">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div id="twit">
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </div>
                <div id="git">
                  <a href="https://github.com/maheshpatil369/RapiDoc-HEALTHCARE-WEBSITE-production.git" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div id="linkd">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div id="fb"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></div>
                <div id="phn"> <a href="tel:+91 1234567890" title="+91 1234567890" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-phone"></i></a></div>
                <div id="mail1"><a href="mailto:info@rapidoc.com" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope"></i></a></div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <div id="back-to-top-container">
        <div className="circle">
          <svg id="back-to-top" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
          </svg>
        </div>
      </div>

      {/* Translate Button */}
      <button id="translateButton">Translate</button>
      {/* Popup for Google Translate */}
      <div id="translatePopup" className="popup">
        <div className="popup-content">
          <span className="close">&times;</span>
          <div id="google_translate_element"></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div id="progressBar"></div>
    </div>
  );
};

export default Home;