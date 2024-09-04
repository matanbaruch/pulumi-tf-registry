// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHealthlakeFhirDatastore(args: GetHealthlakeFhirDatastoreArgs, opts?: pulumi.InvokeOptions): Promise<GetHealthlakeFhirDatastoreResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getHealthlakeFhirDatastore:getHealthlakeFhirDatastore", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHealthlakeFhirDatastore.
 */
export interface GetHealthlakeFhirDatastoreArgs {
    id: string;
}

/**
 * A collection of values returned by getHealthlakeFhirDatastore.
 */
export interface GetHealthlakeFhirDatastoreResult {
    readonly createdAt: outputs.GetHealthlakeFhirDatastoreCreatedAt;
    readonly datastoreArn: string;
    readonly datastoreEndpoint: string;
    readonly datastoreId: string;
    readonly datastoreName: string;
    readonly datastoreStatus: string;
    readonly datastoreTypeVersion: string;
    readonly id: string;
    readonly identityProviderConfiguration: outputs.GetHealthlakeFhirDatastoreIdentityProviderConfiguration;
    readonly preloadDataConfig: outputs.GetHealthlakeFhirDatastorePreloadDataConfig;
    readonly sseConfiguration: outputs.GetHealthlakeFhirDatastoreSseConfiguration;
    readonly tags: outputs.GetHealthlakeFhirDatastoreTag[];
}
export function getHealthlakeFhirDatastoreOutput(args: GetHealthlakeFhirDatastoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHealthlakeFhirDatastoreResult> {
    return pulumi.output(args).apply((a: any) => getHealthlakeFhirDatastore(a, opts))
}

/**
 * A collection of arguments for invoking getHealthlakeFhirDatastore.
 */
export interface GetHealthlakeFhirDatastoreOutputArgs {
    id: pulumi.Input<string>;
}
