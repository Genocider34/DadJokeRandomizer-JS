const button = document.querySelector("h1");
const text = document.querySelector("h2");

const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return res.data.joke;
};

const addDadJoke = async () => {
  const jokeText = await getDadJoke();
  text.innerText = `"${jokeText}"`;
};

button.addEventListener("click", addDadJoke);
