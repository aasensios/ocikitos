import { HttpHeaders } from '@angular/common/http';

export class API {

    // URLs
    // public static BASE_URL = 'http://localhost:8000';
    public static BASE_URL = 'http://apps.proven.cat/~dawbi1901/api';
    // public static URL = 'http://localhost:8000/api';
    public static URL = 'http://apps.proven.cat/~dawbi1901/api/api';

    // Laravel Passport values to include in the Body of every HTTP Request
    public static GRANT_TYPE = 'password';
    public static CLIENT_ID = 2;
    public static CLIENT_SECRET = 'zIg6phE1x65HJh9mQk4dwLFET5rKix1kCERpTTE2';

    public static options = {
        headers: new HttpHeaders({
            Accept: 'application/json'
        })
    };
}
