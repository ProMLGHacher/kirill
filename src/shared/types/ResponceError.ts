export class ResponceError extends Error {
    public readonly error: string | string[];
    public readonly status: number;

    constructor(error: string | string[], status: number) {
        super()
        this.error = error
        this.status = status
        this.name = 'ResponceError'
        Object.setPrototypeOf(this, ResponceError.prototype)
    }
}

export function isResponceError(error: any): error is ResponceError {
    return error instanceof ResponceError;
}