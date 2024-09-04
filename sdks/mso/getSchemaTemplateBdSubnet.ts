// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSchemaTemplateBdSubnet(args: GetSchemaTemplateBdSubnetArgs, opts?: pulumi.InvokeOptions): Promise<GetSchemaTemplateBdSubnetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mso:index/getSchemaTemplateBdSubnet:getSchemaTemplateBdSubnet", {
        "bdName": args.bdName,
        "id": args.id,
        "ip": args.ip,
        "schemaId": args.schemaId,
        "templateName": args.templateName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSchemaTemplateBdSubnet.
 */
export interface GetSchemaTemplateBdSubnetArgs {
    bdName: string;
    id?: string;
    ip: string;
    schemaId: string;
    templateName: string;
}

/**
 * A collection of values returned by getSchemaTemplateBdSubnet.
 */
export interface GetSchemaTemplateBdSubnetResult {
    readonly bdName: string;
    readonly description: string;
    readonly id: string;
    readonly ip: string;
    readonly noDefaultGateway: boolean;
    readonly primary: boolean;
    readonly querier: boolean;
    readonly schemaId: string;
    readonly scope: string;
    readonly shared: boolean;
    readonly templateName: string;
    readonly virtual: boolean;
}
export function getSchemaTemplateBdSubnetOutput(args: GetSchemaTemplateBdSubnetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSchemaTemplateBdSubnetResult> {
    return pulumi.output(args).apply((a: any) => getSchemaTemplateBdSubnet(a, opts))
}

/**
 * A collection of arguments for invoking getSchemaTemplateBdSubnet.
 */
export interface GetSchemaTemplateBdSubnetOutputArgs {
    bdName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ip: pulumi.Input<string>;
    schemaId: pulumi.Input<string>;
    templateName: pulumi.Input<string>;
}
