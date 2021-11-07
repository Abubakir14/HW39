import React from 'react';

import './CourseGoalItem.css'; // импорт css

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id); // функц делейт с пропсами id
  };

  return (
    <li className="goal-item" onClick={deleteHandler}> {/*сделано чтобы было удобно импортировать и использовать */}
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
