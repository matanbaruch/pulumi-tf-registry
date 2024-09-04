// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagementUser(args?: GetManagementUserArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementUserResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementUser:getManagementUser", {
        "id": args.id,
        "name": args.name,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementUser.
 */
export interface GetManagementUserArgs {
    id?: string;
    name?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementUser.
 */
export interface GetManagementUserResult {
    readonly allowedLocations: {[key: string]: string};
    readonly authenticationMethod: string;
    readonly color: string;
    readonly comments: string;
    readonly connectDaily: boolean;
    readonly connectOnDays: string[];
    readonly email: string;
    readonly encryption: {[key: string]: string};
    readonly expirationDate: string;
    readonly fromHour: string;
    readonly id: string;
    readonly name?: string;
    readonly phoneNumber: string;
    readonly radiusServer: string;
    readonly tacacsServer: string;
    readonly tags: string[];
    readonly toHour: string;
    readonly uid?: string;
}
export function getManagementUserOutput(args?: GetManagementUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementUserResult> {
    return pulumi.output(args).apply((a: any) => getManagementUser(a, opts))
}

/**
 * A collection of arguments for invoking getManagementUser.
 */
export interface GetManagementUserOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
