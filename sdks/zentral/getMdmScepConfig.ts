// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMdmScepConfig(args?: GetMdmScepConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetMdmScepConfigResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zentral:index/getMdmScepConfig:getMdmScepConfig", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMdmScepConfig.
 */
export interface GetMdmScepConfigArgs {
    id?: number;
    name?: string;
}

/**
 * A collection of values returned by getMdmScepConfig.
 */
export interface GetMdmScepConfigResult {
    readonly allowAllAppsAccess: boolean;
    readonly id?: number;
    readonly keyIsExtractable: boolean;
    readonly keySize: number;
    readonly keyUsage: number;
    readonly name?: string;
    readonly provisioningUid: string;
    readonly url: string;
}
export function getMdmScepConfigOutput(args?: GetMdmScepConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMdmScepConfigResult> {
    return pulumi.output(args).apply((a: any) => getMdmScepConfig(a, opts))
}

/**
 * A collection of arguments for invoking getMdmScepConfig.
 */
export interface GetMdmScepConfigOutputArgs {
    id?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}
