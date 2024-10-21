import React from 'react'
import Card from '../Card'


function Landing() {
  return (
    <div>
       {/* ------------main section start here--------------- */}
<main className='p-4'>

<section className="section1 w-full h-screen text-white flex flex-col gap-6">
  <div className='box1 flex flex-col justify-center items-center gap-10 capitalize'>
    <h1 className='text-6xl '>product and services</h1>
    <marquee behavior="" direction="up" className='w-[60%] text-center text-2xl' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto sequi architecto nisi culpa repellendus ullam adipisci tempora velit! Ea atque assumenda in placeat tenetur, iusto dolores? Perferendis, harum laudantium!</marquee>
  </div>


  <div className="box2 flex justify-around gap-4 capitalize">
    <div className="child1 flex flex-col justify-center items-center gap-6 text-2xl ">
      <h1 className='text-5xl'>grow $ shine</h1>
      <h2>win with grow and shine</h2>
      <h3>learn coding for free</h3>
      <div className="italic">
      <i>purchase grow and shine today! 
        <br /> buy 10 get 6 free is the best value </i>
      </div>
      <p className='w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quo aspernatur delectus magnam distinctio rerum mollitia tempore non modi quia, laborum ut qui temporibus placeat possimus maxime eum libero! Possimus.</p>
    <div className="btn w-full  hover:bg-orange-300 hover:scale-75">
      <button className='capitalize ' >register here</button>
    </div>
    
    </div>

    <div className="child2">
      <div className="img w-[400px] h-[550px]">
      <img src="../public/image/girl.jpg" alt="img not found" className='w-full h-full' />
      </div>
    </div>
  </div>


  

</section>


{/* ----------------------section 2 hear----------------------- */}
<section className="section2 bg-slate-950">
  <div className="flex flex-wrap gap-6 px-4 py-4 justify-center w-full mx-auto">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</section>

</main>

{/* --------------------main section end here----------------- */}
    </div>
  )
}

export default Landing
