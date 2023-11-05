import React, { useState } from 'react'
import './quiz.css'
function Quize() {
    const [answer,setanswer]=useState({
        1:"Virtual DOM",
        2:"3000",
        3:"State & Props",
        4:"Both of the above",
        5:"Props",
        6:"this.setState",
        7:"render()",
        8:"1",
        9:"Internal storage of the component.",
        10:"TRUE"
    })

    const questions={
        1:"Which of the following is used in React js to increase performance",
        2:"What is the default port number in which the application run ?",
        3:"Which of the following is a way to handle data in React.js ?",
        4:"Which of the following is true regarding Babel ?",
        5:"In React.js, how we can pass the data from one component to another in React.js ?",
        6:"Which of the following function is true about changing the state in React.js ?",
        7:"Which of the following is used to render components in web pages ?",
        8:"How many numbers of elements a valid react component can return?",
        9:"What is a state in React?",
        10:" Does React.js create a VIRTUAL DOM in the memory?"
    }


    const[score,setscore]=useState(0)
    const[correct,setcorrect]=useState(0)
    const[wrong,setwrong]=useState(0)


    const[qcount,setqcount]=useState(1)
    const checkanswer=(e)=>{
        
        setqcount(qcount+1)
        var initscore=score
        var yscore
        if(e==answer[qcount]){
         yscore=initscore+10
          setscore(yscore)
          var cor=correct
          var updcor=cor+1
          setcorrect(updcor)
          
        }
        else{
            setscore(score)
            var wron=wrong
          var updwron=wron+1
          setwrong(updwron)
        }
        

    }
const handleplayagain=()=>{
    setqcount(1)
    setscore(0)
    setcorrect(0)
    setwrong(0)
}


  return (
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        {qcount==1?
            <div className='bg-transparent flex-column shadow rounded justify-content-center align-items-center' style={{width:'620px',height:'570px'}}>
     
     <p className='ms-5 mt-3'>{qcount}/10</p>
     <h4 className='hii text-center mt-5 ms-3'>{questions[1]}</h4>
     <div className='d-flex justify-content-center align-items-center mt-5'>
        <div><h4 className='me-4 fw-bolder'>A.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("Virtual DOM")} className='bton btn btn-primary w-100 text-dark' >Virtual DOM</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>B.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("Original DOM")} className='btn btn-primary w-100 text-dark' >Original DOM</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>C.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("Both A and B")} className='btn btn-primary w-100 text-dark' >Both A and B</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>D.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("None of the above")} className='btn btn-primary w-100 text-dark ' >None of the above</button>

        </div>
     </div>

     
     

    </div>
:


qcount==2?
    <div className='bg-transparent flex-column shadow rounded justify-content-center align-items-center' style={{width:'620px',height:'570px'}}>
     
     <p className='ms-5 mt-3'>{qcount}/10</p>
     <h4 className='hii text-center mt-5 ms-3'>{questions[2]}</h4>
     <div className='d-flex justify-content-center align-items-center mt-5'>
        <div><h4 className='me-4 fw-bolder'>A.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("4200")} className='bton btn btn-primary w-100 text-dark' >4200</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>B.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("4000")} className='btn btn-primary w-100 text-dark' >4000</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>C.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("3000")} className='btn btn-primary w-100 text-dark' >3000</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>D.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("5000")} className='btn btn-primary w-100 text-dark ' >5000</button>

        </div>
     </div>

     
     

    </div>
    
    :
qcount==3?
    <div className='bg-transparent flex-column shadow rounded justify-content-center align-items-center' style={{width:'620px',height:'570px'}}>
     
     <p className='ms-5 mt-3'>{qcount}/10</p>
     <h4 className='hii text-center mt-5 ms-3'>{questions[3]}</h4>
     <div className='d-flex justify-content-center align-items-center mt-5'>
        <div><h4 className='me-4 fw-bolder'>A.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("State & Props")} className='bton btn btn-primary w-100 text-dark' >State & Props</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>B.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("	Services & Components")} className='btn btn-primary w-100 text-dark' >	Services & Components</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>C.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("State & Services")} className='btn btn-primary w-100 text-dark' >State & Services</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>D.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("State & Component")} className='btn btn-primary w-100 text-dark ' >State & Component</button>

        </div>
     </div>

     
     

    </div>

    :
qcount==4?
    <div className='bg-transparent flex-column shadow rounded justify-content-center align-items-center' style={{width:'620px',height:'570px'}}>
     
     <p className='ms-5 mt-3'>{qcount}/10</p>
     <h4 className='hii text-center mt-5 ms-3'>{questions[4]}</h4>
     <div className='d-flex justify-content-center align-items-center mt-5'>
        <div><h4 className='me-4 fw-bolder'>A.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("Transpilar")} className='bton btn btn-primary w-100 text-dark' >Transpilar</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>B.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("Compiler")} className='btn btn-primary w-100 text-dark' >Compiler</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>C.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("Both of the above")} className='btn btn-primary w-100 text-dark' >Both of the above</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>D.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("None of the above")} className='btn btn-primary w-100 text-dark ' >None of the above</button>

        </div>
     </div>

     
     

    </div>

    :
qcount==5?
    <div className='bg-transparent flex-column shadow rounded justify-content-center align-items-center' style={{width:'620px',height:'570px'}}>
     
     <p className='ms-5 mt-3'>{qcount}/10</p>
     <h4 className='hii text-center mt-5 ms-3'>{questions[5]}</h4>
     <div className='d-flex justify-content-center align-items-center mt-5'>
        <div><h4 className='me-4 fw-bolder'>A.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("SetState")} className='bton btn btn-primary w-100 text-dark' >SetState</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>B.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("Render with arguments")} className='btn btn-primary w-100 text-dark' >Render with arguments</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>C.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("Props")} className='btn btn-primary w-100 text-dark' >Props</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>D.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("PropTypes")} className='btn btn-primary w-100 text-dark ' >PropTypes</button>

        </div>
     </div>

     
     

    </div>

    :
qcount==6?
    <div className='bg-transparent flex-column shadow rounded justify-content-center align-items-center' style={{width:'620px',height:'570px'}}>
     
     <p className='ms-5 mt-3'>{qcount}/10</p>
     <h4 className='hii text-center mt-5 ms-3'>{questions[6]}</h4>
     <div className='d-flex justify-content-center align-items-center mt-5'>
        <div><h4 className='me-4 fw-bolder'>A.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("this.State")} className='bton btn btn-primary w-100 text-dark' >this.State</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>B.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("this.setState")} className='btn btn-primary w-100 text-dark' >this.setState</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>C.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("this.setChangeState")} className='btn btn-primary w-100 text-dark' >this.setChangeState</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>D.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("All of the above")} className='btn btn-primary w-100 text-dark ' >All of the above</button>

        </div>
     </div>

     
     

    </div>

    :
qcount==7?
    <div className='bg-transparent flex-column shadow rounded justify-content-center align-items-center' style={{width:'620px',height:'570px'}}>
     
     <p className='ms-5 mt-3'>{qcount}/10</p>
     <h4 className='hii text-center mt-5 ms-3'>{questions[7]}</h4>
     <div className='d-flex justify-content-center align-items-center mt-5'>
        <div><h4 className='me-4 fw-bolder'>A.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("DOM_render()")} className='bton btn btn-primary w-100 text-dark' >DOM_render()</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>B.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("transfer()")} className='btn btn-primary w-100 text-dark' >transfer()</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>C.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("ReactDOM_render()")} className='btn btn-primary w-100 text-dark' >ReactDOM_render()</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>D.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("render()")} className='btn btn-primary w-100 text-dark ' >render()</button>

        </div>
     </div>

     
     

    </div>

:
qcount==8?
<div className='bg-transparent flex-column shadow rounded justify-content-center align-items-center' style={{width:'620px',height:'570px'}}>
     
     <p className='ms-5 mt-3'>{qcount}/10</p>
     <h4 className='hii text-center mt-5 ms-3'>{questions[8]}</h4>
     <div className='d-flex justify-content-center align-items-center mt-5'>
        <div><h4 className='me-4 fw-bolder'>A.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("1")} className='bton btn btn-primary w-100 text-dark' >1</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>B.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("2")} className='btn btn-primary w-100 text-dark' >2</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>C.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("3")} className='btn btn-primary w-100 text-dark' >3</button>

        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>D.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("4")} className='btn btn-primary w-100 text-dark ' >4</button>

        </div>
     </div>

     
     

    </div>

:
qcount==9?
<div className='bg-transparent flex-column shadow rounded justify-content-center align-items-center' style={{width:'620px',height:'570px'}}>
     
<p className='ms-5 mt-3'>{qcount}/10</p>
<h4 className='hii text-center mt-5 ms-3'>{questions[9]}</h4>
<div className='d-flex justify-content-center align-items-center mt-5'>
   <div><h4 className='me-4 fw-bolder'>A.</h4></div>
   <div style={{width:'83%'}}>
   <button onClick={(e)=>checkanswer("A permanent storage.")} className='bton btn btn-primary w-100 text-dark' >A permanent storage.</button>

   </div>
</div>

<div className='d-flex justify-content-center align-items-center mt-4'>
   <div><h4 className='me-4 fw-bolder'>B.</h4></div>
   <div style={{width:'83%'}}>
   <button onClick={(e)=>checkanswer("Internal storage of the component.")} className='btn btn-primary w-100 text-dark' >Internal storage of the component.</button>

   </div>
</div>

<div className='d-flex justify-content-center align-items-center mt-4'>
   <div><h4 className='me-4 fw-bolder'>C.</h4></div>
   <div style={{width:'83%'}}>
   <button onClick={(e)=>checkanswer("External storage of the component.")} className='btn btn-primary w-100 text-dark' >External storage of the component.</button>

   </div>
</div>

<div className='d-flex justify-content-center align-items-center mt-4'>
   <div><h4 className='me-4 fw-bolder'>D.</h4></div>
   <div style={{width:'83%'}}>
   <button onClick={(e)=>checkanswer("None of the above.")} className='btn btn-primary w-100 text-dark ' >None of the above.</button>

   </div>
</div>




</div>

:
qcount==10?
<div className='bg-transparent flex-column shadow rounded justify-content-center align-items-center' style={{width:'620px',height:'570px'}}>
     
     <p className='ms-5 mt-3'>{qcount}/10</p>
     <h4 className='hii text-center mt-5 ms-3'>{questions[10]}</h4>
     <div className='d-flex justify-content-center align-items-center mt-5'>
        <div><h4 className='me-4 fw-bolder'>A.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("TRUE")} className='bton btn btn-primary w-100 text-dark' >TRUE</button>
     
        </div>
     </div>
     
     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>B.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("FALSE")} className='btn btn-primary w-100 text-dark' >FALSE</button>
     
        </div>
     </div>
     
     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>C.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("None of the above")} className='btn btn-primary w-100 text-dark' >None of the above</button>
     
        </div>
     </div>
     
     <div className='d-flex justify-content-center align-items-center mt-4'>
        <div><h4 className='me-4 fw-bolder'>D.</h4></div>
        <div style={{width:'83%'}}>
        <button onClick={(e)=>checkanswer("Both of the above.")} className='btn btn-primary w-100 text-dark ' >Both of the above.</button>
     
        </div>
     </div>
     
     
     
     
     </div>

:
<div className='bg-transparent flex-column shadow rounded justify-content-center align-items-center' style={{width:'620px',height:'570px'}}>
     
    <h4 className='text-center mt-5'>Quiz Over</h4>
    <h1 className='text-center mt-5'>Score: {score}/100</h1>
    <div className='justify-content-evenly d-flex mt-5'>
        <h4 className='text-success'>Correct Answers: {correct}</h4>
        <h4 className='text-danger'>Wrong Answers: {wrong}</h4>

    </div>

    <div className='text-center' style={{marginTop:'100px'}}>

    <button className='btn btn-danger text-dark shadow ' onClick={handleplayagain}>Play Again</button>
    </div>
    
     
     
     
     
     
     </div>
    }
    
    </div>
  )
}

export default Quize