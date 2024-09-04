// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCodecatalystDevEnvironment(args: GetCodecatalystDevEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetCodecatalystDevEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getCodecatalystDevEnvironment:getCodecatalystDevEnvironment", {
        "alias": args.alias,
        "creatorId": args.creatorId,
        "envId": args.envId,
        "id": args.id,
        "projectName": args.projectName,
        "repositories": args.repositories,
        "spaceName": args.spaceName,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCodecatalystDevEnvironment.
 */
export interface GetCodecatalystDevEnvironmentArgs {
    alias?: string;
    creatorId?: string;
    envId: string;
    id?: string;
    projectName: string;
    repositories?: inputs.GetCodecatalystDevEnvironmentRepository[];
    spaceName: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getCodecatalystDevEnvironment.
 */
export interface GetCodecatalystDevEnvironmentResult {
    readonly alias?: string;
    readonly creatorId?: string;
    readonly envId: string;
    readonly id: string;
    readonly ides: outputs.GetCodecatalystDevEnvironmentIde[];
    readonly inactivityTimeoutMinutes: number;
    readonly instanceType: string;
    readonly lastUpdatedTime: string;
    readonly persistentStorages: outputs.GetCodecatalystDevEnvironmentPersistentStorage[];
    readonly projectName: string;
    readonly repositories?: outputs.GetCodecatalystDevEnvironmentRepository[];
    readonly spaceName: string;
    readonly status: string;
    readonly statusReason: string;
    readonly tags: {[key: string]: string};
}
export function getCodecatalystDevEnvironmentOutput(args: GetCodecatalystDevEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCodecatalystDevEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getCodecatalystDevEnvironment(a, opts))
}

/**
 * A collection of arguments for invoking getCodecatalystDevEnvironment.
 */
export interface GetCodecatalystDevEnvironmentOutputArgs {
    alias?: pulumi.Input<string>;
    creatorId?: pulumi.Input<string>;
    envId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    projectName: pulumi.Input<string>;
    repositories?: pulumi.Input<pulumi.Input<inputs.GetCodecatalystDevEnvironmentRepositoryArgs>[]>;
    spaceName: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
