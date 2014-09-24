"use strict";

var button = React.createClass({
	displayName: "button",
	clickLeft: function(){
		this.props.click("left");
	},
	clickRight: function(){
		this.props.click("right");
	},
	render: function(){
		if(this.props.side === "closed"){
			return React.DOM.div(
				{ id: "button"},
				React.DOM.a({ href: "#", onClick: this.clickRight }, ">")
			);
		}
		else if(this.props.side === "small"){
			return React.DOM.div(
				{ id: "button"},
				React.DOM.a({ href: "#", onClick: this.clickLeft }, "<"),
				React.DOM.a({ href: "#", onClick: this.clickRight }, ">")
			);
		}
		else if(this.props.side === "large"){
			return React.DOM.div(
				{ id: "button"},
				React.DOM.a({ href: "#", onClick: this.clickLeft }, "<")
			);
		}
	}
});

var side = React.createClass({
	displayName: "side",
	buttonClicked: function(direction){
		var newState = "";
		if(direction === "left"){
			if(this.state.side === "large"){
				newState = "small";
			}
			else if(this.state.side === "small"){
				newState = "closed";
			}
		}
		else if(direction === "right"){
			if(this.state.side === "closed"){
				newState = "small";
			}
			else if(this.state.side === "small"){
				newState = "large";
			}
		}
		if(newState){
			this.setState({
				side: newState
			});
		}
	},
	getInitialState: function(){
		return {
			side: "small"
		};
	},
	render: function(){
		return React.DOM.div(
			null,
			React.DOM.div(
				{ id: "side", className: this.state.side },
				button({ click: this.buttonClicked, side: this.state.side })
			)
		);
	}
});

React.renderComponent(side(null), document.body);
