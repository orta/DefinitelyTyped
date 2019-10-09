/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
 **/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('storage', 'v1', () => {
        /** now we can use gapi.client.storage */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform.read-only',
            /** Manage your data and permissions in Google Cloud Storage */
            'https://www.googleapis.com/auth/devstorage.full_control',
            /** View your data in Google Cloud Storage */
            'https://www.googleapis.com/auth/devstorage.read_only',
            /** Manage your data in Google Cloud Storage */
            'https://www.googleapis.com/auth/devstorage.read_write',
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
        /** Permanently deletes the ACL entry for the specified entity on the specified bucket. */
        await gapi.client.bucketAccessControls.delete({
            bucket: 'bucket',
            entity: 'entity',
            userProject: 'userProject',
        });
        /** Returns the ACL entry for the specified entity on the specified bucket. */
        await gapi.client.bucketAccessControls.get({
            bucket: 'bucket',
            entity: 'entity',
            userProject: 'userProject',
        });
        /** Creates a new ACL entry on the specified bucket. */
        await gapi.client.bucketAccessControls.insert({
            bucket: 'bucket',
            userProject: 'userProject',
        });
        /** Retrieves ACL entries on the specified bucket. */
        await gapi.client.bucketAccessControls.list({
            bucket: 'bucket',
            userProject: 'userProject',
        });
        /** Updates an ACL entry on the specified bucket. This method supports patch semantics. */
        await gapi.client.bucketAccessControls.patch({
            bucket: 'bucket',
            entity: 'entity',
            userProject: 'userProject',
        });
        /** Updates an ACL entry on the specified bucket. */
        await gapi.client.bucketAccessControls.update({
            bucket: 'bucket',
            entity: 'entity',
            userProject: 'userProject',
        });
        /** Permanently deletes an empty bucket. */
        await gapi.client.buckets.delete({
            bucket: 'bucket',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            ifMetagenerationNotMatch: 'ifMetagenerationNotMatch',
            userProject: 'userProject',
        });
        /** Returns metadata for the specified bucket. */
        await gapi.client.buckets.get({
            bucket: 'bucket',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            ifMetagenerationNotMatch: 'ifMetagenerationNotMatch',
            projection: 'projection',
            userProject: 'userProject',
        });
        /** Returns an IAM policy for the specified bucket. */
        await gapi.client.buckets.getIamPolicy({
            bucket: 'bucket',
            userProject: 'userProject',
        });
        /** Creates a new bucket. */
        await gapi.client.buckets.insert({
            predefinedAcl: 'predefinedAcl',
            predefinedDefaultObjectAcl: 'predefinedDefaultObjectAcl',
            project: 'project',
            projection: 'projection',
            userProject: 'userProject',
        });
        /** Retrieves a list of buckets for a given project. */
        await gapi.client.buckets.list({
            maxResults: 1,
            pageToken: 'pageToken',
            prefix: 'prefix',
            project: 'project',
            projection: 'projection',
            userProject: 'userProject',
        });
        /**
         * Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate. This method
         * supports patch semantics.
         */
        await gapi.client.buckets.patch({
            bucket: 'bucket',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            ifMetagenerationNotMatch: 'ifMetagenerationNotMatch',
            predefinedAcl: 'predefinedAcl',
            predefinedDefaultObjectAcl: 'predefinedDefaultObjectAcl',
            projection: 'projection',
            userProject: 'userProject',
        });
        /** Updates an IAM policy for the specified bucket. */
        await gapi.client.buckets.setIamPolicy({
            bucket: 'bucket',
            userProject: 'userProject',
        });
        /** Tests a set of permissions on the given bucket to see which, if any, are held by the caller. */
        await gapi.client.buckets.testIamPermissions({
            bucket: 'bucket',
            permissions: 'permissions',
            userProject: 'userProject',
        });
        /** Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate. */
        await gapi.client.buckets.update({
            bucket: 'bucket',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            ifMetagenerationNotMatch: 'ifMetagenerationNotMatch',
            predefinedAcl: 'predefinedAcl',
            predefinedDefaultObjectAcl: 'predefinedDefaultObjectAcl',
            projection: 'projection',
            userProject: 'userProject',
        });
        /** Stop watching resources through this channel */
        await gapi.client.channels.stop({});
        /** Permanently deletes the default object ACL entry for the specified entity on the specified bucket. */
        await gapi.client.defaultObjectAccessControls.delete({
            bucket: 'bucket',
            entity: 'entity',
            userProject: 'userProject',
        });
        /** Returns the default object ACL entry for the specified entity on the specified bucket. */
        await gapi.client.defaultObjectAccessControls.get({
            bucket: 'bucket',
            entity: 'entity',
            userProject: 'userProject',
        });
        /** Creates a new default object ACL entry on the specified bucket. */
        await gapi.client.defaultObjectAccessControls.insert({
            bucket: 'bucket',
            userProject: 'userProject',
        });
        /** Retrieves default object ACL entries on the specified bucket. */
        await gapi.client.defaultObjectAccessControls.list({
            bucket: 'bucket',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            ifMetagenerationNotMatch: 'ifMetagenerationNotMatch',
            userProject: 'userProject',
        });
        /** Updates a default object ACL entry on the specified bucket. This method supports patch semantics. */
        await gapi.client.defaultObjectAccessControls.patch({
            bucket: 'bucket',
            entity: 'entity',
            userProject: 'userProject',
        });
        /** Updates a default object ACL entry on the specified bucket. */
        await gapi.client.defaultObjectAccessControls.update({
            bucket: 'bucket',
            entity: 'entity',
            userProject: 'userProject',
        });
        /** Permanently deletes a notification subscription. */
        await gapi.client.notifications.delete({
            bucket: 'bucket',
            notification: 'notification',
            userProject: 'userProject',
        });
        /** View a notification configuration. */
        await gapi.client.notifications.get({
            bucket: 'bucket',
            notification: 'notification',
            userProject: 'userProject',
        });
        /** Creates a notification subscription for a given bucket. */
        await gapi.client.notifications.insert({
            bucket: 'bucket',
            userProject: 'userProject',
        });
        /** Retrieves a list of notification subscriptions for a given bucket. */
        await gapi.client.notifications.list({
            bucket: 'bucket',
            userProject: 'userProject',
        });
        /** Permanently deletes the ACL entry for the specified entity on the specified object. */
        await gapi.client.objectAccessControls.delete({
            bucket: 'bucket',
            entity: 'entity',
            generation: 'generation',
            object: 'object',
            userProject: 'userProject',
        });
        /** Returns the ACL entry for the specified entity on the specified object. */
        await gapi.client.objectAccessControls.get({
            bucket: 'bucket',
            entity: 'entity',
            generation: 'generation',
            object: 'object',
            userProject: 'userProject',
        });
        /** Creates a new ACL entry on the specified object. */
        await gapi.client.objectAccessControls.insert({
            bucket: 'bucket',
            generation: 'generation',
            object: 'object',
            userProject: 'userProject',
        });
        /** Retrieves ACL entries on the specified object. */
        await gapi.client.objectAccessControls.list({
            bucket: 'bucket',
            generation: 'generation',
            object: 'object',
            userProject: 'userProject',
        });
        /** Updates an ACL entry on the specified object. This method supports patch semantics. */
        await gapi.client.objectAccessControls.patch({
            bucket: 'bucket',
            entity: 'entity',
            generation: 'generation',
            object: 'object',
            userProject: 'userProject',
        });
        /** Updates an ACL entry on the specified object. */
        await gapi.client.objectAccessControls.update({
            bucket: 'bucket',
            entity: 'entity',
            generation: 'generation',
            object: 'object',
            userProject: 'userProject',
        });
        /** Concatenates a list of existing objects into a new object in the same bucket. */
        await gapi.client.objects.compose({
            destinationBucket: 'destinationBucket',
            destinationObject: 'destinationObject',
            destinationPredefinedAcl: 'destinationPredefinedAcl',
            ifGenerationMatch: 'ifGenerationMatch',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            kmsKeyName: 'kmsKeyName',
            userProject: 'userProject',
        });
        /** Copies a source object to a destination object. Optionally overrides metadata. */
        await gapi.client.objects.copy({
            destinationBucket: 'destinationBucket',
            destinationObject: 'destinationObject',
            destinationPredefinedAcl: 'destinationPredefinedAcl',
            ifGenerationMatch: 'ifGenerationMatch',
            ifGenerationNotMatch: 'ifGenerationNotMatch',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            ifMetagenerationNotMatch: 'ifMetagenerationNotMatch',
            ifSourceGenerationMatch: 'ifSourceGenerationMatch',
            ifSourceGenerationNotMatch: 'ifSourceGenerationNotMatch',
            ifSourceMetagenerationMatch: 'ifSourceMetagenerationMatch',
            ifSourceMetagenerationNotMatch: 'ifSourceMetagenerationNotMatch',
            projection: 'projection',
            sourceBucket: 'sourceBucket',
            sourceGeneration: 'sourceGeneration',
            sourceObject: 'sourceObject',
            userProject: 'userProject',
        });
        /** Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used. */
        await gapi.client.objects.delete({
            bucket: 'bucket',
            generation: 'generation',
            ifGenerationMatch: 'ifGenerationMatch',
            ifGenerationNotMatch: 'ifGenerationNotMatch',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            ifMetagenerationNotMatch: 'ifMetagenerationNotMatch',
            object: 'object',
            userProject: 'userProject',
        });
        /** Retrieves an object or its metadata. */
        await gapi.client.objects.get({
            bucket: 'bucket',
            generation: 'generation',
            ifGenerationMatch: 'ifGenerationMatch',
            ifGenerationNotMatch: 'ifGenerationNotMatch',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            ifMetagenerationNotMatch: 'ifMetagenerationNotMatch',
            object: 'object',
            projection: 'projection',
            userProject: 'userProject',
        });
        /** Returns an IAM policy for the specified object. */
        await gapi.client.objects.getIamPolicy({
            bucket: 'bucket',
            generation: 'generation',
            object: 'object',
            userProject: 'userProject',
        });
        /** Stores a new object and metadata. */
        await gapi.client.objects.insert({
            bucket: 'bucket',
            contentEncoding: 'contentEncoding',
            ifGenerationMatch: 'ifGenerationMatch',
            ifGenerationNotMatch: 'ifGenerationNotMatch',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            ifMetagenerationNotMatch: 'ifMetagenerationNotMatch',
            kmsKeyName: 'kmsKeyName',
            name: 'name',
            predefinedAcl: 'predefinedAcl',
            projection: 'projection',
            userProject: 'userProject',
        });
        /** Retrieves a list of objects matching the criteria. */
        await gapi.client.objects.list({
            bucket: 'bucket',
            delimiter: 'delimiter',
            maxResults: 3,
            pageToken: 'pageToken',
            prefix: 'prefix',
            projection: 'projection',
            userProject: 'userProject',
            versions: true,
        });
        /** Updates an object's metadata. This method supports patch semantics. */
        await gapi.client.objects.patch({
            bucket: 'bucket',
            generation: 'generation',
            ifGenerationMatch: 'ifGenerationMatch',
            ifGenerationNotMatch: 'ifGenerationNotMatch',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            ifMetagenerationNotMatch: 'ifMetagenerationNotMatch',
            object: 'object',
            predefinedAcl: 'predefinedAcl',
            projection: 'projection',
            userProject: 'userProject',
        });
        /** Rewrites a source object to a destination object. Optionally overrides metadata. */
        await gapi.client.objects.rewrite({
            destinationBucket: 'destinationBucket',
            destinationKmsKeyName: 'destinationKmsKeyName',
            destinationObject: 'destinationObject',
            destinationPredefinedAcl: 'destinationPredefinedAcl',
            ifGenerationMatch: 'ifGenerationMatch',
            ifGenerationNotMatch: 'ifGenerationNotMatch',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            ifMetagenerationNotMatch: 'ifMetagenerationNotMatch',
            ifSourceGenerationMatch: 'ifSourceGenerationMatch',
            ifSourceGenerationNotMatch: 'ifSourceGenerationNotMatch',
            ifSourceMetagenerationMatch: 'ifSourceMetagenerationMatch',
            ifSourceMetagenerationNotMatch: 'ifSourceMetagenerationNotMatch',
            maxBytesRewrittenPerCall: 'maxBytesRewrittenPerCall',
            projection: 'projection',
            rewriteToken: 'rewriteToken',
            sourceBucket: 'sourceBucket',
            sourceGeneration: 'sourceGeneration',
            sourceObject: 'sourceObject',
            userProject: 'userProject',
        });
        /** Updates an IAM policy for the specified object. */
        await gapi.client.objects.setIamPolicy({
            bucket: 'bucket',
            generation: 'generation',
            object: 'object',
            userProject: 'userProject',
        });
        /** Tests a set of permissions on the given object to see which, if any, are held by the caller. */
        await gapi.client.objects.testIamPermissions({
            bucket: 'bucket',
            generation: 'generation',
            object: 'object',
            permissions: 'permissions',
            userProject: 'userProject',
        });
        /** Updates an object's metadata. */
        await gapi.client.objects.update({
            bucket: 'bucket',
            generation: 'generation',
            ifGenerationMatch: 'ifGenerationMatch',
            ifGenerationNotMatch: 'ifGenerationNotMatch',
            ifMetagenerationMatch: 'ifMetagenerationMatch',
            ifMetagenerationNotMatch: 'ifMetagenerationNotMatch',
            object: 'object',
            predefinedAcl: 'predefinedAcl',
            projection: 'projection',
            userProject: 'userProject',
        });
        /** Watch for changes on all objects in a bucket. */
        await gapi.client.objects.watchAll({
            bucket: 'bucket',
            delimiter: 'delimiter',
            maxResults: 3,
            pageToken: 'pageToken',
            prefix: 'prefix',
            projection: 'projection',
            userProject: 'userProject',
            versions: true,
        });
    }
});
