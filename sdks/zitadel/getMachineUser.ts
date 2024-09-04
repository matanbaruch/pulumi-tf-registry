// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMachineUser(args: GetMachineUserArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zitadel:index/getMachineUser:getMachineUser", {
        "id": args.id,
        "orgId": args.orgId,
        "userId": args.userId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMachineUser.
 */
export interface GetMachineUserArgs {
    id?: string;
    orgId?: string;
    userId: string;
}

/**
 * A collection of values returned by getMachineUser.
 */
export interface GetMachineUserResult {
    readonly accessTokenType: string;
    readonly description: string;
    readonly id: string;
    readonly loginNames: string[];
    readonly name: string;
    readonly orgId?: string;
    readonly preferredLoginName: string;
    readonly state: string;
    readonly userId: string;
    readonly userName: string;
}
export function getMachineUserOutput(args: GetMachineUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMachineUserResult> {
    return pulumi.output(args).apply((a: any) => getMachineUser(a, opts))
}

/**
 * A collection of arguments for invoking getMachineUser.
 */
export interface GetMachineUserOutputArgs {
    id?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    userId: pulumi.Input<string>;
}
