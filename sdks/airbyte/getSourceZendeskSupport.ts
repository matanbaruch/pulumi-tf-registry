// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceZendeskSupport(args: GetSourceZendeskSupportArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZendeskSupportResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceZendeskSupport:getSourceZendeskSupport", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceZendeskSupport.
 */
export interface GetSourceZendeskSupportArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceZendeskSupport.
 */
export interface GetSourceZendeskSupportResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceZendeskSupportOutput(args: GetSourceZendeskSupportOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceZendeskSupportResult> {
    return pulumi.output(args).apply((a: any) => getSourceZendeskSupport(a, opts))
}

/**
 * A collection of arguments for invoking getSourceZendeskSupport.
 */
export interface GetSourceZendeskSupportOutputArgs {
    sourceId: pulumi.Input<string>;
}
