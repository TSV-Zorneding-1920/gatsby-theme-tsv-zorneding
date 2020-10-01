import React from "react";
import MenuLink from "../menuLink";
import SubMenu from "../subMenu";

class DynamicMenu extends React.Component {
  render() {
    const that = this;

    return this.props.items
      ? this.props.items.map(function (entry, i) {
          return that.renderItem(entry);
        })
      : "";
  }

  renderItem(item) {
    const that = this;

    return item.menu_entry ? (
      <SubMenu text={item.title}>
        {item.menu_entry.map(function (subentry, k) {
          if (subentry.page) {
            return (
              <MenuLink to={subentry.page} content="2">
                {subentry.title}
              </MenuLink>
            );
          } else if (subentry.menu_entry) {
            return that.renderItem(subentry);
          } else {
            return <></>;
          }
        })}
      </SubMenu>
    ) : (
      <MenuLink to={item.page} content="1">
        {item.title}
      </MenuLink>
    );
  }
}

export default DynamicMenu;
