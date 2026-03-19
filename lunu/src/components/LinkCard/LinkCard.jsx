import { ArrowUpRight } from "lucide-react";
import "./LinkCard.css";

function LinkCard({ title, description, url, icon: Icon, tag }) {
  const isExternal = url.startsWith("http");

  return (
    <a
      href={url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="linkCard"
      aria-label={title}
    >
      <div className="linkCard__left">
        <div className="linkCard__iconWrap">
          <Icon size={20} strokeWidth={1.9} />
        </div>

        <div className="linkCard__content">
          {tag ? <span className="linkCard__tag">{tag}</span> : null}
          <span className="linkCard__title">{title}</span>
          <span className="linkCard__description">{description}</span>
        </div>
      </div>

      <div className="linkCard__arrow">
        <ArrowUpRight size={18} strokeWidth={2} />
      </div>
    </a>
  );
}

export default LinkCard;