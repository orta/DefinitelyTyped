/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
 **/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('cloudmonitoring', 'v2beta2', () => {
        /** now we can use gapi.client.cloudmonitoring */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View and write monitoring data for all of your Google and third-party Cloud and API projects */
            'https://www.googleapis.com/auth/monitoring',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /** Create a new metric. */
        await gapi.client.metricDescriptors.create({
            project: 'project',
        });
        /** Delete an existing metric. */
        await gapi.client.metricDescriptors.delete({
            metric: 'metric',
            project: 'project',
        });
        /**
         * List metric descriptors that match the query. If the query is not set, then all of the metric descriptors will be returned. Large responses will be
         * paginated, use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value
         * of the nextPageToken.
         */
        await gapi.client.metricDescriptors.list({
            count: 1,
            pageToken: 'pageToken',
            project: 'project',
            query: 'query',
        });
        /**
         * List the data points of the time series that match the metric and labels values and that have data points in the interval. Large responses are
         * paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value
         * of the nextPageToken.
         */
        await gapi.client.timeseries.list({
            aggregator: 'aggregator',
            count: 2,
            labels: 'labels',
            metric: 'metric',
            oldest: 'oldest',
            pageToken: 'pageToken',
            project: 'project',
            timespan: 'timespan',
            window: 'window',
            youngest: 'youngest',
        });
        /**
         * Put data points to one or more time series for one or more metrics. If a time series does not exist, a new time series will be created. It is not
         * allowed to write a time series point that is older than the existing youngest point of that time series. Points that are older than the existing
         * youngest point of that time series will be discarded silently. Therefore, users should make sure that points of a time series are written sequentially
         * in the order of their end time.
         */
        await gapi.client.timeseries.write({
            project: 'project',
        });
        /**
         * List the descriptors of the time series that match the metric and labels values and that have data points in the interval. Large responses are
         * paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value
         * of the nextPageToken.
         */
        await gapi.client.timeseriesDescriptors.list({
            aggregator: 'aggregator',
            count: 2,
            labels: 'labels',
            metric: 'metric',
            oldest: 'oldest',
            pageToken: 'pageToken',
            project: 'project',
            timespan: 'timespan',
            window: 'window',
            youngest: 'youngest',
        });
    }
});
