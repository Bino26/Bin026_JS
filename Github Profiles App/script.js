const APIURL = `https://api.github.com/users/`;

async function getUser(users) {
  const resp = await fetch(APIURL + users);
  const respData = await resp.json();
  console.log(`Name is:${respData.login}`);
}
getUser("Bino26");
