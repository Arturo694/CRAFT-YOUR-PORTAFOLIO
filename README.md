# Craft Your Portfolio

This project is a template for anyone who wants to create a web portfolio. It is designed to be easily customizable and a great starting point for showcasing your work.

## Project Structure

```
src/
├── components/        # Reusable UI components
│   └── Navbar.astro   # Top navigation bar with links to all pages
├── layouts/           # Page layout wrappers
│   └── MainLayout.astro  # Main layout wrapping all pages (head, nav, footer)
├── pages/             # Route pages (each file = one URL)
│   ├── index.astro       # Homepage — hero section with profile photo and social links
│   ├── whoami.astro      # About me — bio, core values, timeline, fun facts
│   ├── myprojects.astro  # Projects — grid of project cards with tech tags and links
│   ├── skills.astro      # Skills — categorized list of technologies with descriptions
│   └── contactme.astro   # Contact — profile photo, contact details, and social buttons
└── styles/            # Global styles
    └── global.css     # Base CSS and font imports
```

Each page inside `pages/` becomes a route automatically (e.g. `/whoami`, `/skills`).

## License

This project is free to use and is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
