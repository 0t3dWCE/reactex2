var React = require('react');
var Comment = require('./comment');

//comment list box - print Comment per data element
module.exports = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author={comment.author} time={comment.time}>
					{comment.text}
				</Comment>
		    );
		});
		return (
			<div class="panel panel-primary">
				{commentNodes}
			</div>
		);
	}
});
