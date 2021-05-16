import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { Burger, Menu, Dropdown, DropdownItem } from "../styledComponents";

export default function SidebarView(props) {
  return (
    <ThemeProvider theme={theme}>
      <style />
      <div>
        <Burger open={props.open} onClick={() => props.setOpen(!props.open)}>
          <div />
          <div />
          <div />
        </Burger>
        <Menu open={props.open}>
          <button onClick={() => props.logout()}>Log out</button>

          {props.open ? (
            <>
              <Dropdown onClick={() => props.setDropFilter(!props.dropFilter)}>
                <span aria-label="Filter on tags"></span>
                Filter on tags {props.dropFilter ? "Ʌ" : "V"}
              </Dropdown>
              {props.tags.map((tag, key) => (
                <label key={key}>
                  <DropdownItem drop={props.dropFilter}>
                    <input
                      type="checkbox"
                      name={tag.name}
                      onClick={() => props.onFilter(tag.name)}
                    />
                    {tag.name}
                  </DropdownItem>
                </label>
              ))}
            </>
          ) : (
            <div></div>
          )}
        </Menu>
      </div>
    </ThemeProvider>
  );
}
