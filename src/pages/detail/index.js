import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
class Detail extends Component {
    
    
    render() {
        console.log(this.props);
        return (
            <div>Detail!!!!<h1>传来的编号为{this.props.match.params.id}</h1></div>
        )
    }
}

export default withRouter(Detail);

