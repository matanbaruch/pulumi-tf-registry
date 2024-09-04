// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTrafficDataPolicyDefinition(args: GetTrafficDataPolicyDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetTrafficDataPolicyDefinitionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getTrafficDataPolicyDefinition:getTrafficDataPolicyDefinition", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTrafficDataPolicyDefinition.
 */
export interface GetTrafficDataPolicyDefinitionArgs {
    id: string;
}

/**
 * A collection of values returned by getTrafficDataPolicyDefinition.
 */
export interface GetTrafficDataPolicyDefinitionResult {
    readonly defaultAction: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly sequences: outputs.GetTrafficDataPolicyDefinitionSequence[];
    readonly type: string;
    readonly version: number;
}
export function getTrafficDataPolicyDefinitionOutput(args: GetTrafficDataPolicyDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTrafficDataPolicyDefinitionResult> {
    return pulumi.output(args).apply((a: any) => getTrafficDataPolicyDefinition(a, opts))
}

/**
 * A collection of arguments for invoking getTrafficDataPolicyDefinition.
 */
export interface GetTrafficDataPolicyDefinitionOutputArgs {
    id: pulumi.Input<string>;
}
