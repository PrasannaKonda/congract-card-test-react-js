const element = (
    <div className = "bg-container">
        <h1 className="heading">Congractulations</h1>
        <div className="card-container">
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"/>
            <h1 className="name">Kiran V</h1>
            <p className="card-description">Vishnu institute of Computer Education and Technology, Bhimavaram</p>
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" className="watch-image"/>
        </div>
    </div>
  )
  
ReactDOM.render(element, document.getElementById('root'))