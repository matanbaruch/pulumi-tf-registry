// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSchemaSiteExternalEpg(args: GetSchemaSiteExternalEpgArgs, opts?: pulumi.InvokeOptions): Promise<GetSchemaSiteExternalEpgResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mso:index/getSchemaSiteExternalEpg:getSchemaSiteExternalEpg", {
        "externalEpgName": args.externalEpgName,
        "id": args.id,
        "schemaId": args.schemaId,
        "siteId": args.siteId,
        "templateName": args.templateName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSchemaSiteExternalEpg.
 */
export interface GetSchemaSiteExternalEpgArgs {
    externalEpgName: string;
    id?: string;
    schemaId: string;
    siteId: string;
    templateName: string;
}

/**
 * A collection of values returned by getSchemaSiteExternalEpg.
 */
export interface GetSchemaSiteExternalEpgResult {
    readonly externalEpgName: string;
    readonly id: string;
    readonly l3outDn: string;
    readonly l3outName: string;
    readonly l3outSchemaId: string;
    readonly l3outTemplateName: string;
    readonly schemaId: string;
    readonly siteId: string;
    readonly templateName: string;
}
export function getSchemaSiteExternalEpgOutput(args: GetSchemaSiteExternalEpgOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSchemaSiteExternalEpgResult> {
    return pulumi.output(args).apply((a: any) => getSchemaSiteExternalEpg(a, opts))
}

/**
 * A collection of arguments for invoking getSchemaSiteExternalEpg.
 */
export interface GetSchemaSiteExternalEpgOutputArgs {
    externalEpgName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    schemaId: pulumi.Input<string>;
    siteId: pulumi.Input<string>;
    templateName: pulumi.Input<string>;
}
