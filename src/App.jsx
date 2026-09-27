import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import EnquiryModal from './components/EnquiryModal';
import PageTransition from './components/PageTransition';
import ScrollProgress from './components/ScrollProgress';

import Home from './pages/Home';
import About from './pages/About';
import Clients from './pages/Clients';
import Products from './pages/Products';
import ProductDetailPage from './pages/ProductDetailPage';
import Contact from './pages/Contact';

// Scroll to top helper on route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function AnimatedRoutes({ handleOpenQuoteModal }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home onRequestQuote={handleOpenQuoteModal} />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About onRequestQuote={handleOpenQuoteModal} />
            </PageTransition>
          }
        />
        <Route
          path="/clients"
          element={
            <PageTransition>
              <Clients onRequestQuote={handleOpenQuoteModal} />
            </PageTransition>
          }
        />
        <Route
          path="/applications"
          element={
            <PageTransition>
              <Clients onRequestQuote={handleOpenQuoteModal} />
            </PageTransition>
          }
        />
        <Route
          path="/products"
          element={
            <PageTransition>
              <Products onRequestQuote={handleOpenQuoteModal} />
            </PageTransition>
          }
        />
        <Route
          path="/products/:slug"
          element={
            <PageTransition>
              <ProductDetailPage onRequestQuote={handleOpenQuoteModal} />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <Home onRequestQuote={handleOpenQuoteModal} />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState(null);

  const handleOpenQuoteModal = (product = null) => {
    setSelectedProductForQuote(product);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProductForQuote(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col bg-white text-industrial-dark font-sans selection:bg-industrial-steel selection:text-white overflow-x-clip">
        {/* Consistent Sticky Industrial Header */}
        <Header onRequestQuote={() => handleOpenQuoteModal()} />

        {/* Dynamic Main Content Pages with Smooth Page Transitions */}
        <main className="flex-grow">
          <AnimatedRoutes handleOpenQuoteModal={handleOpenQuoteModal} />
        </main>

        {/* Consistent Industrial Footer */}
        <Footer onRequestQuote={() => handleOpenQuoteModal()} />

        {/* Global Floating Actions (Call + Quote) */}
        <FloatingActions onRequestQuote={() => handleOpenQuoteModal()} />

        {/* Global Quotation Request Modal */}
        <EnquiryModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuoteModal}
          selectedProduct={selectedProductForQuote}
        />
      </div>
    </Router>
  );
}
