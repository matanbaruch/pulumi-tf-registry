// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudfrontKeyValueStores(opts?: pulumi.InvokeOptions): Promise<GetCloudfrontKeyValueStoresResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getCloudfrontKeyValueStores:getCloudfrontKeyValueStores", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getCloudfrontKeyValueStores.
 */
export interface GetCloudfrontKeyValueStoresResult {
    readonly id: string;
    readonly ids: string[];
}
export function getCloudfrontKeyValueStoresOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudfrontKeyValueStoresResult> {
    return pulumi.output(getCloudfrontKeyValueStores(opts))
}
