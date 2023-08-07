import { useIntl } from "react-intl";

interface MenuButtonProps {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}

const MenuButton = ({ children, label, onClick }: MenuButtonProps) => {
  const { formatMessage } = useIntl();

  return (
    <div
      onClick={onClick}
      role="button"
      aria-label={formatMessage({ id: label })}
    >
      {children}
    </div>
  );
};

export default MenuButton;
