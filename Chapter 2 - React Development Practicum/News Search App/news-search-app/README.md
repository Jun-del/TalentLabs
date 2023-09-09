# News Finder/Search App (Find My News)

[FindMyNews: Search, discover, read, save.](<(https://news.aboutjun.me/home)>)

## Description

- Search for news articles by keyword
- Favorite articles to read later
- View articles in a web browser
- Load more articles

## Getting Started

1. Clone or download the repository

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add your API key based on the `.env.example` file. You can get the API key from [News API](https://newsapi.org/).

```bash
VITE_API_KEY="YOUR_API_KEY"
```

4. Start the development server

```bash
npm run dev
```

5. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser. If the port is already in use, you can change it in [`vite.config.js`](https://vitejs.dev/config/server-options.html) file.

6. Login with the following credentials (No backend is used, so the login is just for demonstration purposes)

```bash
username: user1
password: password1
```

Alternatively, you can configure the login credentials from mock data in `src/mock-date/mock-registered-users.js` file.

### Tools and Libraries

- [React (Functional Components with hooks)](https://react.dev/)
- [Material UI v5.14.7](https://mui.com/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/en/6.15.0)
- [Vite](https://vitejs.dev/)
- [News API](https://newsapi.org/)
