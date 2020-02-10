import React, { Component } from "react";
import Field from "../common/Field";
import { withFormik } from 'formik';

const fields = [
    {
        name: 'name',
        elementType: 'input',
        type: 'text',
        placeholder: 'Your name',
        errorMessage: 'Name is required'
    },
    {
        name: 'email',
        elementType: 'input',
        type: 'email',
        placeholder: 'Your email',
        errorMessage: 'email is incorrect'
    },
    {
        name: 'phone',
        elementType: 'input',
        type: 'tel',
        placeholder: 'Your phone number',
        errorMessage: 'phone is required'
    }
];

const messageField = {
    name: 'message',
    elementType: 'textarea',
    type: 'text',
    placeholder: 'Your message',
    errorMessage: 'message is required'
};

class Contact extends Component {

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form name="sentMessage" novalidate="noValidate" onSubmit={e => this.submitForm(e)}>
                                <div className="row">
                                    <div className="col-md-6">

                                        {
                                            fields.map((field, index) => {
                                                return <Field
                                                    {...field} key={index}
                                                />
                                            })
                                        }

                                    </div>
                                    <div className="col-md-6">

                                        <Field
                                            {...messageField}
                                        />

                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    validate: values => {
        const errors = {};
        Object.keys(values).map(value => {
            if (!values[value]) {
                errors[value] = "Required";
            }
        })

        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        console.log('You\'ve submitted the form !');
    }
})(Contact);