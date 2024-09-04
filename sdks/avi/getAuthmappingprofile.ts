// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAuthmappingprofile(args?: GetAuthmappingprofileArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthmappingprofileResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getAuthmappingprofile:getAuthmappingprofile", {
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAuthmappingprofile.
 */
export interface GetAuthmappingprofileArgs {
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getAuthmappingprofile.
 */
export interface GetAuthmappingprofileResult {
    readonly configpbAttributes: outputs.GetAuthmappingprofileConfigpbAttribute[];
    readonly description: string;
    readonly id: string;
    readonly mappingRules: outputs.GetAuthmappingprofileMappingRule[];
    readonly name: string;
    readonly tenantRef: string;
    readonly type: string;
    readonly uuid: string;
}
export function getAuthmappingprofileOutput(args?: GetAuthmappingprofileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAuthmappingprofileResult> {
    return pulumi.output(args).apply((a: any) => getAuthmappingprofile(a, opts))
}

/**
 * A collection of arguments for invoking getAuthmappingprofile.
 */
export interface GetAuthmappingprofileOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
