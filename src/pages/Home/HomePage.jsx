import useTitle from "../../hooks/useTitle";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";

export default function HomePage() {

    useTitle("Access Latest Computer Science eBooks - CodeBook");
    
    return (
        <main>
            <Hero />
            <FeaturedProducts />
            <Testimonial />
            <Faq />
        </main>
    )
}