import React, { Component } from 'react';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };
    }

    render() {
        return (
            <div className="form-group">
                {this.props.elementType === 'input' ?
                    <input
                        className="form-control"
                        name={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        required="required"
                        data-validation-required-message={this.props.errorMessage}
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })} />
                    :
                    <textarea
                        className="form-control"
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        required="required"
                        data-validation-required-message={this.props.errorMessage}
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}></textarea>
                }
                <p className="help-block text-danger"></p>
            </div>
        );
    }
}

export default Field;