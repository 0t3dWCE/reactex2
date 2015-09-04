var React = require('react');
var CommentList = require('./commentList');
var CommentForm = require('./commentForm');
var D3jscircle = require('./../d3circle/circle')

//Main parent box for all others component
module.exports = React.createClass({
	
	//init component properties 'data' and 'count' - count of requests
	getInitialState: function() {
		return {data: this.props.data, count: 0};
	},
	  
	getDataFromSrv: function() {
		//It's request backend, wich do real request to another remote api 
	    $.ajax({
			type: 'GET',
			url: '/loripsum',
			success: function(response) {
				//this.setState({data: data});
				console.log("Response is" + response);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('/loripsum ', status, err.toString());
			}.bind(this)
		});
	    
		this.setState({
			//data: staticData,
			count: this.state.count+=1
	    });
		
	},
	  
	//This event works after component render. Do stuff for server requsets and etc.
	componentDidMount: function() {
		this.getDataFromSrv();
	    //Start timer - poll this.getDataFromSrv every 2 seconds
	    setInterval(this.getDataFromSrv, 5000);
		D3jscircle.circle();
		//this.circle();
	},
	  
	render: function() {
		return (
			<div className="commentBox">
				<h1 style={divStyle}>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm count={this.state.count}/>
			</div>
	    );
	}
})