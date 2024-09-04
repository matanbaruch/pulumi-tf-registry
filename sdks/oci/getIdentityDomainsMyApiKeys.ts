// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDomainsMyApiKeys(args: GetIdentityDomainsMyApiKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDomainsMyApiKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDomainsMyApiKeys:getIdentityDomainsMyApiKeys", {
        "authorization": args.authorization,
        "compartmentId": args.compartmentId,
        "id": args.id,
        "idcsEndpoint": args.idcsEndpoint,
        "myApiKeyCount": args.myApiKeyCount,
        "myApiKeyFilter": args.myApiKeyFilter,
        "resourceTypeSchemaVersion": args.resourceTypeSchemaVersion,
        "sortBy": args.sortBy,
        "sortOrder": args.sortOrder,
        "startIndex": args.startIndex,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDomainsMyApiKeys.
 */
export interface GetIdentityDomainsMyApiKeysArgs {
    authorization?: string;
    compartmentId?: string;
    id?: string;
    idcsEndpoint: string;
    myApiKeyCount?: number;
    myApiKeyFilter?: string;
    resourceTypeSchemaVersion?: string;
    sortBy?: string;
    sortOrder?: string;
    startIndex?: number;
}

/**
 * A collection of values returned by getIdentityDomainsMyApiKeys.
 */
export interface GetIdentityDomainsMyApiKeysResult {
    readonly authorization?: string;
    readonly compartmentId?: string;
    readonly id: string;
    readonly idcsEndpoint: string;
    readonly itemsPerPage: number;
    readonly myApiKeyCount?: number;
    readonly myApiKeyFilter?: string;
    readonly myApiKeys: outputs.GetIdentityDomainsMyApiKeysMyApiKey[];
    readonly resourceTypeSchemaVersion?: string;
    readonly schemas: string[];
    readonly sortBy?: string;
    readonly sortOrder?: string;
    readonly startIndex?: number;
    readonly totalResults: number;
}
export function getIdentityDomainsMyApiKeysOutput(args: GetIdentityDomainsMyApiKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDomainsMyApiKeysResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDomainsMyApiKeys(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDomainsMyApiKeys.
 */
export interface GetIdentityDomainsMyApiKeysOutputArgs {
    authorization?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    myApiKeyCount?: pulumi.Input<number>;
    myApiKeyFilter?: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
    sortBy?: pulumi.Input<string>;
    sortOrder?: pulumi.Input<string>;
    startIndex?: pulumi.Input<number>;
}
