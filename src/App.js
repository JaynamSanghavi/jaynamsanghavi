import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="pageloader is-black is-active" id="loader">
        <span className="title title-pageloader">
          Salesforce Developer | Web Developer | Mobile App Developer | CS Undergrad
          <span className="pageloader-emoji">
            <img
              src="https://twemoji.maxcdn.com/v/12.1.6/72x72/1f468-200d-1f4bb.png"
              alt="👨‍💻"
            />{" "}
          </span>
        </span>
      </div>
      <div className="site-wrapper">
        <header className="site-header">
          <div className="site-title">
            <a href="/">
              <img src="images/photo.jpg" alt="avatars" className="avatar-img" />
            </a>
          </div>
          <nav className="navigation">
            <a
              href="https://drive.google.com/file/d/1WIFaKX0bBjMqXRQNtcFzMlmAmCnK0Gi7/view?usp=sharing"
              className="tag resume-tag is-dark is-medium is-rounded"
            >
              Resume
            </a>
          </nav>
        </header>

        <div className="has-text-centered">
          <div className="hero-header">
            <div className="headline">
              Namaste
              <span className="wave-emoji">
                <img
                  src="https://twemoji.maxcdn.com/v/12.1.6/72x72/1f64f-1f3fb.png"
                  alt="🙏🏻"
                />
              </span>
              <br />I am <span className="name">Jaynam Sanghavi</span>
            </div>
            <div className="primary-content">
              <p>
                I'm a Software &amp; Web developer based in Mumbai, India. I
                help users and businesses reach their goals by building
                meaningful digital products and interactive experiences.
                Building applications is central to everything. I love to work
                with creative people.
              </p>
            </div>
            <section>
              <div className="process-section">
                <div className="container">
                  <div className="social-bar">
                    <div className="social-icons mb-3 iconpad">
                      <a
                        href="https://github.com/JaynamSanghavi"
                        target="_blank"
                        className="slider-nav-item"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jaynam-sanghavi-b85291155/"
                        target="_blank"
                        className="slider-nav-item"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        href="mailto:jaynam123@gmail.com?Subject=Hey%20lets%20have%20a%20chat%20over%20some%20coffee!"
                        target="_blank"
                        className="slider-nav-item"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-envelope"></i>
                      </a>
                      <a
                        href="https://medium.com/@jaynam404"
                        target="_blank"
                        className="slider-nav-item"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-medium-m"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="hero-header">
        <div className="hero-header" id="education">
          <div className="section-header">
            Studied from
            <span className="tag-emoji">
              <img
                src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f4d6.png"
                alt="📖"
                className="book"
              />
            </span>
          </div>
          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64 project-logo">
                        <img src="images/svv.png" alt="Placeholder image" />
                      </figure>
                    </div>
                  </div>
                  <div className="project-data">
                    <h4>
                      <a href="javascript:void(0)">K. J. Somaiya College of Engineering</a>
                      <br />
                      BTech in Computer Engineering (2017-2020)
                      <br />
                      CPA: 8.6/10
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64 project-logo">
                        <img src="images/VESP.png" alt="Placeholder image" />
                      </figure>
                    </div>
                  </div>
                  <div className="project-data">
                    <h4>
                      <a href="javascript:void(0)">Vivekanand Education Society's Polytechnic College</a>
                      <br />
                      Diploma in Computer technology (2014-2017)
                      <br />
                      Percentage: 87%
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-header" id="workex">
          <div className="section-header">
            Also worked with
            <span className="tag-emoji">
              <img
                src="https://twemoji.maxcdn.com/v/12.1.6/72x72/1f4bc.png"
                alt="💼"
                className="suitcase"
              />
            </span>
          </div>
          <div className="columns is-multiline">
          <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image project-logo">
                        <img src="images/WoltersKluwer.svg" alt="Placeholder image" />
                      </figure>
                    </div>
                  </div>
                  <div className="project-data">
                    <h4>
                      <a href="javascript:void(0)">Wolters Kluwer</a>
                      <br />
                      Associate Enterprise Software Engineer (Oct 20 - Present)
                    </h4>
                    <p>
                    Collaborated with business for requirement gathering to onboard them onto the salesforce sales cloud platform.Analyzing the 
                    requirement, designing the architecture, and developing it in the sales cloud platform.
                    </p>
                    <div className="tag-list">
                      <span className="tag is-black">Salesforce</span>
                      <span className="tag is-black">Apex</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64 project-logo">
                        <img src="images/svv.png" alt="Placeholder image" />
                      </figure>
                    </div>
                  </div>
                  <div className="project-data">
                    <h4>
                      <a href="javascript:void(0)">KJSCE Outreach Center</a>
                      <br />
                      Member of Technical Team (Feb 19 - April 19)
                    </h4>
                    <p>
                    Developed a mobile application which would display their information to user. Also, revamp their UI design and brought the 
                    application to ios platform.
                    </p>
                    <div className="tag-list">
                      <span className="tag is-black">Flutter SDK</span>
                      <span className="tag is-black">Firebase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64 project-logo">
                        <img src="images/svv.png" alt="Placeholder image" />
                      </figure>
                    </div>
                  </div>
                  <div className="project-data">
                    <h4>
                      <a href="javascript:void(0)">KJSCE Computer Department</a>
                      <br />
                      Backend Intern (June 18 - July 18)
                    </h4>
                    <p>
                    Designed, developed, and architected a website for K.J Somaiya College of Engg for booking of common halls, seminar halls and 
                    external device like projectors among various department.
                    </p>
                    <div className="tag-list">
                      <span className="tag is-black">Vanilla PHP</span>
                      <span className="tag is-black">MySQL</span>
                      <span className="tag is-black">AJAX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-header" id="projects">
          <div className="section-header">
            Project I've developed
            <span className="tag-emoji">
              <img
                src="https://twemoji.maxcdn.com/v/12.1.6/72x72/1f4bb.png"
                alt="💻"
                className="laptop"
              />
            </span>
          </div>
          <div className="columns is-multiline">
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64 project-logo">
                        <img src="images/cropbot.svg" alt="Placeholder image" />
                      </figure>
                    </div>
                  </div>
                  <div className="project-data">
                    <h4>
                      <a
                        href="http://cropbotapi.herokuapp.com/"
                        target="_blank"
                      >
                        CropBot
                        <span>
                          <i className="fas fa-link"></i>
                        </span>
                      </a>
                    </h4>
                    <p>
                      A Restful API and a chatbot to advise the farmers about
                      crops built over Node.js, Express, MongoDB and Dialogflow.
                    </p>
                    <div className="tag-list">
                      <span className="tag is-black">Mongo DB</span>
                      <span className="tag is-black">Node.js</span>
                      <span className="tag is-black">Express.js</span>
                      <span className="tag is-black">Dialogflow</span>
                      <span className="tag is-black">Heroku</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64 project-logo">
                        <img src="images/docs.svg" alt="Placeholder image" />
                      </figure>
                    </div>
                  </div>
                  <div className="project-data">
                    <h4>
                      <a
                        href="https://github.com/JaynamSanghavi/gitword"
                        target="_blank"
                      >
                        Docs Management
                        <span>
                          <i className="fab fa-github"></i>
                        </span>
                      </a>
                    </h4>
                    <p>
                      A version control system built for Microsoft Word (docx)
                      using ASP .NET MVC Framework.
                    </p>
                    <div className="tag-list">
                      <span className="tag is-black">C#</span>
                      <span className="tag is-black">Asp .NET</span>
                      <span className="tag is-black">MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64 project-logo">
                        <img
                          src="images/qr-scanner.svg"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="project-data">
                    <h4>
                      <a
                        href="https://github.com/JaynamSanghavi/QR_SCANNER_CREATION"
                        target="_blank"
                      >
                        QR Scanner App
                        <span>
                          <i className="fab fa-github"></i>
                        </span>
                      </a>
                    </h4>
                    <p>
                      A Cross Platform Application for creating and scanning of
                      QR Code built using Flutter SDK.
                    </p>
                    <div className="tag-list">
                      <span className="tag is-black">Flutter SDK</span>
                      <span className="tag is-black">Dart</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64 project-logo">
                        <img src="images/trello.svg" alt="Placeholder image" />
                      </figure>
                    </div>
                  </div>
                  <div className="project-data">
                    <h4>
                      <a
                        href="https://github.com/JaynamSanghavi/trello"
                        target="_blank"
                      >
                        Trello Clone App
                        <span>
                          <i className="fab fa-github"></i>
                        </span>
                      </a>
                    </h4>
                    <p>
                      A Clone Application of Trello Software built using Object
                      Oriented PHP.
                    </p>
                    <div className="tag-list">
                      <span className="tag is-black">PHP</span>
                      <span className="tag is-black">MySQL</span>
                      <span className="tag is-black">jQuery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64 project-logo">
                        <img
                          src="images/doctor-finder.png"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="project-data">
                    <h4>
                      <a
                        href="https://github.com/JaynamSanghavi/Doctor-Finder"
                        target="_blank"
                      >
                        Doctor Finder
                        <span>
                          <i className="fab fa-github"></i>
                        </span>
                      </a>
                    </h4>
                    <p>
                      A platform that can search all the registered Doctors
                      based on location built using Object Oriented PHP.
                    </p>
                    <div className="tag-list">
                      <span className="tag is-black">PHP</span>
                      <span className="tag is-black">MySQL</span>
                      <span className="tag is-black">AJAX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64 project-logo">
                        <img
                          src="images/white-graphics.svg"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="project-data">
                    <h4>
                      <a
                        href="https://github.com/JaynamSanghavi/WhiteGraphicsTemplate"
                        target="_blank"
                      >
                        White Graphics
                        <span>
                          <i className="fab fa-github"></i>
                        </span>
                      </a>
                    </h4>
                    <p>
                      A Responsive Frontend Website User Interface built using
                      HTML, CSS, JavaScript & Bootstrap.
                    </p>
                    <div className="tag-list">
                      <span className="tag is-black">HTML</span>
                      <span className="tag is-black">CSS</span>
                      <span className="tag is-black">JavaScript</span>
                      <span className="tag is-black">Bootstrap</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="section-header">Tech I can help you with</div>
          <div className="columns is-multiline skills-list is-mobile has-text-centered">
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/c.svg"
                alt="C-icon"
              />
              <p className="primary-content">C Programming</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/java.svg"
                alt="java-icon"
              />
              <p className="primary-content">Java</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/html-5.svg"
                alt="html-5-icon"
              />
              <p className="primary-content">HTML</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/css-3.svg"
                alt="css-3-icon"
              />
              <p className="primary-content">CSS</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/javascript.svg"
                alt="js-icon"
              />
              <p className="primary-content">JavaScript</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/jquery.svg"
                alt="jquery-icon"
              />
              <p className="primary-content">jQuery</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/bootstrap.svg"
                alt="bootstrap-icon"
              />
              <p className="primary-content">Bootstrap</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/mysql.svg"
                alt="mysql-icon"
              />
              <p className="primary-content">MySQL</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/php.svg"
                alt="php-icon"
              />
              <p className="primary-content">PHP Programming</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/flutter.svg"
                alt="flutter-icon"
              />
              <p className="primary-content">Flutter SDK</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/c-sharp.svg"
                alt="c#-icon"
              />
              <p className="primary-content">C# Programming</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/salesforce.svg"
                alt="salesforce-icon"
              />
              <p className="primary-content">Salesforce</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/mongodb.svg"
                alt="mongodb-icon"
              />
              <p className="primary-content">Mongo DB</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/express.svg"
                alt="express-icon"
              />
              <p className="primary-content">Express.js</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/react.svg"
                alt="react-icon"
              />
              <p className="primary-content">React.js</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/nodejs.svg"
                alt="nodejs-icon"
              />
              <p className="primary-content">Node.js</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/git.svg"
                alt="git-icon"
              />
              <p className="primary-content">Git/Github</p>
            </div>
            <div className="column is-2-desktop skill is-4-mobile">
              <img
                src="https://cdn.svgporn.com/logos/heroku.svg"
                alt="heroku-icon"
              />
              <p className="primary-content">Heroku</p>
            </div>
          </div>
        </div>
        
      </div>
      <footer className="footer footer-custom">
        <div className="content has-text-centered">
          <p>
            Handcrafted with
            <span className="footer-emoji">
              <img
                src="https://twemoji.maxcdn.com/v/12.1.6/72x72/2764.png"
                alt="❤️"
              />
            </span>
            from Jaynam Sanghavi.
          </p>
          <div className="footer-information">
            <p>
              Made with <a href="https://bulma.io/">Bulma</a>,
              <a href="https://www.flaticon.com/">Flaticon</a> &amp;
              <a href="https://fontawesome.com/"> &nbsp;Fontawesome</a> <br />
              &copy; Jaynam Sanghavi 2020.
              <br />
              All logo and images are trademarks of respective organizations.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
