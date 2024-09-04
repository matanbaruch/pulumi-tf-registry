// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDefaultQosClassMapDscp(args: GetDefaultQosClassMapDscpArgs, opts?: pulumi.InvokeOptions): Promise<GetDefaultQosClassMapDscpResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nxos:index/getDefaultQosClassMapDscp:getDefaultQosClassMapDscp", {
        "classMapName": args.classMapName,
        "device": args.device,
        "value": args.value,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDefaultQosClassMapDscp.
 */
export interface GetDefaultQosClassMapDscpArgs {
    classMapName: string;
    device?: string;
    value: string;
}

/**
 * A collection of values returned by getDefaultQosClassMapDscp.
 */
export interface GetDefaultQosClassMapDscpResult {
    readonly classMapName: string;
    readonly device?: string;
    readonly id: string;
    readonly value: string;
}
export function getDefaultQosClassMapDscpOutput(args: GetDefaultQosClassMapDscpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDefaultQosClassMapDscpResult> {
    return pulumi.output(args).apply((a: any) => getDefaultQosClassMapDscp(a, opts))
}

/**
 * A collection of arguments for invoking getDefaultQosClassMapDscp.
 */
export interface GetDefaultQosClassMapDscpOutputArgs {
    classMapName: pulumi.Input<string>;
    device?: pulumi.Input<string>;
    value: pulumi.Input<string>;
}
