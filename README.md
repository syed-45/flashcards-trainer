# Country Capitals Flashcards Trainer

This is an application built on React and TypeScript that tests your knowledge of country capitals. It presents a series of questions about country names and reveals the corresponding capitals for you to learn.

## Features

- Randomly selects country-capital tuples from a dataset.
- Displays a question with a country name.
- Reveals the answer by displaying the corresponding capital.
- Tracks the user's progress by removing answered tuples from the dataset.
- Allows users to reset the quiz or continue from previously answered questions.
- Persists user progress in the browser's local storage.

## Demo

![appGif](https://github.com/syed-45/flashcards-trainer/assets/86778040/6c52dc8e-88ed-450d-b2d9-a2fbd86c0156)

## Getting Started

Follow the instructions below to set up and run the project on your local machine.

### Prerequisites

- Node.js (version 16.19.1)
- Yarn (version 1.22.19)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/syed-45/flashcards-trainer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd flashcards-trainer
   ```

3. Install the dependencies:

   ```bash
   yarn
   ```

### Usage

1. Start the development server:

   ```bash
   yarn start
   ```

2. Open your web browser and visit `http://localhost:3000` to access the application, or visit `192.168.0.11:3000`  to view on your mobile device which is connect to your local network.

## Acknowledgments

- The country-capital dataset used in this project is sourced from [restcountries API](https://restcountries.com/).
