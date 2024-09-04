// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFabricWideSettings(args?: GetFabricWideSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricWideSettingsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getFabricWideSettings:getFabricWideSettings", {
        "annotation": args.annotation,
        "description": args.description,
        "disableEpDampening": args.disableEpDampening,
        "domainValidation": args.domainValidation,
        "enableMoStreaming": args.enableMoStreaming,
        "enableRemoteLeafDirect": args.enableRemoteLeafDirect,
        "enforceSubnetCheck": args.enforceSubnetCheck,
        "id": args.id,
        "leafOpflexpAuthenticateClients": args.leafOpflexpAuthenticateClients,
        "leafOpflexpUseSsl": args.leafOpflexpUseSsl,
        "name": args.name,
        "nameAlias": args.nameAlias,
        "opflexpAuthenticateClients": args.opflexpAuthenticateClients,
        "opflexpSslProtocols": args.opflexpSslProtocols,
        "opflexpUseSsl": args.opflexpUseSsl,
        "policySyncNodeBringup": args.policySyncNodeBringup,
        "reallocateGipo": args.reallocateGipo,
        "restrictInfraVlanTraffic": args.restrictInfraVlanTraffic,
        "unicastXrEpLearnDisable": args.unicastXrEpLearnDisable,
        "validateOverlappingVlans": args.validateOverlappingVlans,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFabricWideSettings.
 */
export interface GetFabricWideSettingsArgs {
    annotation?: string;
    description?: string;
    disableEpDampening?: string;
    domainValidation?: string;
    enableMoStreaming?: string;
    enableRemoteLeafDirect?: string;
    enforceSubnetCheck?: string;
    id?: string;
    leafOpflexpAuthenticateClients?: string;
    leafOpflexpUseSsl?: string;
    name?: string;
    nameAlias?: string;
    opflexpAuthenticateClients?: string;
    opflexpSslProtocols?: string;
    opflexpUseSsl?: string;
    policySyncNodeBringup?: string;
    reallocateGipo?: string;
    restrictInfraVlanTraffic?: string;
    unicastXrEpLearnDisable?: string;
    validateOverlappingVlans?: string;
}

/**
 * A collection of values returned by getFabricWideSettings.
 */
export interface GetFabricWideSettingsResult {
    readonly annotation: string;
    readonly description: string;
    readonly disableEpDampening: string;
    readonly domainValidation: string;
    readonly enableMoStreaming: string;
    readonly enableRemoteLeafDirect: string;
    readonly enforceSubnetCheck: string;
    readonly id: string;
    readonly leafOpflexpAuthenticateClients: string;
    readonly leafOpflexpUseSsl: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly opflexpAuthenticateClients: string;
    readonly opflexpSslProtocols: string;
    readonly opflexpUseSsl: string;
    readonly policySyncNodeBringup: string;
    readonly reallocateGipo: string;
    readonly restrictInfraVlanTraffic: string;
    readonly unicastXrEpLearnDisable: string;
    readonly validateOverlappingVlans: string;
}
export function getFabricWideSettingsOutput(args?: GetFabricWideSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFabricWideSettingsResult> {
    return pulumi.output(args).apply((a: any) => getFabricWideSettings(a, opts))
}

/**
 * A collection of arguments for invoking getFabricWideSettings.
 */
export interface GetFabricWideSettingsOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    disableEpDampening?: pulumi.Input<string>;
    domainValidation?: pulumi.Input<string>;
    enableMoStreaming?: pulumi.Input<string>;
    enableRemoteLeafDirect?: pulumi.Input<string>;
    enforceSubnetCheck?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    leafOpflexpAuthenticateClients?: pulumi.Input<string>;
    leafOpflexpUseSsl?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    opflexpAuthenticateClients?: pulumi.Input<string>;
    opflexpSslProtocols?: pulumi.Input<string>;
    opflexpUseSsl?: pulumi.Input<string>;
    policySyncNodeBringup?: pulumi.Input<string>;
    reallocateGipo?: pulumi.Input<string>;
    restrictInfraVlanTraffic?: pulumi.Input<string>;
    unicastXrEpLearnDisable?: pulumi.Input<string>;
    validateOverlappingVlans?: pulumi.Input<string>;
}
