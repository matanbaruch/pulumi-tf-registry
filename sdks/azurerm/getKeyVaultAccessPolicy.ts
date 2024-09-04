// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKeyVaultAccessPolicy(args: GetKeyVaultAccessPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyVaultAccessPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getKeyVaultAccessPolicy:getKeyVaultAccessPolicy", {
        "id": args.id,
        "name": args.name,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKeyVaultAccessPolicy.
 */
export interface GetKeyVaultAccessPolicyArgs {
    id?: string;
    name: string;
    timeouts?: inputs.GetKeyVaultAccessPolicyTimeouts;
}

/**
 * A collection of values returned by getKeyVaultAccessPolicy.
 */
export interface GetKeyVaultAccessPolicyResult {
    readonly certificatePermissions: string[];
    readonly id: string;
    readonly keyPermissions: string[];
    readonly name: string;
    readonly secretPermissions: string[];
    readonly timeouts?: outputs.GetKeyVaultAccessPolicyTimeouts;
}
export function getKeyVaultAccessPolicyOutput(args: GetKeyVaultAccessPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKeyVaultAccessPolicyResult> {
    return pulumi.output(args).apply((a: any) => getKeyVaultAccessPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getKeyVaultAccessPolicy.
 */
export interface GetKeyVaultAccessPolicyOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetKeyVaultAccessPolicyTimeoutsArgs>;
}
