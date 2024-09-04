// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDmsEnterpriseDatabases(args: GetDmsEnterpriseDatabasesArgs, opts?: pulumi.InvokeOptions): Promise<GetDmsEnterpriseDatabasesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getDmsEnterpriseDatabases:getDmsEnterpriseDatabases", {
        "id": args.id,
        "ids": args.ids,
        "instanceId": args.instanceId,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDmsEnterpriseDatabases.
 */
export interface GetDmsEnterpriseDatabasesArgs {
    id?: string;
    ids?: string[];
    instanceId: string;
    nameRegex?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getDmsEnterpriseDatabases.
 */
export interface GetDmsEnterpriseDatabasesResult {
    readonly databases: outputs.GetDmsEnterpriseDatabasesDatabase[];
    readonly id: string;
    readonly ids: string[];
    readonly instanceId: string;
    readonly nameRegex?: string;
    readonly outputFile?: string;
}
export function getDmsEnterpriseDatabasesOutput(args: GetDmsEnterpriseDatabasesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDmsEnterpriseDatabasesResult> {
    return pulumi.output(args).apply((a: any) => getDmsEnterpriseDatabases(a, opts))
}

/**
 * A collection of arguments for invoking getDmsEnterpriseDatabases.
 */
export interface GetDmsEnterpriseDatabasesOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    instanceId: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
