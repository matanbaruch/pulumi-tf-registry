// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseManagementManagedDatabaseUserProxiedForUsers(args: GetDatabaseManagementManagedDatabaseUserProxiedForUsersArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseManagementManagedDatabaseUserProxiedForUsersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseManagementManagedDatabaseUserProxiedForUsers:getDatabaseManagementManagedDatabaseUserProxiedForUsers", {
        "filters": args.filters,
        "id": args.id,
        "managedDatabaseId": args.managedDatabaseId,
        "name": args.name,
        "opcNamedCredentialId": args.opcNamedCredentialId,
        "userName": args.userName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseManagementManagedDatabaseUserProxiedForUsers.
 */
export interface GetDatabaseManagementManagedDatabaseUserProxiedForUsersArgs {
    filters?: inputs.GetDatabaseManagementManagedDatabaseUserProxiedForUsersFilter[];
    id?: string;
    managedDatabaseId: string;
    name?: string;
    opcNamedCredentialId?: string;
    userName: string;
}

/**
 * A collection of values returned by getDatabaseManagementManagedDatabaseUserProxiedForUsers.
 */
export interface GetDatabaseManagementManagedDatabaseUserProxiedForUsersResult {
    readonly filters?: outputs.GetDatabaseManagementManagedDatabaseUserProxiedForUsersFilter[];
    readonly id: string;
    readonly managedDatabaseId: string;
    readonly name?: string;
    readonly opcNamedCredentialId?: string;
    readonly proxiedForUserCollections: outputs.GetDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollection[];
    readonly userName: string;
}
export function getDatabaseManagementManagedDatabaseUserProxiedForUsersOutput(args: GetDatabaseManagementManagedDatabaseUserProxiedForUsersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseManagementManagedDatabaseUserProxiedForUsersResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseManagementManagedDatabaseUserProxiedForUsers(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseManagementManagedDatabaseUserProxiedForUsers.
 */
export interface GetDatabaseManagementManagedDatabaseUserProxiedForUsersOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatabaseManagementManagedDatabaseUserProxiedForUsersFilterArgs>[]>;
    id?: pulumi.Input<string>;
    managedDatabaseId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    opcNamedCredentialId?: pulumi.Input<string>;
    userName: pulumi.Input<string>;
}
