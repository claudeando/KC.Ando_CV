import './styles/app.css';


import logo from './assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Background() {
  return (
    <>
      <div className="background">
        <div className="sphere1"></div>
        <div className="sphere2"></div>
      </div>
    </>
  )
}

function Header() {
  return (
    <header>
      <div>
        <h1>CLAUDE ANDO</h1>
        <p>Frontend Developer / UI Engineer</p>
      </div>
      <div className="contact">
        <ul>
          <li>+44 7384 610209</li>
          <li><a href="mailto:info@claudeando.com">info@claudeando.com</a></li>
        </ul>
      </div>
    </header>
  )
}

function Main() {
  return (
    <main>
      <div className="mainCol">
        <section id="employement">
          <span>WORK HISTORY</span>
          <div className="content">
            <div>
              <h2>Nocturna.io | Frontend Developer / UI Designer<br></br>
                <p> Jan 2022 - Present | London, UK</p>
              </h2>
            </div>
            <div>
              <ul>
                <li><p>Designed and built functional prototypes for decentralised applications in Figma based on market analysis and competitor review. </p></li>
                <li><p>Built Web 3.0 applications such as decentralised exchange platform, NFT minter, smart contract deployer (React.js). Worked with an engineering team in an Agile setting, deployed applications on DigitalOcean and AWS, CICD pipeline using Circle CI.</p></li>
              </ul>
            </div>
          </div>


          <div className="content">
            <div>
              <h2>Ando.studio (Self-Employed) | Creative Director<br></br>
                <p>May 2020 - Present | Online, UK</p>
              </h2>

            </div>
            <div>
              <ul>
                <li><p>Build websites, web applications, and e-commerce solutions for small-mid sized businesses and film production companies.</p></li>
                <li><p>Provide creative solutions for projects and startups such as UX/UI, wireframing, headshots, video production, logo design, branding.</p></li>
              </ul>
            </div>
          </div>


          <div className="content">
            <div>
              <h2>CGTN | Cinematographer / Director of Photography<br></br>
                <p>May 2020 - Present | Online, UK</p>
              </h2>

            </div>
            <div>
              <ul>
                <li><p>Build websites, web applications, and e-commerce solutions for small-mid sized businesses and film production companies.</p></li>
                <li><p>Provide creative solutions for projects and startups such as UX/UI, wireframing, headshots, video production, logo design, branding.</p></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="project">
          <span>PROJECT</span>
          <div>
            <div>
              <h2>Frontend Developer / UI Designer</h2>
              <p>Spring 2022 | London, UK</p>
            </div>
            <div>
              <ul>
                <li><p>Designed a portfolio site, developed using HTML/CSS/JavaScript with generative art implemented using p5.js and web3.js injection, deployed on AWS with CICD pipeline in CircleCI.</p></li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h2>NFT Collection Development / Visual Artist</h2>
              <p>2022 | London, UK</p>
            </div>
            <div>
              <ul>
                <li><p>Designed NFT components for generative art in Figma</p></li>
                <li><p>Created 1,000 randomly generated NFTs using Javascript and Moralis SDK</p></li>
                <li><p>Stored images and metadata on IPFS</p></li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h2>UX/UI Designer</h2>
              <p>Barbican AR | 2021 | London, UK</p>
            </div>
            <div>
              <ul>
                <li><p>Based on secondary and on-site qualitative research, outlined expected functionality and use cases of the mobile application. </p></li>
                <li><p>Built the wireframe and prototype of the AR application for Barbican Centre on Figma.</p></li>
              </ul>
            </div>
          </div>

        </section>
      </div>

      <div className="mainCol">
        <section id="skills">
          <span>SKILLS</span>
          <div>
            <h2>Technical Skills</h2>
            <p>JavaScript / React.js / Node.js / SCSS / CSS / HTML / NPM / Git / Blneder / WebGL /three.js / p5.js / Solidity / Web3.0 Dapps / AWS / CICD / Wordpress
              <br></br><br></br>
              Blender / Unity / Photoshop / Lightroom / Davinci Resolve /Figma / UX/UI</p>
          </div>

          <div>
            <h2>Languages</h2>
            <ul>
              <li><p>English (native)</p></li>
              <li><p>Japanese 日本語 (native)</p></li>
              <li><p>Mandarin Chinese 普通话 (Professional)</p></li>
            </ul>
          </div>
        </section>

        <section id="education">
          <span>EDUCATION</span>
          <h2>City, University of London<br></br>
            <p>MSc Human-Computer Interaction Design</p>
          </h2>
          <h2>The University of London<br></br>
            <p>BA International Relations / Chinese</p>
          </h2>
        </section>

        <section id="achievement">
          <span>OTHER ACHIEVEMENTS</span>
          <ul>
            <li><p>The Independent Photo Milan - 2022</p></li>
            <li><p>PhotoVogue Italia Award - Sep 2021</p></li>
            <li><p>Google UX Design - Autumn 2021</p></li>
            <li><p>HSK5 (汉语水平考试五级) - Apr 2021</p></li>
          </ul>
        </section>

        <section id="contact">
          <ul>
            <li><a href="https://claudeando.com" target="_blank" rel="noreferrer">Portfolio</a></li>
            <li><FontAwesomeIcon className="fa" icon={faGithub} size="1x" /><a href="https://github.com/claudeando" target="_blank" rel="noreferrer">Github</a></li>
            <li><FontAwesomeIcon className="fa" icon={faLinkedin} size="1x" /><a href="https://linkedin.com/in/claudeando" target="_blank" rel="noreferrer">Linkedin</a></li>
          </ul>
        </section>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <a href="https://claudeando.com"><img src={logo} alt="Claude Ando Logo"></img></a>
    </footer>
  )
}

function CV() {
  return (
    <section id="cv">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </section>
  );
}

function App() {
  return (
    <>
      <Background></Background>
      <CV></CV>
    </>
  );
}

export default App;
