export class SystemEnvironment {
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_PORT: string;
    PORT: number;
    JWT_SECRET: string;
    DB_BCRYPT_SALT: number;
    SITE_CODE: string;
    TOKEN_EXP_IN_MIN: number;
    NODE_ENV: string;
    VALID_CORS_ORIGIN: string;
    EMAIL_SERVICE: string;
    EMAIL: string;
    EMAIL_PASSWORD: string;
    MAILER_THEME: string;
    MAILER_PRODUCT_NAME: string;
    MAILER_PRODUCT_REGISTRATION_LINK: string;
    MAILER_PRODUCT_RESET_PWD_LINK: string;

    TOOBUSY_MAX_LAG: number;
    TOOBUSY_CHECK_INTERVAL: number;

 
    ROUTER_SERVICE: string;
    ROUTER_SERVICE_PORT: string;
    PROXY_TARGET: string;

    private COOKIE_AUTH: string;

    constructor () {
        this.DB_HOST = 'localhost';             // database URL
        this.DB_USER = 'webservice';            // database user id
        this.DB_PASSWORD = ''                   // database password
        this.DB_NAME = 'testdb';                // database name
        this.DB_PORT = '33000';                    // database port
        this.PORT = 3000;                       // this server port
        this.JWT_SECRET = '';                   // JWT secret key
        this.DB_BCRYPT_SALT = 10;               // Bcrypt salt number
        this.SITE_CODE = 'TEST';                // this server's site code
        this.TOKEN_EXP_IN_MIN = 60;             // expiry in minutes of JWT token
        this.NODE_ENV = 'development';          // SysLog mode : development or production
        this.VALID_CORS_ORIGIN = 'http://localhost:4200';  // CORS URL patch of client server
        this.COOKIE_AUTH = 'N';                 // cookie authentication Y - Cookie, N - Token base authentication
        this.EMAIL_SERVICE = '';                // nodemailer - service - gmail
        this.EMAIL = '';                        // nodemailer - this server email address
        this.EMAIL_PASSWORD = '';               // nodemailer - email password  generated by Google Security/Signing in to Google/App passwords
        this.MAILER_THEME = 'default';          // MailGen theme
        this.MAILER_PRODUCT_NAME = '';          // MailGen product.name
        this.MAILER_PRODUCT_REGISTRATION_LINK = '';          // MailGen product.link - URL to API for confirming registration
        this.MAILER_PRODUCT_RESET_PWD_LINK = '';          // MailGen product.link - URL to API for reset password confirmation
        this.TOOBUSY_MAX_LAG = 1000;            // maximum lag tolerable in ms
        this.TOOBUSY_CHECK_INTERVAL = 500;      // check interval in ms

        this.ROUTER_SERVICE = 'localhost';
        this.ROUTER_SERVICE_PORT = '3032';
        this.PROXY_TARGET = 'edume_entity'
    }
    init(): void {
        if (process.env.DB_HOST !== undefined) {
            this.DB_HOST = process.env.DB_HOST;
        }
        if (process.env.DB_USER !== undefined) {
            this.DB_USER = process.env.DB_USER;
        }
        if (process.env.DB_PASSWORD !== undefined) {
            this.DB_PASSWORD = process.env.DB_PASSWORD;
        }
        if (process.env.DB_NAME !== undefined) {
            this.DB_NAME = process.env.DB_NAME;
        }
        if (process.env.DB_PORT !== undefined) {
            this.DB_PORT = process.env.DB_PORT;
        }
        if (process.env.PORT !== undefined) {
            this.PORT = parseInt(process.env.PORT);
        }
        if (process.env.JWT_SECRET !== undefined) {
            this.JWT_SECRET = process.env.JWT_SECRET;
        }
        if (process.env.DB_BCRYPT_SALT !== undefined) {
            this.DB_BCRYPT_SALT = parseInt(process.env.DB_BCRYPT_SALT);
        }
        if (process.env.SITE_CODE !== undefined) {
            this.SITE_CODE = process.env.SITE_CODE;
        }
        if (process.env.TOKEN_EXP_IN_MIN !== undefined) {
            this.TOKEN_EXP_IN_MIN = parseInt(process.env.TOKEN_EXP_IN_MIN);
        }
        if (process.env.NODE_ENV !== undefined) {
            this.NODE_ENV = process.env.NODE_ENV;
        }
        if (process.env.VALID_CORS_ORIGIN !== undefined) {
            this.VALID_CORS_ORIGIN = process.env.VALID_CORS_ORIGIN;
        }
        if (process.env.COOKIE_AUTH !== undefined) {
            this.COOKIE_AUTH = process.env.COOKIE_AUTH;
        }
        if (process.env.EMAIL_SERVICE !== undefined) {
            this.EMAIL_SERVICE = process.env.EMAIL_SERVICE;
        }
        if (process.env.EMAIL !== undefined) {
            this.EMAIL = process.env.EMAIL;
        }
        if (process.env.EMAIL_PASSWORD !== undefined) {
            this.EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
        }
        if (process.env.MAILER_THEME !== undefined) {
            this.MAILER_THEME = process.env.MAILER_THEME;
        }
        if (process.env.MAILER_PRODUCT_NAME !== undefined) {
            this.MAILER_PRODUCT_NAME = process.env.MAILER_PRODUCT_NAME;
        }
        if (process.env.MAILER_PRODUCT_REGISTRATION_LINK !== undefined) {
            this.MAILER_PRODUCT_REGISTRATION_LINK = process.env.MAILER_PRODUCT_REGISTRATION_LINK;
        }
        if (process.env.MAILER_PRODUCT_RESET_PWD_LINK !== undefined) {
            this.MAILER_PRODUCT_RESET_PWD_LINK = process.env.MAILER_PRODUCT_RESET_PWD_LINK;
        }
        if (process.env.TOOBUSY_MAX_LAG !== undefined) {
            this.TOOBUSY_MAX_LAG = parseInt(process.env.TOOBUSY_MAX_LAG);
        }
        if (process.env.TOOBUSY_CHECK_INTERVAL !== undefined) {
            this.TOOBUSY_CHECK_INTERVAL = parseInt(process.env.TOOBUSY_CHECK_INTERVAL);
        }
        if (process.env.ROUTER_SERVICE !== undefined) {
            this.ROUTER_SERVICE = process.env.ROUTER_SERVICE;
        }
        if (process.env.ROUTER_SERVICE_PORT !== undefined) {
            this.ROUTER_SERVICE_PORT = process.env.ROUTER_SERVICE_PORT;
        }
        if (process.env.PROXY_TARGET !== undefined) {
            this.PROXY_TARGET = process.env.PROXY_TARGET;
        }
    }
    CookieAuth(): boolean {
        return this.COOKIE_AUTH === 'Y';
    }
}

const SysEnv = new SystemEnvironment();

export default SysEnv;