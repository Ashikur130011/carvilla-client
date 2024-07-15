import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../../Services/Services/Services';
import Extra from '../Extra/Extra';
import Products from '../Products/Products';
import Team from '../Team/Team';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Extra/>
            <Products/>
            <Team/>
            <Features/>
            <Testimonial/>
        </div>
    );
};

export default Home;