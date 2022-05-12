/* eslint-disable  */
import React from 'react';
import './List.css'

const List = ({ items }) => (
  <div className='center'>
   
    {
      items && items.map((item, index) => 
                <div className='space' >
                <input type='checkbox'/>
                    <label className="strikethrough" key={index}>{item}
                    </label> 
                <br/>
                </div>)
    }
  </div>
  );

export default List;