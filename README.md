# dotCMS React SPA

This project is a React Single Page Application (SPA) integrated with dotCMS, designed to be fully editable. It demonstrates how to use dotCMS as a headless CMS to manage content dynamically in a React application.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This application showcases how to integrate a React app with dotCMS, allowing for dynamic content management. It uses Vite for fast development and Tailwind CSS for styling.

## Features

- **Dynamic Content Management**: Easily manage content through dotCMS.
- **Responsive Design**: Built with Tailwind CSS for a responsive and modern UI.
- **Environment Configuration**: Use environment variables for easy configuration.
- **Strict Mode**: Ensures your components are resilient and side-effect-free.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rjvelazco/dotcms-react-integration-example
   cd dotcms-react-spa
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Copy the `.env.example` to `.env` and fill in your dotCMS credentials:

   ```bash
   cp .env.example .env
   ```

### Running the Application

To start the development server, run:


```bash
npm run dev
# or
yarn dev
``

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Configuration

The application uses environment variables to configure the connection to dotCMS. Update the `.env` file with your dotCMS host, authentication token, and site ID.

```env
VITE_DOTCMS_HOST_KEY=https://your-dotcms-host.com
VITE_DOTCMS_AUTH_TOKEN_KEY=your-auth-token
VITE_DOTCMS_SITE_ID_KEY=your-site-id
```


## Usage

- **Components**: The application includes components like `Banner`, `Header`, and `Footer` that are dynamically rendered based on the dotCMS template configuration.
- **Styling**: Tailwind CSS is used for styling. You can customize styles in `src/index.css` and `src/App.css`.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for details.