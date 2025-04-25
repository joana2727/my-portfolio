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
      name: "Creator Portfolio",
      description: "A comprehensive view of my works as a content creator. This showcases my content works for all types of niche I've tried to attract potential clients and collaborations.",
      techTools: ["Canva"],
      link: "https://workwithmikks.my.canva.site/",
      image: projectImages["proj4.svg"], // Access image from imported images
    },
    {
      name: "Presentation Compilation",
      description: "Here I share aesthetic and professional PowerPoint templates to level up your presentations — perfect for students, professionals, and content creators.",
      techTools: ["YouTube", "MS PPT"],
      link: "https://www.youtube.com/@by_mikks",
      image: projectImages["proj5.svg"], // Access image from imported images
    },
   
  ];
  
  export default projects;
  