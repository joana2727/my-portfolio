// Helper function to import all images from a folder
const importAll = (requireContext) => {
    return requireContext.keys().reduce((images, file) => {
      const fileName = file.replace('./', ''); // Get file name without './'
      images[fileName] = requireContext(file); // Add to the images object
      return images;
    }, {});
  };
  
  // Import all images from the assets folder
  const projectImages = importAll(require.context('../../assets/projects', false, /\.(webp|jpg|png|svg)$/));
  
  const projects = [
    {
      name: "Attendance App ",
      description: "A user-friendly front-end design for a mobile attendance application, focused on seamless navigation and an intuitive interface.",
      techTools: ["Figma"],
      link: "https://www.figma.com/proto/2S3kNW2D4y4fjdyuB2NKQj/Attendance-Management-System--COSC-65-?node-id=9-57",
      image: projectImages["proj1.svg"], // Access image from imported images
    },
    {
      name: "Checklist Website",
      description: "A comprehensive checklist showcasing my grades from 1st to 4th year, offering a clear overview of my academic performance and progress throughout my studies",
      techTools: ["PHP", "HTML", "CSS", "XAMPP", "SQL", "JavaScript", "VS Code"],
      link: "https://github.com/joana2727/checklistwebsite",
      image: projectImages["proj2.svg"], // Access image from imported images
    },
    {
        name: "BiteLite Appointment",
        description: "A simple and efficient Java-based appointment booking app for Bitelite, designed to streamline scheduling and manage client appointments with ease.",
        techTools: ["Java", "Swing", "SQL", "Eclipse"],
        link: "https://github.com/joana2727/bitelite",
        image: projectImages["proj3.svg"], // Access image from imported images
      },
    // Add more projects here
  ];
  
  export default projects;
  