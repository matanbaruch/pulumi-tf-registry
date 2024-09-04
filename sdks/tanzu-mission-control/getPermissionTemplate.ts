// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPermissionTemplate(args: GetPermissionTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetPermissionTemplateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tanzu-mission-control:index/getPermissionTemplate:getPermissionTemplate", {
        "credentialsName": args.credentialsName,
        "id": args.id,
        "tanzuCapability": args.tanzuCapability,
        "tanzuProvider": args.tanzuProvider,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPermissionTemplate.
 */
export interface GetPermissionTemplateArgs {
    credentialsName: string;
    id?: string;
    tanzuCapability: string;
    tanzuProvider: string;
}

/**
 * A collection of values returned by getPermissionTemplate.
 */
export interface GetPermissionTemplateResult {
    readonly credentialsName: string;
    readonly id: string;
    readonly tanzuCapability: string;
    readonly tanzuProvider: string;
    readonly template: string;
    readonly templateUrl: string;
    readonly templateValues: {[key: string]: string};
    readonly undefinedTemplateValues: {[key: string]: string};
}
export function getPermissionTemplateOutput(args: GetPermissionTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPermissionTemplateResult> {
    return pulumi.output(args).apply((a: any) => getPermissionTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getPermissionTemplate.
 */
export interface GetPermissionTemplateOutputArgs {
    credentialsName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    tanzuCapability: pulumi.Input<string>;
    tanzuProvider: pulumi.Input<string>;
}
