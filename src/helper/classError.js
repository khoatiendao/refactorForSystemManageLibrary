class errorResponse extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode
    }
}  

export default errorResponse;