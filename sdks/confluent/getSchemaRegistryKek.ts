// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSchemaRegistryKek(args: GetSchemaRegistryKekArgs, opts?: pulumi.InvokeOptions): Promise<GetSchemaRegistryKekResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("confluent:index/getSchemaRegistryKek:getSchemaRegistryKek", {
        "credentials": args.credentials,
        "id": args.id,
        "name": args.name,
        "restEndpoint": args.restEndpoint,
        "schemaRegistryCluster": args.schemaRegistryCluster,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSchemaRegistryKek.
 */
export interface GetSchemaRegistryKekArgs {
    credentials?: inputs.GetSchemaRegistryKekCredentials;
    id?: string;
    name: string;
    restEndpoint?: string;
    schemaRegistryCluster?: inputs.GetSchemaRegistryKekSchemaRegistryCluster;
}

/**
 * A collection of values returned by getSchemaRegistryKek.
 */
export interface GetSchemaRegistryKekResult {
    readonly credentials?: outputs.GetSchemaRegistryKekCredentials;
    readonly doc: string;
    readonly hardDelete: boolean;
    readonly id: string;
    readonly kmsKeyId: string;
    readonly kmsType: string;
    readonly name: string;
    readonly properties: {[key: string]: string};
    readonly restEndpoint?: string;
    readonly schemaRegistryCluster?: outputs.GetSchemaRegistryKekSchemaRegistryCluster;
    readonly shared: boolean;
}
export function getSchemaRegistryKekOutput(args: GetSchemaRegistryKekOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSchemaRegistryKekResult> {
    return pulumi.output(args).apply((a: any) => getSchemaRegistryKek(a, opts))
}

/**
 * A collection of arguments for invoking getSchemaRegistryKek.
 */
export interface GetSchemaRegistryKekOutputArgs {
    credentials?: pulumi.Input<inputs.GetSchemaRegistryKekCredentialsArgs>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    restEndpoint?: pulumi.Input<string>;
    schemaRegistryCluster?: pulumi.Input<inputs.GetSchemaRegistryKekSchemaRegistryClusterArgs>;
}
