// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSlbAflowOper(args?: GetSlbAflowOperArgs, opts?: pulumi.InvokeOptions): Promise<GetSlbAflowOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSlbAflowOper:getSlbAflowOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSlbAflowOper.
 */
export interface GetSlbAflowOperArgs {
    id?: string;
    oper?: inputs.GetSlbAflowOperOper;
}

/**
 * A collection of values returned by getSlbAflowOper.
 */
export interface GetSlbAflowOperResult {
    readonly id: string;
    readonly oper?: outputs.GetSlbAflowOperOper;
}
export function getSlbAflowOperOutput(args?: GetSlbAflowOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSlbAflowOperResult> {
    return pulumi.output(args).apply((a: any) => getSlbAflowOper(a, opts))
}

/**
 * A collection of arguments for invoking getSlbAflowOper.
 */
export interface GetSlbAflowOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetSlbAflowOperOperArgs>;
}
