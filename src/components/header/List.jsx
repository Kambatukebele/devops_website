const List = ({ title }) => {
  return (
    <li className="text-base">
      <a className="text-gray-950" href="#">
        {title}
      </a>
    </li>
  );
};

export default List;
