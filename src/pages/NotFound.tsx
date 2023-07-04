import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num: number) {
  //  console.log('complex computed')
  let i = 0;
  while (i < 1000000000) {
    i = i + 1
  }
  return num * 2;
}

export const NotFound: React.FC = () => {

  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  // const styles = useMemo(() => {
  //   return {
  //     color: colored ? 'darkred' : 'black'
  //   }
  // }, [colored])

  // const computed = useMemo(() => {
  //   return complexCompute(number)
  // }, [number]) 

  // useEffect( 
  //   () => {
  //     console.log('styled')
  //   }, [styles]
  // );

  return (
    <div className="not-found">
      <h1>Страницы с таким именем не существует</h1>
      <h1>Вычисляемое свойство: {number}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>
    </div>
  );
};
