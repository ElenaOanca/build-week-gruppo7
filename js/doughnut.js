import { percentualeGiuste,percentualeSbagliate } from "./script";


const chartData = {
  labels: ["Risposte sbagliate", "Risposte corrette"],
  
};

const myChart = document.querySelector(".concentric-circle"); //div di riferimento nell'html



new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "",
        data: [percentualeGiuste, percentualeSbagliate], ////collegare array che contengono risposte giuste e sbagliate
          backgroundColor: ["#C2128D", "#04FFFF"]
      },
    ],
  },
  options: {
    borderWidth: 2,
    borderRadius: 2,
    hoverBorderWidth: 0,
    cutout: 160,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});






