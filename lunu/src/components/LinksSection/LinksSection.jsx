import { links } from "../../data/links";
import LinkCard from "../LinkCard/LinkCard";
import "./LinksSection.css";

function LinksSection() {
  return (
    <section className="linksSection">
      <div className="linksSection__top">
        <span className="linksSection__line"></span>
        <p className="linksSection__label">Canais De Contato</p>
        <span className="linksSection__line"></span>
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