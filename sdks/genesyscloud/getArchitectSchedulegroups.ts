// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getArchitectSchedulegroups(args: GetArchitectSchedulegroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetArchitectSchedulegroupsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("genesyscloud:index/getArchitectSchedulegroups:getArchitectSchedulegroups", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getArchitectSchedulegroups.
 */
export interface GetArchitectSchedulegroupsArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getArchitectSchedulegroups.
 */
export interface GetArchitectSchedulegroupsResult {
    readonly id: string;
    readonly name: string;
}
export function getArchitectSchedulegroupsOutput(args: GetArchitectSchedulegroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetArchitectSchedulegroupsResult> {
    return pulumi.output(args).apply((a: any) => getArchitectSchedulegroups(a, opts))
}

/**
 * A collection of arguments for invoking getArchitectSchedulegroups.
 */
export interface GetArchitectSchedulegroupsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
