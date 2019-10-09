/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
 **/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('androiddeviceprovisioning', 'v1', () => {
        /** now we can use gapi.client.androiddeviceprovisioning */

        run();
    });

    async function run() {
        /**
         * Gets the latest state of a long-running operation.  Clients can use this
         * method to poll the operation result at intervals as recommended by the API
         * service.
         */
        await gapi.client.operations.get({
            name: 'name',
        });
    }
});
