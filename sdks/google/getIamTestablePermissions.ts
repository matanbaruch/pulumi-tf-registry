// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIamTestablePermissions(args: GetIamTestablePermissionsArgs, opts?: pulumi.InvokeOptions): Promise<GetIamTestablePermissionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getIamTestablePermissions:getIamTestablePermissions", {
        "customSupportLevel": args.customSupportLevel,
        "fullResourceName": args.fullResourceName,
        "id": args.id,
        "stages": args.stages,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamTestablePermissions.
 */
export interface GetIamTestablePermissionsArgs {
    customSupportLevel?: string;
    fullResourceName: string;
    id?: string;
    stages?: string[];
}

/**
 * A collection of values returned by getIamTestablePermissions.
 */
export interface GetIamTestablePermissionsResult {
    readonly customSupportLevel?: string;
    readonly fullResourceName: string;
    readonly id: string;
    readonly permissions: outputs.GetIamTestablePermissionsPermission[];
    readonly stages?: string[];
}
export function getIamTestablePermissionsOutput(args: GetIamTestablePermissionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamTestablePermissionsResult> {
    return pulumi.output(args).apply((a: any) => getIamTestablePermissions(a, opts))
}

/**
 * A collection of arguments for invoking getIamTestablePermissions.
 */
export interface GetIamTestablePermissionsOutputArgs {
    customSupportLevel?: pulumi.Input<string>;
    fullResourceName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    stages?: pulumi.Input<pulumi.Input<string>[]>;
}
