import { links } from "../../data/links";
import LinkCard from "../LinkCard/LinkCard";
import "./LinksSection.css";

function LinksSection() {
  return (
    <section className="linksSection">
      <div className="linksSection__top">
        
        <p className="linksSection__label">Canais De Contato</p>
        
      </div>

      

      <div className="linksSection__list">
        {links.map((link, index) => (
          <LinkCard key={link.title} index={index} {...link} />
        ))}
      </div>
    </section>
  );
}

export default LinksSection;