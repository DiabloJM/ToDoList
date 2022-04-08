import React from 'react';

const List = props => {

    const {items, markAsCompleted, removeTask, markAsIncompleted} = props;

    return (
        <ul>
        {
            items.map((item, key) => (
                <li key = {key} className={item.complete ? 'complete' : 'pending'}>
                    {item.task}

                    <div className = 'actions'>

                        {
                            (item.complete)?
                            <span 
                            className ='x'
                            onClick = {() => markAsIncompleted(item.id)}
                        >
                                <i className = "fa-solid fa-x"></i>
                        </span>

                        :
                        <span 
                            className ='check'
                            onClick = {() => markAsCompleted(item.id)}
                        >
                                <i className = "fa fa-check"></i>
                        </span>
                        }
                        
                        <span 
                            className = "trash"
                            onClick = {() => removeTask(item.id)}
                        >
                            <i className = "fa fa-trash"></i>
                        </span>
                    </div>
                </li>
            ))
        }
        </ul>
    );
}

export default List;