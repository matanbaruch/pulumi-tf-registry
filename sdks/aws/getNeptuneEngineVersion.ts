// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNeptuneEngineVersion(args?: GetNeptuneEngineVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetNeptuneEngineVersionResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getNeptuneEngineVersion:getNeptuneEngineVersion", {
        "engine": args.engine,
        "id": args.id,
        "parameterGroupFamily": args.parameterGroupFamily,
        "preferredVersions": args.preferredVersions,
        "version": args.version,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNeptuneEngineVersion.
 */
export interface GetNeptuneEngineVersionArgs {
    engine?: string;
    id?: string;
    parameterGroupFamily?: string;
    preferredVersions?: string[];
    version?: string;
}

/**
 * A collection of values returned by getNeptuneEngineVersion.
 */
export interface GetNeptuneEngineVersionResult {
    readonly engine?: string;
    readonly engineDescription: string;
    readonly exportableLogTypes: string[];
    readonly id: string;
    readonly parameterGroupFamily: string;
    readonly preferredVersions?: string[];
    readonly supportedTimezones: string[];
    readonly supportsLogExportsToCloudwatch: boolean;
    readonly supportsReadReplica: boolean;
    readonly validUpgradeTargets: string[];
    readonly version: string;
    readonly versionDescription: string;
}
export function getNeptuneEngineVersionOutput(args?: GetNeptuneEngineVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNeptuneEngineVersionResult> {
    return pulumi.output(args).apply((a: any) => getNeptuneEngineVersion(a, opts))
}

/**
 * A collection of arguments for invoking getNeptuneEngineVersion.
 */
export interface GetNeptuneEngineVersionOutputArgs {
    engine?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    parameterGroupFamily?: pulumi.Input<string>;
    preferredVersions?: pulumi.Input<pulumi.Input<string>[]>;
    version?: pulumi.Input<string>;
}
