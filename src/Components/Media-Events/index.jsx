import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';
import ContactForm from '../Shared/slider';
import { ReactTinyLink } from "react-tiny-link";
import './media.css';
import Footer from '../Shared/footer';

class Media extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                    <ContactForm />
                    <Adminav />
                    <Title title="Media & Events" />
                    <div className="blurb-border-title">ARTICLES</div>
                    <div className="blurb-border">
                    </div>
                    <div className="media-card-container">
                        <div className="media-card">
                            <ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url="https://www.sbs.com.au/topics/life/relationships/article/2019/03/29/new-platform-building-community-elderly-neighbours"
                            />
                        </div>

                        <div className="media-card">
                            <ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url="https://www.boltonclarke.com.au/news-resources/corporate-news/library-of-aged-care-things-changing-lives/"
                            />
                        </div>

                        <div className="media-card">
                            <ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url="https://www.thesenior.com.au/story/5857868/old-is-new-in-aged-care-library/"
                            />
                        </div>

                        <div className="media-card">
                            <ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url="https://greymatters.net.au/author/matiu-bush/"
                            />
                        </div>

                        <div className="media-card">
                            <ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url="https://www.boltonclarke.com.au/about-us/innovation/library-of-aged-care-things/"
                            />
                        </div>

                        <div className="media-card">
                            <ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url="https://www.abc.net.au/life/how-technology-can-help-combat-social-isolation/10496024"
                            />
                        </div>
                    </div>
                </div>

                <div className="blurb-border-title">PODCASTS</div>
                <div className="blurb-border">
                </div>
                <div className="media-card-container">
                    <div className="media-card">
                        <ReactTinyLink
                            cardSize="small"
                            showGraphic={true}
                            maxLine={2}
                            minLine={1}
                            url="https://www.abc.net.au/radionational/programs/this-working-life/the-keepcup-and-living-in-one-good-street/10731508"
                        />
                    </div>
                    <div className="media-card">
                        <ReactTinyLink
                            cardSize="small"
                            showGraphic={true}
                            maxLine={2}
                            minLine={1}
                            url="https://www.timsolly.com/podcast"
                        />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default Media;