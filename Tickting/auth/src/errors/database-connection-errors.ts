import { CustomErrors } from "./custom-errors";

export class DatabaseConnectionError extends CustomErrors {
    statusCode = 500;
    reason = "Error to connect DB";

    constructor(){
        super("Error to start Db");

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }

    serializeErrors(){
        return [{massage: this.reason}]
    }
}