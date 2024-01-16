import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  // useEffect(()=>{
  //   const handleKeyPress = (event: KeyboardEvent) => {
  //     if (event.key=='Backspace' && value==''){
  //       const a = addedPersons.slice()
  //       const b:person= a[a.length-1];
  //       a.pop();
  //       setAddedPersons(a);
  //       const c= currentList;
  //       c.push(b)
  //       setCurrentList(c);
  //     }
  //   };
  //   window.addEventListener('keydown',handleKeyPress);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyPress);
  //   };
    
  // },[])
  interface person{
    name:string,
    email:string,
    id:number,
    profile:string
  }
  const a:person[]=[]
  const b:person[]=[{
    name:'Pallav Semwal',
    email:'pallav.semwal24@gmail.com',
    id:1,
    profile:'logo192.png'
  },
  {
    name:'Pallav Semwal2',
    email:'pallav.semwal24@gmail.com',
    id:2,
    profile:'logo192.png'
  },
  {
    name:'Semwal3',
    email:'pallav.semwal24@gmail.com',
    id:3,
    profile:'logo192.png'
  },
  {
    name:'Abhishek Semwal4',
    email:'pallav.semwal24@gmail.com',
    id:4,
    profile:'logo192.png'
  },
  {
    name:'Rahul Semwal5',
    email:'pallav.semwal24@gmail.com',
    id:5,
    profile:'logo192.png'
  },
  {
    name:'Pallav Semwal6',
    email:'pallav.semwal24@gmail.com',
    id:6,
    profile:'logo192.png'
  }
  ]
  const [value, setValue]=useState('');
  const [addedPersons,setAddedPersons]= useState(a);
  const [addedPersonsId,setAddedPersonsId]=useState()
  const [listVisible, setListVisible]= useState(0)
  const [listPersons,setListPersons]= useState(b);
  const [currentList, setCurrentList]=useState(b);
  const addPerson= (item:person)=>{
    console.log('HIII')
    const a = addedPersons.slice();
    a.push(item);
    setAddedPersons(a);
    const b = currentList.slice();
    const i = b.indexOf(item)
    b.splice(i,1);
    console.log(b)
    setListVisible(1);
    setCurrentList(b);
  }
  const [currentSelected, setCurrentSelected]=useState(0)



  //personModel assumption {'name':'name', 'id':'id','email':'email','profile':'Profilepic'}

  return (
    <div className='container'>
      <div className='inputBox'>
        {addedPersons.map((item,id)=>{
          return <div className='addedPerson'>
          <img className='personProfile' src='logo192.png'/>
          <span className='name'>
            {item.name}
          </span>
        </div>
        })}
        <div>
        <input onFocus={(e)=>setListVisible(1)} onBlur={(e)=>setTimeout(()=>setListVisible(0),300)}  value={value} onChange={(e)=>setValue(e.target.value)} className='addPerson' placeholder='Add Person'></input>
        <div className='personsList'>
          {currentList.map((item,id)=>{
            let a= (item.name.toLowerCase().indexOf(value.toLocaleLowerCase()));
            if(value==''){
              a=-1
            }
        
            if (value=='' || (a!=-1)){

              return(
                <div className='listObject' onClick={(e)=>addPerson(item)}   style={{'display':listVisible?'block':'none'}}>
              <img src='logo192.png' className='personProfile'/>
              {a!=-1?
              <span className='name'>{item.name.substring(0,a)}<span style={{opacity:'0.5'}}>{value}</span>{item.name.substring(a+value.length)}</span>
              :
               <span className='name'>{item.name}</span>
              }
              <span className='email'> {item.email}</span>
          </div>
              ) 
            }
          })}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
