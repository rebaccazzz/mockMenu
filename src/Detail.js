import React from 'react';

//class Detail extends Component {
 const Detail = (props)=> { 
      //  console.log(this.props.data)
      console.log(props.data);
      console.log(props.data ? true : false);
        return (
            <div>
               { props.data.length > 0 ? (
                   <div>
                        <h1>{`Item in Category: (${props.shortName})`}</h1>
                        <table className="table"> 
                            <tr>
                                <th>name</th>
                                <th>Description</th>
                            </tr>
                            {props.data.map(element => {
                                return (
                                    <tr>
                                    <th>{element.name}</th>
                                    <th>{element.description}</th>
                                </tr>
                                )
                            })}
                        </table>
                   </div>
               ) : <div />}
               
            </div>
      )
}; 
//}


export default Detail;