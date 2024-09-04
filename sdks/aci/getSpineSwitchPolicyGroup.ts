// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSpineSwitchPolicyGroup(args: GetSpineSwitchPolicyGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetSpineSwitchPolicyGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getSpineSwitchPolicyGroup:getSpineSwitchPolicyGroup", {
        "annotation": args.annotation,
        "description": args.description,
        "id": args.id,
        "name": args.name,
        "nameAlias": args.nameAlias,
        "relationInfraRsIaclSpineProfile": args.relationInfraRsIaclSpineProfile,
        "relationInfraRsSpineBfdIpv4InstPol": args.relationInfraRsSpineBfdIpv4InstPol,
        "relationInfraRsSpineBfdIpv6InstPol": args.relationInfraRsSpineBfdIpv6InstPol,
        "relationInfraRsSpineCoppProfile": args.relationInfraRsSpineCoppProfile,
        "relationInfraRsSpinePGrpToCdpIfPol": args.relationInfraRsSpinePGrpToCdpIfPol,
        "relationInfraRsSpinePGrpToLldpIfPol": args.relationInfraRsSpinePGrpToLldpIfPol,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSpineSwitchPolicyGroup.
 */
export interface GetSpineSwitchPolicyGroupArgs {
    annotation?: string;
    description?: string;
    id?: string;
    name: string;
    nameAlias?: string;
    relationInfraRsIaclSpineProfile?: string;
    relationInfraRsSpineBfdIpv4InstPol?: string;
    relationInfraRsSpineBfdIpv6InstPol?: string;
    relationInfraRsSpineCoppProfile?: string;
    relationInfraRsSpinePGrpToCdpIfPol?: string;
    relationInfraRsSpinePGrpToLldpIfPol?: string;
}

/**
 * A collection of values returned by getSpineSwitchPolicyGroup.
 */
export interface GetSpineSwitchPolicyGroupResult {
    readonly annotation: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly relationInfraRsIaclSpineProfile?: string;
    readonly relationInfraRsSpineBfdIpv4InstPol?: string;
    readonly relationInfraRsSpineBfdIpv6InstPol?: string;
    readonly relationInfraRsSpineCoppProfile?: string;
    readonly relationInfraRsSpinePGrpToCdpIfPol?: string;
    readonly relationInfraRsSpinePGrpToLldpIfPol?: string;
}
export function getSpineSwitchPolicyGroupOutput(args: GetSpineSwitchPolicyGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSpineSwitchPolicyGroupResult> {
    return pulumi.output(args).apply((a: any) => getSpineSwitchPolicyGroup(a, opts))
}

/**
 * A collection of arguments for invoking getSpineSwitchPolicyGroup.
 */
export interface GetSpineSwitchPolicyGroupOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationInfraRsIaclSpineProfile?: pulumi.Input<string>;
    relationInfraRsSpineBfdIpv4InstPol?: pulumi.Input<string>;
    relationInfraRsSpineBfdIpv6InstPol?: pulumi.Input<string>;
    relationInfraRsSpineCoppProfile?: pulumi.Input<string>;
    relationInfraRsSpinePGrpToCdpIfPol?: pulumi.Input<string>;
    relationInfraRsSpinePGrpToLldpIfPol?: pulumi.Input<string>;
}
