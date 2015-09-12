import React from 'react';
import { Grid, Row, Button, Well }     from 'react-bootstrap';

export default class Main extends React.Component {
	
    propTypes: {
    	counter: React.PropTypes.number.isRequired,
    	onCounterClicked: React.PropTypes.func.isRequired,
      falcorGreet: React.PropTypes.string.isRequired
  	}

    render() {
        /*
        var model = new falcor.Model({source: new falcor.HttpDataSource('/model.json') });
      
      // retrieve the "greeting" key from the root of the Virtual JSON resource
      model.
        get("greeting").
        then(function(response) {
          var falcorVal = response.json.greeting;
        });
    */
        return (
        		<div className="main">
        			<Grid>
                        <Row fluid={true}>
                        <h1>Falcor said: {this.props.falcorGreet}</h1>
        			     {/*<button onClick={this.props.onCounterClicked}>Count Add</button><br />*/}
                        <Button bsStyle="primary" onClick={this.props.onCounterClicked}>Count</Button><br />
                        <Well>
        			     <p>counter: {this.props.counter}</p>
                         </Well>
                         </Row>
                    </Grid>
        		</div>
        	);
    }
};
