var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Philadelphia">Pamplona</Link>
        </li>
        <li>
          <Link to="/?location=Rio">New York, USA</Link>
        </li>
      </ol>
    </div>
)
module.exports = Examples;
