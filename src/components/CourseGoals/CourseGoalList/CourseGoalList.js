import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem'; // импорт CourseGoalItem
import './CourseGoalList.css'; // импорт css

const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem // используем CourseGoalItem чтобы можно было удалять по id
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
