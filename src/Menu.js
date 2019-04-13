import React from "react";
import Detail from "./Detail";
import axios from "axios";
import {fetchList} from "./actions/menulist"
import { connect } from "react-redux";


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // menulist:[],
      detail: [],
      shortName: "",
      err: ""
    };
  }
  componentDidMount() {
    // axios
    //   .get("https://stream-restaurant-menu-svc.herokuapp.com/category")
    //   .then(res => {
    //       this.setState({menulist : res.data})
    //   })
    //   .catch(err => {
    //       this.setState({err : err})
    //   })
    console.log(`Menu: ${JSON.stringify(this.props.Menu)}`);
    console.log("ddddd");
    this.props.fetchmenu();
  }
  handleClick = id => {
    axios
      .get(
        `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${id}`
      )
      .then(res => {
        this.setState({ detail: res.data, shortName: id });
      })
      .catch(err => {
        this.setState({ err: err });
      });
  };
  render() {
      console.log("render")
    return (
      <div className="menu">
        <div className="category">
          <h1>Menu Categories</h1>
          <ul>
            {this.props.Menu&&this.props.Menu.menulist.map((element, index) => {
              return (
                <li
                  className="list"
                  key={index}
                  onClick={() => this.handleClick(element.short_name)}
                >{`${element.name} - (${element.short_name})`}</li>
              );
            })}
          </ul>
        </div>
        <Detail data={this.state.detail} shortName={this.state.shortName} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { 
      Menu: state.Menu
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchmenu: () => {
            dispatch(fetchList());
        }
    };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

//export default Menu;
