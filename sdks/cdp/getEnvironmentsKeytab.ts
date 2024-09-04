// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEnvironmentsKeytab(args: GetEnvironmentsKeytabArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentsKeytabResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("cdp:index/getEnvironmentsKeytab:getEnvironmentsKeytab", {
        "actorCrn": args.actorCrn,
        "environment": args.environment,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEnvironmentsKeytab.
 */
export interface GetEnvironmentsKeytabArgs {
    actorCrn?: string;
    environment: string;
}

/**
 * A collection of values returned by getEnvironmentsKeytab.
 */
export interface GetEnvironmentsKeytabResult {
    readonly actorCrn?: string;
    readonly environment: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly keytab: string;
}
export function getEnvironmentsKeytabOutput(args: GetEnvironmentsKeytabOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEnvironmentsKeytabResult> {
    return pulumi.output(args).apply((a: any) => getEnvironmentsKeytab(a, opts))
}

/**
 * A collection of arguments for invoking getEnvironmentsKeytab.
 */
export interface GetEnvironmentsKeytabOutputArgs {
    actorCrn?: pulumi.Input<string>;
    environment: pulumi.Input<string>;
}
