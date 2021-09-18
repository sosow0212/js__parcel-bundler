import axios from "axios";

const url = "https://api.covid19api.com/total/dayone/country/kr";
const confirmedSpan = document.querySelector(".confirmed-span");
const deathSpan = document.querySelector(".death-span");

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
  confirmedSpan.innerText = confiremd;
  deathSpan.innerText = datas.pop().Deaths;
}

fetchData();
