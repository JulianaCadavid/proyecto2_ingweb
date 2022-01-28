import React, {useState} from 'react';

const Skill = (props) => {
  const [title] = useState(props.title);

  return (
    <div>
      <ul>
        <li className='skill-item' />
        <span className='text text-s-1'>{title}</span>
        <div className='skill skill-1' /> 
        <div className='skill-p skill-1-p' />
      </ul>
    </div>
  );
};

export default Skill;
