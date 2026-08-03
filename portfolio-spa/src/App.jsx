import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import "./App.css";

const initialProjects = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    category: "Web Design",
    description: "A full redesign of an online storefront focused on conversion.",
    image: "https://picsum.photos/seed/ecommerce/400/250",
  },
  {
    id: 2,
    title: "Brand Identity: Nova Coffee",
    category: "Branding",
    description: "Logo, packaging, and social templates for a coffee startup.",
    image: "https://picsum.photos/seed/coffee/400/250",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "UI/UX",
    description: "End-to-end UX for a mobile-first banking experience.",
    image: "https://picsum.photos/seed/banking/400/250",
  },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  // Event handler: add a new project (lifted state, passed down via props)
  function handleAddProject(newProject) {
    const projectWithId = {
      ...newProject,
      id: Date.now(),
    };
    setProjects((prevProjects) => [...prevProjects, projectWithId]);
  }

  // Event handler: update search term as user types
  function handleSearchChange(term) {
    setSearchTerm(term);
  }

  // Derived state: filtered list based on searchTerm (case-insensitive)
  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(term) ||
      project.category.toLowerCase().includes(term)
    );
  });

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section className="controls">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </section>

        <section className="form-section">
          <ProjectForm onAddProject={handleAddProject} />
        </section>

        <section className="list-section">
          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </div>
  );
}

export default App;
