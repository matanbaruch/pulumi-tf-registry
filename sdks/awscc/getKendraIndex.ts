// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKendraIndex(args: GetKendraIndexArgs, opts?: pulumi.InvokeOptions): Promise<GetKendraIndexResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getKendraIndex:getKendraIndex", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKendraIndex.
 */
export interface GetKendraIndexArgs {
    id: string;
}

/**
 * A collection of values returned by getKendraIndex.
 */
export interface GetKendraIndexResult {
    readonly arn: string;
    readonly capacityUnits: outputs.GetKendraIndexCapacityUnits;
    readonly description: string;
    readonly documentMetadataConfigurations: outputs.GetKendraIndexDocumentMetadataConfiguration[];
    readonly edition: string;
    readonly id: string;
    readonly indexId: string;
    readonly name: string;
    readonly roleArn: string;
    readonly serverSideEncryptionConfiguration: outputs.GetKendraIndexServerSideEncryptionConfiguration;
    readonly tags: outputs.GetKendraIndexTag[];
    readonly userContextPolicy: string;
    readonly userTokenConfigurations: outputs.GetKendraIndexUserTokenConfiguration[];
}
export function getKendraIndexOutput(args: GetKendraIndexOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKendraIndexResult> {
    return pulumi.output(args).apply((a: any) => getKendraIndex(a, opts))
}

/**
 * A collection of arguments for invoking getKendraIndex.
 */
export interface GetKendraIndexOutputArgs {
    id: pulumi.Input<string>;
}
