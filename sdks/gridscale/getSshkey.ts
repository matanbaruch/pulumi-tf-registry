// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSshkey(args: GetSshkeyArgs, opts?: pulumi.InvokeOptions): Promise<GetSshkeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gridscale:index/getSshkey:getSshkey", {
        "id": args.id,
        "resourceId": args.resourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSshkey.
 */
export interface GetSshkeyArgs {
    id?: string;
    resourceId: string;
}

/**
 * A collection of values returned by getSshkey.
 */
export interface GetSshkeyResult {
    readonly changeTime: string;
    readonly createTime: string;
    readonly id: string;
    readonly labels: string[];
    readonly name: string;
    readonly resourceId: string;
    readonly sshkey: string;
    readonly status: string;
}
export function getSshkeyOutput(args: GetSshkeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSshkeyResult> {
    return pulumi.output(args).apply((a: any) => getSshkey(a, opts))
}

/**
 * A collection of arguments for invoking getSshkey.
 */
export interface GetSshkeyOutputArgs {
    id?: pulumi.Input<string>;
    resourceId: pulumi.Input<string>;
}
