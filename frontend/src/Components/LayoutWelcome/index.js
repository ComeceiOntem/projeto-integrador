import React from "react";
import { Form} from 'antd';

import './index.css'
import Logout from "../Logout";


export const LayoutWelcome = () => {
    return(
        <div>
            <Form>
                <h1> Bem vindo! </h1>

            </Form>
            <Logout/>
        </div>


    )
}
