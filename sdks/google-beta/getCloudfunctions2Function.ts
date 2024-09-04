// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudfunctions2Function(args: GetCloudfunctions2FunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudfunctions2FunctionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getCloudfunctions2Function:getCloudfunctions2Function", {
        "id": args.id,
        "location": args.location,
        "name": args.name,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudfunctions2Function.
 */
export interface GetCloudfunctions2FunctionArgs {
    id?: string;
    location: string;
    name: string;
    project?: string;
}

/**
 * A collection of values returned by getCloudfunctions2Function.
 */
export interface GetCloudfunctions2FunctionResult {
    readonly buildConfigs: outputs.GetCloudfunctions2FunctionBuildConfig[];
    readonly description: string;
    readonly effectiveLabels: {[key: string]: string};
    readonly environment: string;
    readonly eventTriggers: outputs.GetCloudfunctions2FunctionEventTrigger[];
    readonly id: string;
    readonly kmsKeyName: string;
    readonly labels: {[key: string]: string};
    readonly location: string;
    readonly name: string;
    readonly project?: string;
    readonly serviceConfigs: outputs.GetCloudfunctions2FunctionServiceConfig[];
    readonly state: string;
    readonly terraformLabels: {[key: string]: string};
    readonly updateTime: string;
    readonly url: string;
}
export function getCloudfunctions2FunctionOutput(args: GetCloudfunctions2FunctionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudfunctions2FunctionResult> {
    return pulumi.output(args).apply((a: any) => getCloudfunctions2Function(a, opts))
}

/**
 * A collection of arguments for invoking getCloudfunctions2Function.
 */
export interface GetCloudfunctions2FunctionOutputArgs {
    id?: pulumi.Input<string>;
    location: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
