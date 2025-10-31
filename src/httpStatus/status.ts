const statusCodes = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409, 
  UNPROCESSABLE_ENTITY: 422, 
  TOO_MANY_REQUESTS: 429, 
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const HttpStatusCode = {
  ...statusCodes,
  isSuccess: (status: number): boolean => status >= 200 && status < 300,
  isClientError: (status: number): boolean => status >= 400 && status < 500,
  isServerError: (status: number): boolean => status >= 500 && status < 600,
} as const;

export type HttpStatusCodeType = typeof HttpStatusCode[keyof typeof statusCodes];