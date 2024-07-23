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

## Screenshots

![Screenshot 2024-07-22 at 8 07 46 PM](https://github.com/user-attachments/assets/f3244171-ef81-42e2-857e-7b100d6ec0ae)
![Screenshot 2024-07-22 at 8 08 05 PM](https://github.com/user-attachments/assets/be4cae2c-bc53-4df7-ab59-3ef3f76b51cf)
![Screenshot 2024-07-22 at 8 07 57 PM](https://github.com/user-attachments/assets/c58828b8-0bfe-444b-a78a-fe6d4ea43439)
![Screenshot 2024-07-22 at 8 08 31 PM](https://github.com/user-attachments/assets/565c65b8-3121-4e24-9f94-662a9fd28840)
![Screenshot 2024-07-22 at 8 08 40 PM](https://github.com/user-attachments/assets/fd48d063-754f-4f5c-80fb-daec494539d0)

## Onboarding Changes

The only note I currently have is related to the customer-facing interface, and that is to add a button to bypass the numerous prompts that follow clicking the "Cancel Subscription" button. After clicking cancel, there are 4 more prompts to click through until the subscription is actually canceled. Working in customer support for a subscription service in the past, this is a popular complaint from customers who are unsubscribing (or downgrading their subscription). Perhaps a smaill link at the bottom of each prompt that says something to the effect of "No thanks, I'd like to cancel" could help stave off those complaints.
