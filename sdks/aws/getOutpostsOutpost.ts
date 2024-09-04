// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOutpostsOutpost(args?: GetOutpostsOutpostArgs, opts?: pulumi.InvokeOptions): Promise<GetOutpostsOutpostResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getOutpostsOutpost:getOutpostsOutpost", {
        "arn": args.arn,
        "id": args.id,
        "name": args.name,
        "ownerId": args.ownerId,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOutpostsOutpost.
 */
export interface GetOutpostsOutpostArgs {
    arn?: string;
    id?: string;
    name?: string;
    ownerId?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getOutpostsOutpost.
 */
export interface GetOutpostsOutpostResult {
    readonly arn: string;
    readonly availabilityZone: string;
    readonly availabilityZoneId: string;
    readonly description: string;
    readonly id: string;
    readonly lifecycleStatus: string;
    readonly name: string;
    readonly ownerId?: string;
    readonly siteArn: string;
    readonly siteId: string;
    readonly supportedHardwareType: string;
    readonly tags: {[key: string]: string};
}
export function getOutpostsOutpostOutput(args?: GetOutpostsOutpostOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOutpostsOutpostResult> {
    return pulumi.output(args).apply((a: any) => getOutpostsOutpost(a, opts))
}

/**
 * A collection of arguments for invoking getOutpostsOutpost.
 */
export interface GetOutpostsOutpostOutputArgs {
    arn?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    ownerId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
