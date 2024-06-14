import React from 'react';
import Hero from "../../components/hero/Hero.jsx";
import { getAllFeature } from '../../services/feature.js'
import FeatureItem from "../../components/featureItem/FeatureItem.jsx";
function Home() {
  const feature = getAllFeature();

    return (
      <main className='Main'>
        <Hero />
        <section className="features">
                <h2 className="sr-only">Features</h2>
                {feature.map( e=> (
                    <FeatureItem
                        key={e.id}
                        src={e.src}
                        alt={e.alt}
                        title={e.title}
                        text={e.text}
                    />
                ))}
            </section>

      </main>
    
    
    )
}

export default Home