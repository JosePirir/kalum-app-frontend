// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:5008/v1/KalumManagement',
  //baseUrl: 'http://localhost:5070/v1/KalumManagement',
  baseUrlAuth: 'http://localhost:5006/KalumAutenticacion/v1',
  roles: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
  baseEnrollmentService:'http://localhost:5253/EnrollmentService.asmx'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
