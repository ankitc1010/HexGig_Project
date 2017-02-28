import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className="container about">
                <div className="row">
                    <div className="col-md-6 image">
                        <iframe src="https://www.youtube.com/embed/FM7MFYoylVs?list=PLw-VjHDlEOgvtnnnqWlTqByAtC7tXBg6D" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <div className="col-md-6 text">
                        <h1>About Us</h1>
                        <br/>
                        <div className="row paragraphs">
                            <div className="col-md-6">
                                Verbattle Foundation, a registered non-profit, has been set up to instil qualities of tolerance and understanding in the society, in addition to its goal to work as an effective tool for conflict resolution - be it at a personal level or between nations.<br/>
                            </div>

                            <div className="col-md-6">
                                Verbattle was established as an all-encompassing solution for all communication and public domain challenges in our society. The programs and activities have now evolved into being highly achievable and replicable models.<br/>
                        </div>
                      </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default About;
