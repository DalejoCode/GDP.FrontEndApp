import { HttpHeaders, HttpParams } from '@angular/common/http';

export class HttpOptionsGenerator {

    public static SearchWithToken(token: string): any {
        const headers = new HttpHeaders();
        if (token) { headers.append('Authorization', token); }

        return { headers: headers }
    }

    public static GenerateWithParameters(parameters: any, parameter_name: string, token: string): any {
        const headers = new HttpHeaders();
        const params = new HttpParams();
        if (token) { headers.append('Authorization', token); }
        params.set(parameter_name, parameters);

        return { headers: headers, params: params }
    }
}
