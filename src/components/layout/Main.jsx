import axios from "axios";

const apiBaseUrl = "https://lanciweb.github.io/demo/api/actors";

export default function Main() {
  axios.get(`${apiBaseUrl}`).then((res) => {
    console.log(res.data);
  });
  return (
    <main>
      <h1>React Api</h1>
    </main>
  );
}
