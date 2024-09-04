// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLightsailStaticIp(args: GetLightsailStaticIpArgs, opts?: pulumi.InvokeOptions): Promise<GetLightsailStaticIpResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getLightsailStaticIp:getLightsailStaticIp", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLightsailStaticIp.
 */
export interface GetLightsailStaticIpArgs {
    id: string;
}

/**
 * A collection of values returned by getLightsailStaticIp.
 */
export interface GetLightsailStaticIpResult {
    readonly attachedTo: string;
    readonly id: string;
    readonly ipAddress: string;
    readonly isAttached: boolean;
    readonly staticIpArn: string;
    readonly staticIpName: string;
}
export function getLightsailStaticIpOutput(args: GetLightsailStaticIpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLightsailStaticIpResult> {
    return pulumi.output(args).apply((a: any) => getLightsailStaticIp(a, opts))
}

/**
 * A collection of arguments for invoking getLightsailStaticIp.
 */
export interface GetLightsailStaticIpOutputArgs {
    id: pulumi.Input<string>;
}
