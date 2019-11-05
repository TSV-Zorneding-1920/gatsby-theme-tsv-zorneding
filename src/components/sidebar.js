import React from "react";
import EventList from "./sidebar/event-list";
import Menu from "./sidebar/menu";
import MiniPosts from "./sidebar/mini-posts";
import { Link } from "gatsby";
import logo from "../../img/logo.png";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
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
      active: !this.state.active
    });
  }

  render() {
    return (
      <div id="sidebar" className={this.state.active ? "inactive" : null}>
        <div className="inner">
          <section style={{ textAlign: "center", paddingBottom: "2em" }}>
            <img src={logo} alt="Logo vom TSV Zorneding" />
          </section>

          {/*           <section id="search" className="alt">
            <form method="post" action="#">
              <input type="text" name="query" id="query" placeholder="Search" />
            </form>
          </section> */}

          <Menu title={this.props.site.section} />
          <EventList />
          <MiniPosts />

          <footer id="footer">
            <p className="copyright">
              © {new Date().getFullYear()} - TSV Zorneding
            </p>
            <p>
              <Link to="/impressum">Impressum</Link> -{" "}
              <Link to="/datenschutz">Datenschutzerklärung</Link>
            </p>
          </footer>
        </div>
        <a href="#sidebar" onClick={this.toggleSidebar} className="toggle">
          Toggle
        </a>
      </div>
    );
  }
}

const Content = ({ site }) => <Sidebar site={site} />;
export default Content;
