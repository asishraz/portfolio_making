// netlify/functions/success.js

// local development only
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const sgMail = require('@sendgrid/mail');

exports.handler = async function (event, context) {
    try {
        console.log('Success Function started'); // Log when the function starts
        const body = JSON.parse(event.body); // Parse form data
        console.log('Received body:', body); // Log the received body

        // Access form fields
        const {
            fit_for_role,
            contact_number,
        } = body;

        // Log the received data
        console.log("Fit for Role: ", fit_for_role);
        console.log("Contact Number: ", contact_number);

        // Send email or perform any other processing here

        // Send notifications (implement this part)
        try {
            // Access SendGrid API key from environment variable
            const sendgridApiKey = process.env.SENDGRID_API_KEY;
            // Configure SendGrid
            sgMail.setApiKey(sendgridApiKey);

            const msg = {
                to: 'iamasish3001@gmail.com',
                from: 'iamasish3001@gmail.com', // Replace with a valid email address
                subject: 'New HR Response',
                text: `New HR Response:\n\nFit for Role: ${fit_for_role}\nContact Number: ${contact_number}`,
            };

            await sgMail.send(msg);

        } catch (error) {
            console.error('SendGrid Error:', error);
        }

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
