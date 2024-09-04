// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getL3outHsrpSecondaryVip(args: GetL3outHsrpSecondaryVipArgs, opts?: pulumi.InvokeOptions): Promise<GetL3outHsrpSecondaryVipResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getL3outHsrpSecondaryVip:getL3outHsrpSecondaryVip", {
        "annotation": args.annotation,
        "configIssues": args.configIssues,
        "description": args.description,
        "id": args.id,
        "ip": args.ip,
        "l3outHsrpInterfaceGroupDn": args.l3outHsrpInterfaceGroupDn,
        "nameAlias": args.nameAlias,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getL3outHsrpSecondaryVip.
 */
export interface GetL3outHsrpSecondaryVipArgs {
    annotation?: string;
    configIssues?: string;
    description?: string;
    id?: string;
    ip: string;
    l3outHsrpInterfaceGroupDn: string;
    nameAlias?: string;
}

/**
 * A collection of values returned by getL3outHsrpSecondaryVip.
 */
export interface GetL3outHsrpSecondaryVipResult {
    readonly annotation: string;
    readonly configIssues: string;
    readonly description: string;
    readonly id: string;
    readonly ip: string;
    readonly l3outHsrpInterfaceGroupDn: string;
    readonly nameAlias: string;
}
export function getL3outHsrpSecondaryVipOutput(args: GetL3outHsrpSecondaryVipOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetL3outHsrpSecondaryVipResult> {
    return pulumi.output(args).apply((a: any) => getL3outHsrpSecondaryVip(a, opts))
}

/**
 * A collection of arguments for invoking getL3outHsrpSecondaryVip.
 */
export interface GetL3outHsrpSecondaryVipOutputArgs {
    annotation?: pulumi.Input<string>;
    configIssues?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ip: pulumi.Input<string>;
    l3outHsrpInterfaceGroupDn: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}
