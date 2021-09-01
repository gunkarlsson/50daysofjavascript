const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    //const res = await axios(APIURL + username);
    //res is an object that has property of data (which is another object) = we destructure res.data to {data}
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile found");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    //const res = await axios(APIURL + username);
    //res is an object that has property of data (which is another object) = we destructure res.data to {data}
    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avatar"
          />
        </div>

        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
         ${user.bio}
          </p>

          <ul>
            <li>${user.followers} <strong>followers</strong></li>
            <li>${user.following} <strong>following</strong></li>
            <li>${user.public_repos} <strong>repos</strong></li>
          </ul>

          <div id="repos">
          </div>
        </div>
      </div>
      `;
  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
    <h1>${msg}</h1>
    </div>
    `;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

// function getUser(username) {
//   axios(APIURL + username)
//     //same as axios.get(xxx)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }
