// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOpensearchUser(args: GetOpensearchUserArgs, opts?: pulumi.InvokeOptions): Promise<GetOpensearchUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aiven:index/getOpensearchUser:getOpensearchUser", {
        "id": args.id,
        "project": args.project,
        "serviceName": args.serviceName,
        "username": args.username,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOpensearchUser.
 */
export interface GetOpensearchUserArgs {
    id?: string;
    project: string;
    serviceName: string;
    username: string;
}

/**
 * A collection of values returned by getOpensearchUser.
 */
export interface GetOpensearchUserResult {
    readonly id: string;
    readonly password: string;
    readonly project: string;
    readonly serviceName: string;
    readonly type: string;
    readonly username: string;
}
export function getOpensearchUserOutput(args: GetOpensearchUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOpensearchUserResult> {
    return pulumi.output(args).apply((a: any) => getOpensearchUser(a, opts))
}

/**
 * A collection of arguments for invoking getOpensearchUser.
 */
export interface GetOpensearchUserOutputArgs {
    id?: pulumi.Input<string>;
    project: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
    username: pulumi.Input<string>;
}
