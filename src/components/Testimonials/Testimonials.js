import styles from "./Testimonials.module.css";
import Dave from "../../content/img/customers/dave.jpg";
import Ben from "../../content/img/customers/ben.jpg";
import Steve from "../../content/img/customers/steve.jpg";
import Hannah from "../../content/img/customers/hannah.jpg";
import galImg1 from "../../content/img/gallery/gallery-1.jpg";
import galImg2 from "../../content/img/gallery/gallery-2.jpg";
import galImg3 from "../../content/img/gallery/gallery-3.jpg";
import galImg4 from "../../content/img/gallery/gallery-4.jpg";
import galImg5 from "../../content/img/gallery/gallery-5.jpg";
import galImg6 from "../../content/img/gallery/gallery-6.jpg";
import galImg7 from "../../content/img/gallery/gallery-7.jpg";
import galImg8 from "../../content/img/gallery/gallery-8.jpg";
import galImg9 from "../../content/img/gallery/gallery-9.jpg";
import galImg10 from "../../content/img/gallery/gallery-10.jpg";
import galImg11 from "../../content/img/gallery/gallery-11.jpg";
import galImg12 from "../../content/img/gallery/gallery-12.jpg";

const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className={`${styles.testimonials} grid grid-2-cols`}>
        <div className={styles.testimonialContainer}>
          <span className="subheading">Testimonials</span>
          <h2 className="heading-secondary">
            Once you try it, you can't go back
          </h2>
          <div
            className={`${styles.testimonialsReview} ${styles.grid} grid grid-2-cols`}
          >
            <figure className={styles.testimonial}>
              <img
                className={styles.testimonialImg}
                src={Dave}
                alt="photo of customer Dave Bryson"
              />
              <blockquote className={styles.testimonialText}>
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p className={styles.testimonialName}>&mdash;Dave Bryson</p>
            </figure>

            <figure className={styles.testimonial}>
              <img
                src={Ben}
                alt="photo of customer Ben Hadley"
                className={styles.testimonialImg}
              />
              <blockquote className={styles.testimonialText}>
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </blockquote>
              <p className={styles.testimonialName}>&mdash;Dave Bryson</p>
            </figure>

            <figure className={styles.testimonial}>
              <img
                src={Steve}
                alt="photo of customer Ben Hadley"
                className={styles.testimonialImg}
              />
              <blockquote className={styles.testimonialText}>
                Omnifood is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </blockquote>
              <p className={styles.testimonialName}>&mdash;Steve Miller</p>
            </figure>

            <figure className={styles.testimonial}>
              <img
                src={Hannah}
                alt="photo of customer Hannah Smith"
                className={styles.testimonialImg}
              />
              <blockquote className={styles.testimonialText}>
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p className={styles.testimonialName}>&mdash;Hannah Smith</p>
            </figure>
          </div>
        </div>
        <div className={`${styles.gallery} grid grid-3-cols`}>
          <figure className={styles.galleryItem}>
            <img src={galImg1} alt="photo of a beautifully arranged food" />
          </figure>
          <figure className={styles.galleryItem}>
            <img src={galImg2} alt="photo of a beautifully arranged food" />
          </figure>
          <figure className={styles.galleryItem}>
            <img src={galImg3} alt="photo of a beautifully arranged food" />
          </figure>
          <figure className={styles.galleryItem}>
            <img src={galImg4} alt="photo of a beautifully arranged food" />
          </figure>
          <figure className={styles.galleryItem}>
            <img src={galImg5} alt="photo of a beautifully arranged food" />
          </figure>
          <figure className={styles.galleryItem}>
            <img src={galImg6} alt="photo of a beautifully arranged food" />
          </figure>
          <figure className={styles.galleryItem}>
            <img src={galImg7} alt="photo of a beautifully arranged food" />
          </figure>
          <figure className={styles.galleryItem}>
            <img src={galImg8} alt="photo of a beautifully arranged food" />
          </figure>
          <figure className={styles.galleryItem}>
            <img src={galImg9} alt="photo of a beautifully arranged food" />
          </figure>
          <figure className={styles.galleryItem}>
            <img src={galImg10} alt="photo of a beautifully arranged food" />
          </figure>
          <figure className={styles.galleryItem}>
            <img src={galImg11} alt="photo of a beautifully arranged food" />
          </figure>
          <figure className={styles.galleryItem}>
            <img src={galImg12} alt="photo of a beautifully arranged food" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
