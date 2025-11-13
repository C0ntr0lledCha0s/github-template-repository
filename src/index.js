/**
 * Example function to demonstrate the template setup
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
export function greet(name) {
  if (!name) {
    throw new Error('Name is required');
  }
  return `Hello, ${name}!`;
}

/**
 * Example function to add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
export function add(a, b) {
  return a + b;
}
