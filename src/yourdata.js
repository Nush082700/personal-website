// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.png"
import jsIcon from "./images/javascript.png"
import pythonIcon from "./images/python.png"
import sqlIcon from "./images/sql.png"
import tableauIcon from "./images/tableau.svg"
import mlIcon from "./images/ml.png"

import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "anusha",
  headerTagline: [
    //Line 1 For Header
    "Intersectional Technology",
    //Line 2 For Header
    "and immersive discussion,",
    //Line 3 For Header
    "to create socially impactful technology",
  ],
  //   Header Paragraph
  headerParagraph:
    "Technology for me is multi-dimensional. It doesn't just stop at code but encompasses various disciplines and walks of life like sociology, philosophy, art and more. This website is to showcase my various projects and research papers which are on the intersectionality of technology and other things",

  //Contact Email
  contactEmail: "27anusha.choudhury@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Volunteer Management System", //Project Title - Add Your Project Title Here
      para:
        "Multiple features for volunteers such as timeslot booking, online waiver form signage, shift management etc and admin features such as creating event, modifying shifts, veryifying waiver etc", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.pinimg.com/736x/be/4d/32/be4d323e9f419a3c29840e188e944384.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.coecis.cornell.edu/ac978/HabitaForHumanity-Web-App",
    },
    {
      title: "Checkers", //Project Title - Add Your Project Title Here
      para:
        "Created an AI based Checker's game using functional programming in OCaml", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://image.shutterstock.com/image-illustration/rich-gold-white-checkered-seamless-260nw-239914450.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.coecis.cornell.edu/ac978/checkers",
    },
    {
      title: "Community Assistance for Covid-19", //Project Title - Add Your Project Title Here
      para:
        "Developed a Flask-React App to connect the vuleranble and elderly in the community with caregivers during Covid for maximum support", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://wrcitytimes.com/wp-content/uploads/2020/04/community-support-stock-image.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Nush082700/assistance-covid19-app",
    },
    {
      title: "PolySeeds for Peace", //Project Title - Add Your Project Title Here
      para:
        "Developed a stacked Machine Learning model to predict the probability of a country going to war. WIP, looking for collaborators to refine it", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://cdn.shopify.com/s/files/1/2554/1458/products/mustard-flowers_1024x1024@2x.jpg?v=1620671098",
      //Project URL - Add Your Project Url Here
      url: "​www.polyseedsforpeace.com​",
    },
    {
      title: "Farmworker's Justice", //Project Title - Add Your Project Title Here
      para:
        "Deployed and debugged a MERN Stack data visualiser and informational campaign for Famrworker's Justice NGO.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://learn.g2.com/hubfs/types%20of%20data%20visualization@2x.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.coecis.cornell.edu/hack4impact-cornell/farmworkers-justice",
    },
    {
      title: "Data Visualizer for CANY", //Project Title - Add Your Project Title Here
      para:
        "Created a Data Visualizer using SQL and D3.js to enable the Correctional Association of New York to push for policy changes to improve the conditions of prisoners", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://www.sydneycriminallawyers.com.au/app/uploads/2019/10/rehabilitation-1000x563.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Nush082700",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am currently a senior at Cornell University majoring in Computer Science but outside of classes, I love dancing, cooking, watching and listening to true crime documenteries, having conversations about philosophy, politics, religion etc and playing badminton..",
  aboutParaTwo:
    "I love to connect with people and talk about various ideas and possible implement it. I love to talk about intersectionality and ethics especially when it comes to technology. Some podcasts I love listening to in this field are: The Radical AI Podcast, The Science of Social Impact, TED Talks Daily.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
  "https://images.ctfassets.net/dz50cburkkql/6SCvRvlr9SsslxLs8fkvYy/f1cc184f8a7e44daae11e98a6a4392cf/DSC_0088.JPG",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      // para:
      //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      // para:
      //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      // para:
      //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      // para:
      //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    { //add python
      img: pythonIcon
    },
    { // ad SQL
      img: sqlIcon
    },
    { // ad tableau
     img: tableauIcon
    },
    { // ad Machine Learning
      img: mlIcon
    },
    // { // ad ICT4D
    //   imageSrc:
    //     "https://i.pinimg.com/564x/a3/05/a2/a305a2c150dddceefe4fc2c3b56f461d.jpg",
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/chetanverma16" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
