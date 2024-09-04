// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWafSignatures(args: GetWafSignaturesArgs, opts?: pulumi.InvokeOptions): Promise<GetWafSignaturesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("bigip:index/getWafSignatures:getWafSignatures", {
        "accuracy": args.accuracy,
        "description": args.description,
        "enabled": args.enabled,
        "id": args.id,
        "name": args.name,
        "performStaging": args.performStaging,
        "risk": args.risk,
        "signatureId": args.signatureId,
        "systemSignatureId": args.systemSignatureId,
        "tag": args.tag,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWafSignatures.
 */
export interface GetWafSignaturesArgs {
    accuracy?: string;
    description?: string;
    enabled?: boolean;
    id?: string;
    name?: string;
    performStaging?: boolean;
    risk?: string;
    signatureId: number;
    systemSignatureId?: string;
    tag?: string;
    type?: string;
}

/**
 * A collection of values returned by getWafSignatures.
 */
export interface GetWafSignaturesResult {
    readonly accuracy: string;
    readonly description?: string;
    readonly enabled?: boolean;
    readonly id: string;
    readonly json: string;
    readonly name: string;
    readonly performStaging?: boolean;
    readonly risk: string;
    readonly signatureId: number;
    readonly systemSignatureId: string;
    readonly tag: string;
    readonly type: string;
}
export function getWafSignaturesOutput(args: GetWafSignaturesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWafSignaturesResult> {
    return pulumi.output(args).apply((a: any) => getWafSignatures(a, opts))
}

/**
 * A collection of arguments for invoking getWafSignatures.
 */
export interface GetWafSignaturesOutputArgs {
    accuracy?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    performStaging?: pulumi.Input<boolean>;
    risk?: pulumi.Input<string>;
    signatureId: pulumi.Input<number>;
    systemSignatureId?: pulumi.Input<string>;
    tag?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
