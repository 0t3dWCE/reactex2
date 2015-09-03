var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Popover = require('react-bootstrap').Popover;
var Tooltip = require('react-bootstrap').Tooltip;
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
 
module.exports = React.createClass({
  getInitialState: function(){
    return { showModal: false, text: this.props.text };
  },

  close: function(){
    this.setState({ showModal: false });
  },

  open: function(){
    this.setState({ showModal: true });
  },

  render: function() {
    var popover = <Popover title='popover'>1very popover. such engagement</Popover>;
    var tooltip = <Tooltip>wow.</Tooltip>;
	var buttonText = "";
	if (!this.state.text) {
		buttonText = "Launch demo modal";
	} else { 
		buttonText = "Are we are in simulated universe?";
	};

    return (
      <div>
        <Button bsStyle='primary' bsSize='small' onClick={this.open}>
          {buttonText}
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href='#'>popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href='#'>tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>How it works:</h4>
			<p>We listen to event mouseEnter for comment area.</p>
            <p>And we do GET request to backend - /loripsum.</p>
            <p>Next backend do GET request to http://loripsum.net/api/1/short/plaintext for getting pop-up text.</p>
            <p>Whats all.</p>
			<p>{this.state.text}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});