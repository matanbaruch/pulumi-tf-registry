// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHyperflexHypervisorHost(args?: GetHyperflexHypervisorHostArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperflexHypervisorHostResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getHyperflexHypervisorHost:getHyperflexHypervisorHost", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "cluster": args.cluster,
        "configuredMemory": args.configuredMemory,
        "controllerVmDisplayVersion": args.controllerVmDisplayVersion,
        "controllerVmHxdpDisplayVersion": args.controllerVmHxdpDisplayVersion,
        "controllerVmHxdpVersion": args.controllerVmHxdpVersion,
        "controllerVmUuid": args.controllerVmUuid,
        "controllerVmVersion": args.controllerVmVersion,
        "cpuInfo": args.cpuInfo,
        "createTime": args.createTime,
        "dataIp": args.dataIp,
        "domainGroupMoid": args.domainGroupMoid,
        "hardwareInfo": args.hardwareInfo,
        "hostStatus": args.hostStatus,
        "hypervisor": args.hypervisor,
        "hypervisorType": args.hypervisorType,
        "id": args.id,
        "identity": args.identity,
        "ip": args.ip,
        "lockdown": args.lockdown,
        "maintenanceMode": args.maintenanceMode,
        "memoryCapacity": args.memoryCapacity,
        "mgmtIp": args.mgmtIp,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "name": args.name,
        "node": args.node,
        "objectType": args.objectType,
        "osVersion": args.osVersion,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "processorCapacity": args.processorCapacity,
        "productInfo": args.productInfo,
        "registeredDevice": args.registeredDevice,
        "role": args.role,
        "serial": args.serial,
        "sharedScope": args.sharedScope,
        "status": args.status,
        "tags": args.tags,
        "templateVersion": args.templateVersion,
        "upTime": args.upTime,
        "uuid": args.uuid,
        "vendor": args.vendor,
        "versionContext": args.versionContext,
        "virtualCpus": args.virtualCpus,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHyperflexHypervisorHost.
 */
export interface GetHyperflexHypervisorHostArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetHyperflexHypervisorHostAncestor[];
    classId?: string;
    cluster?: inputs.GetHyperflexHypervisorHostCluster;
    configuredMemory?: number;
    controllerVmDisplayVersion?: string;
    controllerVmHxdpDisplayVersion?: string;
    controllerVmHxdpVersion?: string;
    controllerVmUuid?: string;
    controllerVmVersion?: string;
    cpuInfo?: inputs.GetHyperflexHypervisorHostCpuInfo;
    createTime?: string;
    dataIp?: inputs.GetHyperflexHypervisorHostDataIp;
    domainGroupMoid?: string;
    hardwareInfo?: inputs.GetHyperflexHypervisorHostHardwareInfo;
    hostStatus?: string;
    hypervisor?: string;
    hypervisorType?: string;
    id?: string;
    identity?: string;
    ip?: inputs.GetHyperflexHypervisorHostIp;
    lockdown?: boolean;
    maintenanceMode?: boolean;
    memoryCapacity?: inputs.GetHyperflexHypervisorHostMemoryCapacity;
    mgmtIp?: inputs.GetHyperflexHypervisorHostMgmtIp;
    modTime?: string;
    model?: string;
    moid?: string;
    name?: string;
    node?: inputs.GetHyperflexHypervisorHostNode;
    objectType?: string;
    osVersion?: string;
    owners?: string[];
    parent?: inputs.GetHyperflexHypervisorHostParent;
    permissionResources?: inputs.GetHyperflexHypervisorHostPermissionResource[];
    processorCapacity?: inputs.GetHyperflexHypervisorHostProcessorCapacity;
    productInfo?: inputs.GetHyperflexHypervisorHostProductInfo;
    registeredDevice?: inputs.GetHyperflexHypervisorHostRegisteredDevice;
    role?: string;
    serial?: string;
    sharedScope?: string;
    status?: string;
    tags?: inputs.GetHyperflexHypervisorHostTag[];
    templateVersion?: string;
    upTime?: string;
    uuid?: string;
    vendor?: string;
    versionContext?: inputs.GetHyperflexHypervisorHostVersionContext;
    virtualCpus?: number;
}

/**
 * A collection of values returned by getHyperflexHypervisorHost.
 */
export interface GetHyperflexHypervisorHostResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetHyperflexHypervisorHostAncestor[];
    readonly classId?: string;
    readonly cluster?: outputs.GetHyperflexHypervisorHostCluster;
    readonly configuredMemory?: number;
    readonly controllerVmDisplayVersion?: string;
    readonly controllerVmHxdpDisplayVersion?: string;
    readonly controllerVmHxdpVersion?: string;
    readonly controllerVmUuid?: string;
    readonly controllerVmVersion?: string;
    readonly cpuInfo?: outputs.GetHyperflexHypervisorHostCpuInfo;
    readonly createTime?: string;
    readonly dataIp?: outputs.GetHyperflexHypervisorHostDataIp;
    readonly domainGroupMoid?: string;
    readonly hardwareInfo?: outputs.GetHyperflexHypervisorHostHardwareInfo;
    readonly hostStatus?: string;
    readonly hypervisor?: string;
    readonly hypervisorType?: string;
    readonly id: string;
    readonly identity?: string;
    readonly ip?: outputs.GetHyperflexHypervisorHostIp;
    readonly lockdown?: boolean;
    readonly maintenanceMode?: boolean;
    readonly memoryCapacity?: outputs.GetHyperflexHypervisorHostMemoryCapacity;
    readonly mgmtIp?: outputs.GetHyperflexHypervisorHostMgmtIp;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly node?: outputs.GetHyperflexHypervisorHostNode;
    readonly objectType?: string;
    readonly osVersion?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetHyperflexHypervisorHostParent;
    readonly permissionResources?: outputs.GetHyperflexHypervisorHostPermissionResource[];
    readonly processorCapacity?: outputs.GetHyperflexHypervisorHostProcessorCapacity;
    readonly productInfo?: outputs.GetHyperflexHypervisorHostProductInfo;
    readonly registeredDevice?: outputs.GetHyperflexHypervisorHostRegisteredDevice;
    readonly results: outputs.GetHyperflexHypervisorHostResult[];
    readonly role?: string;
    readonly serial?: string;
    readonly sharedScope?: string;
    readonly status?: string;
    readonly tags?: outputs.GetHyperflexHypervisorHostTag[];
    readonly templateVersion?: string;
    readonly upTime?: string;
    readonly uuid?: string;
    readonly vendor?: string;
    readonly versionContext?: outputs.GetHyperflexHypervisorHostVersionContext;
    readonly virtualCpus?: number;
}
export function getHyperflexHypervisorHostOutput(args?: GetHyperflexHypervisorHostOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHyperflexHypervisorHostResult> {
    return pulumi.output(args).apply((a: any) => getHyperflexHypervisorHost(a, opts))
}

/**
 * A collection of arguments for invoking getHyperflexHypervisorHost.
 */
export interface GetHyperflexHypervisorHostOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetHyperflexHypervisorHostAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    cluster?: pulumi.Input<inputs.GetHyperflexHypervisorHostClusterArgs>;
    configuredMemory?: pulumi.Input<number>;
    controllerVmDisplayVersion?: pulumi.Input<string>;
    controllerVmHxdpDisplayVersion?: pulumi.Input<string>;
    controllerVmHxdpVersion?: pulumi.Input<string>;
    controllerVmUuid?: pulumi.Input<string>;
    controllerVmVersion?: pulumi.Input<string>;
    cpuInfo?: pulumi.Input<inputs.GetHyperflexHypervisorHostCpuInfoArgs>;
    createTime?: pulumi.Input<string>;
    dataIp?: pulumi.Input<inputs.GetHyperflexHypervisorHostDataIpArgs>;
    domainGroupMoid?: pulumi.Input<string>;
    hardwareInfo?: pulumi.Input<inputs.GetHyperflexHypervisorHostHardwareInfoArgs>;
    hostStatus?: pulumi.Input<string>;
    hypervisor?: pulumi.Input<string>;
    hypervisorType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    identity?: pulumi.Input<string>;
    ip?: pulumi.Input<inputs.GetHyperflexHypervisorHostIpArgs>;
    lockdown?: pulumi.Input<boolean>;
    maintenanceMode?: pulumi.Input<boolean>;
    memoryCapacity?: pulumi.Input<inputs.GetHyperflexHypervisorHostMemoryCapacityArgs>;
    mgmtIp?: pulumi.Input<inputs.GetHyperflexHypervisorHostMgmtIpArgs>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    node?: pulumi.Input<inputs.GetHyperflexHypervisorHostNodeArgs>;
    objectType?: pulumi.Input<string>;
    osVersion?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetHyperflexHypervisorHostParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetHyperflexHypervisorHostPermissionResourceArgs>[]>;
    processorCapacity?: pulumi.Input<inputs.GetHyperflexHypervisorHostProcessorCapacityArgs>;
    productInfo?: pulumi.Input<inputs.GetHyperflexHypervisorHostProductInfoArgs>;
    registeredDevice?: pulumi.Input<inputs.GetHyperflexHypervisorHostRegisteredDeviceArgs>;
    role?: pulumi.Input<string>;
    serial?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetHyperflexHypervisorHostTagArgs>[]>;
    templateVersion?: pulumi.Input<string>;
    upTime?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetHyperflexHypervisorHostVersionContextArgs>;
    virtualCpus?: pulumi.Input<number>;
}
