var React = require('react');
var CommentBox = require('./comments/commentBox');

var staticData = [
	  {author: "Pete Hunt", text: "This is one comment adsfadasdasda asdasd asdasd asd asd a", time: "2015-08-12", location: "California"},
	  {author: "Jordan Walke", text: "This is *another* comment", time: "2015-08-12", location: "California"},
	  {author: "Pete Hunt", text: "This is 2nd comment", time: "2015-08-12", location: "California"},
	  {author: "Jordan Walke", text: "This is *another* comment", time: "2015-08-12", location: "California"},
	  {author: "Pete Hunt", text: "This is 3rd comment", time: "2015-08-12", location: "California"},
	  {author: "Jordan Walke", text: "This is *another* comment", time: "2015-08-12", location: "California"},
	  {author: "Pete Hunt", text: "This is 4th comment", time: "2015-08-12", location: "California"},
	];

React.render(
	<CommentBox data={staticData}/>,
	document.getElementById('content')
);
