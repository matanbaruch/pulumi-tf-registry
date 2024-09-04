// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAlbservicesfileupload(args?: GetAlbservicesfileuploadArgs, opts?: pulumi.InvokeOptions): Promise<GetAlbservicesfileuploadResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getAlbservicesfileupload:getAlbservicesfileupload", {
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAlbservicesfileupload.
 */
export interface GetAlbservicesfileuploadArgs {
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getAlbservicesfileupload.
 */
export interface GetAlbservicesfileuploadResult {
    readonly caseId: string;
    readonly error: string;
    readonly filePath: string;
    readonly id: string;
    readonly name: string;
    readonly s3Directory: string;
    readonly status: string;
    readonly tenantRef: string;
    readonly uuid: string;
}
export function getAlbservicesfileuploadOutput(args?: GetAlbservicesfileuploadOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAlbservicesfileuploadResult> {
    return pulumi.output(args).apply((a: any) => getAlbservicesfileupload(a, opts))
}

/**
 * A collection of arguments for invoking getAlbservicesfileupload.
 */
export interface GetAlbservicesfileuploadOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
