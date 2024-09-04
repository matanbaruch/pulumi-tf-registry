// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWorkspaceOwner(opts?: pulumi.InvokeOptions): Promise<GetWorkspaceOwnerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("coder:index/getWorkspaceOwner:getWorkspaceOwner", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getWorkspaceOwner.
 */
export interface GetWorkspaceOwnerResult {
    readonly email: string;
    readonly fullName: string;
    readonly groups: string[];
    readonly id: string;
    readonly name: string;
    readonly oidcAccessToken: string;
    readonly sessionToken: string;
    readonly sshPrivateKey: string;
    readonly sshPublicKey: string;
}
export function getWorkspaceOwnerOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceOwnerResult> {
    return pulumi.output(getWorkspaceOwner(opts))
}
