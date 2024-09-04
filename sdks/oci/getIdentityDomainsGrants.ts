// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDomainsGrants(args: GetIdentityDomainsGrantsArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDomainsGrantsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDomainsGrants:getIdentityDomainsGrants", {
        "attributeSets": args.attributeSets,
        "attributes": args.attributes,
        "authorization": args.authorization,
        "compartmentId": args.compartmentId,
        "grantCount": args.grantCount,
        "grantFilter": args.grantFilter,
        "id": args.id,
        "idcsEndpoint": args.idcsEndpoint,
        "resourceTypeSchemaVersion": args.resourceTypeSchemaVersion,
        "sortBy": args.sortBy,
        "sortOrder": args.sortOrder,
        "startIndex": args.startIndex,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDomainsGrants.
 */
export interface GetIdentityDomainsGrantsArgs {
    attributeSets?: string[];
    attributes?: string;
    authorization?: string;
    compartmentId?: string;
    grantCount?: number;
    grantFilter?: string;
    id?: string;
    idcsEndpoint: string;
    resourceTypeSchemaVersion?: string;
    sortBy?: string;
    sortOrder?: string;
    startIndex?: number;
}

/**
 * A collection of values returned by getIdentityDomainsGrants.
 */
export interface GetIdentityDomainsGrantsResult {
    readonly attributeSets?: string[];
    readonly attributes?: string;
    readonly authorization?: string;
    readonly compartmentId?: string;
    readonly grantCount?: number;
    readonly grantFilter?: string;
    readonly grants: outputs.GetIdentityDomainsGrantsGrant[];
    readonly id: string;
    readonly idcsEndpoint: string;
    readonly itemsPerPage: number;
    readonly resourceTypeSchemaVersion?: string;
    readonly schemas: string[];
    readonly sortBy?: string;
    readonly sortOrder?: string;
    readonly startIndex?: number;
    readonly totalResults: number;
}
export function getIdentityDomainsGrantsOutput(args: GetIdentityDomainsGrantsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDomainsGrantsResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDomainsGrants(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDomainsGrants.
 */
export interface GetIdentityDomainsGrantsOutputArgs {
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    grantCount?: pulumi.Input<number>;
    grantFilter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
    sortBy?: pulumi.Input<string>;
    sortOrder?: pulumi.Input<string>;
    startIndex?: pulumi.Input<number>;
}
