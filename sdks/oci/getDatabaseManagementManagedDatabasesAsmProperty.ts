// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseManagementManagedDatabasesAsmProperty(args: GetDatabaseManagementManagedDatabasesAsmPropertyArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseManagementManagedDatabasesAsmPropertyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseManagementManagedDatabasesAsmProperty:getDatabaseManagementManagedDatabasesAsmProperty", {
        "id": args.id,
        "managedDatabaseId": args.managedDatabaseId,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseManagementManagedDatabasesAsmProperty.
 */
export interface GetDatabaseManagementManagedDatabasesAsmPropertyArgs {
    id?: string;
    managedDatabaseId: string;
    name?: string;
}

/**
 * A collection of values returned by getDatabaseManagementManagedDatabasesAsmProperty.
 */
export interface GetDatabaseManagementManagedDatabasesAsmPropertyResult {
    readonly id: string;
    readonly items: outputs.GetDatabaseManagementManagedDatabasesAsmPropertyItem[];
    readonly managedDatabaseId: string;
    readonly name?: string;
}
export function getDatabaseManagementManagedDatabasesAsmPropertyOutput(args: GetDatabaseManagementManagedDatabasesAsmPropertyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseManagementManagedDatabasesAsmPropertyResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseManagementManagedDatabasesAsmProperty(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseManagementManagedDatabasesAsmProperty.
 */
export interface GetDatabaseManagementManagedDatabasesAsmPropertyOutputArgs {
    id?: pulumi.Input<string>;
    managedDatabaseId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
