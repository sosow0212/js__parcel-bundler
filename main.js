import axios from "axios";

const url = "https://api.covid19api.com/total/dayone/country/kr";
const h3 = document.querySelector("h3");
const img = document.querySelector("img");

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
  h3.innerText = "총 확진자 수 : " + confiremd;
}

fetchData();
