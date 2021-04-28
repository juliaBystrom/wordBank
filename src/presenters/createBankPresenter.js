import React, { useState, useEffect } from "react";
import { CreateBankView } from "../views";
import useModelProp from "./useModelProp";

export default function CreateBankPresenter(props) {

    // let banks = useModelProp(props.model, "banks")

    return (
        <>
            <CreateBankView
                modalIsOpen={props.modalIsOpen}
                closeModal={props.closeModal}
            />
        </>

    );


}