// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagementUserTemplate(args?: GetManagementUserTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementUserTemplateResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementUserTemplate:getManagementUserTemplate", {
        "id": args.id,
        "name": args.name,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementUserTemplate.
 */
export interface GetManagementUserTemplateArgs {
    id?: string;
    name?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementUserTemplate.
 */
export interface GetManagementUserTemplateResult {
    readonly allowedLocations: {[key: string]: string};
    readonly authenticationMethod: string;
    readonly color: string;
    readonly comments: string;
    readonly connectDaily: boolean;
    readonly connectOnDays: string[];
    readonly encryption: {[key: string]: string};
    readonly expirationByGlobalProperties: boolean;
    readonly expirationDate: string;
    readonly fromHour: string;
    readonly id: string;
    readonly name?: string;
    readonly radiusServer: string;
    readonly tacacsServer: string;
    readonly tags: string[];
    readonly toHour: string;
    readonly uid?: string;
}
export function getManagementUserTemplateOutput(args?: GetManagementUserTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementUserTemplateResult> {
    return pulumi.output(args).apply((a: any) => getManagementUserTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getManagementUserTemplate.
 */
export interface GetManagementUserTemplateOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
