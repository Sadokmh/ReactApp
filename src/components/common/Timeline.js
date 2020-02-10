import React, { Component } from 'react';
import TimelineItem from './TimelineItem';

const items = [
    {
        title: '2009-2011',
        subtitle: 'Our Humble Beginnings',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
        image: 'img/about/1.jpg',
        class: ''
    },
    {
        title: 'March 2001',
        subtitle: 'An Agency is Born',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
        image: 'img/about/2.jpg',
        class: 'timeline-inverted'
    },
    {
        title: 'December 2012',
        subtitle: 'Transition to Full Service',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
        image: 'img/about/3.jpg',
        class: ''
    },
    {
        title: 'July 2014',
        subtitle: 'Phase Two Expansion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
        image: 'img/about/4.jpg',
        class: 'timeline-inverted'
    }
];

class Timeline extends Component {
    render() {
        return (
            <section className="page-section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">About</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="timeline">

                                {
                                    items.map((item, index) => {
                                        return <TimelineItem
                                            {...item} key={index}
                                        />
                                    })
                                }

                                <li className="timeline-inverted">
                                    <div className="timeline-image">
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
        );
    }
}

export default Timeline;