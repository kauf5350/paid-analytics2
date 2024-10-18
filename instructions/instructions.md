# Product Requirements Document (PRD)
## Social Media Campaign Visualization Tool

### Project Overview
We are building a web application that allows users to visualize results from creator marketing campaigns. The tool will enable users to upload one or multiple CSV files containing data from social media campaigns with influencers across Instagram and TikTok platforms. Users will be able to view this data through various charts, graphs, tables, and other visual representations.

### Technical Stack
- Next.js 14 with App Router
- React
- shadcn/ui for UI components
- Lucide icons
- Tailwind CSS for styling
- TypeScript for type safety

### Core Functionality

#### CSV Upload
- Allow users to upload multiple CSV files containing social media campaign data.
- Implement drag-and-drop functionality and a traditional file picker.

#### Data Parsing
- Parse the uploaded CSV files.
- Temporarily store the parsed data for the session.

#### Data Visualization
- Provide various charts, graphs, and tables to visualize the parsed data.
- Include at least the following visualization types:
  - Bar charts for comparing metrics across influencers
  - Line charts for showing trends over time
  - Pie charts for showing distribution of engagement types
  - Data tables for detailed view of all metrics

#### PDF Export
- Enable users to export the generated visualizations as a PDF document.
- Allow users to select which visualizations to include in the export.

#### Filtering and Sorting
- Implement functionality to filter and sort data based on various parameters.
- Parameters may include date range, platform (Instagram/TikTok), engagement metrics, etc.

#### Error Handling
- Implement basic error handling for common issues such as:
  - File upload failures
  - Data processing errors
  - Visualization rendering problems
- Display user-friendly error messages.

#### Responsive Design
- Ensure the application is usable on both desktop and mobile devices.
- Optimize layout and interactions for different screen sizes.

### User Management and Data Persistence
- No user accounts or authentication required.
- Design the application to be stateless, with all necessary data stored temporarily.
- Implement client-side storage (e.g., localStorage) for temporary data handling.
- Ensure each user has an isolated experience, with data cleared on session end or inactivity.

### Data Privacy and Security
- Implement basic measures to ensure uploaded data is handled securely.
- Ensure that one user's data is not accessible to other users.
- Clear all user data when the session ends or after a set period of inactivity (e.g., 30 minutes).
- Do not store any user data permanently on the server.

### Additional Requirements

#### Project Setup
- All new components should go in /components at the root (not in the app folder) and be named like example-component.tsx unless otherwise specified.
- All new pages should go in /app.
- Use the Next.js 14 app router.
- Client components (using useState, hooks, etc.) require 'use client' at the top of the file.

#### Environment Variables
- Store all sensitive information (API keys, credentials) in environment variables.
- Use the .env.local file for local development and ensure it's listed in .gitignore.
- For production, set environment variables in the deployment platform (e.g., Vercel).

#### Error Handling and Logging
- Implement comprehensive error handling in client-side components.
- Display user-friendly error messages to the client side.

#### Type Safety
- Use TypeScript interfaces for all data structures.
- Avoid using any type; instead, define proper types for all variables and function parameters.

### Suggested File Structure
```
├── README.md
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── visualize
│   │   └── page.tsx
│   └── export
│       └── page.tsx
├── components
│   ├── csv-uploader.tsx
│   ├── data-table.tsx
│   ├── chart-container.tsx
│   ├── export-button.tsx
│   └── ui
│       └── [shadcn/ui components]
├── lib
│   ├── utils.ts
│   ├── types.ts
│   └── csv-parser.ts
├── hooks
│   ├── use-csv-data.ts
│   └── use-chart-data.ts
├── styles
│   └── globals.css
├── public
│   └── [static assets]
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .env.local
```

### Key Components and Their Purposes

#### /app: Contains the main pages of the application.
- page.tsx: Home page with CSV upload functionality.
- visualize/page.tsx: Page for data visualization.
- export/page.tsx: Page for PDF export functionality.

#### /components: Contains all React components.
- csv-uploader.tsx: Handles CSV file uploads.
- data-table.tsx: Displays data in a table format.
- chart-container.tsx: Container for various chart types.
- export-button.tsx: Handles PDF export functionality.

#### /lib: Contains utility functions and type definitions.
- utils.ts: General utility functions.
- types.ts: TypeScript interfaces and types.
- csv-parser.ts: Functions for parsing CSV data.

#### /hooks: Custom React hooks.
- use-csv-data.ts: Hook for managing CSV data.
- use-chart-data.ts: Hook for processing data for charts.

#### /styles/globals.css: Global styles and Tailwind CSS imports.
#### /.env.local: For local environment variables (not committed to version control).

### Development Guidelines
- Follow TypeScript best practices and ensure proper typing throughout the application.
- Use functional components and React hooks for state management.
- Implement error boundaries to catch and handle unexpected errors gracefully.
- Write clean, modular, and reusable code.
- Comment code where necessary, especially for complex logic.
- Follow accessibility best practices to ensure the application is usable by all.

### Performance Considerations
- Optimize CSV parsing for large files.
- Implement lazy loading or pagination for large datasets in tables and charts.
- Use memoization techniques (e.g., useMemo, useCallback) to optimize render performance where appropriate.