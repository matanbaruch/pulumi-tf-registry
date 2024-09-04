// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSnmptrapprofile(args?: GetSnmptrapprofileArgs, opts?: pulumi.InvokeOptions): Promise<GetSnmptrapprofileResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getSnmptrapprofile:getSnmptrapprofile", {
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSnmptrapprofile.
 */
export interface GetSnmptrapprofileArgs {
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getSnmptrapprofile.
 */
export interface GetSnmptrapprofileResult {
    readonly configpbAttributes: outputs.GetSnmptrapprofileConfigpbAttribute[];
    readonly id: string;
    readonly name: string;
    readonly tenantRef: string;
    readonly trapServers: outputs.GetSnmptrapprofileTrapServer[];
    readonly uuid: string;
}
export function getSnmptrapprofileOutput(args?: GetSnmptrapprofileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSnmptrapprofileResult> {
    return pulumi.output(args).apply((a: any) => getSnmptrapprofile(a, opts))
}

/**
 * A collection of arguments for invoking getSnmptrapprofile.
 */
export interface GetSnmptrapprofileOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
