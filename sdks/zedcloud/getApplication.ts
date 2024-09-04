// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zedcloud:index/getApplication:getApplication", {
        "cpus": args.cpus,
        "description": args.description,
        "isImported": args.isImported,
        "manifest": args.manifest,
        "manifestFile": args.manifestFile,
        "memory": args.memory,
        "name": args.name,
        "networks": args.networks,
        "originType": args.originType,
        "parentDetails": args.parentDetails,
        "projectAccessLists": args.projectAccessLists,
        "storage": args.storage,
        "title": args.title,
        "userDefinedVersion": args.userDefinedVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApplication.
 */
export interface GetApplicationArgs {
    cpus?: number;
    description?: string;
    isImported?: boolean;
    manifest?: inputs.GetApplicationManifest;
    manifestFile?: string;
    memory?: number;
    name: string;
    networks?: number;
    originType?: string;
    parentDetails?: inputs.GetApplicationParentDetail[];
    projectAccessLists?: string[];
    storage?: number;
    title: string;
    userDefinedVersion?: string;
}

/**
 * A collection of values returned by getApplication.
 */
export interface GetApplicationResult {
    readonly cpus: number;
    readonly description?: string;
    readonly drives: number;
    readonly id: string;
    readonly isImported?: boolean;
    readonly manifest?: outputs.GetApplicationManifest;
    readonly manifestFile?: string;
    readonly memory: number;
    readonly name: string;
    readonly networks: number;
    readonly originType: string;
    readonly parentDetails?: outputs.GetApplicationParentDetail[];
    readonly projectAccessLists?: string[];
    readonly revisions: outputs.GetApplicationRevision[];
    readonly storage?: number;
    readonly title: string;
    readonly userDefinedVersion: string;
}
export function getApplicationOutput(args: GetApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationResult> {
    return pulumi.output(args).apply((a: any) => getApplication(a, opts))
}

/**
 * A collection of arguments for invoking getApplication.
 */
export interface GetApplicationOutputArgs {
    cpus?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    isImported?: pulumi.Input<boolean>;
    manifest?: pulumi.Input<inputs.GetApplicationManifestArgs>;
    manifestFile?: pulumi.Input<string>;
    memory?: pulumi.Input<number>;
    name: pulumi.Input<string>;
    networks?: pulumi.Input<number>;
    originType?: pulumi.Input<string>;
    parentDetails?: pulumi.Input<pulumi.Input<inputs.GetApplicationParentDetailArgs>[]>;
    projectAccessLists?: pulumi.Input<pulumi.Input<string>[]>;
    storage?: pulumi.Input<number>;
    title: pulumi.Input<string>;
    userDefinedVersion?: pulumi.Input<string>;
}
