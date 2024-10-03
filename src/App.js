import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // React Routerのインポート
import Header from './components/Header';  // Headerコンポーネントのインポート
import Footer from './components/Footer';  // Footerコンポーネントのインポート
import Home from './pages/Home';           // ホームページ
import About from './pages/About';         // Aboutページ
import Services from './pages/Services';   // サービスページ
import Contact from './pages/Contact';     // お問い合わせページ

function App() {
  return (
    <Router>
      <Header />  {/* どのページでも表示されるヘッダー */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />  {/* どのページでも表示されるフッター */}
    </Router>
  );
}

export default App;
