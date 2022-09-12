import './styles/app.css';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Background from './components/Background'

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
