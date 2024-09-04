// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFileobject(args?: GetFileobjectArgs, opts?: pulumi.InvokeOptions): Promise<GetFileobjectResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getFileobject:getFileobject", {
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFileobject.
 */
export interface GetFileobjectArgs {
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getFileobject.
 */
export interface GetFileobjectResult {
    readonly checksum: string;
    readonly compressed: string;
    readonly configpbAttributes: outputs.GetFileobjectConfigpbAttribute[];
    readonly created: string;
    readonly crlInfos: outputs.GetFileobjectCrlInfo[];
    readonly description: string;
    readonly expiresAt: string;
    readonly id: string;
    readonly isFederated: string;
    readonly name: string;
    readonly path: string;
    readonly readOnly: string;
    readonly restrictDownload: string;
    readonly size: string;
    readonly tenantRef: string;
    readonly type: string;
    readonly uuid: string;
    readonly version: string;
}
export function getFileobjectOutput(args?: GetFileobjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFileobjectResult> {
    return pulumi.output(args).apply((a: any) => getFileobject(a, opts))
}

/**
 * A collection of arguments for invoking getFileobject.
 */
export interface GetFileobjectOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
