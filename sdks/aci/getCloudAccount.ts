// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudAccount(args: GetCloudAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getCloudAccount:getCloudAccount", {
        "accessType": args.accessType,
        "accountId": args.accountId,
        "annotation": args.annotation,
        "description": args.description,
        "id": args.id,
        "name": args.name,
        "nameAlias": args.nameAlias,
        "tenantDn": args.tenantDn,
        "vendor": args.vendor,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudAccount.
 */
export interface GetCloudAccountArgs {
    accessType?: string;
    accountId: string;
    annotation?: string;
    description?: string;
    id?: string;
    name?: string;
    nameAlias?: string;
    tenantDn: string;
    vendor: string;
}

/**
 * A collection of values returned by getCloudAccount.
 */
export interface GetCloudAccountResult {
    readonly accessType: string;
    readonly accountId: string;
    readonly annotation: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly tenantDn: string;
    readonly vendor: string;
}
export function getCloudAccountOutput(args: GetCloudAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudAccountResult> {
    return pulumi.output(args).apply((a: any) => getCloudAccount(a, opts))
}

/**
 * A collection of arguments for invoking getCloudAccount.
 */
export interface GetCloudAccountOutputArgs {
    accessType?: pulumi.Input<string>;
    accountId: pulumi.Input<string>;
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    tenantDn: pulumi.Input<string>;
    vendor: pulumi.Input<string>;
}
