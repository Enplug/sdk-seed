
// create and export app instance
// make sure the app name matches the 'ng-app' attribute in index.html
export default angular.module( 'app-seed', [
    // Inject main dependencies including SDK here:
    'ngRoute',
    'enplug.sdk',
    'enplug.sdk.utils',
]);