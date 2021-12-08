<template>
  <section id="about">
    <h3>Sobre</h3>
    <p>
      Desenvolvedor web com 3 anos de experiência, gosto de Linux e adoro
      programar
    </p>

    <section>
      <div>
        <span>{{ commits }}</span>
        <p>Commits realizados</p>
      </div>
      <div>
        <span>{{ pulls }}</span>
        <p>Pull Request's abertos</p>
      </div>
      <div>
        <span>{{ stars }}</span>
        <p>Estrelas recebidas</p>
      </div>
      <div>
        <span>{{ repos }}</span>
        <p>Projetos contribuídos</p>
      </div>
    </section>
  </section>
</template>

<script>
const githubQuery = async function (query) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.VUE_APP_TOKEN}`,
    },
    body: JSON.stringify({ query }).replace(/\\n/g, ""),
  });

  return res.json();
};

export default {
  data() {
    return {
      commits: 0,
      pulls: 0,
      stars: 0,
      repos: 0,
    };
  },
  created: async function () {
    const userRequest = await githubQuery(`
      query {
        user(login: "m4thewz") {
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
          }
          repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
            totalCount
          }
          pullRequests(first: 1) {
            totalCount
          }
          repositories(first: 100, ownerAffiliations: OWNER, orderBy: {direction: DESC, field: STARGAZERS}) {
            totalCount
            nodes {
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    `);
    const user = userRequest.data.user;

    this.commits =
      user.contributionsCollection.totalCommitContributions +
      user.contributionsCollection.restrictedContributionsCount;
    this.pulls = user.pullRequests.totalCount;
    this.stars = user.repositories.nodes.reduce((prev, curr) => {
      return prev + curr.stargazers.totalCount;
    }, 0);
    this.repos =
      user.repositoriesContributedTo.totalCount + user.repositories.totalCount;
  },
};
</script>

<style lang="scss" scoped="true" src="@/views/Home/About/style.scss" />
