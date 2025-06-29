import Container from "@/components/shared/Container";
import ProjectCart from "@/components/ui/ProjectCart";
import { getLocalData } from "../../utils/localJson.utils";
import SlideIn from "@/components/motions/SlideIn";

const ProjectsPage = async () => {
  const nums = [1, 2, 3, 4, 5, 6];

  const user = await getLocalData("data.json");

  return (
    <Container>
      <div className="mt-8 mx-4 ">
        <h1 className="text-4xl font-semibold uppercase">Web App</h1>
        <div className="flex flex-wrap justify-center lg:justify-start gap-5">
          {user.projects &&
            user.projects.map((project: any, index: number) => (
              <SlideIn delay={index * 0.1} key={index}>
                <ProjectCart project={project} />
              </SlideIn>
            ))}
        </div>
      </div>
      {/* <div className="my-8 mx-4 space-y-12">
        <h1 className="text-4xl font-semibold uppercase">Mobile App</h1>
        <div className="flex flex-wrap justify-center lg:justify-start gap-5">
          {user.projects && user.projects.map((project: any, index: number) => (
            <ProjectCart project={project} key={index} />
          ))}
        </div>
      </div> */}
    </Container>
  );
};

export default ProjectsPage;
