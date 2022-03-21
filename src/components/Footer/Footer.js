import classes from "./Footer.module.scss";
import fi from "../../assets/footer-test.svg"

const Footer = () => {
  return (<footer id="footer">
    <div className={classes.container}>
      <div className={classes.links}>
        <div className={classes.courses}>
          <h3>Курсы</h3>
          <ul>
            <li><a href="#">frontend  разработка</a></li>
            <li><a href="#">Медиа граммотность</a></li>
          </ul>
        </div>
        <div className={classes.media}>
          <h3>Ссылки</h3>
          <ul>
            <li><a href="#"><img alt="f" src={fi} /></a></li>
            <li><a href="#"><img alt="f" src={fi} /></a></li>
            <li><a href="#"><img alt="f" src={fi} /></a></li>
            <li><a href="#"><img alt="f" src={fi} /></a></li>
            <li><a href="#"><img alt="f" src={fi} /></a></li>
          </ul>
        </div>
      </div>

      <div className={classes.footer_info}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11769.58524989301!2d78.3866217!3d42.4831265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78a9de24f2cc9c3b!2sIT-Academy%20Karakol!5e0!3m2!1sru!2skg!4v1646288209877!5m2!1sru!2skg" width="400" height="250" loading="lazy"></iframe>
        <div>
          <span>0 999 9999999</span>
          <span>0 999 9999999</span>
          <span>it-academy-karakol@gmail.com</span>
        </div>
      </div>
    </div>
  </footer>);
}

export default Footer;