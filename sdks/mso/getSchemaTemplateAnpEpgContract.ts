// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSchemaTemplateAnpEpgContract(args: GetSchemaTemplateAnpEpgContractArgs, opts?: pulumi.InvokeOptions): Promise<GetSchemaTemplateAnpEpgContractResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mso:index/getSchemaTemplateAnpEpgContract:getSchemaTemplateAnpEpgContract", {
        "anpName": args.anpName,
        "contractName": args.contractName,
        "contractSchemaId": args.contractSchemaId,
        "contractTemplateName": args.contractTemplateName,
        "epgName": args.epgName,
        "id": args.id,
        "schemaId": args.schemaId,
        "templateName": args.templateName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSchemaTemplateAnpEpgContract.
 */
export interface GetSchemaTemplateAnpEpgContractArgs {
    anpName: string;
    contractName: string;
    contractSchemaId?: string;
    contractTemplateName?: string;
    epgName: string;
    id?: string;
    schemaId: string;
    templateName: string;
}

/**
 * A collection of values returned by getSchemaTemplateAnpEpgContract.
 */
export interface GetSchemaTemplateAnpEpgContractResult {
    readonly anpName: string;
    readonly contractName: string;
    readonly contractSchemaId: string;
    readonly contractTemplateName: string;
    readonly epgName: string;
    readonly id: string;
    readonly relationshipType: string;
    readonly schemaId: string;
    readonly templateName: string;
}
export function getSchemaTemplateAnpEpgContractOutput(args: GetSchemaTemplateAnpEpgContractOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSchemaTemplateAnpEpgContractResult> {
    return pulumi.output(args).apply((a: any) => getSchemaTemplateAnpEpgContract(a, opts))
}

/**
 * A collection of arguments for invoking getSchemaTemplateAnpEpgContract.
 */
export interface GetSchemaTemplateAnpEpgContractOutputArgs {
    anpName: pulumi.Input<string>;
    contractName: pulumi.Input<string>;
    contractSchemaId?: pulumi.Input<string>;
    contractTemplateName?: pulumi.Input<string>;
    epgName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    schemaId: pulumi.Input<string>;
    templateName: pulumi.Input<string>;
}
