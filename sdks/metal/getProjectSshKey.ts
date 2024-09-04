// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getProjectSshKey(args: GetProjectSshKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectSshKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("metal:index/getProjectSshKey:getProjectSshKey", {
        "id": args.id,
        "projectId": args.projectId,
        "search": args.search,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProjectSshKey.
 */
export interface GetProjectSshKeyArgs {
    id?: string;
    projectId: string;
    search?: string;
}

/**
 * A collection of values returned by getProjectSshKey.
 */
export interface GetProjectSshKeyResult {
    readonly created: string;
    readonly fingerprint: string;
    readonly id: string;
    readonly name: string;
    readonly ownerId: string;
    readonly projectId: string;
    readonly publicKey: string;
    readonly search?: string;
    readonly updated: string;
}
export function getProjectSshKeyOutput(args: GetProjectSshKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectSshKeyResult> {
    return pulumi.output(args).apply((a: any) => getProjectSshKey(a, opts))
}

/**
 * A collection of arguments for invoking getProjectSshKey.
 */
export interface GetProjectSshKeyOutputArgs {
    id?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
    search?: pulumi.Input<string>;
}
