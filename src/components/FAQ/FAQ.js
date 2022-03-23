import classes from "./FAQ.module.scss";

const FAQ = () => {
  return (<div id="faq" className={classes.FAQ}>
    <details>
      <summary>Можно ли обучиться профессии за такой срок?</summary>
      <div className={classes.Content}>
        <p>Да, это возможно. Также, важно уделять время вне уроков на дополнительное обучение. Минимум 2 часа в день</p>
      </div>
    </details>
    <details>
      <summary>Можно ли обучиться профессии за такой срок?</summary>
      <div className={classes.Content}>
        <p>Да, это возможно. Также, важно уделять время вне уроков на дополнительное обучение. Минимум 2 часа в день</p>
      </div>
    </details>
    <details>
      <summary>Можно ли обучиться профессии за такой срок?</summary>
      <div className={classes.Content}>
        <p>Да, это возможно. Также, важно уделять время вне уроков на дополнительное обучение. Минимум 2 часа в день</p>
      </div>
    </details>
  </div>);
}

export default FAQ;