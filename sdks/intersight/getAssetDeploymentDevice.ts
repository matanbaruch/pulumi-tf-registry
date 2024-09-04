// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAssetDeploymentDevice(args?: GetAssetDeploymentDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetAssetDeploymentDeviceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getAssetDeploymentDevice:getAssetDeploymentDevice", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "alarmInfo": args.alarmInfo,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "deployment": args.deployment,
        "deviceContractInformation": args.deviceContractInformation,
        "deviceId": args.deviceId,
        "deviceInformation": args.deviceInformation,
        "devicePid": args.devicePid,
        "deviceStatistics": args.deviceStatistics,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "productSubgroup": args.productSubgroup,
        "productType": args.productType,
        "registeredDevice": args.registeredDevice,
        "registeredDeviceMoid": args.registeredDeviceMoid,
        "sharedScope": args.sharedScope,
        "subscription": args.subscription,
        "subscriptionAccount": args.subscriptionAccount,
        "tags": args.tags,
        "unitOfMeasures": args.unitOfMeasures,
        "versionContext": args.versionContext,
        "virtualizationPlatform": args.virtualizationPlatform,
        "workload": args.workload,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAssetDeploymentDevice.
 */
export interface GetAssetDeploymentDeviceArgs {
    accountMoid?: string;
    additionalProperties?: string;
    alarmInfo?: inputs.GetAssetDeploymentDeviceAlarmInfo;
    ancestors?: inputs.GetAssetDeploymentDeviceAncestor[];
    classId?: string;
    createTime?: string;
    deployment?: inputs.GetAssetDeploymentDeviceDeployment;
    deviceContractInformation?: inputs.GetAssetDeploymentDeviceDeviceContractInformation;
    deviceId?: string;
    deviceInformation?: inputs.GetAssetDeploymentDeviceDeviceInformation;
    devicePid?: string;
    deviceStatistics?: inputs.GetAssetDeploymentDeviceDeviceStatistics;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetAssetDeploymentDeviceParent;
    permissionResources?: inputs.GetAssetDeploymentDevicePermissionResource[];
    productSubgroup?: string;
    productType?: string;
    registeredDevice?: inputs.GetAssetDeploymentDeviceRegisteredDevice;
    registeredDeviceMoid?: string;
    sharedScope?: string;
    subscription?: inputs.GetAssetDeploymentDeviceSubscription;
    subscriptionAccount?: inputs.GetAssetDeploymentDeviceSubscriptionAccount;
    tags?: inputs.GetAssetDeploymentDeviceTag[];
    unitOfMeasures?: inputs.GetAssetDeploymentDeviceUnitOfMeasure[];
    versionContext?: inputs.GetAssetDeploymentDeviceVersionContext;
    virtualizationPlatform?: string;
    workload?: string;
}

/**
 * A collection of values returned by getAssetDeploymentDevice.
 */
export interface GetAssetDeploymentDeviceResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly alarmInfo?: outputs.GetAssetDeploymentDeviceAlarmInfo;
    readonly ancestors?: outputs.GetAssetDeploymentDeviceAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly deployment?: outputs.GetAssetDeploymentDeviceDeployment;
    readonly deviceContractInformation?: outputs.GetAssetDeploymentDeviceDeviceContractInformation;
    readonly deviceId?: string;
    readonly deviceInformation?: outputs.GetAssetDeploymentDeviceDeviceInformation;
    readonly devicePid?: string;
    readonly deviceStatistics?: outputs.GetAssetDeploymentDeviceDeviceStatistics;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetAssetDeploymentDeviceParent;
    readonly permissionResources?: outputs.GetAssetDeploymentDevicePermissionResource[];
    readonly productSubgroup?: string;
    readonly productType?: string;
    readonly registeredDevice?: outputs.GetAssetDeploymentDeviceRegisteredDevice;
    readonly registeredDeviceMoid?: string;
    readonly results: outputs.GetAssetDeploymentDeviceResult[];
    readonly sharedScope?: string;
    readonly subscription?: outputs.GetAssetDeploymentDeviceSubscription;
    readonly subscriptionAccount?: outputs.GetAssetDeploymentDeviceSubscriptionAccount;
    readonly tags?: outputs.GetAssetDeploymentDeviceTag[];
    readonly unitOfMeasures?: outputs.GetAssetDeploymentDeviceUnitOfMeasure[];
    readonly versionContext?: outputs.GetAssetDeploymentDeviceVersionContext;
    readonly virtualizationPlatform?: string;
    readonly workload?: string;
}
export function getAssetDeploymentDeviceOutput(args?: GetAssetDeploymentDeviceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssetDeploymentDeviceResult> {
    return pulumi.output(args).apply((a: any) => getAssetDeploymentDevice(a, opts))
}

/**
 * A collection of arguments for invoking getAssetDeploymentDevice.
 */
export interface GetAssetDeploymentDeviceOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    alarmInfo?: pulumi.Input<inputs.GetAssetDeploymentDeviceAlarmInfoArgs>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetAssetDeploymentDeviceAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deployment?: pulumi.Input<inputs.GetAssetDeploymentDeviceDeploymentArgs>;
    deviceContractInformation?: pulumi.Input<inputs.GetAssetDeploymentDeviceDeviceContractInformationArgs>;
    deviceId?: pulumi.Input<string>;
    deviceInformation?: pulumi.Input<inputs.GetAssetDeploymentDeviceDeviceInformationArgs>;
    devicePid?: pulumi.Input<string>;
    deviceStatistics?: pulumi.Input<inputs.GetAssetDeploymentDeviceDeviceStatisticsArgs>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetAssetDeploymentDeviceParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetAssetDeploymentDevicePermissionResourceArgs>[]>;
    productSubgroup?: pulumi.Input<string>;
    productType?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetAssetDeploymentDeviceRegisteredDeviceArgs>;
    registeredDeviceMoid?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    subscription?: pulumi.Input<inputs.GetAssetDeploymentDeviceSubscriptionArgs>;
    subscriptionAccount?: pulumi.Input<inputs.GetAssetDeploymentDeviceSubscriptionAccountArgs>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetAssetDeploymentDeviceTagArgs>[]>;
    unitOfMeasures?: pulumi.Input<pulumi.Input<inputs.GetAssetDeploymentDeviceUnitOfMeasureArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetAssetDeploymentDeviceVersionContextArgs>;
    virtualizationPlatform?: pulumi.Input<string>;
    workload?: pulumi.Input<string>;
}
