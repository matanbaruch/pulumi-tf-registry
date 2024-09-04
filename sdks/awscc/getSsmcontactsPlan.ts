// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSsmcontactsPlan(args: GetSsmcontactsPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetSsmcontactsPlanResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSsmcontactsPlan:getSsmcontactsPlan", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSsmcontactsPlan.
 */
export interface GetSsmcontactsPlanArgs {
    id: string;
}

/**
 * A collection of values returned by getSsmcontactsPlan.
 */
export interface GetSsmcontactsPlanResult {
    readonly arn: string;
    readonly contactId: string;
    readonly id: string;
    readonly rotationIds: string[];
    readonly stages: outputs.GetSsmcontactsPlanStage[];
}
export function getSsmcontactsPlanOutput(args: GetSsmcontactsPlanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSsmcontactsPlanResult> {
    return pulumi.output(args).apply((a: any) => getSsmcontactsPlan(a, opts))
}

/**
 * A collection of arguments for invoking getSsmcontactsPlan.
 */
export interface GetSsmcontactsPlanOutputArgs {
    id: pulumi.Input<string>;
}
