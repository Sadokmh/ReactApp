import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <section classeName="page-section" id="about">
                <div classeName="container">
                    <div classeName="row">
                        <div classeName="col-lg-12 text-center">
                            <h2 classeName="section-heading text-uppercase">About</h2>
                            <h3 classeName="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div classeName="row">
                        <div classeName="col-lg-12">
                            <ul classeName="timeline">
                                <li>
                                    <div classeName="timeline-image">
                                        <img classeName="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                                    </div>
                                    <div classeName="timeline-panel">
                                        <div classeName="timeline-heading">
                                            <h4>2009-2011</h4>
                                            <h4 classeName="subheading">Our Humble Beginnings</h4>
                                        </div>
                                        <div classeName="timeline-body">
                                            <p classeName="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li classeName="timeline-inverted">
                                    <div classeName="timeline-image">
                                        <img classeName="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                                    </div>
                                    <div classeName="timeline-panel">
                                        <div classeName="timeline-heading">
                                            <h4>March 2011</h4>
                                            <h4 classeName="subheading">An Agency is Born</h4>
                                        </div>
                                        <div classeName="timeline-body">
                                            <p classeName="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div classeName="timeline-image">
                                        <img classeName="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                                    </div>
                                    <div classeName="timeline-panel">
                                        <div classeName="timeline-heading">
                                            <h4>December 2012</h4>
                                            <h4 classeName="subheading">Transition to Full Service</h4>
                                        </div>
                                        <div classeName="timeline-body">
                                            <p classeName="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li classeName="timeline-inverted">
                                    <div classeName="timeline-image">
                                        <img classeName="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                                    </div>
                                    <div classeName="timeline-panel">
                                        <div classeName="timeline-heading">
                                            <h4>July 2014</h4>
                                            <h4 classeName="subheading">Phase Two Expansion</h4>
                                        </div>
                                        <div classeName="timeline-body">
                                            <p classeName="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li classeName="timeline-inverted">
                                    <div classeName="timeline-image">
                                        <h4>Be Part
                  <br />Of Our
                  <br />Story!</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default About;