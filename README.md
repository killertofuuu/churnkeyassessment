# Churnkey Cancel Flow Assessment

## Project Overview

This project demonstrates the integration of Churnkey's Cancel Flow into a hypothetical account management page.

## How to Run the Project Locally

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install express`.
4. Start the server: `node server.js`.
5. Open `index.html` in your browser.

## Generating HMAC Hash

The server generates the HMAC hash for the customer ID `cus_QVBhnykr03RYfs`.

## Integration Process

The `index.html` file includes the Churnkey script and initializes the Cancel Flow when the cancel button is clicked. The HMAC hash is fetched from the server.