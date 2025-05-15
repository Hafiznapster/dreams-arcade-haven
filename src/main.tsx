
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add Google Font preload
const fontPreloadLink = document.createElement('link');
fontPreloadLink.rel = 'preconnect';
fontPreloadLink.href = 'https://fonts.googleapis.com';
document.head.appendChild(fontPreloadLink);

const fontPreloadLink2 = document.createElement('link');
fontPreloadLink2.rel = 'preconnect';
fontPreloadLink2.href = 'https://fonts.gstatic.com';
fontPreloadLink2.crossOrigin = "";
document.head.appendChild(fontPreloadLink2);

const fontStyleLink = document.createElement('link');
fontStyleLink.rel = 'stylesheet';
fontStyleLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';
document.head.appendChild(fontStyleLink);

createRoot(document.getElementById("root")!).render(<App />);
