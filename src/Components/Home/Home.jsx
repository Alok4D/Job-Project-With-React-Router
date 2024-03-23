import Banner from "../Banner/Banner";
import FeaturedJob from "../Featured Job/FeaturedJob";
import CategoryList from "../Job Category List/CategoryList";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJob></FeaturedJob>
            
        </div>
    );
};

export default Home;