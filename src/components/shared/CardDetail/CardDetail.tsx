const CardDetail = ({
  label,
  children,
}: {
  label: string;
  children: JSX.Element[] | JSX.Element;
}) => (
  <div className="pt-8">
    <h2 className="uppercase text-sm text-gray-600">{label}</h2>
    <div className="flex pt-4">{children}</div>
  </div>
);

export default CardDetail;
