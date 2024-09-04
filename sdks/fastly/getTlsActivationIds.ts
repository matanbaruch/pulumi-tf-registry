// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTlsActivationIds(args?: GetTlsActivationIdsArgs, opts?: pulumi.InvokeOptions): Promise<GetTlsActivationIdsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fastly:index/getTlsActivationIds:getTlsActivationIds", {
        "certificateId": args.certificateId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTlsActivationIds.
 */
export interface GetTlsActivationIdsArgs {
    certificateId?: string;
    id?: string;
}

/**
 * A collection of values returned by getTlsActivationIds.
 */
export interface GetTlsActivationIdsResult {
    readonly certificateId?: string;
    readonly id: string;
    readonly ids: string[];
}
export function getTlsActivationIdsOutput(args?: GetTlsActivationIdsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTlsActivationIdsResult> {
    return pulumi.output(args).apply((a: any) => getTlsActivationIds(a, opts))
}

/**
 * A collection of arguments for invoking getTlsActivationIds.
 */
export interface GetTlsActivationIdsOutputArgs {
    certificateId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
