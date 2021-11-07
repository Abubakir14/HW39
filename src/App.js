import React, { useState } from 'react'; //importируем useState

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList'; // импортируем Goallist
import CourseInput from './components/CourseGoals/CourseInput/CourseInput'; // импортируем CourseInput
import './App.css'; // импортируем App.css

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);
  // функция с useState и два текста с айдишками чтобы они выглядели как экзпляры того какую тудушку мы добавим они внутри массива чтобы у каждого был индекс  


  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => { // колбек фукц
      const updatedGoals = [...prevGoals];// приравнивается к ...prevGoals это значит брать последнее состояние
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() }); // updatedGoals пишем unshift этот метод  добавляет элемент в начало массива enteredText это как пропс и создается рандомные id
      return updatedGoals; // возврщает updatedGoals
    });
  };

  const deleteItemHandler = goalId => { //фукц для удаления туду текста
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId); // updatedGoals который у нас есть приравнивается к prevGoals который филтрует по id
      return updatedGoals;// возврщает updatedGoals
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>// переменная чтобы выходила в случае отсутствия туду текста
  );

  if (courseGoals.length > 0) { // если длина courseGoals больше 0 выходит CourseGoalList
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} /> // это связано с map рендерингом
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />  {/* вызывается CourseInput с addGoalHandler чтобы добавлять туду текст*/}
      </section>
      <section id="goals">
        {content} {/* вызывается  content если проходит проверку на длину  массива*/}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
