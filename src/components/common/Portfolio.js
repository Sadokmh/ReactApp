import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

const items = [
    {
        title: 'Threads',
        subtitle: 'Illustration',
        image: 'img/portfolio/01-full.jpg',
    },
    {
        title: 'Explore',
        subtitle: 'Graphic Design',
        image: 'img/portfolio/02-full.jpg',
    },
    {
        title: 'Finish',
        subtitle: 'Identity',
        image: 'img/portfolio/03-full.jpg',
    },
    {
        title: 'Lines',
        subtitle: 'Branding',
        image: 'img/portfolio/04-full.jpg',
    },
    {
        title: 'Southwest',
        subtitle: 'Website Design',
        image: 'img/portfolio/05-full.jpg',
    },
    {
        title: 'Window',
        subtitle: 'Photography',
        image: 'img/portfolio/06-full.jpg',
    }
];

class Portfolio extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {
                            items.map((item, index) => {
                                return <PortfolioItem
                                    {...item} key={index}
                                />
                            })
                        }

                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;