import { useParams } from "react-router-dom";
import CourseAbout from "../../components/CourseAbout/CourseAbout";
import CourseHeader from "../../components/CourseHeader/CourseHeader";
import Nav from "../../components/Nav/Nav";
import Mentor from "../../components/Mentor/Mentor";
import Drawer from "../../components/Drawer/Drawer";
import Roadmap from "../../components/Roadmap/Roadmap";

const Course = ({ openDrawer, drawer, drawerOpen, closeDrawer }) => {
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
        openDrawer={openDrawer}
        drawer={drawer}
        first_link="Преподователь"
        second_link="Программа обучения"
        third_link="О курсе"
        footer="Контакты"
        href1='#mentor'
        href2='#programm'
        href3='#aboutCourse'
        href4='#footer'/>
        <CourseHeader />
        <CourseAbout />
        <Mentor />
        <Roadmap/>
      {output}
      <Drawer open={drawerOpen} closeDrawer={closeDrawer} which={true}/>

    </>
  )
}

export default Course;