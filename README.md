# date-fun

A lightweight JavaScript library for easy date formatting and manipulation. Simplify your date handling with intuitive functions that make working with time a breeze!

## Installation

You can install `date-fun` via npm:

```bash
npm install date-fun
```

## Usage

To use the getFormattedTimeStamp function, simply import it into your JavaScript file:

```bash
import { getFormattedTimeStamp } from 'date-fun';

const { datePart, timePart } = getFormattedTimeStamp();
console.log(datePart, timePart); // Outputs: "14 Oct 2024 10:05 AM"

```

### Example

Here’s an example of how to use the getFormattedTimeStamp function:

```bash

// Import the function
import { getFormattedTimeStamp } from 'date-fun';

// Get the formatted date and time
const { datePart, timePart } = getFormattedTimeStamp();

// Display the result
console.log(`Current Date: ${datePart}`); // e.g., "Current Date: 14 Oct 2024"
console.log(`Current Time: ${timePart}`); // e.g., "Current Time: 10:05 AM"

```

## API

`getFormattedTimeStamp()`
Returns an object containing the formatted date and time.

**Returns:**

- `datePart` (string): Formatted date in DD MMM YYYY format.
- `timePart` (string): Formatted time in HH:mm AM/PM format.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
