import { useParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Course = ({ openDrawer, drawer }) => {
  const params = useParams()

  let output = <></>
  switch (params.courseID) {
    case "frontend":
      output = (<div>frontend</div>);
      break;
    case "media-literacy":
      output = (<div>media</div>);
      break;
    default:
      break;
  }
  return (
    <>
      <Nav
        openDrawer={openDrawer}
        drawer={drawer}
        first_link="Преподователь"
        second_link="Программа обучения"
        third_link="О курсе"
        footer="Контакты" />
      {output}
    </>
  )
}

export default Course;