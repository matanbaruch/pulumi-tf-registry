// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFolder(args: GetFolderArgs, opts?: pulumi.InvokeOptions): Promise<GetFolderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getFolder:getFolder", {
        "folder": args.folder,
        "id": args.id,
        "lookupOrganization": args.lookupOrganization,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFolder.
 */
export interface GetFolderArgs {
    folder: string;
    id?: string;
    lookupOrganization?: boolean;
}

/**
 * A collection of values returned by getFolder.
 */
export interface GetFolderResult {
    readonly createTime: string;
    readonly deletionProtection: boolean;
    readonly displayName: string;
    readonly folder: string;
    readonly folderId: string;
    readonly id: string;
    readonly lifecycleState: string;
    readonly lookupOrganization?: boolean;
    readonly name: string;
    readonly organization: string;
    readonly parent: string;
}
export function getFolderOutput(args: GetFolderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFolderResult> {
    return pulumi.output(args).apply((a: any) => getFolder(a, opts))
}

/**
 * A collection of arguments for invoking getFolder.
 */
export interface GetFolderOutputArgs {
    folder: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    lookupOrganization?: pulumi.Input<boolean>;
}
