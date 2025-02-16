import { useState, useEffect } from 'react'
import './tailwind/App.css'
import PropTypes from 'prop-types'

//let arrayOfData = [];

function Heading({count}){
  return(
  <h1 className="text-heading text-[16px] text-center mb-[1rem] tracking-[0.2rem] font-semibold">
      ADVICE #{count+1}
  </h1>
  );
}


function Advice({data, count}){
  return(
    <p className="text-paragraphColor text-2xl lg:text-3xl font-semibold px-[4%] text-center">
      &quot;{data[count]}&quot;
    </p>
  );
}

function ButtonDice({ setCount }){
  return(
    <button onClick={()=>setCount(Math.floor(Math.random()*49))} className="absolute top-[85%] lg:top-[90%] left-[40%] lg:left-[44%] flex justify-center p-[5%] lg:p-[3.4%] cursor-pointer hover:shadow-heading hover:shadow-button w-[4rem] h-[4rem] bg-heading rounded-full">
     <img alt="click to switch advice" className="" src="/images/icon-dice.svg"></img>
    </button>
  );
}


function App() {
  let [data, setData] = useState([])
  const [count, setCount] = useState(0)

 useEffect(()=>{
    fetch('/data.json')
    .then((response)=>{ return response.json()})
    .then((json)=>{ 
      setData(json);
    })
  })

  return(
  <>
    <section className="relative w-[90%] lg:w-[40%] pt-[10%] pb-[10%] lg:p-[2.5%] mx-auto bg-cardBg rounded-[10px] mt-[30%] lg:mt-[10%]">
      <Heading count={count}/>
        <Advice data={data} count={count} />
          <img alt="" src="/images/pattern-divider-desktop.svg" className="mx-auto my-[1.5rem] lg:my-[3.3rem]"></img>
          <ButtonDice setCount={setCount} />
    </section>
    </>
  );
}

Heading.propTypes = {
    count: PropTypes.number 
};

Advice.propTypes = {
  data: PropTypes.array.isRequired, // Ensure data is an array and required
  count: PropTypes.number 
};

ButtonDice.propTypes = {
  count: PropTypes.number, // Ensure data is an array and required
  setCount: PropTypes.number 
};


export default App
