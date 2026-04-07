// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs'; 
import Services from '@/pages/Services';
import Projects from '@/pages/Projects';
import Clients from '@/pages/Clients';
import Contact from '@/pages/Contact'; 
import PrivacyPolicy from '@/pages/PrivacyPolicy'; // <-- Imported the new page
import RefractoryMaterial from '@/pages/products/RefractoryMaterial';
import RefractoryProductDetails from '@/pages/products/RefractoryProductDetails'; 
import IndustrialEquipments from '@/pages/products/IndustrialEquipments';
import CastIronParts from '@/pages/products/CastIronParts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} /> 
          
          {/* Privacy Policy Page */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* Catalog Page */}
          <Route path="/products/refractory-material" element={<RefractoryMaterial />} />
          
          <Route path="/products/refractory-material/:productId" element={<RefractoryProductDetails />} />
          
          <Route path="/products/industrial-equipments" element={<IndustrialEquipments />} />
          <Route path="/products/cast-iron-parts" element={<CastIronParts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;