import React, { useState, useEffect, useRef } from 'react';

const MasonryTask = (props) => {

  const {
    todos: tasks,
    columnsBreakpoints,
    gap,
    renderCard,
  } = props

  const [columnHeights, setColumnHeights] = useState([]);
  // Состояние для хранения размеров карточек
  const [cardDimensions, setCardDimensions] = useState({});
  // Текущее количество колонок
  const [currentColumns, setCurrentColumns] = useState(6);
  // Ref для контейнера
  const masonryRef = useRef(null);

  // Функция для расчета колонок по ширине экрана
  const calculateColumns = () => {
    if (typeof window === 'undefined') return columnsBreakpoints[0] || 1;

    const windowWidth = window.innerWidth;
    // Сортируем брейкпоинты по убыванию
    const breakpoints = Object.keys(columnsBreakpoints)
      .map(Number)
      .sort((a, b) => b - a);

    // Находим подходящий брейкпоинт
    for (const breakpoint of breakpoints) {
      if (windowWidth >= breakpoint) {
        return columnsBreakpoints[breakpoint];
      }
    }

    return 1;
  }

  // Эффект для обработки изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      const newColumns = calculateColumns();
      if (newColumns !== currentColumns) {
        setCurrentColumns(newColumns);
      }
    };

    // Устанавливаем начальное значение
    setCurrentColumns(calculateColumns());

    // Добавляем обработчик ресайза
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columnsBreakpoints]);

  // Инициализация колонок при изменении их количества
  useEffect(() => {
    setColumnHeights(new Array(currentColumns).fill(0));
  }, [currentColumns]);

  // Обновление высот колонок при изменении задач или их размеров
  useEffect(() => {
    if (Object.keys(cardDimensions).length === 0 || columnHeights.length === 0) return;

    const newColumnHeights = new Array(currentColumns).fill(0);
    const columnsContent = new Array(currentColumns).fill(null).map(() => []);

    // Распределяем задачи по колонкам

    tasks.forEach(todo => {
      if (!cardDimensions[todo.id]) return;

      // Находим колонку с минимальной высотой
      const shortestColumnIndex = newColumnHeights.indexOf(Math.min(...newColumnHeights));
      columnsContent[shortestColumnIndex].push(todo);
      // Увеличиваем высоту колонки
      newColumnHeights[shortestColumnIndex] += cardDimensions[todo.id].height + gap;
    });

    setColumnHeights(newColumnHeights);
  }, [tasks, cardDimensions, currentColumns, gap]);

  // Функция для измерения высоты карточки
  const handleCardMeasure = (id, height) => {
    setCardDimensions(prev => ({
      ...prev,
      [id]: { height },
    }))
  }

  // Рендер колонок с задачами
  const renderColumns = () => {
    const columnsContent = new Array(currentColumns).fill(null).map(() => []);

    // Распределяем задачи по колонкам
    tasks.forEach(todo => {
      if (!cardDimensions[todo.id]) return;

      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      columnsContent[shortestColumnIndex].push(todo);
    });

    return columnsContent.map((column, colIndex) => (
      <div
        key={`col-${colIndex}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: `${gap}px`,
          flex: 1,
          minWidth: 0, // Для корректного сжатия в flex-контейнере
        }}
      >
        {column.map(todo => (
          <div
            key={todo.id}
            ref={node => {
              if (node && !cardDimensions[todo.id]) {
                // Измеряем высоту карточки при первом рендере
                const height = node.getBoundingClientRect().height;
                handleCardMeasure(todo.id, height);
              }
            }}
          >
            {renderCard()}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div
      ref={masonryRef}
      style={{
        display: 'flex',
        gap: `${gap}px`,
        width: '100%',
      }}
    >
      {renderColumns()}
    </div>
  )
}
export default MasonryTask