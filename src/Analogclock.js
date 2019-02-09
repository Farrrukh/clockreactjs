import React from 'react';


const Analogclock =(props)=>{

    let time =new Date(props.time);
  let  clockContainer={
        position:'relative',
        top:0,
        left:0,
        width:200,
        height:200,
        borderRadius:20000,
        borderStyle:'solid',
        borderColor:'black'

    }
   let secondhand={
        position:'relative',
        top:100,
        left:100,
        border:'1px solid red',
        width:'40%',
        height:1,
        transform:'rotate('+((Date.getSeconds()/60)*360-90).toString()+')',
        transformOrigin:'0% 0%',
        backgoundColor:'black'
    }
    let minutehand={
        position:'relative',
        top:100,
        left:100,
        border:'1px solid red',
        width:'40%',
        height:3,
        transform:'rotate('+((Date.getMinutes()/60)*360-90).toString()+')',
        transformOrigin:'0% 0%',
        backgoundColor:'gray'
    }
   let hourhand={
        position:'relative',
        top:100,
        left:100,
        border:'1px solid red',
        width:'26%',
        height:7,
        transform:'rotate('+((Date.getHours()/60)*360-90).toString()+')',
        transformOrigin:'0% 0%',
        backgoundColor:'black'
    }
    return(<div style={clockContainer}>
        <div style={secondhand}></div>
        <div style={minutehand}></div>
        <div style={hourhand}></div>
        <div>{time}</div>
    </div>)
}
export default Analogclock;