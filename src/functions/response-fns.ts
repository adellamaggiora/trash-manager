const sendJsonResponse = (statusCode: number) => (json: {}) => (response: any): void => {
    response.status(statusCode).json(json);
}

const sendStatusCode = (statusCode: number) => (response: any): void => {
    response.sendStatus(statusCode);
}

const sendErrorResponse = (statusCode: number) => (error: string) => (response: any): void => {
    response.status(statusCode).json({ error });
}

const sendOk = sendStatusCode(200);
const sendOkJson = sendJsonResponse(200);
const sendInternalServerError = sendErrorResponse(505);
const sendUnprocessableEntity = sendErrorResponse(422);

export default {
    sendOk,
    sendOkJson,
    sendInternalServerError,
    sendUnprocessableEntity
}