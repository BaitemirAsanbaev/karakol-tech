import { useParams } from "react-router-dom";

const Course = () => {
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
    {output}

  </>
)
}

export default Course;