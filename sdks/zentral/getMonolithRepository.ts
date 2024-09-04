// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMonolithRepository(args?: GetMonolithRepositoryArgs, opts?: pulumi.InvokeOptions): Promise<GetMonolithRepositoryResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zentral:index/getMonolithRepository:getMonolithRepository", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMonolithRepository.
 */
export interface GetMonolithRepositoryArgs {
    id?: number;
    name?: string;
}

/**
 * A collection of values returned by getMonolithRepository.
 */
export interface GetMonolithRepositoryResult {
    readonly backend: string;
    readonly id?: number;
    readonly metaBusinessUnitId: number;
    readonly name?: string;
    readonly s3: outputs.GetMonolithRepositoryS3;
}
export function getMonolithRepositoryOutput(args?: GetMonolithRepositoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonolithRepositoryResult> {
    return pulumi.output(args).apply((a: any) => getMonolithRepository(a, opts))
}

/**
 * A collection of arguments for invoking getMonolithRepository.
 */
export interface GetMonolithRepositoryOutputArgs {
    id?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}
