import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ViewState, Project } from './types';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { Projects } from './views/Projects';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { ProjectDetail } from './views/ProjectDetail';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<ViewState>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (newView: ViewState) => {
    // If navigating away from detail, clear selection
    if (newView !== 'project-detail') {
      setSelectedProject(null);
    }
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setView('project-detail');
  };

  // Render view content based on state
  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home key="home" onNavigate={handleNavigate} />;
      case 'projects':
        return <Projects key="projects" onProjectSelect={handleProjectSelect} />;
      case 'project-detail':
        if (!selectedProject) return <Projects key="projects-fallback" onProjectSelect={handleProjectSelect} />;
        return (
          <ProjectDetail 
            key={selectedProject.id} // Added key to force re-render/animation on project change
            project={selectedProject} 
            onBack={() => handleNavigate('projects')} 
            onNext={handleProjectSelect}
          />
        );
      case 'about':
        return <About key="about" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Home key="home" onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#e0e0e0] font-sans selection:bg-[#ccff00] selection:text-black">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar currentView={view} onNavigate={handleNavigate} />
          
          <main className="min-h-screen w-full relative">
            <AnimatePresence mode="wait">
              {renderView()}
            </AnimatePresence>
          </main>

          <Footer onNavigate={handleNavigate} />
        </>
      )}
    </div>
  );
}