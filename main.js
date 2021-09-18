import axios from "axios";

const url = "https://api.covid19api.com/total/dayone/country/kr";
const h1 = document.querySelector(".confirmed-span");
const h3 = document.querySelector(".death-span");

const fetchData = () => {
  const coronaData = axios.get(url).then((res) => {
    console.log(res);
    factory(res);
  });
};

function factory(res) {
  const datas = res.data;
  const total = 0;

  const confiremd = datas.pop().Confirmed;
  console.log(datas.pop())
  h1.innerText = confiremd;
  h3.innerText = datas.pop().Deaths;
}

fetchData();
