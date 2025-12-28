# PDF Upload & Viewer (React)

## This project implements the frontend requirements provided by Delta Capita, focusing on scalability, accessibility, and maintainable architecture.

    Components are kept presentational where possible, with business logic abstracted into hooks and services to improve testability.


## Features
    - Upload PDF with validation (type & size)
    - Preview PDF pages
    - Responsive PDF viewer
    - Loading state handling
    - Clean component-based architecture

## Project Structure
    src/
    ├─ components/
    │   ├─ PdfUpload.tsx
    │   ├─ PdfViewer.tsx
    │   └─ Loader.tsx
    ├─ pages/
    │   └─ Home.tsx
    ├─ services/
    │   └─ pdfService.ts
    ├─ types/
    │   └─ pdf.ts
    └─ App.tsx
    
### How to run Locally 

    npm install
    npm run dev

## Tech Stack 

    - React (Functional Components & Hooks)
    - TypeScript
    - Vite
    - react-pdf & pdfjs-dist for PDF rendering
    - Vanilla CSS for styling


## Demo
    ![alt text](image.png)
    ![alt text](image-1.png)