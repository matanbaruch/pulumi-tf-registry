// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudProjectVrack(args: GetCloudProjectVrackArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudProjectVrackResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ovh:index/getCloudProjectVrack:getCloudProjectVrack", {
        "serviceName": args.serviceName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudProjectVrack.
 */
export interface GetCloudProjectVrackArgs {
    serviceName: string;
}

/**
 * A collection of values returned by getCloudProjectVrack.
 */
export interface GetCloudProjectVrackResult {
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly serviceName: string;
}
export function getCloudProjectVrackOutput(args: GetCloudProjectVrackOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudProjectVrackResult> {
    return pulumi.output(args).apply((a: any) => getCloudProjectVrack(a, opts))
}

/**
 * A collection of arguments for invoking getCloudProjectVrack.
 */
export interface GetCloudProjectVrackOutputArgs {
    serviceName: pulumi.Input<string>;
}
