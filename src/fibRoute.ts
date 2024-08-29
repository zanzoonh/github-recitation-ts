// Endpoint for querying the fibonacci numbers

import { Request, Response } from 'express';
import fibonacci from './fib';

// Define the type of the function's parameters
const handleFibonacciRequest = (req: Request, res: Response): void => {
  // Extract `num` from the request parameters
  const { num } = req.params;

  // Parse the number from the request parameter
  const number : number = parseInt(num, 10);

  if (isNaN(number)) {
    res.status(400).send('Invalid number');
    return;
  }

  // Calculate the Fibonacci number
  const fibN : number = fibonacci(number);

  // Construct the result string
  let result = `fibonacci(${number}) is ${fibN}`;

  // Check if the result is undefined or invalid
  if (fibN < 0) {
    result = `fibonacci(${number}) is undefined`;
  }

  // Send the result as a response
  res.send(result);
};

export default handleFibonacciRequest;
