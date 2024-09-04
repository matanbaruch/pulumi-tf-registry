// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCodestarconnectionsRepositoryLinks(opts?: pulumi.InvokeOptions): Promise<GetCodestarconnectionsRepositoryLinksResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getCodestarconnectionsRepositoryLinks:getCodestarconnectionsRepositoryLinks", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getCodestarconnectionsRepositoryLinks.
 */
export interface GetCodestarconnectionsRepositoryLinksResult {
    readonly id: string;
    readonly ids: string[];
}
export function getCodestarconnectionsRepositoryLinksOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetCodestarconnectionsRepositoryLinksResult> {
    return pulumi.output(getCodestarconnectionsRepositoryLinks(opts))
}
