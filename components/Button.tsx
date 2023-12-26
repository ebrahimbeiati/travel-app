import Image from "next/image";

type ButtonProps = {
    type: 'button'| 'submit';
    title: string;
    icon?: string;
  variant: string;
    full:boolean
}
const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-4 rounded-full border ${variant}`}
      style={full ? { width: "100%" } : {}}
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
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
}

export default Button
