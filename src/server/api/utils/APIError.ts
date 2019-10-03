import httpStatus from 'http-status';

/**
 * @extends Error
 */
class ExtendableError extends Error {
  errors: string []

  status: number

  isPublic?: boolean

  constructor({
    message,
    errors,
    status,
    isPublic,
    stack,
    name
  }: Error & {
    errors: string[],
    status: number,
    isPublic?: boolean
  }) {
    super(message);

    this.name = name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.isPublic = isPublic || true;
    this.stack = stack;
    // Error.captureStackTrace(this, this.constructor.name);
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
export default class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor({
    message,
    errors,
    stack,
    status,
    isPublic,
    name,
  }: Error & {
    errors: string[],
    status?: number,
    isPublic?: boolean
    name?: string
  }) {
    super({
      message,
      errors,
      status: status || httpStatus.INTERNAL_SERVER_ERROR,
      isPublic,
      stack,
      name,
    });
  }
}
