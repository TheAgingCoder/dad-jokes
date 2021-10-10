const jokeEl = document.getElementById("joke");
const jokebtn = document.getElementById("jokebtn");
jokebtn.addEventListener("click", generateJoke);
generateJoke();

//! USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: { Accept: "application/json" },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}
// ! USING .THEN()
// function generateJoke() {
//   fetch("https://icanhazdadjoke.com", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
