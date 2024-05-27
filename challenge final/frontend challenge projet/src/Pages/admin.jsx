import React, { useState } from 'react';
import './admin.css';

const Hello = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');

    const addTodo = () => {
        if (title.trim() === '' || price.trim() === '' || date.trim() === '') {
            setError('You cannot add an empty string');
            return;
        }
        setError('');
        const newTodo = { title, price, date };
        setTodos([...todos, newTodo]);
        setTitle('');
        setPrice('');
        setDate('');
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="container">
            <div className="todo-input">
                <input
                    id="todo-input"
                    type="text"
                    placeholder="Enter title ..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    id="price-input"
                    type="text"
                    placeholder="Enter price ..."
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    id="date-input"
                    type="date"
                    placeholder="Enter date ..."
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button id="add-btn" onClick={addTodo}>
                    Add
                </button>
                <br />
                <br />
                {error && <span className="error-msg">{error}</span>}
            </div>
            <div className="todo-stats">Les promos sont:</div>
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <div key={index} className="todo">
                        <h3>{todo.title}</h3>
                        <span className="price">{todo.price}/personne</span>
                        <span className="date">Trip Date: {todo.date}</span>
                        <button className="delete-btn" onClick={() => deleteTodo(index)}>
                            Supprimer
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hello;