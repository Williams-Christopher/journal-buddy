import React from 'react';
import { Link } from 'react-router-dom';
import photo01 from '../../images/photo01-min.png';
import photo02 from '../../images/photo02-min.png';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <>
                <section className='about_explainer'>
                    <h2 className='about_heading'>
                        What is Journal Buddy?
                    </h2>
                    <img className='about_image' src={photo01} alt='Woman typing on phone' />
                    <article className='about_explainer_text'>
                        Journaling has many benefits, among them, increased mindfulness and creativity, a boost to memory, and improving self-discipline. Journaling can help reduce anxiety, relieve depression, build self-confidence, and help manage stress. With all these benefits to journaling, it's not surprising that the most successful people in the world journal. In a few minutes a day, these benefits can be yours.
                    </article>
                </section>
                <section className='about_explainer'>
                    <h2 className='about_heading'>
                        Metrics and Goals and Things
                    </h2>
                    <article className='about_explainer_text'>
                        Journal Buddy is here to help. Use Journal Buddy to make entries that recount your challenges, capture your ideas, and note the things you're thankful for in Journal Buddy's easy to use, distraction-free interface. Journaling is most helpful if it's done regularly. Use Journal Buddy's metrics to find out what days of the week you are most likely to journal and see counts of your entries by month or days of the week.
                    </article>
                    <img className='about_image' src={photo02} alt='woman typing on laptop' />
                    <Link className='common_link' to='Register'>Sign up!</Link>
                </section>
            </>
        );
    };
};

export default About;
