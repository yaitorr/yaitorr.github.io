# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an 11ty (Eleventy) static site generator project for creating a personal resume website. The project uses Nunjucks templates, Markdown content, and Sass for styling.

## Common Commands

### Development
- `pnpm dev` or `pnpm start` - Start development server with file watching
- `pnpm build` - Build production version
- `pnpm clean` - Clean the dist directory
- `pnpm install` - Install dependencies

### Architecture Notes
- **Entry point**: `.eleventy.js` - Main Eleventy configuration
- **Content structure**: Resume content is organized in `src/entries/` with separate folders for `work`, `education`, and `content`
- **Data files**: Personal information stored in `src/data/author.json`
- **Templates**: Nunjucks layouts in `src/layouts/`, includes in `src/includes/`
- **Assets**: Styles and scripts in `src/assets/` with 11ty.js compilation files
- **Utils**: Reusable Eleventy filters, transforms, and shortcodes in `utils/`

## Content Management

### Adding Work Experience
Create new markdown files in `src/entries/work/` with frontmatter containing:
- `title`, `company`, `start`/`end` dates, `location`, `description`

### Adding Education
Create new markdown files in `src/entries/education/` with similar frontmatter structure.

### Personal Information
Update `src/data/author.json` for contact details, skills, languages, and social links.

## Key Eleventy Features Used
- Collections for work and education entries (sorted by start date)
- Custom filters in `utils/filters.js` for date formatting and utilities
- Transforms in `utils/transforms.js` for HTML processing
- Icon sprite generation via `utils/iconsprite.js`
- RSS plugin for feed generation

## Build Output
- Development: Serves from memory with live reload
- Production: Outputs to `dist/` directory
- Assets are processed and minified for production builds