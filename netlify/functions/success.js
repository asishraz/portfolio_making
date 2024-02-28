// netlify/functions/success.js

exports.handler = async function (event, context) {
    try {
        const body = JSON.parse(event.body); // Parse form data

        // Access form fields
        const {
            fit_for_role,
            contact_number,
        } = body;

        // Log the received data
        console.log("Fit for Role: ", fit_for_role);
        console.log("Contact Number: ", contact_number);

        // Send email or perform any other processing here

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};
