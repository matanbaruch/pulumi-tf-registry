// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudwatchLogDataProtectionPolicyDocument(args: GetCloudwatchLogDataProtectionPolicyDocumentArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudwatchLogDataProtectionPolicyDocumentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getCloudwatchLogDataProtectionPolicyDocument:getCloudwatchLogDataProtectionPolicyDocument", {
        "description": args.description,
        "id": args.id,
        "name": args.name,
        "statements": args.statements,
        "version": args.version,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudwatchLogDataProtectionPolicyDocument.
 */
export interface GetCloudwatchLogDataProtectionPolicyDocumentArgs {
    description?: string;
    id?: string;
    name: string;
    statements: inputs.GetCloudwatchLogDataProtectionPolicyDocumentStatement[];
    version?: string;
}

/**
 * A collection of values returned by getCloudwatchLogDataProtectionPolicyDocument.
 */
export interface GetCloudwatchLogDataProtectionPolicyDocumentResult {
    readonly description?: string;
    readonly id: string;
    readonly json: string;
    readonly name: string;
    readonly statements: outputs.GetCloudwatchLogDataProtectionPolicyDocumentStatement[];
    readonly version?: string;
}
export function getCloudwatchLogDataProtectionPolicyDocumentOutput(args: GetCloudwatchLogDataProtectionPolicyDocumentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudwatchLogDataProtectionPolicyDocumentResult> {
    return pulumi.output(args).apply((a: any) => getCloudwatchLogDataProtectionPolicyDocument(a, opts))
}

/**
 * A collection of arguments for invoking getCloudwatchLogDataProtectionPolicyDocument.
 */
export interface GetCloudwatchLogDataProtectionPolicyDocumentOutputArgs {
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    statements: pulumi.Input<pulumi.Input<inputs.GetCloudwatchLogDataProtectionPolicyDocumentStatementArgs>[]>;
    version?: pulumi.Input<string>;
}
