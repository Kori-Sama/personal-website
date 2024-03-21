interface SocialCardProps {
  icon: React.ReactNode;
  link: string;
  name: string;
}

const SocialCard = ({ icon, link, name }: SocialCardProps) => {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <a
        className="
            text-sm font-medium
            text-primary
            underline
            hover:text-accent
          "
        href={link}
      >
        {name}
      </a>
    </div>
  );
};

export default SocialCard;
