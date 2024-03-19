export const handleError = (statusCode, msg) => {
    const error = new Error();
    error.statusCode = statusCode || '500';
    error.message = msg || "something went wrong"
    return error;
}