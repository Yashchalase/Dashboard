# Dynamic Dashboard Assignment

It demonstrates a dynamic dashboard with categories and widgets, built using React (Vite) and Redux Toolkit for state management.

# Features

- JSON-driven dashboard: Categories and widgets are loaded from `Data.json`.
- Add Widget: Add a new widget (name + text) to any category.
- Remove Widget: Remove widgets via ✕ button or uncheck in Manage Categories.
- Add/Delete Categories: Manage categories dynamically.
- Search Widgets: Search across all widgets by name or text.
- Local state management: Redux Toolkit with localStorage persistence.

# Steps to Run the Application Locally

1. first up all Extract the Zip

- Download and unzip the project folder.
- Open the folder (`my-dashboard/`) in VS Code or your preferred editor.

2. Install Dependencies
   Make sure Node.js v18+ are installed.  
   run: npm install

3. Start the Development Server
   npm run dev
   This will start the Vite development server.

4. Open in Browser
   After running the above command, Vite will display a URL like:
   Local: http://localhost:5173/
   Open this link in your browser to view the dashboard.

# Features I add:-

1. Add widgets inside categories via + Add Widget.
2. Remove widgets using ✕ icon or by unchecking in Manage Categories.
3. Add or delete categories from Manage Categories.
   4.Search for widgets globally using the search bar.

# Tech Stack i used:-

React (with latest Vite).
Redux Toolkit for state management.
LocalStorage for persistence.
and Plain CSS for styling.
