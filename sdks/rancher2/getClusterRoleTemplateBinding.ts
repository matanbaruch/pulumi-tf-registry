// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getClusterRoleTemplateBinding(args: GetClusterRoleTemplateBindingArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterRoleTemplateBindingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("rancher2:index/getClusterRoleTemplateBinding:getClusterRoleTemplateBinding", {
        "clusterId": args.clusterId,
        "id": args.id,
        "name": args.name,
        "roleTemplateId": args.roleTemplateId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getClusterRoleTemplateBinding.
 */
export interface GetClusterRoleTemplateBindingArgs {
    clusterId: string;
    id?: string;
    name: string;
    roleTemplateId?: string;
}

/**
 * A collection of values returned by getClusterRoleTemplateBinding.
 */
export interface GetClusterRoleTemplateBindingResult {
    readonly annotations: {[key: string]: string};
    readonly clusterId: string;
    readonly groupId: string;
    readonly groupPrincipalId: string;
    readonly id: string;
    readonly labels: {[key: string]: string};
    readonly name: string;
    readonly roleTemplateId: string;
    readonly userId: string;
    readonly userPrincipalId: string;
}
export function getClusterRoleTemplateBindingOutput(args: GetClusterRoleTemplateBindingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterRoleTemplateBindingResult> {
    return pulumi.output(args).apply((a: any) => getClusterRoleTemplateBinding(a, opts))
}

/**
 * A collection of arguments for invoking getClusterRoleTemplateBinding.
 */
export interface GetClusterRoleTemplateBindingOutputArgs {
    clusterId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    roleTemplateId?: pulumi.Input<string>;
}
