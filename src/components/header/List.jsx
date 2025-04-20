const List = ({ title, link }) => {
  return (
    <li className="text-base font-normal capitalize">
      <a className="text-gray-950" href={link}>
        {title}
      </a>
    </li>
  );
};

export default List;
