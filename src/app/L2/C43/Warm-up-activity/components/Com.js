'use client';
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import Confetti from 'react-confetti';

const initialItems = [
  { id: '13', content: 'Donuts', type: 'treat' },
  { id: '5', content: 'Edamame', type: 'healthy' },
  { id: '17', content: 'Ice cream', type: 'treat' },
  { id: '1', content: 'Apple', type: 'healthy' },
  { id: '10', content: 'Whole wheat crackers', type: 'healthy' },
  { id: '18', content: 'Cookies', type: 'treat' },
  { id: '2', content: 'Yogurt (low sugar)', type: 'healthy' },
  { id: '14', content: 'Candy', type: 'treat' },
  { id: '8', content: 'Boiled egg', type: 'healthy' },
  { id: '19', content: 'French fries', type: 'treat' },
  { id: '3', content: 'Carrot sticks', type: 'healthy' },
  { id: '15', content: 'Soda', type: 'treat' },
  { id: '6', content: 'Cucumber slices', type: 'healthy' },
  { id: '11', content: 'Potato chips', type: 'treat' },
  { id: '9', content: 'Nuts (unsalted)', type: 'healthy' },
  { id: '16', content: 'Chocolate bar', type: 'treat' },
  { id: '4', content: 'Popcorn (plain)', type: 'healthy' },
  { id: '12', content: 'Cupcake', type: 'treat' },
  { id: '7', content: 'Banana', type: 'healthy' },
  { id: '20', content: 'Sugary cereal', type: 'treat' },
];

const getEmoji = (content) => {
  switch (content) {
    case 'Donuts':
      return '🍩';
    case 'Edamame':
      return '🌱';
    case 'Ice cream':
      return '🍦';
    case 'Apple':
      return '🍎';
    case 'Whole wheat crackers':
      return '🥨';
    case 'Cookies':
      return '🍪';
    case 'Yogurt (low sugar)':
      return '🥛';
    case 'Candy':
      return '🍬';
    case 'Boiled egg':
      return '🥚';
    case 'French fries':
      return '🍟';
    case 'Carrot sticks':
      return '🥕';
    case 'Soda':
      return '🥤';
    case 'Cucumber slices':
      return '🥒';
    case 'Potato chips':
      return '🥔';
    case 'Nuts (unsalted)':
      return '🥜';
    case 'Chocolate bar':
      return '🍫';
    case 'Popcorn (plain)':
      return '🍿';
    case 'Cupcake':
      return '🧁';
    case 'Banana':
      return '🍌';
    case 'Sugary cereal':
      return '🥣';
    default:
      return '';
  }
};

// Tailwind CSS classes for the draggable lists
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.3)',
  padding: '12px',
  width: '100%',
  minHeight: '200px',
  borderRadius: '12px',
  transition: 'background-color 0.2s ease',
  border: '1px dashed #ccc',
});

// Tailwind CSS classes for the draggable items
const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: '16px',
  margin: '0 0 12px 0',
  background: isDragging ? '#d1f7d4' : '#fff',
  border: isDragging ? '2px solid #34d399' : '1px solid #e5e7eb',
  borderRadius: '8px',
  boxShadow: isDragging ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
  ...draggableStyle,
});

const Com = () => {
  const [items, setItems] = useState(initialItems);
  const [healthyItems, setHealthyItems] = useState([]);
  const [treatItems, setTreatItems] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => {
    if (items.length === 0) {
      setShowSubmit(true);
    } else {
      setShowSubmit(false);
      setValidationMessage('');
    }
  }, [items]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    let movedItem = null;
    let newItems = Array.from(items);
    let newHealthyItems = Array.from(healthyItems);
    let newTreatItems = Array.from(treatItems);

    // Get the item from the source list
    if (source.droppableId === 'list') {
      [movedItem] = newItems.splice(source.index, 1);
    } else if (source.droppableId === 'healthy-section') {
      [movedItem] = newHealthyItems.splice(source.index, 1);
    } else if (source.droppableId === 'treats-section') {
      [movedItem] = newTreatItems.splice(source.index, 1);
    }

    // Add the item to the destination list
    if (destination.droppableId === 'list') {
      newItems.splice(destination.index, 0, movedItem);
    } else if (destination.droppableId === 'healthy-section') {
      newHealthyItems.splice(destination.index, 0, movedItem);
    } else if (destination.droppableId === 'treats-section') {
      newTreatItems.splice(destination.index, 0, movedItem);
    }

    setItems(newItems);
    setHealthyItems(newHealthyItems);
    setTreatItems(newTreatItems);
  };

  const handleSubmit = () => {
    let incorrectCount = 0;

    // Validate healthy section
    healthyItems.forEach(item => {
      if (item.type !== 'healthy') {
        incorrectCount++;
      }
    });

    // Validate treats section
    treatItems.forEach(item => {
      if (item.type !== 'treat') {
        incorrectCount++;
      }
    });

    if (incorrectCount === 0) {
      setValidationMessage('All items are sorted correctly! 🎉');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    } else {
      setValidationMessage(`Some answers are incorrect.`);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-2">
        {showConfetti && <Confetti />}

        {/* Main content container with rounded corners and shadow */}
        <div className="flex flex-1 rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md">
          {/* LHS - 30% */}
          <div className="w-3/10 p-4 flex flex-col items-center border-r-2 border-gray-200">
            {/* <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Snack Time!</h2> */}
            <Droppable droppableId="list">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  className="bg-purple-100/50"
                >
                  {items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                        >
                          <span className="text-2xl mr-2">{getEmoji(item.content)}</span>
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          {/* RHS - 70% */}
          <div className="w-7/10 p-6 flex flex-col items-center">
            {/* <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Choose Wisely...</h2> */}

            <div className="w-full grid grid-cols-2 gap-8">
              {/* Healthy Section */}
              <div className="w-full">
                <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">Healthy Section</h3>
                <Droppable droppableId="healthy-section">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                      className="bg-green-100/50"
                    >
                      {healthyItems.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                            >
                              <span className="text-2xl mr-2">{getEmoji(item.content)}</span>
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>

              {/* Treats Section */}
              <div className="w-full">
                <h3 className="text-2xl font-bold text-pink-700 mb-4 text-center">Treats Section</h3>
                <Droppable droppableId="treats-section">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                      className="bg-pink-100/50"
                    >
                      {treatItems.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                            >
                              <span className="text-2xl mr-2">{getEmoji(item.content)}</span>
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>

            {showSubmit && (
              <button
                onClick={handleSubmit}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Check My Sorting!
              </button>
            )}

            {validationMessage && (
              <div
                className={`mt-6 p-4 rounded-xl shadow-lg transition-all duration-500 
                ${validationMessage.includes('incorrect')
                    ? 'bg-red-200 text-red-800 border-2 border-red-500 transform scale-95'
                    : 'bg-green-200 text-green-800 border-2 border-green-500 transform scale-95'}
                `}
              >
                <p className="text-2xl font-extrabold text-center">
                  {validationMessage}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default Com;