import React from 'react';
import Detail from './Detail';
import axios from "axios";

class Menu extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            menulist:[],
            detail:[],
            shortName: "",
            err:""
        }
    }
    componentDidMount() {
        axios
          .get("https://stream-restaurant-menu-svc.herokuapp.com/category")
          .then(res => {
              this.setState({menulist : res.data})
          })
          .catch(err => {
              this.setState({err : err})
          })
    }
    handleClick = (id) => {
        axios   
         .get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${id}`)
         .then(res => {
             this.setState({detail: res.data, shortName: id})
         })
         .catch(err => {
             this.setState({err :err})
         })
    }
    render(){
        return(
            <div className="menu">
            <div className="category">
                <h1>Menu Categories</h1>
                <ul>
                    {this.state.menulist.map((element,index) => {
                        return(
                            <li className ="list" key ={index} onClick={()=>this.handleClick(element.short_name)}>{`${element.name} - (${element.short_name})`}</li>
                        )
                    })}
                </ul>
                </div>
              <Detail data={this.state.detail} shortName={this.state.shortName}/>
            </div>
        )
    }
}

export default Menu;