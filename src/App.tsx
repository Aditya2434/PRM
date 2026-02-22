import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs'; // <-- Imported New Page
import RefractoryMaterial from '@/pages/products/RefractoryMaterial';
import IndustrialEquipments from '@/pages/products/IndustrialEquipments';
import CastIronParts from '@/pages/products/CastIronParts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} /> {/* <-- Added Route */}
          <Route path="/products/refractory-material" element={<RefractoryMaterial />} />
          <Route path="/products/industrial-equipments" element={<IndustrialEquipments />} />
          <Route path="/products/cast-iron-parts" element={<CastIronParts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;