// netlify/functions/hr_response.js

exports.handler = async function (event, context) {
    try {
      const body = JSON.parse(event.body); // Parse form data
  
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
  
      // Perform any processing or validation
  
      // Send notifications (implement this part)
  
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
  