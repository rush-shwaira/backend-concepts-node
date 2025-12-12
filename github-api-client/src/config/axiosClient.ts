// src/config/axiosClient.ts
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://api.github.com",
  timeout: 5000, // 5 sec
  headers: {
    Accept: "application/vnd.github+json",
    "User-Agent": "Rushi-GitHub-Client", // GitHub requires user-agent
  },
});

// Ratelimit and error logging interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 403 &&
      error.response?.headers["x-ratelimit-remaining"] === "0"
    ) {
      console.error("GitHub Rate Limit Reached. Try again later.");
    }
    return Promise.reject(error);
  }
);
