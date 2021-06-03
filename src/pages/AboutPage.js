import React from 'react';

import Jumbo from '../components/Jumbo';
import Content from '../components/Content';


function AboutPage(props) {

    return(
        <div>
            <Jumbo subTitle={props.title} />

            <Content>
            <p> Hello! 

                I'm Ryan, a musician turned software developer. During the pandemic in 2020 I was without much of my income, so I decided to take my new free time and learn to code. I love to create cool things and solve new problems, and I enjoy putting these passions to use in code. I use lots of Javascript, but also enjoy using C++ and a bit of Ruby and Python. Thanks for taking a look at my portfolio!
            </p>
            </Content>
        </div>
    );

}

export default AboutPage;