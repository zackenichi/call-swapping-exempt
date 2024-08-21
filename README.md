# CallRail Number Swapping Simulation

This project simulates the CallRail number swapping functionality. The purpose of this project is to demonstrate how to override the number swapping for specific elements on a webpage when we do not have direct control over the CallRail swapping code itself.

## Overview

In this example, the CallRail number swapping script dynamically changes phone numbers on the page. However, for certain elements (specifically those related to text messaging), we need to ensure that the numbers are not swapped and instead display a specific number.

### How It Works

1. **CallRail Swapping Simulation:**

   - The project simulates the behavior of the CallRail number swapping process by randomly selecting a number from a predefined list and applying it to all elements with the `call` and `text` classes.

2. **Override Functionality:**
   - After the CallRail number swapping script runs, a custom script overrides the swapped number specifically for elements with the `text` class, ensuring they display a static number (`919-380-9311`) for texting purposes.

## Demo

Check out the live demo [here](https://call-swapping-exempt.vercel.app/).

## Usage

- The main entry point of the project is `index.html`. Make sure this file exists in the root directory if you're deploying it to a static site hosting service like Vercel.
- To simulate the behavior and see the override in action, simply load the demo page.

## Deployment

This project is deployed using Vercel. If you're cloning this repository and wish to deploy it yourself, ensure that the `index.html` file is present in the root directory, and follow the steps outlined in the Vercel documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
