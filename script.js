const ctx = document
  .getElementById("revenueChart")
  .getContext("2d");

new Chart(ctx, {
  type: "bar",

  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun"
    ],

    datasets: [{
      label: "Revenue",

      data: [
        1200,
        1900,
        3000,
        2500,
        4200,
        5000
      ],

      backgroundColor: [
        "#00ffcc",
        "#00ffcc",
        "#00ffcc",
        "#00ffcc",
        "#00ffcc",
        "#00ffcc"
      ],

      borderRadius: 8
    }]
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: "white"
        }
      }
    },

    scales: {
      x: {
        ticks: {
          color: "white"
        }
      },

      y: {
        ticks: {
          color: "white"
        }
      }
    }
  }
});
