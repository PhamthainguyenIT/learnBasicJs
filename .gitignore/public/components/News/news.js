var LabelNP = React.createClass({
    render: function(){
        return(
            <h1>news page</h1>
        );
    }
});

ReactDOM.render( 
    <div>
        <LabelNP></LabelNP>
        <table className="table">
            <tbody>
                <tr>
                    <td>
                        <span>1.1 </span>
                    </td>
                    <td>
                        <span>1.2 </span>
                    </td>
                    <td>
                        <span>1.3 </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>2.1 </span>
                    </td>
                    <td>
                        <span>2.2 </span>
                    </td>
                    <td>
                        <span>2.3 </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>3.1 </span>
                    </td>
                    <td>
                        <span>3.2 </span>
                    </td>
                    <td>
                        <span>3.3 </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>4.1 </span>
                    </td>
                    <td>
                        <span>4.2 </span>
                    </td>
                    <td>
                        <span>4.3 </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    , document.getElementById("newsRoot")
);