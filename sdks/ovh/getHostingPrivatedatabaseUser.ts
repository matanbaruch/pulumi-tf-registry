// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHostingPrivatedatabaseUser(args: GetHostingPrivatedatabaseUserArgs, opts?: pulumi.InvokeOptions): Promise<GetHostingPrivatedatabaseUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ovh:index/getHostingPrivatedatabaseUser:getHostingPrivatedatabaseUser", {
        "id": args.id,
        "serviceName": args.serviceName,
        "userName": args.userName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHostingPrivatedatabaseUser.
 */
export interface GetHostingPrivatedatabaseUserArgs {
    id?: string;
    serviceName: string;
    userName: string;
}

/**
 * A collection of values returned by getHostingPrivatedatabaseUser.
 */
export interface GetHostingPrivatedatabaseUserResult {
    readonly creationDate: string;
    readonly databases: outputs.GetHostingPrivatedatabaseUserDatabase[];
    readonly id: string;
    readonly serviceName: string;
    readonly userName: string;
}
export function getHostingPrivatedatabaseUserOutput(args: GetHostingPrivatedatabaseUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHostingPrivatedatabaseUserResult> {
    return pulumi.output(args).apply((a: any) => getHostingPrivatedatabaseUser(a, opts))
}

/**
 * A collection of arguments for invoking getHostingPrivatedatabaseUser.
 */
export interface GetHostingPrivatedatabaseUserOutputArgs {
    id?: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
    userName: pulumi.Input<string>;
}
