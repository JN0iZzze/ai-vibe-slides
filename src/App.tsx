import { Routes, Route } from 'react-router-dom';
import { PresentationLayout } from './components/PresentationLayout';
import { templates } from './slides/templatesRegistry';
import { SessionProvider } from './contexts/SessionContext';
import { VotePage } from './pages/VotePage';

function App() {
  return (
    <SessionProvider>
      <Routes>
        <Route path="/" element={<PresentationLayout />} />
        <Route path="/templates" element={<PresentationLayout slides={templates} />} />
        <Route path="/vote" element={<VotePage />} />
      </Routes>
    </SessionProvider>
  );
}

export default App;
