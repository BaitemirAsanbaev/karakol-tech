import { useParams } from "react-router-dom";
import CourseAbout from "../../components/CourseAbout/CourseAbout";
import CourseHeader from "../../components/CourseHeader/CourseHeader";
import Nav from "../../components/Nav/Nav";
import Mentor from "../../components/Mentor/Mentor";
import Roadmap from "../../components/Roadmap/Roadmap";

const Course = () => {
  const params = useParams()
  let output = <></>
  switch (params.courseID) {
    case "frontend":
      output = (<div></div>);
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
        first_link="Преподователь"
        second_link="Программа обучения"
        third_link="О курсе"
        footer="Контакты" />
        <CourseHeader />
        <CourseAbout />
        <Mentor />
        <Roadmap/>
      {output}

    </>
  )
}

export default Course;