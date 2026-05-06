# Tech Event Site (test-event-talks-app)

A lightweight, modern web application for managing and displaying tech event schedules and talk details. This project serves as a clean starting point for building event-focused websites with a Node.js backend and a vanilla frontend.

## 🚀 Features

- **Static Asset Serving:** Automatically serves CSS, JavaScript, and HTML from the `public/` directory.
- **Talks API:** A dedicated REST endpoint (`/api/talks`) that dynamically serves event data from a JSON source.
- **SPA Ready:** Built-in fallback routing to support Single Page Application (SPA) navigation.
- **Clean Architecture:** Separated data layer, backend logic, and frontend assets.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js (v5)
- **Frontend:** Vanilla JavaScript, HTML5, CSS3
- **Data:** JSON-based local storage

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GorgeDwell/test-event-talks-app.git
   cd test-event-talks-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the server:
```bash
node server.js
```

The application will be running at `http://localhost:3000`.

## 📡 API Documentation

### Get All Talks

Retrieves the full list of scheduled talks, speakers, and categories.

- **URL:** `/api/talks`
- **Method:** `GET`
- **Response Format:** `JSON`
- **Sample Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Scaling Distributed Systems with Rust",
      "speakers": ["Alice Johnson"],
      "categories": ["Backend", "Rust", "Distributed Systems"],
      "description": "...",
      "startTime": "10:00 AM",
      "endTime": "11:00 AM"
    }
  ]
  ```

## 📂 Project Structure

```text
├── data/
│   └── talks.json      # Event schedule data
├── public/
│   ├── index.html      # Main application entry point
│   ├── script.js       # Frontend logic
│   └── style.css       # Application styling
├── server.js           # Express server configuration
└── package.json        # Project metadata and dependencies
```

## 📝 License

This project is licensed under the ISC License.
