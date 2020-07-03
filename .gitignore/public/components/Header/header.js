var HeaderNP = React.createClass({
    render: function(){
        return(
            <div>            
                <header className="header">
                <div className="logo-container">
                    <img src="./img/doge.png" alt="doge logo" className="logo-img" />
                    <h1 className="logo-text">
                        Tech<span className="logo-highlight">Matrix</span>
                    </h1>
                    <div className="sk-cube-grid" >
                        <div className="sk-cube sk-cube1"></div>
                        <div className="sk-cube sk-cube2"></div>
                        <div className="sk-cube sk-cube3"></div>
                        <div className="sk-cube sk-cube4"></div>
                        <div className="sk-cube sk-cube5"></div>
                        <div className="sk-cube sk-cube6"></div>
                        <div className="sk-cube sk-cube7"></div>
                        <div className="sk-cube sk-cube8"></div>
                        <div className="sk-cube sk-cube9"></div>
                    </div>
                </div>
                </header>
            </div>
        );
    }
});

ReactDOM.render( 
    <div>
        <HeaderNP></HeaderNP>
    </div>
    , document.getElementById("headerRoot")
);