const keys = require('../../config/keys');

module.exports = survey => `
  <html>
    <body>
      <div style="text-align: center">
        <h3>We appreciate your opinion</h3>
        <p>Please answer following question</p>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
        </div>
      </div>
    </body>
  </html>
`;
