// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVariablesV2Check(args?: GetVariablesV2CheckArgs, opts?: pulumi.InvokeOptions): Promise<GetVariablesV2CheckResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("synthetics:index/getVariablesV2Check:getVariablesV2Check", {
        "id": args.id,
        "variables": args.variables,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVariablesV2Check.
 */
export interface GetVariablesV2CheckArgs {
    id?: string;
    variables?: inputs.GetVariablesV2CheckVariable[];
}

/**
 * A collection of values returned by getVariablesV2Check.
 */
export interface GetVariablesV2CheckResult {
    readonly id: string;
    readonly variables?: outputs.GetVariablesV2CheckVariable[];
}
export function getVariablesV2CheckOutput(args?: GetVariablesV2CheckOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVariablesV2CheckResult> {
    return pulumi.output(args).apply((a: any) => getVariablesV2Check(a, opts))
}

/**
 * A collection of arguments for invoking getVariablesV2Check.
 */
export interface GetVariablesV2CheckOutputArgs {
    id?: pulumi.Input<string>;
    variables?: pulumi.Input<pulumi.Input<inputs.GetVariablesV2CheckVariableArgs>[]>;
}
