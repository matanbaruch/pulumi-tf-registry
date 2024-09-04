// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSecretV1(args: GetSecretV1Args, opts?: pulumi.InvokeOptions): Promise<GetSecretV1Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("kubernetes:index/getSecretV1:getSecretV1", {
        "binaryData": args.binaryData,
        "id": args.id,
        "metadata": args.metadata,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecretV1.
 */
export interface GetSecretV1Args {
    binaryData?: {[key: string]: string};
    id?: string;
    metadata: inputs.GetSecretV1Metadata;
}

/**
 * A collection of values returned by getSecretV1.
 */
export interface GetSecretV1Result {
    readonly binaryData?: {[key: string]: string};
    readonly data: {[key: string]: string};
    readonly id: string;
    readonly immutable: boolean;
    readonly metadata: outputs.GetSecretV1Metadata;
    readonly type: string;
}
export function getSecretV1Output(args: GetSecretV1OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretV1Result> {
    return pulumi.output(args).apply((a: any) => getSecretV1(a, opts))
}

/**
 * A collection of arguments for invoking getSecretV1.
 */
export interface GetSecretV1OutputArgs {
    binaryData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    id?: pulumi.Input<string>;
    metadata: pulumi.Input<inputs.GetSecretV1MetadataArgs>;
}
