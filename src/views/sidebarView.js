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
          <button onClick={() => props.logout()}>Log out</button>

          <Dropdown
            onClick={() => props.setDropBanks(!props.dropBanks)}
            dropBank={props.dropBank}
          >
            <span aria-label="Select bank"></span>
            Select bank {props.dropBanks ? "Ʌ" : "V"}
          </Dropdown>
          {banks.map((bank, key) => (
            <label key={key}>
              <DropdownItem drop={props.dropBanks}>
                <input
                  type="radio"
                  name="bank"
                  onClick={() => props.onSelectBank(bank.id)}
                />
                {bank.languageFrom} - {bank.languageTo}
              </DropdownItem>
            </label>
          ))}

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

          <Dropdown onClick={() => props.setDropSort(!props.dropSort)}>
            <span aria-label="Sort boards"></span>
            Sort boards {props.dropSort ? "Ʌ" : "V"}
          </Dropdown>
          {props.sortings.map((sorting, key) => (
            <label key={key}>
              <DropdownItem drop={props.dropSort}>
                <input
                  type="radio"
                  name="sort"
                  onClick={() => props.onSort(sorting.name)}
                />
                {sorting.name}
              </DropdownItem>
            </label>
          ))}
        </Menu>
      </div>
    </ThemeProvider>
  );
}
