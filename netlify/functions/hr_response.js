// netlify/functions/hr_response.js

// local development only
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const sgMail = require('@sendgrid/mail');

exports.handler = async function (event, context) {
    try {
        if (event.httpMethod !== 'POST') {
            return {
              statusCode: 405, // Method Not Allowed
              body: JSON.stringify({ error: 'Method Not Allowed' }),
            };
          }
        console.log('Function started'); // Log when the function starts
        const body = JSON.parse(event.body); // Parse form data
        console.log('Received body:', body); // Log the received body
    
        // Access form fields
        const {
            experience,
            python,
            django,
            reactjs,
            javascript,
            noticePeriod,
            currentSalary,
            expectedSalary,
            preferredLocation,
            immediateJoiner,
        } = body;

        console.log("Experience: ", experience);
        console.log("Python: ", python);
  
      // Perform any processing or validation
  
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
            text: `New HR Response:\n\n${JSON.stringify(body, null, 2)}`,
            };

        await sgMail.send(msg);

      } catch(error) {
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
  