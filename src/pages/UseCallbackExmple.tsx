import React, { useState, useMemo, useEffect, useCallback } from "react";
import ItemsList from "./components/ItemsList";

export const UseCallbackExample: React.FC = () => {

  const [number, setNumber] = useState(1);
  const [colored, setColored] = useState(false);

    const styles = {
        color: colored ? 'red' : 'black'
    }

    const generateItemsFromAPI = useCallback(() => {
        return new Array(number).fill('').map((_, i) => `Element ${i + 1}`)
    }, [number]
    ) 

  return (
    <div className="not-found">
      <h1 style={styles}>Вычисляемое свойство: {number}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>
      <ItemsList getItems={generateItemsFromAPI}/>
    </div>
  );
};
