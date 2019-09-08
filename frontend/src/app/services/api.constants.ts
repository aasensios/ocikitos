import { HttpHeaders } from '@angular/common/http'

/**
 * API class that contains CONSTANTS and methods to access properly to the
 * business data, according to the Laravel API documentation provided by
 * the backend developer
 */
export class API {

    /**
     * Local URLs for development
     */
    // public static BASE_URL = 'http://localhost:8000'
    // public static API_URL = 'http://localhost:8000/api'

    /**
     * Server URLs for production
     */
    public static BASE_URL = 'http://apps.proven.cat/~dawbi1901/api'
    public static API_URL = 'http://apps.proven.cat/~dawbi1901/api/api'

    /**
     * Laravel Passport values to include in the Body of every HTTP Request
     */
    public static GRANT_TYPE = 'password'
    public static CLIENT_ID = 2
    public static CLIENT_SECRET = '7eZUXRnKeq6R1lHxu6QwtySoIdR6qveMJE0IJLrV'

    /**
     * Options that accepts JSON requests and responses
     */
    public static getBasicOptions() {
        return {
            headers: new HttpHeaders({
                Accept: 'application/json'
            })
        }
    }

    /**
     * Options that accepts JSON requests and responses and prepared for
     * requests that need authentication to be completed by the API
     */
    public static getAuthOptions(accessToken: string) {
        return {
            headers: new HttpHeaders({
                Accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            })
        }
    }

}
