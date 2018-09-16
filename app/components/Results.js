var React = require('react');

class Results extends React.Component {
  render() {
    return (
      <div>
        Results
        {console.log(this.props)}
      </div>
    )
  }
}

module.exports = Results;
