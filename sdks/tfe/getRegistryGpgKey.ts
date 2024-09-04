// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRegistryGpgKey(args: GetRegistryGpgKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryGpgKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tfe:index/getRegistryGpgKey:getRegistryGpgKey", {
        "id": args.id,
        "organization": args.organization,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRegistryGpgKey.
 */
export interface GetRegistryGpgKeyArgs {
    id: string;
    organization?: string;
}

/**
 * A collection of values returned by getRegistryGpgKey.
 */
export interface GetRegistryGpgKeyResult {
    readonly asciiArmor: string;
    readonly createdAt: string;
    readonly id: string;
    readonly organization: string;
    readonly updatedAt: string;
}
export function getRegistryGpgKeyOutput(args: GetRegistryGpgKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryGpgKeyResult> {
    return pulumi.output(args).apply((a: any) => getRegistryGpgKey(a, opts))
}

/**
 * A collection of arguments for invoking getRegistryGpgKey.
 */
export interface GetRegistryGpgKeyOutputArgs {
    id: pulumi.Input<string>;
    organization?: pulumi.Input<string>;
}
