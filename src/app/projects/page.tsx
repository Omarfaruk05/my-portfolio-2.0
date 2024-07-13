import Container from "@/components/shared/Container";
import ProjectCart from "@/components/ui/ProjectCart";

const ProjectsPage = () => {
  const nums = [1, 2, 3, 4, 5, 6];
  return (
    <Container>
      <div className="mt-8 mx-4 space-y-12">
        <h1 className="text-4xl font-semibold uppercase">Web App</h1>
        <div className="flex flex-wrap justify-center lg:justify-start gap-5">
          {nums.map((num, index) => (
            <ProjectCart key={index} />
          ))}
        </div>
      </div>
      <div className="my-8 mx-4 space-y-12">
        <h1 className="text-4xl font-semibold uppercase">Mobile App</h1>
        <div className="flex flex-wrap justify-center lg:justify-start gap-5">
          {nums.map((num, index) => (
            <ProjectCart key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProjectsPage;
