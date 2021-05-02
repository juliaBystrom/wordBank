import React, { useState, useEffect } from "react";
import { CreateBankView } from "../views";
import UseModelProp from "./useModelProp";

export default function CreateBankPresenter(props) {

    // let banks = UseModelProp(props.model, "banks")

    return (
        <>
            <CreateBankView
                modalIsOpen={props.modalIsOpen}
                closeModal={props.closeModal}
            />
        </>

    );


}