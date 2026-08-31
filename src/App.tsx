import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ContactPage from '@/pages/ContactPage';
import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/data';

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo(0, 0);
  };

  let page: React.ReactNode;
  if (path === '/' || path === '') {
    page = <HomePage onNavigate={navigate} />;
  } else if (path === '/about') {
    page = <AboutPage onNavigate={navigate} />;
  } else if (path === '/projects') {
    page = <ProjectsPage onNavigate={navigate} />;
  } else if (path === '/contact') {
    page = <ContactPage onNavigate={navigate} />;
  } else if (path.startsWith('/services/')) {
    const slug = path.replace('/services/', '');
    const service = services.find((s) => s.slug === slug);
    if (service) {
      page = <ServiceDetail service={service} onNavigate={navigate} />;
    } else {
      page = <HomePage onNavigate={navigate} />;
    }
  } else {
    page = <HomePage onNavigate={navigate} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header currentPath={path} onNavigate={navigate} />
      {page}
      <Footer onNavigate={navigate} />
      <FloatingActions />
    </div>
  );
}

export default App;
