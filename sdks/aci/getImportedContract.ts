// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getImportedContract(args: GetImportedContractArgs, opts?: pulumi.InvokeOptions): Promise<GetImportedContractResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getImportedContract:getImportedContract", {
        "annotation": args.annotation,
        "description": args.description,
        "id": args.id,
        "name": args.name,
        "nameAlias": args.nameAlias,
        "tenantDn": args.tenantDn,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getImportedContract.
 */
export interface GetImportedContractArgs {
    annotation?: string;
    description?: string;
    id?: string;
    name: string;
    nameAlias?: string;
    tenantDn: string;
}

/**
 * A collection of values returned by getImportedContract.
 */
export interface GetImportedContractResult {
    readonly annotation: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly tenantDn: string;
}
export function getImportedContractOutput(args: GetImportedContractOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImportedContractResult> {
    return pulumi.output(args).apply((a: any) => getImportedContract(a, opts))
}

/**
 * A collection of arguments for invoking getImportedContract.
 */
export interface GetImportedContractOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    tenantDn: pulumi.Input<string>;
}
