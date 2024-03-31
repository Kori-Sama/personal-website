/**
 * Status codes for HTTP responses.
 */
export const status = {
  OK: 200,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500,
  NO_AUTH: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
} as const;

/**
 * Links to social media and other platforms.
 */
export const links = {
  GITHUB: "https://github.com/Kori-Sama",
  SOURCE_CODE: "https://github.com/Kori-Sama/personal-website",
  DISCORD: "https://discord.gg/eejZ6SGq28",
} as const;
