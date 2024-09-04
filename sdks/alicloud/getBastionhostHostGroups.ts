// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBastionhostHostGroups(args: GetBastionhostHostGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetBastionhostHostGroupsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getBastionhostHostGroups:getBastionhostHostGroups", {
        "hostGroupName": args.hostGroupName,
        "id": args.id,
        "ids": args.ids,
        "instanceId": args.instanceId,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBastionhostHostGroups.
 */
export interface GetBastionhostHostGroupsArgs {
    hostGroupName?: string;
    id?: string;
    ids?: string[];
    instanceId: string;
    nameRegex?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getBastionhostHostGroups.
 */
export interface GetBastionhostHostGroupsResult {
    readonly groups: outputs.GetBastionhostHostGroupsGroup[];
    readonly hostGroupName?: string;
    readonly id: string;
    readonly ids: string[];
    readonly instanceId: string;
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
}
export function getBastionhostHostGroupsOutput(args: GetBastionhostHostGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBastionhostHostGroupsResult> {
    return pulumi.output(args).apply((a: any) => getBastionhostHostGroups(a, opts))
}

/**
 * A collection of arguments for invoking getBastionhostHostGroups.
 */
export interface GetBastionhostHostGroupsOutputArgs {
    hostGroupName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    instanceId: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
