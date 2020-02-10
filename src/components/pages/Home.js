import React, { Component } from 'react';
import Header from '../common/Header';
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import Timeline from '../common/Timeline';
import Team from '../common/Team';

class Home extends Component {

    render() {
        return (
            <div>
                <Header
                    title="Welcome to our studio"
                    subtitle="Nice to meet you"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image="/img/header-bg.jpg"

                />

                <Services />

                <Portfolio />

                <Timeline />

                <Team />
            </div>
        )
    }

}

export default Home;