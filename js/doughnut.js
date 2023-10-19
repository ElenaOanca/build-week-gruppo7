const chartData = {
  labels: ["Corrette", "Sbagliate"],
  data: [30, 17], ////collegare array che contengono risposte giuste e sbagliate
};

const myChart = document.querySelector(".concentric-circle"); //div di riferimento nell'html


new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "",
        data: chartData.data,
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







