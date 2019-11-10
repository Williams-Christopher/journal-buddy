import React from 'react';
import { Link } from 'react-router-dom';

import './About.css';

class About extends React.Component {
    render() {
        return (
            <>
                <section className='about_explainer'>
                    <h2 className='about_heading'>
                        What is Journal Buddy?
                    </h2>
                    <img className='about_image' src="https://picsum.photos/300/300" alt="Journal Buddy Usage Screenshot" />
                    <article className='about_explainer_text'>
                        Journaling has many benefits. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus. Suspendisse
                        ultrices gravida dictum fusce ut placerat orci nulla. Rutrum tellus pellentesque eu tincidunt tortor
                        aliquam. Faucibus purus in massa tempor nec. Amet dictum sit amet justo donec enim diam vulputate ut.
                        Habitasse platea dictumst vestibulum rhoncus est. Tellus in hac habitasse platea dictumst vestibulum
                        rhoncus est pellentesque. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.
                        Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Amet consectetur adipiscing
                        elit duis tristique sollicitudin nibh.
                    </article>
                </section>
                <section className='about_explainer'>
                    <h2 className='about_heading'>
                        Metrics and Goals and Things
                    </h2>
                    <article className='about_explainer_text'>
                        Journaling has many benefits. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus. Suspendisse
                        ultrices gravida dictum fusce ut placerat orci nulla. Rutrum tellus pellentesque eu tincidunt tortor
                        aliquam. Faucibus purus in massa tempor nec. Amet dictum sit amet justo donec enim diam vulputate ut.
                        Habitasse platea dictumst vestibulum rhoncus est. Tellus in hac habitasse platea dictumst vestibulum
                        rhoncus est pellentesque. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.
                        Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Amet consectetur adipiscing
                        elit duis tristique sollicitudin nibh.
                    </article>
                    <img className='about_image' src="https://picsum.photos/300/300" alt="Journal Buddy Usage Screenshot" />
                    <Link className='common_link' to='Register'>Sign up!</Link>
                </section>
            </>
        );
    };
};

export default About;
