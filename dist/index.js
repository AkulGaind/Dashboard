let myChart = document.getElementById("line-chart").getContext("2d");
var gradient = myChart.createLinearGradient(0, 0, 0, 400);
var gradient2 = myChart.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
gradient.addColorStop(1, "rgba(203, 12, 159, 1)");
gradient2.addColorStop(0, "rgba(37, 47, 64, 1)");
gradient2.addColorStop(1, "rgba(255, 255, 255, 1)");
let lineChart = new Chart(myChart, {
  type: "line",
  data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "data",
        data: [120, 120, 70, 160, 90, 500, 230, 70, 160],
        tension: 0.45,
        // fill: true,
        // backgroundColor: gradient,
        borderColor: "#CB0C9F",
      },
      {
        label: "data",
        data: [20, 10, 470, 160, 190, 300, 230, 70, 160],
        tension: 0.45,
        // backgroundColor: gradient2,
        borderColor: "#252F40",
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: -25,
        bottom:-25,
      },
      margin: {
        left: 0,
        bottom:0,
      }
    },
    interaction: {
      intersect: false,
      mode: "nearest",
      axis: "x",
    },
    plugins: {
      tooltip: {
        enabled: true,
        yAlign: "bottom",
        xAlign: "center",
        displayColors: false,
        backgroundColor: "#8655FB",
        callbacks: {
          title: () => null, // or function () { return null; }
          label: function (context) {
            let label = "";
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0.1,
        position: "average",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        ticks: {
          maxTicksLimit: 6,
          stepSize: 100,
          beginAtZero: true,
        },
        grid: {
          display: false,
        },
        display: true,
        title: {
          display: true,
          //   text: "Value",
        },
        suggestedMin: 0,
        max: 500,
      },
    },
  },
});