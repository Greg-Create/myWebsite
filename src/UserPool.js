import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData ={
    UserPoolId: "us-east-2_2oGcIOelw",
    ClientId: "3vk9sbr1k6219va8fa1qevni7r"
}

export default new CognitoUserPool(poolData)