import axios from "axios";

const url = "https://api.covid19api.com/total/dayone/country/kr";
const h3 = document.querySelector("h3");
const img = document.querySelector("img");


const fetchData =  async () => {
  const coronaData =  await axios.get(url)
  .then((res) => {
    console.log(res);
  })
}

fetchData();