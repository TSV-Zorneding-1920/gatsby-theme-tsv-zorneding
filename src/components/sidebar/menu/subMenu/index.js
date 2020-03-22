import React from "react";

class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    return (
      <li>
        <span
          className={this.state.active ? "opener active" : "opener"}
          onClick={this.toggleMenu}
          onKeyDown={this.toggleMenu}
          role="button"
          tabIndex="0"
        >
          {this.props.text}
        </span>
        <ul>{this.props.children}</ul>
      </li>
    );
  }
}

export default SubMenu;
