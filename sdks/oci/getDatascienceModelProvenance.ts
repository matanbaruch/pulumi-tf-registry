// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDatascienceModelProvenance(args: GetDatascienceModelProvenanceArgs, opts?: pulumi.InvokeOptions): Promise<GetDatascienceModelProvenanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatascienceModelProvenance:getDatascienceModelProvenance", {
        "modelId": args.modelId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatascienceModelProvenance.
 */
export interface GetDatascienceModelProvenanceArgs {
    modelId: string;
}

/**
 * A collection of values returned by getDatascienceModelProvenance.
 */
export interface GetDatascienceModelProvenanceResult {
    readonly gitBranch: string;
    readonly gitCommit: string;
    readonly id: string;
    readonly modelId: string;
    readonly repositoryUrl: string;
    readonly scriptDir: string;
    readonly trainingId: string;
    readonly trainingScript: string;
}
export function getDatascienceModelProvenanceOutput(args: GetDatascienceModelProvenanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatascienceModelProvenanceResult> {
    return pulumi.output(args).apply((a: any) => getDatascienceModelProvenance(a, opts))
}

/**
 * A collection of arguments for invoking getDatascienceModelProvenance.
 */
export interface GetDatascienceModelProvenanceOutputArgs {
    modelId: pulumi.Input<string>;
}
