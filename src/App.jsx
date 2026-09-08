import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { loadPortfolio, savePortfolio } from "./portfolioData";
import "./premium.css";

function Admin({ portfolio, setPortfolio }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  if (!authenticated) return <main className="admin-login"><form onSubmit={(event) => { event.preventDefault(); password === "love123" ? setAuthenticated(true) : setMessage("Incorrect password"); }}><p className="eyebrow">PRIVATE AREA</p><h1>Admin access</h1><p>Manage every section of your public portfolio.</p><input autoFocus type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} /><button type="submit">Continue</button>{message && <small>{message}</small>}<a href="/">Back to portfolio</a></form></main>;

  const update = (section, field, value) => setPortfolio({ ...portfolio, [section]: { ...portfolio[section], [field]: value } });
  const updateItem = (section, index, field, value) => setPortfolio({ ...portfolio, [section]: portfolio[section].map((item, itemIndex) => itemIndex === index ? { ...item, [field]: value } : item) });
  const removeItem = (section, index) => setPortfolio({ ...portfolio, [section]: portfolio[section].filter((_, itemIndex) => itemIndex !== index) });
  const addItem = (section, item) => setPortfolio({ ...portfolio, [section]: [...portfolio[section], item] });
  const save = (event) => { event.preventDefault(); savePortfolio(portfolio); setMessage("All changes saved. Open the portfolio to see them."); };

  return <main className="admin-page"><header><strong>SV / STUDIO</strong><a href="/">View portfolio</a></header><div className="admin-content"><p className="eyebrow">CONTENT CONTROL</p><h1>Shape your<br /><em>public presence.</em></h1><p className="admin-note">Edit any section below. Changes stay in this browser and appear on the public portfolio after saving.</p><form onSubmit={save}>
    <AdminSection title="Profile and hero">
      <Field label="Name" value={portfolio.profile.name} onChange={(value) => update("profile", "name", value)} />
      <Field label="Role" value={portfolio.profile.role} onChange={(value) => update("profile", "role", value)} />
    <Field label="Hero headline" value={portfolio.profile.headline} onChange={(value) => update("profile", "headline", value)} />
      <Field label="Introduction" value={portfolio.profile.intro} onChange={(value) => update("profile", "intro", value)} multiline />
      <Field label="Profile image URL" value={portfolio.profile.image} onChange={(value) => update("profile", "image", value)} />
    </AdminSection>
    <AdminSection title="About">
      <Field label="Section introduction" value={portfolio.about.intro} onChange={(value) => update("about", "intro", value)} multiline />
      {portfolio.about.cards.map((item, index) => <EditorCard key={index} title={`About card ${index + 1}`} onRemove={() => setPortfolio({ ...portfolio, about: { ...portfolio.about, cards: portfolio.about.cards.filter((_, itemIndex) => itemIndex !== index) } })}><Field label="Title" value={item.title} onChange={(value) => setPortfolio({ ...portfolio, about: { ...portfolio.about, cards: portfolio.about.cards.map((card, itemIndex) => itemIndex === index ? { ...card, title: value } : card) } })} /><Field label="Description" value={item.desc} onChange={(value) => setPortfolio({ ...portfolio, about: { ...portfolio.about, cards: portfolio.about.cards.map((card, itemIndex) => itemIndex === index ? { ...card, desc: value } : card) } })} multiline /></EditorCard>)}
      <button type="button" className="admin-secondary" onClick={() => setPortfolio({ ...portfolio, about: { ...portfolio.about, cards: [...portfolio.about.cards, { title: "New focus", desc: "Describe this area of your work." }] } })}>Add about card</button>
    </AdminSection>
    <AdminSection title="Skills">
      {portfolio.skills.map((item, index) => <EditorCard key={index} title={`Skill ${index + 1}`} onRemove={() => removeItem("skills", index)}><Field label="Name" value={item.name} onChange={(value) => updateItem("skills", index, "name", value)} /><Field label="Icon color" value={item.color} onChange={(value) => updateItem("skills", index, "color", value)} /></EditorCard>)}
      <button type="button" className="admin-secondary" onClick={() => addItem("skills", { name: "New skill", color: "#172321" })}>Add skill</button>
    </AdminSection>
    <AdminSection title="Projects">
      {portfolio.projects.map((item, index) => <EditorCard key={index} title={item.name || `Project ${index + 1}`} onRemove={() => removeItem("projects", index)}><Field label="Name" value={item.name} onChange={(value) => updateItem("projects", index, "name", value)} /><Field label="Description" value={item.description} onChange={(value) => updateItem("projects", index, "description", value)} multiline /><Field label="Technologies" value={item.tech} onChange={(value) => updateItem("projects", index, "tech", value)} /><Field label="Live URL" value={item.live} onChange={(value) => updateItem("projects", index, "live", value)} /><Field label="Code URL" value={item.github} onChange={(value) => updateItem("projects", index, "github", value)} /></EditorCard>)}
      <button type="button" className="admin-secondary" onClick={() => addItem("projects", { name: "New project", description: "Project description.", tech: "React", live: "https://", github: "https://github.com/" })}>Add project</button>
    </AdminSection>
    <AdminSection title="Certifications">
      {portfolio.certifications.map((item, index) => <EditorCard key={index} title={item.title || `Certificate ${index + 1}`} onRemove={() => removeItem("certifications", index)}><Field label="Title" value={item.title} onChange={(value) => updateItem("certifications", index, "title", value)} /><Field label="Certificate URL" value={item.link} onChange={(value) => updateItem("certifications", index, "link", value)} /></EditorCard>)}
      <button type="button" className="admin-secondary" onClick={() => addItem("certifications", { title: "New certificate", link: "https://" })}>Add certification</button>
    </AdminSection>
    <AdminSection title="Resumes">
      {portfolio.resumes.map((item, index) => <EditorCard key={index} title={item.title || `Resume ${index + 1}`} onRemove={() => removeItem("resumes", index)}><Field label="Title" value={item.title} onChange={(value) => updateItem("resumes", index, "title", value)} /><Field label="Description" value={item.description} onChange={(value) => updateItem("resumes", index, "description", value)} multiline /><Field label="Resume URL" value={item.link} onChange={(value) => updateItem("resumes", index, "link", value)} /></EditorCard>)}
      <button type="button" className="admin-secondary" onClick={() => addItem("resumes", { title: "New resume", description: "Resume description.", link: "https://" })}>Add resume</button>
    </AdminSection>
    <AdminSection title="Contact">
      <Field label="Heading" value={portfolio.contact.title} onChange={(value) => update("contact", "title", value)} /><Field label="Introduction" value={portfolio.contact.intro} onChange={(value) => update("contact", "intro", value)} multiline /><Field label="Email" value={portfolio.contact.email} onChange={(value) => update("contact", "email", value)} /><Field label="GitHub URL" value={portfolio.contact.github} onChange={(value) => update("contact", "github", value)} /><Field label="LinkedIn URL" value={portfolio.contact.linkedin} onChange={(value) => update("contact", "linkedin", value)} />
    </AdminSection>
    <button type="submit" className="admin-save">Save all changes</button>{message && <small className="admin-message">{message}</small>}
  </form></div></main>;
}

function AdminSection({ title, children }) { return <section className="admin-section"><h2>{title}</h2>{children}</section>; }
function EditorCard({ title, onRemove, children }) { return <div className="editor-card"><div className="editor-card-heading"><h3>{title}</h3><button type="button" className="remove-button" onClick={onRemove}>Remove</button></div>{children}</div>; }
function Field({ label, value, onChange, multiline = false }) { const Control = multiline ? "textarea" : "input"; return <label className="admin-field">{label}<Control value={value || ""} onChange={(event) => onChange(event.target.value)} rows={multiline ? 3 : undefined} /></label>; }

function App() {
  const [portfolio, setPortfolio] = useState(loadPortfolio);

  if (window.location.pathname === "/admin") {
    return <Admin portfolio={portfolio} setPortfolio={setPortfolio} />;
  }

  return (
    <div className="app">

      <Navbar profile={portfolio.profile} />

      <Hero profile={portfolio.profile} />

      <About about={portfolio.about} />

      <Skills skills={portfolio.skills} />

      <Resume resumes={portfolio.resumes} />

      <Certifications certifications={portfolio.certifications} />

      <Projects projects={portfolio.projects} />

      <Contact contact={portfolio.contact} />

    </div>
  );
}

export default App;