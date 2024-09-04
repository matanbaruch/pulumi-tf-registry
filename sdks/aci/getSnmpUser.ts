// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSnmpUser(args: GetSnmpUserArgs, opts?: pulumi.InvokeOptions): Promise<GetSnmpUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getSnmpUser:getSnmpUser", {
        "annotation": args.annotation,
        "description": args.description,
        "id": args.id,
        "name": args.name,
        "nameAlias": args.nameAlias,
        "snmpPolicyDn": args.snmpPolicyDn,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSnmpUser.
 */
export interface GetSnmpUserArgs {
    annotation?: string;
    description?: string;
    id?: string;
    name: string;
    nameAlias?: string;
    snmpPolicyDn: string;
}

/**
 * A collection of values returned by getSnmpUser.
 */
export interface GetSnmpUserResult {
    readonly annotation: string;
    readonly authorizationType: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly privacyType: string;
    readonly snmpPolicyDn: string;
}
export function getSnmpUserOutput(args: GetSnmpUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSnmpUserResult> {
    return pulumi.output(args).apply((a: any) => getSnmpUser(a, opts))
}

/**
 * A collection of arguments for invoking getSnmpUser.
 */
export interface GetSnmpUserOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    snmpPolicyDn: pulumi.Input<string>;
}
