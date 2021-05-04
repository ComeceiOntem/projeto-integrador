import React from "react";
import { Result, Button } from 'antd';

export const ResultResponse = () => {
    return(
        <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            extra={[
                <Button type="primary" key="console">
                    Go Console
                </Button>,
                <Button key="buy">Buy Again</Button>,
            ]}
        />
    )
}
