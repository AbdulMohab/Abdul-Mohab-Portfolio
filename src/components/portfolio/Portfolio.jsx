import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { useEffect, useState } from "react";

import { 
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data.js";


export default function Portfolio() {
  const[selected, setSelected] = useState("Featured");
  const[data, setData] = useState([]);
  const list = [
    {
      id: "Featured",
      title: "Featured",
    },
    {
      id: "Web App",
      title: "Web App",
    },
    {
      id: "Mobile App",
      title: "Mobile App",
    },
    {
      id: "Design",
      title: "Design",
    },
    {
      id: "Content",
      title: "Content",
    }

  ];

  useEffect(() => {
    switch (selected) {
      case "Featured":
        setData(featuredPortfolio);
        break;
      case "Web App":
        setData(webPortfolio);
        break;
      case "Mobile App":
        setData(mobilePortfolio);
        break;
      case "Design":
        setData(designPortfolio);
        break;
      case "Content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList title={item.title} active = { selected === item.id} setSelected ={setSelected} id={item.id} />
      
        ))}
      </ul>
      <div className="container">
        {data.map(d =>(

          <div className="item">
          <img src={d.img} alt="No Image Found" />
          <h3>{d.title}</h3>
        </div>
        
        ))}
      </div>
    </div>
  );
}
