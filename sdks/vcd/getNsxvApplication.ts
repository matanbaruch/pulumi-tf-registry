// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNsxvApplication(args: GetNsxvApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetNsxvApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vcd:index/getNsxvApplication:getNsxvApplication", {
        "name": args.name,
        "vdcId": args.vdcId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNsxvApplication.
 */
export interface GetNsxvApplicationArgs {
    name: string;
    vdcId: string;
}

/**
 * A collection of values returned by getNsxvApplication.
 */
export interface GetNsxvApplicationResult {
    readonly appGuid: string;
    readonly id: string;
    readonly name: string;
    readonly ports: string;
    readonly protocol: string;
    readonly sourcePort: string;
    readonly vdcId: string;
}
export function getNsxvApplicationOutput(args: GetNsxvApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNsxvApplicationResult> {
    return pulumi.output(args).apply((a: any) => getNsxvApplication(a, opts))
}

/**
 * A collection of arguments for invoking getNsxvApplication.
 */
export interface GetNsxvApplicationOutputArgs {
    name: pulumi.Input<string>;
    vdcId: pulumi.Input<string>;
}
