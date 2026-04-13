import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/Banners/Banner';
import Badge from './components/Badges/Badge';
import Card from './components/Cards/Card';
import { IoCloudUploadOutline } from "react-icons/io5";
import Testimonial from './components/Testimonials/Testimonial';

function App() {
  return (
  <Banner status="success">You have completed the task</Banner>

    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
