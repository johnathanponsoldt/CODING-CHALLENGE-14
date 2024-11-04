// Task 2:
const apiURL = "https://jsonplaceholder.typicode.com/posts";

async function fetchCustomerData(customerId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts${customerId}`);
    const customer = await response.json();
    console.log('Customer:', customer);  // This will throw an error if response is invalid
}
// This bug occurs if the API fails, but the error is not caught.
fetchCustomerData(999);
