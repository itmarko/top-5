
const resourcesData = [  
    {  
      title: "Why Your Online Reputation Truly Matters.",  
      description: "Initial feelings on the web: Envision meeting another person on the web. Their online entertainment resembles their outfit: it shapes your thought process. Your web-based presence is the same. It's your initial feeling to possible clients.",  
      image: "https://via.placeholder.com/300",  
    },  
    {  
      title: '"Boost Your Website: Simple Steps to Reach the Top of Google Search"',  
      description: "In the huge web-based world, getting your site seen can be a distinct advantage. To move to the highest point of Google list items, follow these straightforward advances.",  
      image: "https://via.placeholder.com/300",  
    },  
    {  
      title: '"The AI Revolution: Transforming Your Online Security"',  
      description: "Computer based intelligence is altering on the web security, guaranteeing your advanced wellbeing. High level calculations break down tremendous information, recognizing and forestalling digital dangers continuously.",  
      image: "https://via.placeholder.com/300",  
    },  
  ];  
  
  const Resources = () => {  
    return (  
      <div className="container mx-auto px-4">  
        <h1 className="text-3xl font-bold text-center my-8">Resources & Research</h1>  
        <p className="text-center mb-8">We ve collaborated with professionals across the nation, which has helped us in our research for the selection of the best business. Unlike most content on the web, our resources are written by industry professionals.</p>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">  
          {resourcesData.map((resource, index) => (  
            <div key={index} className="border rounded-lg p-4 shadow-lg">  
              <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover rounded-t-lg" />  
              <h2 className="font-semibold mt-4">Here is something special!</h2>  
              <h3 className="text-lg font-bold mt-2">{resource.title}</h3>  
              <p className="mt-2">{resource.description}</p>  
            </div>  
          ))}  
        </div>  
      </div>  
    );  
  };  
  
  export default Resources;