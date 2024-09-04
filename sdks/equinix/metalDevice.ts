// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MetalDevice extends pulumi.CustomResource {
    /**
     * Get an existing MetalDevice resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MetalDeviceState, opts?: pulumi.CustomResourceOptions): MetalDevice {
        return new MetalDevice(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'equinix:index/metalDevice:MetalDevice';

    /**
     * Returns true if the given object is an instance of MetalDevice.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MetalDevice {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MetalDevice.__pulumiType;
    }

    /**
     * The ipv4 private IP assigned to the device
     */
    public /*out*/ readonly accessPrivateIpv4!: pulumi.Output<string>;
    /**
     * The ipv4 maintenance IP assigned to the device
     */
    public /*out*/ readonly accessPublicIpv4!: pulumi.Output<string>;
    /**
     * The ipv6 maintenance IP assigned to the device
     */
    public /*out*/ readonly accessPublicIpv6!: pulumi.Output<string>;
    /**
     * If true, a device with OS custom_ipxe will
     */
    public readonly alwaysPxe!: pulumi.Output<boolean | undefined>;
    public readonly behavior!: pulumi.Output<outputs.MetalDeviceBehavior | undefined>;
    /**
     * monthly or hourly
     */
    public readonly billingCycle!: pulumi.Output<string>;
    /**
     * The timestamp for when the device was created
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * A string of the desired Custom Data for the device. By default, changing this attribute will cause the provider to
     * destroy and recreate your device. If `reinstall` is specified or `behavior.allow_changes` includes `"custom_data"`, the
     * device will be updated in-place instead of recreated.
     */
    public readonly customData!: pulumi.Output<string | undefined>;
    /**
     * The facility where the device is deployed
     *
     * @deprecated Deprecated
     */
    public /*out*/ readonly deployedFacility!: pulumi.Output<string>;
    /**
     * ID of hardware reservation where this device was deployed. It is useful when using the next-available hardware
     * reservation
     */
    public /*out*/ readonly deployedHardwareReservationId!: pulumi.Output<string>;
    /**
     * Description string for the device
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * List of facility codes with deployment preferences. Equinix Metal API will go through the list and will deploy your
     * device to first facility with free capacity. List items must be facility codes or any (a wildcard). To find the facility
     * code, visit [Facilities API docs](https://metal.equinix.com/developers/api/facilities/), set your API auth token in the
     * top of the page and see JSON from the API response. Conflicts with metro
     *
     * @deprecated Deprecated
     */
    public readonly facilities!: pulumi.Output<string[] | undefined>;
    /**
     * Delete device even if it has volumes attached. Only applies for destroy action
     */
    public readonly forceDetachVolumes!: pulumi.Output<boolean | undefined>;
    /**
     * The UUID of the hardware reservation where you want this device deployed, or next-available if you want to pick your
     * next available reservation automatically
     */
    public readonly hardwareReservationId!: pulumi.Output<string | undefined>;
    /**
     * The device hostname used in deployments taking advantage of Layer3 DHCP or metadata service configuration.
     */
    public readonly hostname!: pulumi.Output<string>;
    /**
     * A list of IP address types for the device (structure is documented below)
     */
    public readonly ipAddresses!: pulumi.Output<outputs.MetalDeviceIpAddress[] | undefined>;
    /**
     * URL pointing to a hosted iPXE script. More
     */
    public readonly ipxeScriptUrl!: pulumi.Output<string | undefined>;
    /**
     * Whether the device is locked or unlocked. Locking a device prevents you from deleting or reinstalling the device or
     * performing a firmware update on the device, and it prevents an instance with a termination time set from being
     * reclaimed, even if the termination time was reached
     */
    public readonly locked!: pulumi.Output<boolean>;
    /**
     * Metro area for the new device. Conflicts with facilities
     */
    public readonly metro!: pulumi.Output<string | undefined>;
    /**
     * Network type of a device, used in [Layer 2 networking](https://metal.equinix.com/developers/docs/networking/layer2/).
     * Will be one of layer3, hybrid, hybrid-bonded, layer2-individual, layer2-bonded
     *
     * @deprecated Deprecated
     */
    public /*out*/ readonly networkType!: pulumi.Output<string>;
    /**
     * The device's private and public IP (v4 and v6) network details. When a device is run without any special network
     * configuration, it will have 3 addresses: public ipv4, private ipv4 and ipv6
     */
    public /*out*/ readonly networks!: pulumi.Output<outputs.MetalDeviceNetwork[]>;
    /**
     * The operating system slug. To find the slug, or visit [Operating Systems API
     * docs](https://metal.equinix.com/developers/api/operatingsystems), set your API auth token in the top of the page and see
     * JSON from the API response. By default, changing this attribute will cause your device to be deleted and recreated. If
     * `reinstall` is enabled, the device will be updated in-place instead of recreated.
     */
    public readonly operatingSystem!: pulumi.Output<string>;
    /**
     * The device plan slug. To find the plan slug, visit the [bare-metal
     * server](https://deploy.equinix.com/product/bare-metal/servers/) and [plan
     * documentation](https://deploy.equinix.com/developers/docs/metal/hardware/standard-servers/)
     */
    public readonly plan!: pulumi.Output<string>;
    /**
     * Ports assigned to the device
     */
    public /*out*/ readonly ports!: pulumi.Output<outputs.MetalDevicePort[]>;
    /**
     * The ID of the project in which to create the device
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Array of IDs of the project SSH keys which should be added to the device. If you specify this array, only the listed
     * project SSH keys (and any SSH keys for the users specified in user_ssh_key_ids) will be added. If no SSH keys are
     * specified (both user_ssh_keys_ids and project_ssh_key_ids are empty lists or omitted), all parent project keys, parent
     * project members keys and organization members keys will be included. Project SSH keys can be created with the
     * equinix.MetalProjectSshKey resource
     */
    public readonly projectSshKeyIds!: pulumi.Output<string[] | undefined>;
    public readonly reinstall!: pulumi.Output<outputs.MetalDeviceReinstall | undefined>;
    /**
     * Root password to the server (disabled after 24 hours)
     */
    public /*out*/ readonly rootPassword!: pulumi.Output<string>;
    /**
     * The hostname to use for [Serial over
     * SSH](https://deploy.equinix.com/developers/docs/metal/resilience-recovery/serial-over-ssh/) access to the device
     */
    public /*out*/ readonly sosHostname!: pulumi.Output<string>;
    /**
     * List of IDs of SSH keys deployed in the device, can be both user and project SSH keys
     */
    public /*out*/ readonly sshKeyIds!: pulumi.Output<string[]>;
    /**
     * The status of the device
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * JSON for custom partitioning. Only usable on reserved hardware. More information in in the [Custom Partitioning and
     * RAID](https://metal.equinix.com/developers/docs/servers/custom-partitioning-raid/) doc
     */
    public readonly storage!: pulumi.Output<string | undefined>;
    /**
     * Tags attached to the device
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * Timestamp for device termination. For example "2021-09-03T16:32:00+03:00". If you don't supply timezone info, timestamp
     * is assumed to be in UTC.
     */
    public readonly terminationTime!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.MetalDeviceTimeouts | undefined>;
    /**
     * The timestamp for the last time the device was updated
     */
    public /*out*/ readonly updated!: pulumi.Output<string>;
    /**
     * A string of the desired User Data for the device. By default, changing this attribute will cause the provider to destroy
     * and recreate your device. If `reinstall` is specified or `behavior.allow_changes` includes `"user_data"`, the device
     * will be updated in-place instead of recreated.
     */
    public readonly userData!: pulumi.Output<string | undefined>;
    /**
     * Array of IDs of the users whose SSH keys should be added to the device. If you specify this array, only the listed
     * users' SSH keys (and any project SSH keys specified in project_ssh_key_ids) will be added. If no SSH keys are specified
     * (both user_ssh_keys_ids and project_ssh_key_ids are empty lists or omitted), all parent project keys, parent project
     * members keys and organization members keys will be included. User SSH keys can be created with the equinix.MetalSshKey
     * resource
     */
    public readonly userSshKeyIds!: pulumi.Output<string[] | undefined>;
    /**
     * Only used for devices in reserved hardware. If set, the deletion of this device will block until the hardware
     * reservation is marked provisionable (about 4 minutes in August 2019)
     */
    public readonly waitForReservationDeprovision!: pulumi.Output<boolean | undefined>;

    /**
     * Create a MetalDevice resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetalDeviceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MetalDeviceArgs | MetalDeviceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MetalDeviceState | undefined;
            resourceInputs["accessPrivateIpv4"] = state ? state.accessPrivateIpv4 : undefined;
            resourceInputs["accessPublicIpv4"] = state ? state.accessPublicIpv4 : undefined;
            resourceInputs["accessPublicIpv6"] = state ? state.accessPublicIpv6 : undefined;
            resourceInputs["alwaysPxe"] = state ? state.alwaysPxe : undefined;
            resourceInputs["behavior"] = state ? state.behavior : undefined;
            resourceInputs["billingCycle"] = state ? state.billingCycle : undefined;
            resourceInputs["created"] = state ? state.created : undefined;
            resourceInputs["customData"] = state ? state.customData : undefined;
            resourceInputs["deployedFacility"] = state ? state.deployedFacility : undefined;
            resourceInputs["deployedHardwareReservationId"] = state ? state.deployedHardwareReservationId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["facilities"] = state ? state.facilities : undefined;
            resourceInputs["forceDetachVolumes"] = state ? state.forceDetachVolumes : undefined;
            resourceInputs["hardwareReservationId"] = state ? state.hardwareReservationId : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["ipAddresses"] = state ? state.ipAddresses : undefined;
            resourceInputs["ipxeScriptUrl"] = state ? state.ipxeScriptUrl : undefined;
            resourceInputs["locked"] = state ? state.locked : undefined;
            resourceInputs["metro"] = state ? state.metro : undefined;
            resourceInputs["networkType"] = state ? state.networkType : undefined;
            resourceInputs["networks"] = state ? state.networks : undefined;
            resourceInputs["operatingSystem"] = state ? state.operatingSystem : undefined;
            resourceInputs["plan"] = state ? state.plan : undefined;
            resourceInputs["ports"] = state ? state.ports : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["projectSshKeyIds"] = state ? state.projectSshKeyIds : undefined;
            resourceInputs["reinstall"] = state ? state.reinstall : undefined;
            resourceInputs["rootPassword"] = state ? state.rootPassword : undefined;
            resourceInputs["sosHostname"] = state ? state.sosHostname : undefined;
            resourceInputs["sshKeyIds"] = state ? state.sshKeyIds : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["storage"] = state ? state.storage : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["terminationTime"] = state ? state.terminationTime : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updated"] = state ? state.updated : undefined;
            resourceInputs["userData"] = state ? state.userData : undefined;
            resourceInputs["userSshKeyIds"] = state ? state.userSshKeyIds : undefined;
            resourceInputs["waitForReservationDeprovision"] = state ? state.waitForReservationDeprovision : undefined;
        } else {
            const args = argsOrState as MetalDeviceArgs | undefined;
            if ((!args || args.operatingSystem === undefined) && !opts.urn) {
                throw new Error("Missing required property 'operatingSystem'");
            }
            if ((!args || args.plan === undefined) && !opts.urn) {
                throw new Error("Missing required property 'plan'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["alwaysPxe"] = args ? args.alwaysPxe : undefined;
            resourceInputs["behavior"] = args ? args.behavior : undefined;
            resourceInputs["billingCycle"] = args ? args.billingCycle : undefined;
            resourceInputs["customData"] = args?.customData ? pulumi.secret(args.customData) : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["facilities"] = args ? args.facilities : undefined;
            resourceInputs["forceDetachVolumes"] = args ? args.forceDetachVolumes : undefined;
            resourceInputs["hardwareReservationId"] = args ? args.hardwareReservationId : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["ipAddresses"] = args ? args.ipAddresses : undefined;
            resourceInputs["ipxeScriptUrl"] = args ? args.ipxeScriptUrl : undefined;
            resourceInputs["locked"] = args ? args.locked : undefined;
            resourceInputs["metro"] = args ? args.metro : undefined;
            resourceInputs["operatingSystem"] = args ? args.operatingSystem : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["projectSshKeyIds"] = args ? args.projectSshKeyIds : undefined;
            resourceInputs["reinstall"] = args ? args.reinstall : undefined;
            resourceInputs["storage"] = args ? args.storage : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["terminationTime"] = args ? args.terminationTime : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userData"] = args?.userData ? pulumi.secret(args.userData) : undefined;
            resourceInputs["userSshKeyIds"] = args ? args.userSshKeyIds : undefined;
            resourceInputs["waitForReservationDeprovision"] = args ? args.waitForReservationDeprovision : undefined;
            resourceInputs["accessPrivateIpv4"] = undefined /*out*/;
            resourceInputs["accessPublicIpv4"] = undefined /*out*/;
            resourceInputs["accessPublicIpv6"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["deployedFacility"] = undefined /*out*/;
            resourceInputs["deployedHardwareReservationId"] = undefined /*out*/;
            resourceInputs["networkType"] = undefined /*out*/;
            resourceInputs["networks"] = undefined /*out*/;
            resourceInputs["ports"] = undefined /*out*/;
            resourceInputs["rootPassword"] = undefined /*out*/;
            resourceInputs["sosHostname"] = undefined /*out*/;
            resourceInputs["sshKeyIds"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["updated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["customData", "rootPassword", "userData"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(MetalDevice.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MetalDevice resources.
 */
export interface MetalDeviceState {
    /**
     * The ipv4 private IP assigned to the device
     */
    accessPrivateIpv4?: pulumi.Input<string>;
    /**
     * The ipv4 maintenance IP assigned to the device
     */
    accessPublicIpv4?: pulumi.Input<string>;
    /**
     * The ipv6 maintenance IP assigned to the device
     */
    accessPublicIpv6?: pulumi.Input<string>;
    /**
     * If true, a device with OS custom_ipxe will
     */
    alwaysPxe?: pulumi.Input<boolean>;
    behavior?: pulumi.Input<inputs.MetalDeviceBehavior>;
    /**
     * monthly or hourly
     */
    billingCycle?: pulumi.Input<string>;
    /**
     * The timestamp for when the device was created
     */
    created?: pulumi.Input<string>;
    /**
     * A string of the desired Custom Data for the device. By default, changing this attribute will cause the provider to
     * destroy and recreate your device. If `reinstall` is specified or `behavior.allow_changes` includes `"custom_data"`, the
     * device will be updated in-place instead of recreated.
     */
    customData?: pulumi.Input<string>;
    /**
     * The facility where the device is deployed
     *
     * @deprecated Deprecated
     */
    deployedFacility?: pulumi.Input<string>;
    /**
     * ID of hardware reservation where this device was deployed. It is useful when using the next-available hardware
     * reservation
     */
    deployedHardwareReservationId?: pulumi.Input<string>;
    /**
     * Description string for the device
     */
    description?: pulumi.Input<string>;
    /**
     * List of facility codes with deployment preferences. Equinix Metal API will go through the list and will deploy your
     * device to first facility with free capacity. List items must be facility codes or any (a wildcard). To find the facility
     * code, visit [Facilities API docs](https://metal.equinix.com/developers/api/facilities/), set your API auth token in the
     * top of the page and see JSON from the API response. Conflicts with metro
     *
     * @deprecated Deprecated
     */
    facilities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Delete device even if it has volumes attached. Only applies for destroy action
     */
    forceDetachVolumes?: pulumi.Input<boolean>;
    /**
     * The UUID of the hardware reservation where you want this device deployed, or next-available if you want to pick your
     * next available reservation automatically
     */
    hardwareReservationId?: pulumi.Input<string>;
    /**
     * The device hostname used in deployments taking advantage of Layer3 DHCP or metadata service configuration.
     */
    hostname?: pulumi.Input<string>;
    /**
     * A list of IP address types for the device (structure is documented below)
     */
    ipAddresses?: pulumi.Input<pulumi.Input<inputs.MetalDeviceIpAddress>[]>;
    /**
     * URL pointing to a hosted iPXE script. More
     */
    ipxeScriptUrl?: pulumi.Input<string>;
    /**
     * Whether the device is locked or unlocked. Locking a device prevents you from deleting or reinstalling the device or
     * performing a firmware update on the device, and it prevents an instance with a termination time set from being
     * reclaimed, even if the termination time was reached
     */
    locked?: pulumi.Input<boolean>;
    /**
     * Metro area for the new device. Conflicts with facilities
     */
    metro?: pulumi.Input<string>;
    /**
     * Network type of a device, used in [Layer 2 networking](https://metal.equinix.com/developers/docs/networking/layer2/).
     * Will be one of layer3, hybrid, hybrid-bonded, layer2-individual, layer2-bonded
     *
     * @deprecated Deprecated
     */
    networkType?: pulumi.Input<string>;
    /**
     * The device's private and public IP (v4 and v6) network details. When a device is run without any special network
     * configuration, it will have 3 addresses: public ipv4, private ipv4 and ipv6
     */
    networks?: pulumi.Input<pulumi.Input<inputs.MetalDeviceNetwork>[]>;
    /**
     * The operating system slug. To find the slug, or visit [Operating Systems API
     * docs](https://metal.equinix.com/developers/api/operatingsystems), set your API auth token in the top of the page and see
     * JSON from the API response. By default, changing this attribute will cause your device to be deleted and recreated. If
     * `reinstall` is enabled, the device will be updated in-place instead of recreated.
     */
    operatingSystem?: pulumi.Input<string>;
    /**
     * The device plan slug. To find the plan slug, visit the [bare-metal
     * server](https://deploy.equinix.com/product/bare-metal/servers/) and [plan
     * documentation](https://deploy.equinix.com/developers/docs/metal/hardware/standard-servers/)
     */
    plan?: pulumi.Input<string>;
    /**
     * Ports assigned to the device
     */
    ports?: pulumi.Input<pulumi.Input<inputs.MetalDevicePort>[]>;
    /**
     * The ID of the project in which to create the device
     */
    projectId?: pulumi.Input<string>;
    /**
     * Array of IDs of the project SSH keys which should be added to the device. If you specify this array, only the listed
     * project SSH keys (and any SSH keys for the users specified in user_ssh_key_ids) will be added. If no SSH keys are
     * specified (both user_ssh_keys_ids and project_ssh_key_ids are empty lists or omitted), all parent project keys, parent
     * project members keys and organization members keys will be included. Project SSH keys can be created with the
     * equinix.MetalProjectSshKey resource
     */
    projectSshKeyIds?: pulumi.Input<pulumi.Input<string>[]>;
    reinstall?: pulumi.Input<inputs.MetalDeviceReinstall>;
    /**
     * Root password to the server (disabled after 24 hours)
     */
    rootPassword?: pulumi.Input<string>;
    /**
     * The hostname to use for [Serial over
     * SSH](https://deploy.equinix.com/developers/docs/metal/resilience-recovery/serial-over-ssh/) access to the device
     */
    sosHostname?: pulumi.Input<string>;
    /**
     * List of IDs of SSH keys deployed in the device, can be both user and project SSH keys
     */
    sshKeyIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The status of the device
     */
    state?: pulumi.Input<string>;
    /**
     * JSON for custom partitioning. Only usable on reserved hardware. More information in in the [Custom Partitioning and
     * RAID](https://metal.equinix.com/developers/docs/servers/custom-partitioning-raid/) doc
     */
    storage?: pulumi.Input<string>;
    /**
     * Tags attached to the device
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Timestamp for device termination. For example "2021-09-03T16:32:00+03:00". If you don't supply timezone info, timestamp
     * is assumed to be in UTC.
     */
    terminationTime?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MetalDeviceTimeouts>;
    /**
     * The timestamp for the last time the device was updated
     */
    updated?: pulumi.Input<string>;
    /**
     * A string of the desired User Data for the device. By default, changing this attribute will cause the provider to destroy
     * and recreate your device. If `reinstall` is specified or `behavior.allow_changes` includes `"user_data"`, the device
     * will be updated in-place instead of recreated.
     */
    userData?: pulumi.Input<string>;
    /**
     * Array of IDs of the users whose SSH keys should be added to the device. If you specify this array, only the listed
     * users' SSH keys (and any project SSH keys specified in project_ssh_key_ids) will be added. If no SSH keys are specified
     * (both user_ssh_keys_ids and project_ssh_key_ids are empty lists or omitted), all parent project keys, parent project
     * members keys and organization members keys will be included. User SSH keys can be created with the equinix.MetalSshKey
     * resource
     */
    userSshKeyIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Only used for devices in reserved hardware. If set, the deletion of this device will block until the hardware
     * reservation is marked provisionable (about 4 minutes in August 2019)
     */
    waitForReservationDeprovision?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a MetalDevice resource.
 */
export interface MetalDeviceArgs {
    /**
     * If true, a device with OS custom_ipxe will
     */
    alwaysPxe?: pulumi.Input<boolean>;
    behavior?: pulumi.Input<inputs.MetalDeviceBehavior>;
    /**
     * monthly or hourly
     */
    billingCycle?: pulumi.Input<string>;
    /**
     * A string of the desired Custom Data for the device. By default, changing this attribute will cause the provider to
     * destroy and recreate your device. If `reinstall` is specified or `behavior.allow_changes` includes `"custom_data"`, the
     * device will be updated in-place instead of recreated.
     */
    customData?: pulumi.Input<string>;
    /**
     * Description string for the device
     */
    description?: pulumi.Input<string>;
    /**
     * List of facility codes with deployment preferences. Equinix Metal API will go through the list and will deploy your
     * device to first facility with free capacity. List items must be facility codes or any (a wildcard). To find the facility
     * code, visit [Facilities API docs](https://metal.equinix.com/developers/api/facilities/), set your API auth token in the
     * top of the page and see JSON from the API response. Conflicts with metro
     *
     * @deprecated Deprecated
     */
    facilities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Delete device even if it has volumes attached. Only applies for destroy action
     */
    forceDetachVolumes?: pulumi.Input<boolean>;
    /**
     * The UUID of the hardware reservation where you want this device deployed, or next-available if you want to pick your
     * next available reservation automatically
     */
    hardwareReservationId?: pulumi.Input<string>;
    /**
     * The device hostname used in deployments taking advantage of Layer3 DHCP or metadata service configuration.
     */
    hostname?: pulumi.Input<string>;
    /**
     * A list of IP address types for the device (structure is documented below)
     */
    ipAddresses?: pulumi.Input<pulumi.Input<inputs.MetalDeviceIpAddress>[]>;
    /**
     * URL pointing to a hosted iPXE script. More
     */
    ipxeScriptUrl?: pulumi.Input<string>;
    /**
     * Whether the device is locked or unlocked. Locking a device prevents you from deleting or reinstalling the device or
     * performing a firmware update on the device, and it prevents an instance with a termination time set from being
     * reclaimed, even if the termination time was reached
     */
    locked?: pulumi.Input<boolean>;
    /**
     * Metro area for the new device. Conflicts with facilities
     */
    metro?: pulumi.Input<string>;
    /**
     * The operating system slug. To find the slug, or visit [Operating Systems API
     * docs](https://metal.equinix.com/developers/api/operatingsystems), set your API auth token in the top of the page and see
     * JSON from the API response. By default, changing this attribute will cause your device to be deleted and recreated. If
     * `reinstall` is enabled, the device will be updated in-place instead of recreated.
     */
    operatingSystem: pulumi.Input<string>;
    /**
     * The device plan slug. To find the plan slug, visit the [bare-metal
     * server](https://deploy.equinix.com/product/bare-metal/servers/) and [plan
     * documentation](https://deploy.equinix.com/developers/docs/metal/hardware/standard-servers/)
     */
    plan: pulumi.Input<string>;
    /**
     * The ID of the project in which to create the device
     */
    projectId: pulumi.Input<string>;
    /**
     * Array of IDs of the project SSH keys which should be added to the device. If you specify this array, only the listed
     * project SSH keys (and any SSH keys for the users specified in user_ssh_key_ids) will be added. If no SSH keys are
     * specified (both user_ssh_keys_ids and project_ssh_key_ids are empty lists or omitted), all parent project keys, parent
     * project members keys and organization members keys will be included. Project SSH keys can be created with the
     * equinix.MetalProjectSshKey resource
     */
    projectSshKeyIds?: pulumi.Input<pulumi.Input<string>[]>;
    reinstall?: pulumi.Input<inputs.MetalDeviceReinstall>;
    /**
     * JSON for custom partitioning. Only usable on reserved hardware. More information in in the [Custom Partitioning and
     * RAID](https://metal.equinix.com/developers/docs/servers/custom-partitioning-raid/) doc
     */
    storage?: pulumi.Input<string>;
    /**
     * Tags attached to the device
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Timestamp for device termination. For example "2021-09-03T16:32:00+03:00". If you don't supply timezone info, timestamp
     * is assumed to be in UTC.
     */
    terminationTime?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MetalDeviceTimeouts>;
    /**
     * A string of the desired User Data for the device. By default, changing this attribute will cause the provider to destroy
     * and recreate your device. If `reinstall` is specified or `behavior.allow_changes` includes `"user_data"`, the device
     * will be updated in-place instead of recreated.
     */
    userData?: pulumi.Input<string>;
    /**
     * Array of IDs of the users whose SSH keys should be added to the device. If you specify this array, only the listed
     * users' SSH keys (and any project SSH keys specified in project_ssh_key_ids) will be added. If no SSH keys are specified
     * (both user_ssh_keys_ids and project_ssh_key_ids are empty lists or omitted), all parent project keys, parent project
     * members keys and organization members keys will be included. User SSH keys can be created with the equinix.MetalSshKey
     * resource
     */
    userSshKeyIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Only used for devices in reserved hardware. If set, the deletion of this device will block until the hardware
     * reservation is marked provisionable (about 4 minutes in August 2019)
     */
    waitForReservationDeprovision?: pulumi.Input<boolean>;
}
