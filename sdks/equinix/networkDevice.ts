// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkDevice extends pulumi.CustomResource {
    /**
     * Get an existing NetworkDevice resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkDeviceState, opts?: pulumi.CustomResourceOptions): NetworkDevice {
        return new NetworkDevice(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'equinix:index/networkDevice:NetworkDevice';

    /**
     * Returns true if the given object is an instance of NetworkDevice.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkDevice {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkDevice.__pulumiType;
    }

    /**
     * Device billing account number
     */
    public readonly accountNumber!: pulumi.Output<string>;
    /**
     * Unique identifier of applied ACL template
     */
    public readonly aclTemplateId!: pulumi.Output<string | undefined>;
    /**
     * Additional Internet bandwidth, in Mbps, that will be allocated to the device
     */
    public readonly additionalBandwidth!: pulumi.Output<number>;
    /**
     * Autonomous system number
     */
    public /*out*/ readonly asn!: pulumi.Output<number>;
    /**
     * Boolean value that determines device licensing mode: bring your own license or subscription (default)
     */
    public readonly byol!: pulumi.Output<boolean | undefined>;
    /**
     * Unique identifier of applied cloud init file
     */
    public readonly cloudInitFileId!: pulumi.Output<string | undefined>;
    /**
     * An object that has the cluster details
     */
    public readonly clusterDetails!: pulumi.Output<outputs.NetworkDeviceClusterDetails | undefined>;
    /**
     * Parameter to identify internet access for device. Supported Values: INTERNET-ACCESS(default) or PRIVATE or
     * INTERNET-ACCESS-WITH-PRVT-MGMT
     */
    public readonly connectivity!: pulumi.Output<string | undefined>;
    /**
     * Number of CPU cores used by device
     */
    public readonly coreCount!: pulumi.Output<number>;
    /**
     * Unique ID of an existing device
     */
    public readonly diverseDeviceId!: pulumi.Output<string>;
    /**
     * Diverse Device Name of an existing device
     */
    public /*out*/ readonly diverseDeviceName!: pulumi.Output<string>;
    /**
     * Device hostname prefix
     */
    public readonly hostname!: pulumi.Output<string>;
    /**
     * Device location Equinix Business Exchange name
     */
    public /*out*/ readonly ibx!: pulumi.Output<string>;
    /**
     * Number of network interfaces on a device. If not specified, default number for a given device type will be used
     */
    public readonly interfaceCount!: pulumi.Output<number>;
    /**
     * List of device interfaces
     */
    public /*out*/ readonly interfaces!: pulumi.Output<outputs.NetworkDeviceInterface[]>;
    /**
     * Path to the license file that will be uploaded and applied on a device, applicable for some device types in BYOL
     * licensing mode
     */
    public readonly licenseFile!: pulumi.Output<string | undefined>;
    /**
     * Unique identifier of applied license file
     */
    public readonly licenseFileId!: pulumi.Output<string>;
    /**
     * Device license registration status
     */
    public /*out*/ readonly licenseStatus!: pulumi.Output<string>;
    /**
     * License Token applicable for some device types in BYOL licensing mode
     */
    public readonly licenseToken!: pulumi.Output<string | undefined>;
    /**
     * Device location metro code
     */
    public readonly metroCode!: pulumi.Output<string>;
    /**
     * Unique identifier of applied MGMT ACL template
     */
    public readonly mgmtAclTemplateUuid!: pulumi.Output<string | undefined>;
    /**
     * Device name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of email addresses that will receive device status notifications
     */
    public readonly notifications!: pulumi.Output<string[]>;
    /**
     * Name/number used to identify device order on the invoice
     */
    public readonly orderReference!: pulumi.Output<string | undefined>;
    /**
     * Device software package code
     */
    public readonly packageCode!: pulumi.Output<string>;
    /**
     * The unique identifier of Project Resource to which device is scoped to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Purchase order number associated with a device order
     */
    public readonly purchaseOrderNumber!: pulumi.Output<string | undefined>;
    /**
     * Device redundancy type applicable for HA devices, either primary or secondary
     */
    public /*out*/ readonly redundancyType!: pulumi.Output<string>;
    /**
     * Unique identifier for a redundant device, applicable for HA device
     */
    public /*out*/ readonly redundantId!: pulumi.Output<string>;
    /**
     * Device location region
     */
    public /*out*/ readonly region!: pulumi.Output<string>;
    /**
     * Definition of secondary device applicable for HA setup
     */
    public readonly secondaryDevice!: pulumi.Output<outputs.NetworkDeviceSecondaryDevice | undefined>;
    /**
     * Boolean value that determines device management mode: self-managed or subscription (default)
     */
    public readonly selfManaged!: pulumi.Output<boolean | undefined>;
    /**
     * IP address of SSH enabled interface on the device
     */
    public /*out*/ readonly sshIpAddress!: pulumi.Output<string>;
    /**
     * FQDN of SSH enabled interface on the device
     */
    public /*out*/ readonly sshIpFqdn!: pulumi.Output<string>;
    /**
     * Definition of SSH key that will be provisioned on a device
     */
    public readonly sshKey!: pulumi.Output<outputs.NetworkDeviceSshKey | undefined>;
    /**
     * Device provisioning status
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Device term length
     */
    public readonly termLength!: pulumi.Output<number>;
    /**
     * Device license throughput
     */
    public readonly throughput!: pulumi.Output<number | undefined>;
    /**
     * Device license throughput unit (Mbps or Gbps)
     */
    public readonly throughputUnit!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkDeviceTimeouts | undefined>;
    /**
     * Device type code
     */
    public readonly typeCode!: pulumi.Output<string>;
    /**
     * Device unique identifier
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;
    /**
     * Map of vendor specific configuration parameters for a device (controller1, activationKey, managementType, siteId,
     * systemIpAddress)
     */
    public readonly vendorConfiguration!: pulumi.Output<{[key: string]: string}>;
    /**
     * Device software software version
     */
    public readonly version!: pulumi.Output<string>;
    /**
     * device interface id picked for WAN
     */
    public readonly wanInterfaceId!: pulumi.Output<string | undefined>;
    /**
     * Device location zone code
     */
    public /*out*/ readonly zoneCode!: pulumi.Output<string>;

    /**
     * Create a NetworkDevice resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkDeviceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkDeviceArgs | NetworkDeviceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkDeviceState | undefined;
            resourceInputs["accountNumber"] = state ? state.accountNumber : undefined;
            resourceInputs["aclTemplateId"] = state ? state.aclTemplateId : undefined;
            resourceInputs["additionalBandwidth"] = state ? state.additionalBandwidth : undefined;
            resourceInputs["asn"] = state ? state.asn : undefined;
            resourceInputs["byol"] = state ? state.byol : undefined;
            resourceInputs["cloudInitFileId"] = state ? state.cloudInitFileId : undefined;
            resourceInputs["clusterDetails"] = state ? state.clusterDetails : undefined;
            resourceInputs["connectivity"] = state ? state.connectivity : undefined;
            resourceInputs["coreCount"] = state ? state.coreCount : undefined;
            resourceInputs["diverseDeviceId"] = state ? state.diverseDeviceId : undefined;
            resourceInputs["diverseDeviceName"] = state ? state.diverseDeviceName : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["ibx"] = state ? state.ibx : undefined;
            resourceInputs["interfaceCount"] = state ? state.interfaceCount : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["licenseFile"] = state ? state.licenseFile : undefined;
            resourceInputs["licenseFileId"] = state ? state.licenseFileId : undefined;
            resourceInputs["licenseStatus"] = state ? state.licenseStatus : undefined;
            resourceInputs["licenseToken"] = state ? state.licenseToken : undefined;
            resourceInputs["metroCode"] = state ? state.metroCode : undefined;
            resourceInputs["mgmtAclTemplateUuid"] = state ? state.mgmtAclTemplateUuid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["orderReference"] = state ? state.orderReference : undefined;
            resourceInputs["packageCode"] = state ? state.packageCode : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["purchaseOrderNumber"] = state ? state.purchaseOrderNumber : undefined;
            resourceInputs["redundancyType"] = state ? state.redundancyType : undefined;
            resourceInputs["redundantId"] = state ? state.redundantId : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["secondaryDevice"] = state ? state.secondaryDevice : undefined;
            resourceInputs["selfManaged"] = state ? state.selfManaged : undefined;
            resourceInputs["sshIpAddress"] = state ? state.sshIpAddress : undefined;
            resourceInputs["sshIpFqdn"] = state ? state.sshIpFqdn : undefined;
            resourceInputs["sshKey"] = state ? state.sshKey : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["termLength"] = state ? state.termLength : undefined;
            resourceInputs["throughput"] = state ? state.throughput : undefined;
            resourceInputs["throughputUnit"] = state ? state.throughputUnit : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["typeCode"] = state ? state.typeCode : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vendorConfiguration"] = state ? state.vendorConfiguration : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
            resourceInputs["wanInterfaceId"] = state ? state.wanInterfaceId : undefined;
            resourceInputs["zoneCode"] = state ? state.zoneCode : undefined;
        } else {
            const args = argsOrState as NetworkDeviceArgs | undefined;
            if ((!args || args.accountNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountNumber'");
            }
            if ((!args || args.coreCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'coreCount'");
            }
            if ((!args || args.metroCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metroCode'");
            }
            if ((!args || args.notifications === undefined) && !opts.urn) {
                throw new Error("Missing required property 'notifications'");
            }
            if ((!args || args.packageCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packageCode'");
            }
            if ((!args || args.termLength === undefined) && !opts.urn) {
                throw new Error("Missing required property 'termLength'");
            }
            if ((!args || args.typeCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'typeCode'");
            }
            if ((!args || args.version === undefined) && !opts.urn) {
                throw new Error("Missing required property 'version'");
            }
            resourceInputs["accountNumber"] = args ? args.accountNumber : undefined;
            resourceInputs["aclTemplateId"] = args ? args.aclTemplateId : undefined;
            resourceInputs["additionalBandwidth"] = args ? args.additionalBandwidth : undefined;
            resourceInputs["byol"] = args ? args.byol : undefined;
            resourceInputs["cloudInitFileId"] = args ? args.cloudInitFileId : undefined;
            resourceInputs["clusterDetails"] = args ? args.clusterDetails : undefined;
            resourceInputs["connectivity"] = args ? args.connectivity : undefined;
            resourceInputs["coreCount"] = args ? args.coreCount : undefined;
            resourceInputs["diverseDeviceId"] = args ? args.diverseDeviceId : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["interfaceCount"] = args ? args.interfaceCount : undefined;
            resourceInputs["licenseFile"] = args ? args.licenseFile : undefined;
            resourceInputs["licenseFileId"] = args ? args.licenseFileId : undefined;
            resourceInputs["licenseToken"] = args ? args.licenseToken : undefined;
            resourceInputs["metroCode"] = args ? args.metroCode : undefined;
            resourceInputs["mgmtAclTemplateUuid"] = args ? args.mgmtAclTemplateUuid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notifications"] = args ? args.notifications : undefined;
            resourceInputs["orderReference"] = args ? args.orderReference : undefined;
            resourceInputs["packageCode"] = args ? args.packageCode : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["purchaseOrderNumber"] = args ? args.purchaseOrderNumber : undefined;
            resourceInputs["secondaryDevice"] = args ? args.secondaryDevice : undefined;
            resourceInputs["selfManaged"] = args ? args.selfManaged : undefined;
            resourceInputs["sshKey"] = args ? args.sshKey : undefined;
            resourceInputs["termLength"] = args ? args.termLength : undefined;
            resourceInputs["throughput"] = args ? args.throughput : undefined;
            resourceInputs["throughputUnit"] = args ? args.throughputUnit : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["typeCode"] = args ? args.typeCode : undefined;
            resourceInputs["vendorConfiguration"] = args ? args.vendorConfiguration : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["wanInterfaceId"] = args ? args.wanInterfaceId : undefined;
            resourceInputs["asn"] = undefined /*out*/;
            resourceInputs["diverseDeviceName"] = undefined /*out*/;
            resourceInputs["ibx"] = undefined /*out*/;
            resourceInputs["interfaces"] = undefined /*out*/;
            resourceInputs["licenseStatus"] = undefined /*out*/;
            resourceInputs["redundancyType"] = undefined /*out*/;
            resourceInputs["redundantId"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["sshIpAddress"] = undefined /*out*/;
            resourceInputs["sshIpFqdn"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["zoneCode"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkDevice.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkDevice resources.
 */
export interface NetworkDeviceState {
    /**
     * Device billing account number
     */
    accountNumber?: pulumi.Input<string>;
    /**
     * Unique identifier of applied ACL template
     */
    aclTemplateId?: pulumi.Input<string>;
    /**
     * Additional Internet bandwidth, in Mbps, that will be allocated to the device
     */
    additionalBandwidth?: pulumi.Input<number>;
    /**
     * Autonomous system number
     */
    asn?: pulumi.Input<number>;
    /**
     * Boolean value that determines device licensing mode: bring your own license or subscription (default)
     */
    byol?: pulumi.Input<boolean>;
    /**
     * Unique identifier of applied cloud init file
     */
    cloudInitFileId?: pulumi.Input<string>;
    /**
     * An object that has the cluster details
     */
    clusterDetails?: pulumi.Input<inputs.NetworkDeviceClusterDetails>;
    /**
     * Parameter to identify internet access for device. Supported Values: INTERNET-ACCESS(default) or PRIVATE or
     * INTERNET-ACCESS-WITH-PRVT-MGMT
     */
    connectivity?: pulumi.Input<string>;
    /**
     * Number of CPU cores used by device
     */
    coreCount?: pulumi.Input<number>;
    /**
     * Unique ID of an existing device
     */
    diverseDeviceId?: pulumi.Input<string>;
    /**
     * Diverse Device Name of an existing device
     */
    diverseDeviceName?: pulumi.Input<string>;
    /**
     * Device hostname prefix
     */
    hostname?: pulumi.Input<string>;
    /**
     * Device location Equinix Business Exchange name
     */
    ibx?: pulumi.Input<string>;
    /**
     * Number of network interfaces on a device. If not specified, default number for a given device type will be used
     */
    interfaceCount?: pulumi.Input<number>;
    /**
     * List of device interfaces
     */
    interfaces?: pulumi.Input<pulumi.Input<inputs.NetworkDeviceInterface>[]>;
    /**
     * Path to the license file that will be uploaded and applied on a device, applicable for some device types in BYOL
     * licensing mode
     */
    licenseFile?: pulumi.Input<string>;
    /**
     * Unique identifier of applied license file
     */
    licenseFileId?: pulumi.Input<string>;
    /**
     * Device license registration status
     */
    licenseStatus?: pulumi.Input<string>;
    /**
     * License Token applicable for some device types in BYOL licensing mode
     */
    licenseToken?: pulumi.Input<string>;
    /**
     * Device location metro code
     */
    metroCode?: pulumi.Input<string>;
    /**
     * Unique identifier of applied MGMT ACL template
     */
    mgmtAclTemplateUuid?: pulumi.Input<string>;
    /**
     * Device name
     */
    name?: pulumi.Input<string>;
    /**
     * List of email addresses that will receive device status notifications
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name/number used to identify device order on the invoice
     */
    orderReference?: pulumi.Input<string>;
    /**
     * Device software package code
     */
    packageCode?: pulumi.Input<string>;
    /**
     * The unique identifier of Project Resource to which device is scoped to
     */
    projectId?: pulumi.Input<string>;
    /**
     * Purchase order number associated with a device order
     */
    purchaseOrderNumber?: pulumi.Input<string>;
    /**
     * Device redundancy type applicable for HA devices, either primary or secondary
     */
    redundancyType?: pulumi.Input<string>;
    /**
     * Unique identifier for a redundant device, applicable for HA device
     */
    redundantId?: pulumi.Input<string>;
    /**
     * Device location region
     */
    region?: pulumi.Input<string>;
    /**
     * Definition of secondary device applicable for HA setup
     */
    secondaryDevice?: pulumi.Input<inputs.NetworkDeviceSecondaryDevice>;
    /**
     * Boolean value that determines device management mode: self-managed or subscription (default)
     */
    selfManaged?: pulumi.Input<boolean>;
    /**
     * IP address of SSH enabled interface on the device
     */
    sshIpAddress?: pulumi.Input<string>;
    /**
     * FQDN of SSH enabled interface on the device
     */
    sshIpFqdn?: pulumi.Input<string>;
    /**
     * Definition of SSH key that will be provisioned on a device
     */
    sshKey?: pulumi.Input<inputs.NetworkDeviceSshKey>;
    /**
     * Device provisioning status
     */
    status?: pulumi.Input<string>;
    /**
     * Device term length
     */
    termLength?: pulumi.Input<number>;
    /**
     * Device license throughput
     */
    throughput?: pulumi.Input<number>;
    /**
     * Device license throughput unit (Mbps or Gbps)
     */
    throughputUnit?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkDeviceTimeouts>;
    /**
     * Device type code
     */
    typeCode?: pulumi.Input<string>;
    /**
     * Device unique identifier
     */
    uuid?: pulumi.Input<string>;
    /**
     * Map of vendor specific configuration parameters for a device (controller1, activationKey, managementType, siteId,
     * systemIpAddress)
     */
    vendorConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Device software software version
     */
    version?: pulumi.Input<string>;
    /**
     * device interface id picked for WAN
     */
    wanInterfaceId?: pulumi.Input<string>;
    /**
     * Device location zone code
     */
    zoneCode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkDevice resource.
 */
export interface NetworkDeviceArgs {
    /**
     * Device billing account number
     */
    accountNumber: pulumi.Input<string>;
    /**
     * Unique identifier of applied ACL template
     */
    aclTemplateId?: pulumi.Input<string>;
    /**
     * Additional Internet bandwidth, in Mbps, that will be allocated to the device
     */
    additionalBandwidth?: pulumi.Input<number>;
    /**
     * Boolean value that determines device licensing mode: bring your own license or subscription (default)
     */
    byol?: pulumi.Input<boolean>;
    /**
     * Unique identifier of applied cloud init file
     */
    cloudInitFileId?: pulumi.Input<string>;
    /**
     * An object that has the cluster details
     */
    clusterDetails?: pulumi.Input<inputs.NetworkDeviceClusterDetails>;
    /**
     * Parameter to identify internet access for device. Supported Values: INTERNET-ACCESS(default) or PRIVATE or
     * INTERNET-ACCESS-WITH-PRVT-MGMT
     */
    connectivity?: pulumi.Input<string>;
    /**
     * Number of CPU cores used by device
     */
    coreCount: pulumi.Input<number>;
    /**
     * Unique ID of an existing device
     */
    diverseDeviceId?: pulumi.Input<string>;
    /**
     * Device hostname prefix
     */
    hostname?: pulumi.Input<string>;
    /**
     * Number of network interfaces on a device. If not specified, default number for a given device type will be used
     */
    interfaceCount?: pulumi.Input<number>;
    /**
     * Path to the license file that will be uploaded and applied on a device, applicable for some device types in BYOL
     * licensing mode
     */
    licenseFile?: pulumi.Input<string>;
    /**
     * Unique identifier of applied license file
     */
    licenseFileId?: pulumi.Input<string>;
    /**
     * License Token applicable for some device types in BYOL licensing mode
     */
    licenseToken?: pulumi.Input<string>;
    /**
     * Device location metro code
     */
    metroCode: pulumi.Input<string>;
    /**
     * Unique identifier of applied MGMT ACL template
     */
    mgmtAclTemplateUuid?: pulumi.Input<string>;
    /**
     * Device name
     */
    name?: pulumi.Input<string>;
    /**
     * List of email addresses that will receive device status notifications
     */
    notifications: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name/number used to identify device order on the invoice
     */
    orderReference?: pulumi.Input<string>;
    /**
     * Device software package code
     */
    packageCode: pulumi.Input<string>;
    /**
     * The unique identifier of Project Resource to which device is scoped to
     */
    projectId?: pulumi.Input<string>;
    /**
     * Purchase order number associated with a device order
     */
    purchaseOrderNumber?: pulumi.Input<string>;
    /**
     * Definition of secondary device applicable for HA setup
     */
    secondaryDevice?: pulumi.Input<inputs.NetworkDeviceSecondaryDevice>;
    /**
     * Boolean value that determines device management mode: self-managed or subscription (default)
     */
    selfManaged?: pulumi.Input<boolean>;
    /**
     * Definition of SSH key that will be provisioned on a device
     */
    sshKey?: pulumi.Input<inputs.NetworkDeviceSshKey>;
    /**
     * Device term length
     */
    termLength: pulumi.Input<number>;
    /**
     * Device license throughput
     */
    throughput?: pulumi.Input<number>;
    /**
     * Device license throughput unit (Mbps or Gbps)
     */
    throughputUnit?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkDeviceTimeouts>;
    /**
     * Device type code
     */
    typeCode: pulumi.Input<string>;
    /**
     * Map of vendor specific configuration parameters for a device (controller1, activationKey, managementType, siteId,
     * systemIpAddress)
     */
    vendorConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Device software software version
     */
    version: pulumi.Input<string>;
    /**
     * device interface id picked for WAN
     */
    wanInterfaceId?: pulumi.Input<string>;
}
