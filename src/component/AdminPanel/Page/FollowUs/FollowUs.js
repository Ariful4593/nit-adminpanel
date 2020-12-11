import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const followData = [
    { id: 1, title: 'Like us on Facebook', subtitle: '30,000', color: '#485C8F', icon: FacebookIcon },
    { id: 2, title: 'Follow us on Twitter', subtitle: '11,000', color: '#1F89E5', icon: TwitterIcon },
    { id: 3, title: 'Follow us of Google+', subtitle: '19,000', color: '#DB1A1A', icon: FacebookIcon },
    { id: 4, title: 'Follow us on LinkedIn', subtitle: '45,000', color: '#1559A7', icon: LinkedInIcon },
]
const FollowUs = () => {
    return (
        <div className="row">
            {
                followData.map(element => {
                    return (
                        <div className="col-md-3 pr-0" key={element.id} >
                            <div className="shadow p-3  rounded" style={{backgroundColor: `${element.color}`}} >
                                <h5 className="text-white"> {element.title}</h5>
                                <h2 className="text-white">{element.subtitle}</h2>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default FollowUs;