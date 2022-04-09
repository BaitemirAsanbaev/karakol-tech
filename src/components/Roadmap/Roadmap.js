import classes from "./Roadmap.module.scss"
const Roadmap = () => {
  return (<div className={classes.Roadmap}>
    <h1>Программа обучения</h1>
    <div className={classes.roadmap_container}>
      <div className={classes.visual}>
        <div className={classes.digits}>1</div>
        <div className={classes.line}></div>
        <div className={classes.digits}>2</div>
        <div className={classes.line}></div>
        <div className={classes.digits}>3</div>
        <div className={classes.line}></div>
        <div className={classes.digits}>4</div>
        <div className={classes.line}></div>
        <div className={classes.digits}>5</div>
      </div>
      <div className={classes.roadmap_info}>
        <div>
          <h2>HTML</h2>
          <p>Язык, который отвечает за содержимое сайта - тексты, картинки, ссылки и тд. Ты научишься правильно писать семантику страницы и отработаешь весь функционал на практике.
          </p>
        </div>
        <div>
          <h2>CSS</h2>
          <p>Язык, который отвечает за содержимое сайта - тексты, картинки, ссылки и тд. Ты научишься правильно писать семантику страницы и отработаешь весь функционал на практике.
          </p>
        </div>
        <div>
          <h2>JavaScript</h2>
          <p>Язык, который отвечает за содержимое сайта - тексты, картинки, ссылки и тд. Ты научишься правильно писать семантику страницы и отработаешь весь функционал на практике.
          </p>
        </div>
        <div>
          <h2>React</h2>
          <p>Язык, который отвечает за содержимое сайта - тексты, картинки, ссылки и тд. Ты научишься правильно писать семантику страницы и отработаешь весь функционал на практике.
          </p>
        </div>
        <div>
          <h2>Также</h2>
          <p>Язык, который отвечает за содержимое сайта - тексты, картинки, ссылки и тд. Ты научишься правильно писать семантику страницы и отработаешь весь функционал на практике.
          </p>
        </div>
        
      </div>
    </div>
  </div>);
}

export default Roadmap;