import { Routes, Route } from 'react-router-dom';
import { PresentationLayout } from './components/PresentationLayout';
import { templates } from './slides/templatesRegistry';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PresentationLayout />} />
      <Route path="/templates" element={<PresentationLayout slides={templates} />} />
    </Routes>
  );
}

export default App;
