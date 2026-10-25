import React from 'react';
import styles from './About.module.css';
import about1 from "../../Assets/Images/about1.svg";
import about2 from "../../Assets/Images/about2.svg";
import about3 from "../../Assets/Images/about3.svg";
import about_title from "../../Assets/Images/about-title.svg";
import Footer from "../../Components/Footer/Footer.jsx";

const images = [
  { key: 1, src: about1, alt: "about1" },
  { key: 2, src: about2, alt: "about2" },
  { key: 3, src: about3, alt: "about3" }
];

const About = () => {
  return (
    <section className={styles.container}>
      <section>
        <img className={styles.titleImg} src={about_title} alt="about-title" />
      </section>

      <section className={styles.story} aria-labelledby="about-title">
        <h2 id="about-title">Step &amp; Repeat</h2>

        <p>
          Step &amp; Repeat is a destination for sneaker enthusiasts
          and lovers of sneaker culture, prioritizing the preferences
          of the most discerning consumers. With a clear mission to
          promote urban culture, Step &amp; Repeat introduces the most
          popular models from renowned brands—such as Nike, Jordan,
          Adidas, New Balance, Asics, Converse, and New Era—each season.
        </p>

        <p>
          Step &amp; Repeat offers customers the latest releases from
          both local and international markets through carefully
          curated collections and a distinctive product presentation
          style. Driven by a mission to promote new trends in urban
          and sportswear—and characterized by a unique, original
          approach and a sophisticated atmosphere—Step &amp; Repeat
          stands out clearly from other athletic footwear stores.
          Its customers not only follow global trends but also
          champion urban fashion themselves, constantly motivated to
          stay one step ahead.
        </p>

        <p>
          Keeping pace with international trends, Step &amp; Repeat
          has become a favorite destination for those who follow the
          evolution of the sneaker community—individuals who value
          uniqueness and originality, and who express their attitude
          and individuality through their personal style.
        </p>

        <p>
          The online store www.stepandrepeat.ro was launched as a
          natural extension of the Step &amp; Repeat retail network,
          designed specifically to provide urban fashion enthusiasts
          with easier access to these collections.
        </p>
      </section>

      <section className={styles.gallery} aria-label="Our stores">
        {images.map(({ key, src, alt }) => (
          <img
            key={key}
            src={src}
            alt={alt}
            width="400"
            height="283"
            loading="lazy"
          />
        ))}
      </section>

      <section className={styles.details} aria-labelledby="company-title">
        <h2 id="company-title">Company details:</h2>

        <p>SC BDS RO SPORT SRL</p>
        <p>RO 33878190; J40/14169/2014</p>

        <p>
          Email: <a href="mailto:online@stepandrepeat.ro">online@stepandrepeat.ro</a>
        </p>

        <p>
          Order email: <a href="mailto:online@stepandrepeat.ro">online@stepandrepeat.ro</a>
        </p>

        <p>
          Registered office: Bucharest, Sector 6, 4E G-ral Paul
          Teodorescu Boulevard, AFI Park 1 Building, 9th Floor
        </p>
      </section>

      <Footer />
    </section>
  );
};

export default About;