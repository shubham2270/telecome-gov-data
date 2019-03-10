import React, { Component } from 'react';
import './home.css';

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animateHome: 'translateX(-300px)',
        }
    }

    slidehome = () => {
        this.setState({animateHome: 'translateX(0px)'})
        console.log('from home')
    }
    render() {
        return (
        <div className='home__wrapper' style={{transform: this.props.slideHome}}>
            <div className='home_lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis itaque ipsa similique consectetur, mollitia quia quam eos iste earum iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at culpa illo placeat. Vitae non dignissimos natus quam excepturi aperiam alias fugit at. Quibusdam amet repudiandae sapiente nulla natus veniam tempora quae explicabo inventore sit! Deleniti molestiae est non quibusdam eaque quia. Magni, accusantium ex. Dolor odio fugit tenetur reiciendis maiores recusandae repellat a accusamus dicta, omnis voluptates esse non! Tempora distinctio temporibus, sit reiciendis numquam sapiente fugiat vero eos. Nam praesentium a officiis, ad eaque id est error incidunt aliquam eligendi soluta reiciendis fugiat blanditiis, eos, nobis rerum ut architecto atque iure placeat! Ratione, tenetur. Debitis, laborum distinctio? Voluptas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde accusamus assumenda sunt dolore adipisci tempora? Ea optio ad accusamus, nam exercitationem debitis eum velit ullam expedita, temporibus voluptas dolorum distinctio reprehenderit ipsa nesciunt fuga dolores. Dolor dicta odio ipsum eius minus aspernatur doloremque quisquam omnis aut optio, corporis totam deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum, corrupti qui a error consectetur quibusdam sunt aperiam incidunt illum! Aperiam rem in cumque obcaecati velit neque natus accusamus dignissimos itaque, et, vero veniam, accusantium nesciunt deserunt. Error nemo molestiae ipsam autem, adipisci, excepturi neque, aliquid temporibus delectus perspiciatis minus.Error nemo molestiae ipsam autem, adipisci, excepturi neque, aliquid temporibus delectus</div>
            <div className='home__text'>Just a Lorem Decorated Home Page</div>
            <div className='home_lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis itaque ipsa similique consectetur, mollitia quia quam eos iste earum iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at culpa illo placeat. Vitae non dignissimos natus quam excepturi aperiam alias fugit at. Quibusdam amet repudiandae sapiente nulla natus veniam tempora quae explicabo inventore sit! Deleniti molestiae est non quibusdam eaque quia. Magni, accusantium ex. Dolor odio fugit tenetur reiciendis maiores recusandae repellat a accusamus dicta, omnis voluptates esse non! Tempora distinctio temporibus, sit reiciendis numquam sapiente fugiat vero eos. Nam praesentium a officiis, ad eaque id est error incidunt aliquam eligendi soluta reiciendis fugiat blanditiis, eos, nobis rerum ut architecto atque iure placeat! Ratione, tenetur. Debitis, laborum distinctio? Voluptas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde accusamus assumenda sunt dolore adipisci tempora? Ea optio ad accusamus, nam exercitationem debitis eum velit ullam expedita, temporibus voluptas dolorum distinctio reprehenderit ipsa nesciunt fuga dolores. Dolor dicta odio ipsum eius minus aspernatur doloremque quisquam omnis aut optio, corporis totam deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum, corrupti qui a error consectetur quibusdam sunt aperiam incidunt illum! Aperiam rem in cumque obcaecati velit neque natus accusamus dignissimos itaque, et, vero veniam, accusantium nesciunt deserunt. Error nemo molestiae ipsam autem, adipisci, excepturi neque, aliquid temporibus delectus perspiciatis minus. Error nemo molestiae ipsam autem, adipisci, excepturi neque, aliquid temporibus delectus</div>
        </div>
    )}
}

export default home;