// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudconnectoruser(args?: GetCloudconnectoruserArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudconnectoruserResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getCloudconnectoruser:getCloudconnectoruser", {
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudconnectoruser.
 */
export interface GetCloudconnectoruserArgs {
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getCloudconnectoruser.
 */
export interface GetCloudconnectoruserResult {
    readonly azureServiceprincipals: outputs.GetCloudconnectoruserAzureServiceprincipal[];
    readonly azureUserpasses: outputs.GetCloudconnectoruserAzureUserpass[];
    readonly configpbAttributes: outputs.GetCloudconnectoruserConfigpbAttribute[];
    readonly gcpCredentials: outputs.GetCloudconnectoruserGcpCredential[];
    readonly id: string;
    readonly name: string;
    readonly nsxtCredentials: outputs.GetCloudconnectoruserNsxtCredential[];
    readonly ociCredentials: outputs.GetCloudconnectoruserOciCredential[];
    readonly password: string;
    readonly privateKey: string;
    readonly publicKey: string;
    readonly tenantRef: string;
    readonly tencentCredentials: outputs.GetCloudconnectoruserTencentCredential[];
    readonly uuid: string;
    readonly vcenterCredentials: outputs.GetCloudconnectoruserVcenterCredential[];
}
export function getCloudconnectoruserOutput(args?: GetCloudconnectoruserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudconnectoruserResult> {
    return pulumi.output(args).apply((a: any) => getCloudconnectoruser(a, opts))
}

/**
 * A collection of arguments for invoking getCloudconnectoruser.
 */
export interface GetCloudconnectoruserOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
