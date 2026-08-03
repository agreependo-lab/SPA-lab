import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title.trim() || !formData.category.trim()) {
      alert("Please fill in at least a title and category.");
      return;
    }

    onAddProject({
      title: formData.title,
      category: formData.category,
      description: formData.description || "No description provided.",
      image: formData.image || "https://picsum.photos/seed/default/400/250",
    });

    setFormData({ title: "", category: "", description: "", image: "" });
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add a New Project</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
        placeholder="Project title"
      />

      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        value={formData.category}
        onChange={handleChange}
        placeholder="e.g. Web Design, Branding"
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Short project description"
      />

      <label htmlFor="image">Image URL (optional)</label>
      <input
        id="image"
        name="image"
        type="text"
        value={formData.image}
        onChange={handleChange}
        placeholder="https://..."
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
