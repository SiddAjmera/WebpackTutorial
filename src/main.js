var React = require('react');
var ReactDOM = require('react-dom');
require('./style.scss');

class Message extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Message title="Email Siddharth" message="Can you please message him?"/>,
    document.getElementById('react-container')
);