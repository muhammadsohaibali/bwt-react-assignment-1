import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import NewsLetter from './components/Newsletter';
import Blogs from './components/Blogs';

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Blogs />
            <FAQ />
            <NewsLetter />
        </>
    );
}
