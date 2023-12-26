import Image from "next/image";

type ButtonProps = {
    type: 'button'| 'submit';
    title: string;
    icon?: string;
    variant: string;
}
const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-4 rounded-full border ${variant}`}
      type={type}
    >
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className="rounded-full"
        />
      )}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
}

export default Button
