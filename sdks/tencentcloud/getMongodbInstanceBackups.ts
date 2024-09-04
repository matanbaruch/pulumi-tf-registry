// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMongodbInstanceBackups(args: GetMongodbInstanceBackupsArgs, opts?: pulumi.InvokeOptions): Promise<GetMongodbInstanceBackupsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getMongodbInstanceBackups:getMongodbInstanceBackups", {
        "backupMethod": args.backupMethod,
        "id": args.id,
        "instanceId": args.instanceId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMongodbInstanceBackups.
 */
export interface GetMongodbInstanceBackupsArgs {
    backupMethod?: number;
    id?: string;
    instanceId: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getMongodbInstanceBackups.
 */
export interface GetMongodbInstanceBackupsResult {
    readonly backupLists: outputs.GetMongodbInstanceBackupsBackupList[];
    readonly backupMethod?: number;
    readonly id: string;
    readonly instanceId: string;
    readonly resultOutputFile?: string;
}
export function getMongodbInstanceBackupsOutput(args: GetMongodbInstanceBackupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMongodbInstanceBackupsResult> {
    return pulumi.output(args).apply((a: any) => getMongodbInstanceBackups(a, opts))
}

/**
 * A collection of arguments for invoking getMongodbInstanceBackups.
 */
export interface GetMongodbInstanceBackupsOutputArgs {
    backupMethod?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
