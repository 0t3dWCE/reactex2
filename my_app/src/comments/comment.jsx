var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Modal = require('./modal');


//Component for Comment
//var Comment = React.createClass({
module.exports = React.createClass({
	//Init property for maintance pop-up
	getInitialState: function() {
		return {display: {display: 'none'}, hiddenText: "Loading ..."};
	},
	  
	//Handler for mouse over event. Set property to visible=true + get loripsum text from srv
	onMouseEnter: function(evt) {
		this.getHiddenTextLoripsum()
		
		this.setState({
			display: {
				display: '',
				border: '3px dotted red',
				position: 'absolute',
				left: '450px'
			}
	    });
	},
	
	//Handler for mouse leave event. Set visibility 'none'
	onMouseLeave: function(evt) {
		this.setState({
			display: {display: 'none'},
			hiddenText: "Loading ..."
		});
	},
	
	getHiddenTextLoripsum: function() {
		//It's request to backend, wich do real request to another remote api (because of cross-domain requests are forbidden)
		$.ajax({
			type: 'GET',
			url: '/loripsum',
			success: function(response) {
				this.setState({hiddenText: response});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('/loripsum ', status, err.toString());
			}.bind(this)
		});
	},
	  
	render: function() {
		return (
			//Should be used 'className' instaed of 'class' for bootstrap classes working with react.
			<div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} id="comment_container">
				<div  className="row">
					<div className="col-md-4" id="comment_author">
						<p className="bg-info">
							Posted by: <a href={this.props.author}>{this.props.author}</a>
						</p>
					</div>
				  
					<div className="col-md-4" id="comment_time">
						When: {this.props.time}
					</div>
				  
					<div style={this.state.display} className="col-md-4" id="hidden_popup">
						<div class="bg-primary">{this.state.hiddenText}</div>
						
					</div>
				</div>
				
				<div className="row" id="comment_text">
					<div className="col-md-8">
						<p className="bg-success">
							{this.props.children}
						</p>
					</div>
				</div>
				
				<div className="row" id="modal_container">
					<div className="col-md-8">
						<Modal/>
					</div>
				</div>
				
				<div className="row">
					<div className="col-md-8">
						<hr/>
					</div>
				</div>
			</div>
	    );
	}
})
