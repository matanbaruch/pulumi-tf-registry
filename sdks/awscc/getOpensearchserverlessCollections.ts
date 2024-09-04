// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOpensearchserverlessCollections(opts?: pulumi.InvokeOptions): Promise<GetOpensearchserverlessCollectionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getOpensearchserverlessCollections:getOpensearchserverlessCollections", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getOpensearchserverlessCollections.
 */
export interface GetOpensearchserverlessCollectionsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getOpensearchserverlessCollectionsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetOpensearchserverlessCollectionsResult> {
    return pulumi.output(getOpensearchserverlessCollections(opts))
}
