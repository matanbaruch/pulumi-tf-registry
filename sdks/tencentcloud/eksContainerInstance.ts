// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EksContainerInstance extends pulumi.CustomResource {
    /**
     * Get an existing EksContainerInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EksContainerInstanceState, opts?: pulumi.CustomResourceOptions): EksContainerInstance {
        return new EksContainerInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/eksContainerInstance:EksContainerInstance';

    /**
     * Returns true if the given object is an instance of EksContainerInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EksContainerInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EksContainerInstance.__pulumiType;
    }

    /**
     * Indicates whether to create EIP instead of specify existing EIPs. Conflict with `existed_eip_ids`.
     */
    public readonly autoCreateEip!: pulumi.Output<boolean | undefined>;
    /**
     * ID of EIP which create automatically.
     */
    public /*out*/ readonly autoCreateEipId!: pulumi.Output<string>;
    /**
     * CAM role name authorized to access.
     */
    public readonly camRoleName!: pulumi.Output<string | undefined>;
    /**
     * List of CBS volume.
     */
    public readonly cbsVolumes!: pulumi.Output<outputs.EksContainerInstanceCbsVolume[] | undefined>;
    /**
     * List of container.
     */
    public readonly containers!: pulumi.Output<outputs.EksContainerInstanceContainer[]>;
    /**
     * The number of CPU cores. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
     */
    public readonly cpu!: pulumi.Output<number>;
    /**
     * Type of cpu, which can set to `intel` or `amd`. It also support backup list like `amd,intel` which indicates using
     * `intel` when `amd` sold out.
     */
    public readonly cpuType!: pulumi.Output<string | undefined>;
    /**
     * Container instance creation time.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * Map of DNS config options.
     */
    public readonly dnsConfigOptions!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * IP Addresses of DNS Servers.
     */
    public readonly dnsNamesServers!: pulumi.Output<string[] | undefined>;
    /**
     * List of DNS Search Domain.
     */
    public readonly dnsSearches!: pulumi.Output<string[] | undefined>;
    /**
     * EIP address.
     */
    public /*out*/ readonly eipAddress!: pulumi.Output<string>;
    /**
     * Indicates weather the EIP release or not after instance deleted. Conflict with `existed_eip_ids`.
     */
    public readonly eipDeletePolicy!: pulumi.Output<boolean | undefined>;
    /**
     * Maximum outgoing bandwidth to the public network, measured in Mbps (Mega bits per second). Conflict with
     * `existed_eip_ids`.
     */
    public readonly eipMaxBandwidthOut!: pulumi.Output<number | undefined>;
    /**
     * EIP service provider. Default is `BGP`, values `CMCC`,`CTCC`,`CUCC` are available for whitelist customer. Conflict with
     * `existed_eip_ids`.
     */
    public readonly eipServiceProvider!: pulumi.Output<string | undefined>;
    /**
     * Existed EIP ID List which used to bind container instance. Conflict with `auto_create_eip` and auto create EIP options.
     */
    public readonly existedEipIds!: pulumi.Output<string[] | undefined>;
    /**
     * Count of GPU. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
     */
    public readonly gpuCount!: pulumi.Output<number | undefined>;
    /**
     * Type of GPU. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
     */
    public readonly gpuType!: pulumi.Output<string | undefined>;
    /**
     * List of credentials which pull from image registry.
     */
    public readonly imageRegistryCredentials!: pulumi.Output<outputs.EksContainerInstanceImageRegistryCredential[] | undefined>;
    /**
     * List of initialized container.
     */
    public readonly initContainers!: pulumi.Output<outputs.EksContainerInstanceInitContainer[] | undefined>;
    /**
     * Memory size. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
     */
    public readonly memory!: pulumi.Output<number>;
    /**
     * Name of EKS container instance.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of NFS volume.
     */
    public readonly nfsVolumes!: pulumi.Output<outputs.EksContainerInstanceNfsVolume[] | undefined>;
    /**
     * Private IP address.
     */
    public /*out*/ readonly privateIp!: pulumi.Output<string>;
    /**
     * Container instance restart policy. Available values: `Always`, `Never`, `OnFailure`.
     */
    public readonly restartPolicy!: pulumi.Output<string | undefined>;
    /**
     * List of security group id.
     */
    public readonly securityGroups!: pulumi.Output<string[]>;
    /**
     * Container instance status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Subnet ID of container instance.
     */
    public readonly subnetId!: pulumi.Output<string>;
    /**
     * VPC ID.
     */
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a EksContainerInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EksContainerInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EksContainerInstanceArgs | EksContainerInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EksContainerInstanceState | undefined;
            resourceInputs["autoCreateEip"] = state ? state.autoCreateEip : undefined;
            resourceInputs["autoCreateEipId"] = state ? state.autoCreateEipId : undefined;
            resourceInputs["camRoleName"] = state ? state.camRoleName : undefined;
            resourceInputs["cbsVolumes"] = state ? state.cbsVolumes : undefined;
            resourceInputs["containers"] = state ? state.containers : undefined;
            resourceInputs["cpu"] = state ? state.cpu : undefined;
            resourceInputs["cpuType"] = state ? state.cpuType : undefined;
            resourceInputs["createdTime"] = state ? state.createdTime : undefined;
            resourceInputs["dnsConfigOptions"] = state ? state.dnsConfigOptions : undefined;
            resourceInputs["dnsNamesServers"] = state ? state.dnsNamesServers : undefined;
            resourceInputs["dnsSearches"] = state ? state.dnsSearches : undefined;
            resourceInputs["eipAddress"] = state ? state.eipAddress : undefined;
            resourceInputs["eipDeletePolicy"] = state ? state.eipDeletePolicy : undefined;
            resourceInputs["eipMaxBandwidthOut"] = state ? state.eipMaxBandwidthOut : undefined;
            resourceInputs["eipServiceProvider"] = state ? state.eipServiceProvider : undefined;
            resourceInputs["existedEipIds"] = state ? state.existedEipIds : undefined;
            resourceInputs["gpuCount"] = state ? state.gpuCount : undefined;
            resourceInputs["gpuType"] = state ? state.gpuType : undefined;
            resourceInputs["imageRegistryCredentials"] = state ? state.imageRegistryCredentials : undefined;
            resourceInputs["initContainers"] = state ? state.initContainers : undefined;
            resourceInputs["memory"] = state ? state.memory : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nfsVolumes"] = state ? state.nfsVolumes : undefined;
            resourceInputs["privateIp"] = state ? state.privateIp : undefined;
            resourceInputs["restartPolicy"] = state ? state.restartPolicy : undefined;
            resourceInputs["securityGroups"] = state ? state.securityGroups : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as EksContainerInstanceArgs | undefined;
            if ((!args || args.containers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containers'");
            }
            if ((!args || args.cpu === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cpu'");
            }
            if ((!args || args.memory === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memory'");
            }
            if ((!args || args.securityGroups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityGroups'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["autoCreateEip"] = args ? args.autoCreateEip : undefined;
            resourceInputs["camRoleName"] = args ? args.camRoleName : undefined;
            resourceInputs["cbsVolumes"] = args ? args.cbsVolumes : undefined;
            resourceInputs["containers"] = args ? args.containers : undefined;
            resourceInputs["cpu"] = args ? args.cpu : undefined;
            resourceInputs["cpuType"] = args ? args.cpuType : undefined;
            resourceInputs["dnsConfigOptions"] = args ? args.dnsConfigOptions : undefined;
            resourceInputs["dnsNamesServers"] = args ? args.dnsNamesServers : undefined;
            resourceInputs["dnsSearches"] = args ? args.dnsSearches : undefined;
            resourceInputs["eipDeletePolicy"] = args ? args.eipDeletePolicy : undefined;
            resourceInputs["eipMaxBandwidthOut"] = args ? args.eipMaxBandwidthOut : undefined;
            resourceInputs["eipServiceProvider"] = args ? args.eipServiceProvider : undefined;
            resourceInputs["existedEipIds"] = args ? args.existedEipIds : undefined;
            resourceInputs["gpuCount"] = args ? args.gpuCount : undefined;
            resourceInputs["gpuType"] = args ? args.gpuType : undefined;
            resourceInputs["imageRegistryCredentials"] = args ? args.imageRegistryCredentials : undefined;
            resourceInputs["initContainers"] = args ? args.initContainers : undefined;
            resourceInputs["memory"] = args ? args.memory : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nfsVolumes"] = args ? args.nfsVolumes : undefined;
            resourceInputs["restartPolicy"] = args ? args.restartPolicy : undefined;
            resourceInputs["securityGroups"] = args ? args.securityGroups : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["autoCreateEipId"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["eipAddress"] = undefined /*out*/;
            resourceInputs["privateIp"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EksContainerInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EksContainerInstance resources.
 */
export interface EksContainerInstanceState {
    /**
     * Indicates whether to create EIP instead of specify existing EIPs. Conflict with `existed_eip_ids`.
     */
    autoCreateEip?: pulumi.Input<boolean>;
    /**
     * ID of EIP which create automatically.
     */
    autoCreateEipId?: pulumi.Input<string>;
    /**
     * CAM role name authorized to access.
     */
    camRoleName?: pulumi.Input<string>;
    /**
     * List of CBS volume.
     */
    cbsVolumes?: pulumi.Input<pulumi.Input<inputs.EksContainerInstanceCbsVolume>[]>;
    /**
     * List of container.
     */
    containers?: pulumi.Input<pulumi.Input<inputs.EksContainerInstanceContainer>[]>;
    /**
     * The number of CPU cores. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
     */
    cpu?: pulumi.Input<number>;
    /**
     * Type of cpu, which can set to `intel` or `amd`. It also support backup list like `amd,intel` which indicates using
     * `intel` when `amd` sold out.
     */
    cpuType?: pulumi.Input<string>;
    /**
     * Container instance creation time.
     */
    createdTime?: pulumi.Input<string>;
    /**
     * Map of DNS config options.
     */
    dnsConfigOptions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * IP Addresses of DNS Servers.
     */
    dnsNamesServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of DNS Search Domain.
     */
    dnsSearches?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * EIP address.
     */
    eipAddress?: pulumi.Input<string>;
    /**
     * Indicates weather the EIP release or not after instance deleted. Conflict with `existed_eip_ids`.
     */
    eipDeletePolicy?: pulumi.Input<boolean>;
    /**
     * Maximum outgoing bandwidth to the public network, measured in Mbps (Mega bits per second). Conflict with
     * `existed_eip_ids`.
     */
    eipMaxBandwidthOut?: pulumi.Input<number>;
    /**
     * EIP service provider. Default is `BGP`, values `CMCC`,`CTCC`,`CUCC` are available for whitelist customer. Conflict with
     * `existed_eip_ids`.
     */
    eipServiceProvider?: pulumi.Input<string>;
    /**
     * Existed EIP ID List which used to bind container instance. Conflict with `auto_create_eip` and auto create EIP options.
     */
    existedEipIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Count of GPU. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
     */
    gpuCount?: pulumi.Input<number>;
    /**
     * Type of GPU. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
     */
    gpuType?: pulumi.Input<string>;
    /**
     * List of credentials which pull from image registry.
     */
    imageRegistryCredentials?: pulumi.Input<pulumi.Input<inputs.EksContainerInstanceImageRegistryCredential>[]>;
    /**
     * List of initialized container.
     */
    initContainers?: pulumi.Input<pulumi.Input<inputs.EksContainerInstanceInitContainer>[]>;
    /**
     * Memory size. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
     */
    memory?: pulumi.Input<number>;
    /**
     * Name of EKS container instance.
     */
    name?: pulumi.Input<string>;
    /**
     * List of NFS volume.
     */
    nfsVolumes?: pulumi.Input<pulumi.Input<inputs.EksContainerInstanceNfsVolume>[]>;
    /**
     * Private IP address.
     */
    privateIp?: pulumi.Input<string>;
    /**
     * Container instance restart policy. Available values: `Always`, `Never`, `OnFailure`.
     */
    restartPolicy?: pulumi.Input<string>;
    /**
     * List of security group id.
     */
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Container instance status.
     */
    status?: pulumi.Input<string>;
    /**
     * Subnet ID of container instance.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * VPC ID.
     */
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EksContainerInstance resource.
 */
export interface EksContainerInstanceArgs {
    /**
     * Indicates whether to create EIP instead of specify existing EIPs. Conflict with `existed_eip_ids`.
     */
    autoCreateEip?: pulumi.Input<boolean>;
    /**
     * CAM role name authorized to access.
     */
    camRoleName?: pulumi.Input<string>;
    /**
     * List of CBS volume.
     */
    cbsVolumes?: pulumi.Input<pulumi.Input<inputs.EksContainerInstanceCbsVolume>[]>;
    /**
     * List of container.
     */
    containers: pulumi.Input<pulumi.Input<inputs.EksContainerInstanceContainer>[]>;
    /**
     * The number of CPU cores. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
     */
    cpu: pulumi.Input<number>;
    /**
     * Type of cpu, which can set to `intel` or `amd`. It also support backup list like `amd,intel` which indicates using
     * `intel` when `amd` sold out.
     */
    cpuType?: pulumi.Input<string>;
    /**
     * Map of DNS config options.
     */
    dnsConfigOptions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * IP Addresses of DNS Servers.
     */
    dnsNamesServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of DNS Search Domain.
     */
    dnsSearches?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates weather the EIP release or not after instance deleted. Conflict with `existed_eip_ids`.
     */
    eipDeletePolicy?: pulumi.Input<boolean>;
    /**
     * Maximum outgoing bandwidth to the public network, measured in Mbps (Mega bits per second). Conflict with
     * `existed_eip_ids`.
     */
    eipMaxBandwidthOut?: pulumi.Input<number>;
    /**
     * EIP service provider. Default is `BGP`, values `CMCC`,`CTCC`,`CUCC` are available for whitelist customer. Conflict with
     * `existed_eip_ids`.
     */
    eipServiceProvider?: pulumi.Input<string>;
    /**
     * Existed EIP ID List which used to bind container instance. Conflict with `auto_create_eip` and auto create EIP options.
     */
    existedEipIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Count of GPU. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
     */
    gpuCount?: pulumi.Input<number>;
    /**
     * Type of GPU. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
     */
    gpuType?: pulumi.Input<string>;
    /**
     * List of credentials which pull from image registry.
     */
    imageRegistryCredentials?: pulumi.Input<pulumi.Input<inputs.EksContainerInstanceImageRegistryCredential>[]>;
    /**
     * List of initialized container.
     */
    initContainers?: pulumi.Input<pulumi.Input<inputs.EksContainerInstanceInitContainer>[]>;
    /**
     * Memory size. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
     */
    memory: pulumi.Input<number>;
    /**
     * Name of EKS container instance.
     */
    name?: pulumi.Input<string>;
    /**
     * List of NFS volume.
     */
    nfsVolumes?: pulumi.Input<pulumi.Input<inputs.EksContainerInstanceNfsVolume>[]>;
    /**
     * Container instance restart policy. Available values: `Always`, `Never`, `OnFailure`.
     */
    restartPolicy?: pulumi.Input<string>;
    /**
     * List of security group id.
     */
    securityGroups: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Subnet ID of container instance.
     */
    subnetId: pulumi.Input<string>;
    /**
     * VPC ID.
     */
    vpcId: pulumi.Input<string>;
}
