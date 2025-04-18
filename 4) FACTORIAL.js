function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
  }
  
  // Example usage
  console.log(factorial(5)); // Output: 120
  