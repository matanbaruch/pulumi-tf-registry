// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCustomipamdnsprofile(args?: GetCustomipamdnsprofileArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomipamdnsprofileResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getCustomipamdnsprofile:getCustomipamdnsprofile", {
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCustomipamdnsprofile.
 */
export interface GetCustomipamdnsprofileArgs {
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getCustomipamdnsprofile.
 */
export interface GetCustomipamdnsprofileResult {
    readonly configpbAttributes: outputs.GetCustomipamdnsprofileConfigpbAttribute[];
    readonly id: string;
    readonly name: string;
    readonly scriptParams: outputs.GetCustomipamdnsprofileScriptParam[];
    readonly scriptUri: string;
    readonly tenantRef: string;
    readonly uuid: string;
}
export function getCustomipamdnsprofileOutput(args?: GetCustomipamdnsprofileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomipamdnsprofileResult> {
    return pulumi.output(args).apply((a: any) => getCustomipamdnsprofile(a, opts))
}

/**
 * A collection of arguments for invoking getCustomipamdnsprofile.
 */
export interface GetCustomipamdnsprofileOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
