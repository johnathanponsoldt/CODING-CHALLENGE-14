// Task 2:
const apiURL = "https://jsonplaceholder.typicode.com/posts";

async function fetchCustomerData(customerId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts${customerId}`);
    const customer = await response.json();
    console.log('Customer:', customer);  // This will throw an error if response is invalid
}
// This bug occurs if the API fails, but the error is not caught.
fetchCustomerData(999);

// Task 3:
async function submitOrder(order) {
    if (!order.items.length) throw new Error('Order must have items');
    return { success: true, orderId: 123 };
}

// Test the async function using a promise-based approach
submitOrder({ items: [] })
    .then(response => console.log('Order submitted:', response))
    .catch(error => console.error('Error:', error.message));  // Test case: Order with no items