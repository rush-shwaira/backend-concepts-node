import {
  fetchGithubUser,
  fetchGithubRepos,
} from "./services/github.service.js";

async function main() {
  try {
    const username = "iamrushier";
    console.log(`Fetching details for: ${username}`);
    const user = await fetchGithubUser(username);
    console.log("User:", user);

    const repos = await fetchGithubRepos(username);
    console.log(`Repositories (${repos.length})`);
    repos.forEach((r: any) => console.log(`- ${r.name}`));
  } catch (err: any) {
    console.error("Error:", err.message);
  }
}

main();
