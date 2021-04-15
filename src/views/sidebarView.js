import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { Burger, Menu, Dropdown, DropdownItem } from "./components";

export default function SidebarView(props) {
  const banks = props.banks;

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
          <Dropdown onClick={() => props.setDropBanks(!props.dropBanks)}>
            <span aria-label="Select bank"></span>
            Select bank
          </Dropdown>
          {banks.map((bank) => (
            <label>
              <DropdownItem drop={props.dropBanks}>
                <input type="radio" name="bank" onClick={() => props.onSelectBank(bank.id)} />
                {bank.languageFrom} - {bank.languageTo}
              </DropdownItem>
            </label>
          ))}

          <Dropdown onClick={() => props.setDropFilter(!props.dropFilter)}>
            <span aria-label="Filter on tags"></span>
            Filter on tags
          </Dropdown>
          {props.tags.map((tag) => (
            <label>
              <DropdownItem drop={props.dropFilter}>
                <input type="checkbox" name={tag.name} onClick={() => props.onFilter(tag.name)} />
                {tag.name}
              </DropdownItem>
            </label>
          ))}

          <Dropdown onClick={() => props.setDropSort(!props.dropSort)}>
            <span aria-label="Sort boards"></span>
            Sort boards
          </Dropdown>
          {props.sortings.map((sorting) => (
            <label>
              <DropdownItem drop={props.dropSort}>
                <input type="radio" name="sort" onClick={() => props.onSort(sorting.name)} />
                {sorting.name}
              </DropdownItem>
            </label>
          ))}
        </Menu>
      </div>
    </ThemeProvider>
  );
}
