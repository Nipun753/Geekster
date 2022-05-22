function App() {
    const [ch ,setCh] = React.useState(true)
    function changeComp(){
     if(ch===true){
         setCh(false)
     }
     else if(ch===false){
         setCh(true)
     }
    }
    return (
      <div>
        
        <h1>Welcome to my Application</h1>
        <button onClick={changeComp}>Click</button>
        {ch?<Fm/>:<Fm2/>}

      </div>
    )
  }