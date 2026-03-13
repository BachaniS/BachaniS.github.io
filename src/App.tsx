import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NetflixTitle from './pages/NetflixTitle';
import Browse from './pages/Browse';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/Layout';
import WorkExperience from './detailed-pages/WorkExperience';
import Education from './detailed-pages/Education';
import Projects from './detailed-pages/Projects';
import Skills from './detailed-pages/Skills';
import ContactMe from './detailed-pages/ContactMe';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NetflixTitle />} />
        <Route path="/browse" element={<Browse />} />
        
        {/* Dashboard for a specific profile */}
        <Route path="/profile/:profileName" element={
          <Layout>
            <ProfilePage />
          </Layout>
        } />
        
        {/* Detailed Content Pages using the Layout */}
        <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
        <Route path="/education" element={<Layout><Education /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
