# AFTERLIGHT — Ghost in the Machine

> **Some stories never leave.**  
> A cinematic, browser-based ghost-story experience created for the *Ghost in the Machine* open-source AI challenge.

AFTERLIGHT is a small storytelling experience inspired by forgotten memories, eerie signals, and the stories we carry with us. Visitors can enter a prompt, choose an atmosphere, and generate a short or longer fictional story.

## ✨ Features

- Dark, cinematic interface with atmospheric glow effects
- Responsive layout for desktop and mobile
- Four story moods:
  - Haunting & quiet
  - Folklore & wonder
  - Cosmic dread
  - Beautifully melancholy
- Short and longer story modes
- Copy generated story text
- Archive-style story numbering
- No account or API key required for the current demo

## 🧰 Built With

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: Manrope, DM Mono, Playfair Display

## 📁 Project Structure

```text
afterlight/
├── index.html    # Page structure and content
├── style.css     # Styling, layout, responsive design, animations
├── script.js     # Story generation and copy interaction
└── README.md     # Project documentation
```

## 🚀 Run Locally

No build tools or package installation are required.

1. Download or clone this repository.
2. Open `index.html` in your browser.

Or run a local development server from the project folder:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## 🌐 Deploy

### GitHub Pages

1. Push the project files to a GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select your branch (usually `main`) and the root folder `/`.
5. Save. GitHub Pages will provide a public website URL after deployment.

### Vercel

1. Import the GitHub repository into Vercel.
2. Choose the project as a static site.
3. No build command is needed.
4. Deploy.

## 🕯️ Why Open Innovation Matters

AFTERLIGHT is envisioned as a private, adaptable story archive. Open-weight models can make this idea more personal and durable:

- **Privacy:** a local model can generate stories without sending personal prompts to a third-party service.
- **Model choice:** users and developers can swap models to fit their device, language, or creative style.
- **Offline potential:** once a compatible model is installed locally, the experience can work without an internet connection.
- **Community ownership:** open tools make it easier to inspect, improve, and maintain the project beyond one provider.

### Current AI implementation

The current version is a **frontend prototype**. Its story generator uses predefined JavaScript story fragments and is not connected to an actual AI model yet. The open-model benefits above describe the intended direction, not capabilities currently enabled in this demo.

A future version could connect a local open-weight model through a local inference server or an open-source inference framework.

## 💡 Future Improvements

- Connect a local open-weight language model
- Add a true offline mode with local inference
- Save and revisit stories in a local archive
- Add more themes, languages, and story styles
- Let users export stories as text or PDF

## 📜 License

Choose a license before publishing this repository. For example, the MIT License is a common choice for open-source projects. Add a `LICENSE` file if you decide to use it.

---

Made for the **Ghost in the Machine** open-source AI challenge.  
**AFTERLIGHT — Keep the stories.**
