// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIssueLabels(args: GetIssueLabelsArgs, opts?: pulumi.InvokeOptions): Promise<GetIssueLabelsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("github:index/getIssueLabels:getIssueLabels", {
        "id": args.id,
        "repository": args.repository,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIssueLabels.
 */
export interface GetIssueLabelsArgs {
    id?: string;
    repository: string;
}

/**
 * A collection of values returned by getIssueLabels.
 */
export interface GetIssueLabelsResult {
    readonly id: string;
    readonly labels: outputs.GetIssueLabelsLabel[];
    readonly repository: string;
}
export function getIssueLabelsOutput(args: GetIssueLabelsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIssueLabelsResult> {
    return pulumi.output(args).apply((a: any) => getIssueLabels(a, opts))
}

/**
 * A collection of arguments for invoking getIssueLabels.
 */
export interface GetIssueLabelsOutputArgs {
    id?: pulumi.Input<string>;
    repository: pulumi.Input<string>;
}
