import React, { useState } from 'react';
import Button from '../UI/Button';

const AddUser = (props) => {
  const [newUser, setNewUser] = useState('');
  const [newAge, setNewAge] = useState('');
  const submitHandler = event => {
    event.preventDefault();
    props.onNewUser(newUser, newAge)
  }

  const buttonClickHandler = (e) => {
    console.log(e);
  }

  const usernameChangeHandler = event => {
    setNewUser(event.target.value);
    console.log(event.target.value);

  }

  const ageChangeHandler = event => {
    setNewAge(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="w-2/4 bg-white rounded-md p-4 flex mx-auto mt-12">
      <form className='flex flex-col w-full' onSubmit={submitHandler}>
        <label htmlFor='Username' className='font-bold'>Username</label>
        <input type='text' title='username' value={props.username} onChange={usernameChangeHandler} placeholder='Enter Username' id='username' className='p-2 border border-solid border-slate-400' />
        <label htmlFor='Age' className='mt-4 font-bold'>Age (Years)</label>
        <input type='number' id='age' title='age' onChange={ageChangeHandler} placeholder='Age in years' className='p-2 border border-solid border-slate-400' />
        <Button type='submit' onClick={buttonClickHandler} />
      </form>
    </div>
  )
}

export default AddUser;