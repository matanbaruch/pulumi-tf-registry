// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("dsm:index/getUser:getUser", {
        "id": args.id,
        "userEmail": args.userEmail,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserArgs {
    id?: string;
    userEmail: string;
}

/**
 * A collection of values returned by getUser.
 */
export interface GetUserResult {
    readonly id: string;
    readonly userEmail: string;
    readonly userId: string;
}
export function getUserOutput(args: GetUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserResult> {
    return pulumi.output(args).apply((a: any) => getUser(a, opts))
}

/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserOutputArgs {
    id?: pulumi.Input<string>;
    userEmail: pulumi.Input<string>;
}
