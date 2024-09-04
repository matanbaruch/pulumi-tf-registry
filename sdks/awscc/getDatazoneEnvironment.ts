// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatazoneEnvironment(args: GetDatazoneEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetDatazoneEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getDatazoneEnvironment:getDatazoneEnvironment", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatazoneEnvironment.
 */
export interface GetDatazoneEnvironmentArgs {
    id: string;
}

/**
 * A collection of values returned by getDatazoneEnvironment.
 */
export interface GetDatazoneEnvironmentResult {
    readonly awsAccountId: string;
    readonly awsAccountRegion: string;
    readonly createdAt: string;
    readonly createdBy: string;
    readonly description: string;
    readonly domainId: string;
    readonly domainIdentifier: string;
    readonly environmentBlueprintId: string;
    readonly environmentId: string;
    readonly environmentProfileId: string;
    readonly environmentProfileIdentifier: string;
    readonly glossaryTerms: string[];
    readonly id: string;
    readonly name: string;
    readonly projectId: string;
    readonly projectIdentifier: string;
    readonly providerName: string;
    readonly status: string;
    readonly updatedAt: string;
    readonly userParameters: outputs.GetDatazoneEnvironmentUserParameter[];
}
export function getDatazoneEnvironmentOutput(args: GetDatazoneEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatazoneEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getDatazoneEnvironment(a, opts))
}

/**
 * A collection of arguments for invoking getDatazoneEnvironment.
 */
export interface GetDatazoneEnvironmentOutputArgs {
    id: pulumi.Input<string>;
}
