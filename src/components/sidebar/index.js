import React from "react";
import EventList from "./eventList";
import Menu from "./menu";
import MiniPosts from "./miniPosts";
import logo from "../../../img/logo.png";
import jubilogo from "../../../img/190910_TSV_100Jahre_logo.png";
import Footer from "../footer";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ active: window.innerWidth < 1280 });
  }
  toggleSidebar() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <div id="sidebar" className={this.state.active ? "inactive" : null}>
        <div className="inner">
          <section style={{ textAlign: "center", paddingBottom: "2em" }}>
            <img src={logo} alt="Logo vom TSV Zorneding" />
            <img
              src={jubilogo}
              alt="Logo 100 Jahre TSV Zorneding"
              width="148px"
            />
          </section>

          {/*           <section id="search" className="alt">
            <form method="post" action="#">
              <input type="text" name="query" id="query" placeholder="Search" />
            </form>
          </section> */}

          <Menu title={this.props.site.section} />
          <EventList />
          <MiniPosts />
          <Footer />
        </div>
        <a href="#sidebar" onClick={this.toggleSidebar} className="toggle">
          Toggle
        </a>
      </div>
    );
  }
}

export default Sidebar;
