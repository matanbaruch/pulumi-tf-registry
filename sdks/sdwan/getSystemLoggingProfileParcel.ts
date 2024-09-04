// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemLoggingProfileParcel(args: GetSystemLoggingProfileParcelArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemLoggingProfileParcelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getSystemLoggingProfileParcel:getSystemLoggingProfileParcel", {
        "featureProfileId": args.featureProfileId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemLoggingProfileParcel.
 */
export interface GetSystemLoggingProfileParcelArgs {
    featureProfileId: string;
    id: string;
}

/**
 * A collection of values returned by getSystemLoggingProfileParcel.
 */
export interface GetSystemLoggingProfileParcelResult {
    readonly description: string;
    readonly diskEnable: boolean;
    readonly diskEnableVariable: string;
    readonly diskFileRotate: number;
    readonly diskFileRotateVariable: string;
    readonly diskFileSize: number;
    readonly diskFileSizeVariable: string;
    readonly featureProfileId: string;
    readonly id: string;
    readonly ipv4Servers: outputs.GetSystemLoggingProfileParcelIpv4Server[];
    readonly ipv6Servers: outputs.GetSystemLoggingProfileParcelIpv6Server[];
    readonly name: string;
    readonly tlsProfiles: outputs.GetSystemLoggingProfileParcelTlsProfile[];
    readonly version: number;
}
export function getSystemLoggingProfileParcelOutput(args: GetSystemLoggingProfileParcelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemLoggingProfileParcelResult> {
    return pulumi.output(args).apply((a: any) => getSystemLoggingProfileParcel(a, opts))
}

/**
 * A collection of arguments for invoking getSystemLoggingProfileParcel.
 */
export interface GetSystemLoggingProfileParcelOutputArgs {
    featureProfileId: pulumi.Input<string>;
    id: pulumi.Input<string>;
}
