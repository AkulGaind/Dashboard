let myChart2 = document.getElementById("line-chart").getContext("2d");
let myChart = document.getElementById("bar-chart").getContext("2d");


let color = myChart.createLinearGradient(0, 0, 0, 400);
color.addColorStop(0, "rgba(103, 116, 142, 0.1)");

var gradient = myChart2.createLinearGradient(0, 0, 0, 400);
var gradient2 = myChart2.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)");
gradient.addColorStop(0, "rgba(203, 12, 159, 0.1)");
gradient2.addColorStop(0, "rgba(37, 47, 64, 0.1)");
gradient2.addColorStop(1, "rgba(255, 255, 255, 0.1)");


let lineChart = new Chart(myChart2, {
  type: "line",
  data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "data",
        data: [50, 25, 300, 200, 499, 265, 400, 240, 500],
        tension: 0.45,
        fill: true,
        backgroundColor: gradient,
        borderColor: "#CB0C9F",
      },
      {
        label: "data",
        data: [30, 100, 200, 30, 150, 100, 440, 70, 410],
        tension: 0.55,
        fill: true,
        backgroundColor: gradient2,
        borderColor: "#252F40",
      },
    ],
  },
  options: {
    maintainAspectRatio:false,
    layout: {
      padding: {
        left: -15,
        bottom: -25,
      },
      margin: {
        left: 0,
        bottom: 0,
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
        ticks: {
          font: {
            family: "Open Sans",
            size: 14,
            color: color,
          },
        },
      },
      y: {
        border: {
          dash: (i) => i.tick.value === 0 ? null : [4, 8],
          // dash: [4,8],
          color: "#8C8C8C",
          width: 0,
        },
        ticks: {
          maxTicksLimit: 6,
          stepSize: 100,
          beginAtZero: true,
          font: {
            family: "Open Sans",
            size: 14,
            color: color,
          },
        },
        grid: {
          display: true,
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

let barChart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
    datasets: [
      {
        label: "data",
        data: [800, 600, 400, 950, 750, 880, 500, 400, 700],
        // fill: true,
        borderRadius: 8,
        backgroundColor: "#FFF",
        // borderColor: "#FFF",
      },
    ],
  },
  options: {
    maintainAspectRatio:false,
    barThickness: 5,
    layout: {
      padding: {
        left: -25,
        bottom: -25,
      },
      margin: {
        left: 0,
        bottom: 0,
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
        ticks: {
          font: {
            family: "Open Sans",
            size: 14,
          },
          color: '#FFF',
        },
      },
      y: {
        border: {
          dash: (i) => i.tick.value === 0 ? null : [4, 8],
          // dash: [4,8],

          width: 0,
        },
        ticks: {
          maxTicksLimit: 6,
          stepSize: 200,
          beginAtZero: true,
          font: {
            family: "Open Sans",
            size: 14,
          },
          color: '#FFF',
        },
        grid: {
          color: '#52566F',
          display: true,
        },
        display: true,
        title: {
          display: true,
          //   text: "Value",
        },
        suggestedMin: 0,
        max: 1000,
      },
    },
  },
});


function onHover(i) {
  i.setAttribute("class", "onhover");
}

function outHover(i) {
  i.removeAttribute("class","notification");
}

function openLink() {
  window.open('#', "_blank");
}

document.getElementsByClassName("notification")

for (let i of Array.from(document.getElementsByClassName("tile"))) {
  i.onclick = openLink;
}