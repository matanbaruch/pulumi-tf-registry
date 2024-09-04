// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAzureTemplate(args: GetAzureTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureTemplateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("prismacloud:index/getAzureTemplate:getAzureTemplate", {
        "accountType": args.accountType,
        "deploymentType": args.deploymentType,
        "features": args.features,
        "fileName": args.fileName,
        "id": args.id,
        "rootSyncEnabled": args.rootSyncEnabled,
        "subscriptionId": args.subscriptionId,
        "tenantId": args.tenantId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAzureTemplate.
 */
export interface GetAzureTemplateArgs {
    accountType: string;
    deploymentType?: string;
    features?: string[];
    fileName: string;
    id?: string;
    rootSyncEnabled?: boolean;
    subscriptionId?: string;
    tenantId: string;
}

/**
 * A collection of values returned by getAzureTemplate.
 */
export interface GetAzureTemplateResult {
    readonly accountType: string;
    readonly deploymentType?: string;
    readonly features?: string[];
    readonly fileName: string;
    readonly id: string;
    readonly rootSyncEnabled?: boolean;
    readonly subscriptionId?: string;
    readonly tenantId: string;
}
export function getAzureTemplateOutput(args: GetAzureTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAzureTemplateResult> {
    return pulumi.output(args).apply((a: any) => getAzureTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getAzureTemplate.
 */
export interface GetAzureTemplateOutputArgs {
    accountType: pulumi.Input<string>;
    deploymentType?: pulumi.Input<string>;
    features?: pulumi.Input<pulumi.Input<string>[]>;
    fileName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    rootSyncEnabled?: pulumi.Input<boolean>;
    subscriptionId?: pulumi.Input<string>;
    tenantId: pulumi.Input<string>;
}
