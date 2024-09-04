// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVisibilityPacketCaptureOper(args?: GetVisibilityPacketCaptureOperArgs, opts?: pulumi.InvokeOptions): Promise<GetVisibilityPacketCaptureOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getVisibilityPacketCaptureOper:getVisibilityPacketCaptureOper", {
        "automatedCaptures": args.automatedCaptures,
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVisibilityPacketCaptureOper.
 */
export interface GetVisibilityPacketCaptureOperArgs {
    automatedCaptures?: inputs.GetVisibilityPacketCaptureOperAutomatedCaptures;
    id?: string;
    oper?: inputs.GetVisibilityPacketCaptureOperOper;
}

/**
 * A collection of values returned by getVisibilityPacketCaptureOper.
 */
export interface GetVisibilityPacketCaptureOperResult {
    readonly automatedCaptures?: outputs.GetVisibilityPacketCaptureOperAutomatedCaptures;
    readonly id: string;
    readonly oper?: outputs.GetVisibilityPacketCaptureOperOper;
}
export function getVisibilityPacketCaptureOperOutput(args?: GetVisibilityPacketCaptureOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVisibilityPacketCaptureOperResult> {
    return pulumi.output(args).apply((a: any) => getVisibilityPacketCaptureOper(a, opts))
}

/**
 * A collection of arguments for invoking getVisibilityPacketCaptureOper.
 */
export interface GetVisibilityPacketCaptureOperOutputArgs {
    automatedCaptures?: pulumi.Input<inputs.GetVisibilityPacketCaptureOperAutomatedCapturesArgs>;
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetVisibilityPacketCaptureOperOperArgs>;
}
