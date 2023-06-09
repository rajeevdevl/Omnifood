import styles from "./Footer.module.css";
import ContainerGrid from "../UI/ContainerGrid";
import logo from "../content/img/omnifood-logo.png";
import { LogoInstagram, LogoTwitter, LogoFacebook } from "react-ionicons";

const Footer = () => {
  return (
    <footer>
      <ContainerGrid className={`${styles.grid}  grid`}>
        <div className={styles.logoCol}>
          <a href="#">
            <img src={logo} className="logo" />
          </a>

          <ul className={styles.socialLinks}>
            <li>
              <a href="" className={styles.footerLink}>
                <LogoInstagram
                  color={"#767676"}
                  height="2.4rem"
                  width="2.4rem"
                />
              </a>
            </li>

            <li>
              <a href="" className={styles.footerLink}>
                <LogoFacebook
                  color={"#767676"}
                  height="2.4rem"
                  width="2.4rem"
                />
              </a>
            </li>

            <li>
              <a href="" className={styles.footerLink}>
                <LogoTwitter color={"#767676"} height="2.4rem" width="2.4rem" />
              </a>
            </li>
          </ul>

          <p className={styles.copyright}>
            Copyright &copy; 2023 by Omnifood, Inc. All right reserved.
          </p>
        </div>

        <div className={styles.addressCol}>
          <p className={styles.footerHeading}>Contact Us</p>
          <address className={styles.contacts}>
            <p className={styles.address}>
              Address: 623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>

            <p>
              <a href="tel:415-201-6370" className={styles.footerLink}>
                415-201-6370
              </a>
              <br />
              <a href="mailto:hello@omnifood.com" className={styles.footerLink}>
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>

        <nav className={styles.navCol}>
          <p className={styles.footerHeading}>Account</p>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="#">
                Create account
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.navCol}>
          <p className={styles.footerHeading}>Company</p>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="#">
                About Omnifood
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                For Business
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Careers
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.navCol}>
          <p className={styles.footerHeading}>Resources</p>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="#">
                Recipe directory
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Help center
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </ContainerGrid>
    </footer>
  );
};

export default Footer;
