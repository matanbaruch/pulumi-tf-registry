// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLine(args?: GetLineArgs, opts?: pulumi.InvokeOptions): Promise<GetLineResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxe:index/getLine:getLine", {
        "device": args.device,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLine.
 */
export interface GetLineArgs {
    device?: string;
}

/**
 * A collection of values returned by getLine.
 */
export interface GetLineResult {
    readonly consoles: outputs.GetLineConsole[];
    readonly device?: string;
    readonly id: string;
    readonly vties: outputs.GetLineVty[];
}
export function getLineOutput(args?: GetLineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLineResult> {
    return pulumi.output(args).apply((a: any) => getLine(a, opts))
}

/**
 * A collection of arguments for invoking getLine.
 */
export interface GetLineOutputArgs {
    device?: pulumi.Input<string>;
}
