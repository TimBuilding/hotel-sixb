import { FC } from "react";

interface Props {
  title: string;
  subtitle: string;
}
const PageTitle: FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="space-y-2.5">
      <h1 className="text-[##947901] text-xl font-extrabold">{title}</h1>
      <h2 className="text-black text-base font-bold">{subtitle}</h2>
    </div>
  );
};

export default PageTitle;
