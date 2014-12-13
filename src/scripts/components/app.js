'use strict';

var React = require('react/addons');
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var cx = React.addons.classSet;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/application.scss');

var Entity = React.createClass({
  render: function() {
    return (
      <select>
        <option>City of Palo Alto</option>
      </select>
    );
  }
});

var Department = React.createClass({
  render: function() {
    return (
      <select>
        <option>Police</option>
      </select>
    );
  }
});

var ExpenseType = React.createClass({
  render: function() {
    return (
      <select>
        <option>Salaries</option>
      </select>
    );
  }
});

var Period = React.createClass({
  render: function() {
    return (
      <select>
        <option>FY 2013-2014</option>
      </select>
    );
  }
});


var AthenaFrame = React.createClass({
  render: function() {
    return <iframe className="athena-frame" src="https://paloalto.ogstaging.us/transparency#/329/breakdown=3AE9231304DF42E6AAF96428E2D2C5B5&accountType=expenses&graph=pie&selection=4A4642606512790C3C193967827810A2&legend_sort=desc&fiscal_start=earliest&fiscal_end=latest" />;
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      showAthenaFrame: false
    };
  },

  handleQueryClick: function() {
    this.setState({showAthenaFrame: !this.state.showAthenaFrame});
  },

  render: function() {
    var wrapperClass = cx({
      'wrapper': true,
      'show-athena-frame': this.state.showAthenaFrame
    });

    return (
      <div className={wrapperClass}>
        <div className="query">
          How much did the <Entity /> spend on <Department /> <ExpenseType /> in <Period />?
          {!this.state.showAthenaFrame ? <button onClick={this.handleQueryClick}>Find out</button> : null}
        </div>
        <CSSTransitionGroup transitionName="athena-frame">
          {this.state.showAthenaFrame ? <AthenaFrame /> : null}
        </CSSTransitionGroup>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content')); // jshint ignore:line

module.exports = App;
