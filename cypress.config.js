const { defineConfig } = require("cypress");

// Variable to store the order number, shared between tasks
let total;

// Export Cypress configuration using defineConfig
module.exports = defineConfig({
  e2e: {
    // Setup function for registering Node event listeners
    setupNodeEvents(on, config) {
      on("task", {
        setOrderTotal,
        getOrderTotal,
      });
    },
    // Set the base URL for the application under test
    baseUrl: "https://www.saucedemo.com/v1/index.html",
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});

const setOrderTotal = (totalPrice) => {
  total = totalPrice;
  return total;
};

const getOrderTotal = () => total;
