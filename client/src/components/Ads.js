import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://i.ibb.co/XFv9c6z/crimson.png',
    header: 'Try Our Foot Scanner Tool',
    caption: 'To find the perfect fit for you!',
    //header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'https://i.ibb.co/b1gm333/amazon.jpg',
    header: 'Offers',
    caption: 'Upto 50% off until Dec 31st',    
    key: '2'
  },
  {
    src: 'https://i.ibb.co/jMF9c2P/blue.jpg',
    header: 'New Arrivals',     
    caption: 'check out our latest designs',    
    key: '3'
  },
  {
    src: 'https://i.ibb.co/bXzCMJ9/Aqua.jpg',
    header: 'Try out our Personalised Deals',
    caption: 'No more Spam mails. Get only the Deals you Want. When you want them !',
    key: '4'
  }
];

const Ads = () => 
<div>
<UncontrolledCarousel items={items} />
</div>;

export default Ads;