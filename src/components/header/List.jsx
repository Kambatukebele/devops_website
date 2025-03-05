const List = ({ title }) => {
  return (
    <li className="text-base font-normal capitalize">
      <a className="text-blue-950" href="#">
        {title}
      </a>
    </li>
  );
};

export default List;
