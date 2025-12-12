import { axiosClient } from "../config/axiosClient.js";
import { retry } from "../utils/retry.js";

export async function fetchGithubUser(username: string) {
  return retry(async () => {
    const response = await axiosClient.get(`/users/${username}`);
    return response.data;
  });
}

export async function fetchGithubRepos(username: string) {
  return retry(async () => {
    const response = await axiosClient.get(`/users/${username}/repos`);
    return response.data;
  });
}
