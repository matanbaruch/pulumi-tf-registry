// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOmicsSequenceStore(args: GetOmicsSequenceStoreArgs, opts?: pulumi.InvokeOptions): Promise<GetOmicsSequenceStoreResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getOmicsSequenceStore:getOmicsSequenceStore", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOmicsSequenceStore.
 */
export interface GetOmicsSequenceStoreArgs {
    id: string;
}

/**
 * A collection of values returned by getOmicsSequenceStore.
 */
export interface GetOmicsSequenceStoreResult {
    readonly arn: string;
    readonly creationTime: string;
    readonly description: string;
    readonly fallbackLocation: string;
    readonly id: string;
    readonly name: string;
    readonly sequenceStoreId: string;
    readonly sseConfig: outputs.GetOmicsSequenceStoreSseConfig;
    readonly tags: {[key: string]: string};
}
export function getOmicsSequenceStoreOutput(args: GetOmicsSequenceStoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOmicsSequenceStoreResult> {
    return pulumi.output(args).apply((a: any) => getOmicsSequenceStore(a, opts))
}

/**
 * A collection of arguments for invoking getOmicsSequenceStore.
 */
export interface GetOmicsSequenceStoreOutputArgs {
    id: pulumi.Input<string>;
}
