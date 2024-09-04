// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAlikafkaSaslUsers(args: GetAlikafkaSaslUsersArgs, opts?: pulumi.InvokeOptions): Promise<GetAlikafkaSaslUsersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getAlikafkaSaslUsers:getAlikafkaSaslUsers", {
        "id": args.id,
        "instanceId": args.instanceId,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAlikafkaSaslUsers.
 */
export interface GetAlikafkaSaslUsersArgs {
    id?: string;
    instanceId: string;
    nameRegex?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getAlikafkaSaslUsers.
 */
export interface GetAlikafkaSaslUsersResult {
    readonly id: string;
    readonly instanceId: string;
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly users: outputs.GetAlikafkaSaslUsersUser[];
}
export function getAlikafkaSaslUsersOutput(args: GetAlikafkaSaslUsersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAlikafkaSaslUsersResult> {
    return pulumi.output(args).apply((a: any) => getAlikafkaSaslUsers(a, opts))
}

/**
 * A collection of arguments for invoking getAlikafkaSaslUsers.
 */
export interface GetAlikafkaSaslUsersOutputArgs {
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
