// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Device extends pulumi.CustomResource {
    /**
     * Get an existing Device resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DeviceState, opts?: pulumi.CustomResourceOptions): Device {
        return new Device(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'logicmonitor:index/device:Device';

    /**
     * Returns true if the given object is an instance of Device.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Device {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Device.__pulumiType;
    }

    public readonly autoBalancedCollectorGroupId!: pulumi.Output<number | undefined>;
    public /*out*/ readonly autoProperties!: pulumi.Output<outputs.DeviceAutoProperty[]>;
    public /*out*/ readonly autoPropsAssignedOn!: pulumi.Output<number>;
    public /*out*/ readonly autoPropsUpdatedOn!: pulumi.Output<number>;
    public /*out*/ readonly awsState!: pulumi.Output<number>;
    public /*out*/ readonly azureState!: pulumi.Output<number>;
    public /*out*/ readonly collectorDescription!: pulumi.Output<string>;
    public /*out*/ readonly createdOn!: pulumi.Output<number>;
    public readonly currentCollectorId!: pulumi.Output<number | undefined>;
    public readonly customProperties!: pulumi.Output<outputs.DeviceCustomProperty[] | undefined>;
    public /*out*/ readonly deletedTimeInMs!: pulumi.Output<number>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly deviceType!: pulumi.Output<number | undefined>;
    public readonly disableAlerting!: pulumi.Output<boolean | undefined>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly enableNetflow!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly gcpState!: pulumi.Output<number>;
    public readonly hostGroupIds!: pulumi.Output<string | undefined>;
    public /*out*/ readonly hostStatus!: pulumi.Output<string>;
    public /*out*/ readonly inheritedProperties!: pulumi.Output<outputs.DeviceInheritedProperty[]>;
    public /*out*/ readonly lastDataTime!: pulumi.Output<number>;
    public /*out*/ readonly lastRawdataTime!: pulumi.Output<number>;
    public readonly link!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly netflowCollectorDescription!: pulumi.Output<string>;
    public /*out*/ readonly netflowCollectorGroupId!: pulumi.Output<number>;
    public /*out*/ readonly netflowCollectorGroupName!: pulumi.Output<string>;
    public readonly netflowCollectorId!: pulumi.Output<number | undefined>;
    public /*out*/ readonly preferredCollectorGroupId!: pulumi.Output<number>;
    public /*out*/ readonly preferredCollectorGroupName!: pulumi.Output<string>;
    public readonly preferredCollectorId!: pulumi.Output<number>;
    public readonly relatedDeviceId!: pulumi.Output<number | undefined>;
    public /*out*/ readonly scanConfigId!: pulumi.Output<number>;
    public /*out*/ readonly systemProperties!: pulumi.Output<outputs.DeviceSystemProperty[]>;
    public /*out*/ readonly toDeleteTimeInMs!: pulumi.Output<number>;
    public /*out*/ readonly upTimeInSeconds!: pulumi.Output<number>;
    public /*out*/ readonly updatedOn!: pulumi.Output<number>;
    public /*out*/ readonly userPermission!: pulumi.Output<string>;

    /**
     * Create a Device resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeviceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DeviceArgs | DeviceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DeviceState | undefined;
            resourceInputs["autoBalancedCollectorGroupId"] = state ? state.autoBalancedCollectorGroupId : undefined;
            resourceInputs["autoProperties"] = state ? state.autoProperties : undefined;
            resourceInputs["autoPropsAssignedOn"] = state ? state.autoPropsAssignedOn : undefined;
            resourceInputs["autoPropsUpdatedOn"] = state ? state.autoPropsUpdatedOn : undefined;
            resourceInputs["awsState"] = state ? state.awsState : undefined;
            resourceInputs["azureState"] = state ? state.azureState : undefined;
            resourceInputs["collectorDescription"] = state ? state.collectorDescription : undefined;
            resourceInputs["createdOn"] = state ? state.createdOn : undefined;
            resourceInputs["currentCollectorId"] = state ? state.currentCollectorId : undefined;
            resourceInputs["customProperties"] = state ? state.customProperties : undefined;
            resourceInputs["deletedTimeInMs"] = state ? state.deletedTimeInMs : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceType"] = state ? state.deviceType : undefined;
            resourceInputs["disableAlerting"] = state ? state.disableAlerting : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["enableNetflow"] = state ? state.enableNetflow : undefined;
            resourceInputs["gcpState"] = state ? state.gcpState : undefined;
            resourceInputs["hostGroupIds"] = state ? state.hostGroupIds : undefined;
            resourceInputs["hostStatus"] = state ? state.hostStatus : undefined;
            resourceInputs["inheritedProperties"] = state ? state.inheritedProperties : undefined;
            resourceInputs["lastDataTime"] = state ? state.lastDataTime : undefined;
            resourceInputs["lastRawdataTime"] = state ? state.lastRawdataTime : undefined;
            resourceInputs["link"] = state ? state.link : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["netflowCollectorDescription"] = state ? state.netflowCollectorDescription : undefined;
            resourceInputs["netflowCollectorGroupId"] = state ? state.netflowCollectorGroupId : undefined;
            resourceInputs["netflowCollectorGroupName"] = state ? state.netflowCollectorGroupName : undefined;
            resourceInputs["netflowCollectorId"] = state ? state.netflowCollectorId : undefined;
            resourceInputs["preferredCollectorGroupId"] = state ? state.preferredCollectorGroupId : undefined;
            resourceInputs["preferredCollectorGroupName"] = state ? state.preferredCollectorGroupName : undefined;
            resourceInputs["preferredCollectorId"] = state ? state.preferredCollectorId : undefined;
            resourceInputs["relatedDeviceId"] = state ? state.relatedDeviceId : undefined;
            resourceInputs["scanConfigId"] = state ? state.scanConfigId : undefined;
            resourceInputs["systemProperties"] = state ? state.systemProperties : undefined;
            resourceInputs["toDeleteTimeInMs"] = state ? state.toDeleteTimeInMs : undefined;
            resourceInputs["upTimeInSeconds"] = state ? state.upTimeInSeconds : undefined;
            resourceInputs["updatedOn"] = state ? state.updatedOn : undefined;
            resourceInputs["userPermission"] = state ? state.userPermission : undefined;
        } else {
            const args = argsOrState as DeviceArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.preferredCollectorId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'preferredCollectorId'");
            }
            resourceInputs["autoBalancedCollectorGroupId"] = args ? args.autoBalancedCollectorGroupId : undefined;
            resourceInputs["currentCollectorId"] = args ? args.currentCollectorId : undefined;
            resourceInputs["customProperties"] = args ? args.customProperties : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceType"] = args ? args.deviceType : undefined;
            resourceInputs["disableAlerting"] = args ? args.disableAlerting : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enableNetflow"] = args ? args.enableNetflow : undefined;
            resourceInputs["hostGroupIds"] = args ? args.hostGroupIds : undefined;
            resourceInputs["link"] = args ? args.link : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["netflowCollectorId"] = args ? args.netflowCollectorId : undefined;
            resourceInputs["preferredCollectorId"] = args ? args.preferredCollectorId : undefined;
            resourceInputs["relatedDeviceId"] = args ? args.relatedDeviceId : undefined;
            resourceInputs["autoProperties"] = undefined /*out*/;
            resourceInputs["autoPropsAssignedOn"] = undefined /*out*/;
            resourceInputs["autoPropsUpdatedOn"] = undefined /*out*/;
            resourceInputs["awsState"] = undefined /*out*/;
            resourceInputs["azureState"] = undefined /*out*/;
            resourceInputs["collectorDescription"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["deletedTimeInMs"] = undefined /*out*/;
            resourceInputs["gcpState"] = undefined /*out*/;
            resourceInputs["hostStatus"] = undefined /*out*/;
            resourceInputs["inheritedProperties"] = undefined /*out*/;
            resourceInputs["lastDataTime"] = undefined /*out*/;
            resourceInputs["lastRawdataTime"] = undefined /*out*/;
            resourceInputs["netflowCollectorDescription"] = undefined /*out*/;
            resourceInputs["netflowCollectorGroupId"] = undefined /*out*/;
            resourceInputs["netflowCollectorGroupName"] = undefined /*out*/;
            resourceInputs["preferredCollectorGroupId"] = undefined /*out*/;
            resourceInputs["preferredCollectorGroupName"] = undefined /*out*/;
            resourceInputs["scanConfigId"] = undefined /*out*/;
            resourceInputs["systemProperties"] = undefined /*out*/;
            resourceInputs["toDeleteTimeInMs"] = undefined /*out*/;
            resourceInputs["upTimeInSeconds"] = undefined /*out*/;
            resourceInputs["updatedOn"] = undefined /*out*/;
            resourceInputs["userPermission"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Device.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Device resources.
 */
export interface DeviceState {
    autoBalancedCollectorGroupId?: pulumi.Input<number>;
    autoProperties?: pulumi.Input<pulumi.Input<inputs.DeviceAutoProperty>[]>;
    autoPropsAssignedOn?: pulumi.Input<number>;
    autoPropsUpdatedOn?: pulumi.Input<number>;
    awsState?: pulumi.Input<number>;
    azureState?: pulumi.Input<number>;
    collectorDescription?: pulumi.Input<string>;
    createdOn?: pulumi.Input<number>;
    currentCollectorId?: pulumi.Input<number>;
    customProperties?: pulumi.Input<pulumi.Input<inputs.DeviceCustomProperty>[]>;
    deletedTimeInMs?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    deviceType?: pulumi.Input<number>;
    disableAlerting?: pulumi.Input<boolean>;
    displayName?: pulumi.Input<string>;
    enableNetflow?: pulumi.Input<boolean>;
    gcpState?: pulumi.Input<number>;
    hostGroupIds?: pulumi.Input<string>;
    hostStatus?: pulumi.Input<string>;
    inheritedProperties?: pulumi.Input<pulumi.Input<inputs.DeviceInheritedProperty>[]>;
    lastDataTime?: pulumi.Input<number>;
    lastRawdataTime?: pulumi.Input<number>;
    link?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    netflowCollectorDescription?: pulumi.Input<string>;
    netflowCollectorGroupId?: pulumi.Input<number>;
    netflowCollectorGroupName?: pulumi.Input<string>;
    netflowCollectorId?: pulumi.Input<number>;
    preferredCollectorGroupId?: pulumi.Input<number>;
    preferredCollectorGroupName?: pulumi.Input<string>;
    preferredCollectorId?: pulumi.Input<number>;
    relatedDeviceId?: pulumi.Input<number>;
    scanConfigId?: pulumi.Input<number>;
    systemProperties?: pulumi.Input<pulumi.Input<inputs.DeviceSystemProperty>[]>;
    toDeleteTimeInMs?: pulumi.Input<number>;
    upTimeInSeconds?: pulumi.Input<number>;
    updatedOn?: pulumi.Input<number>;
    userPermission?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Device resource.
 */
export interface DeviceArgs {
    autoBalancedCollectorGroupId?: pulumi.Input<number>;
    currentCollectorId?: pulumi.Input<number>;
    customProperties?: pulumi.Input<pulumi.Input<inputs.DeviceCustomProperty>[]>;
    description?: pulumi.Input<string>;
    deviceType?: pulumi.Input<number>;
    disableAlerting?: pulumi.Input<boolean>;
    displayName: pulumi.Input<string>;
    enableNetflow?: pulumi.Input<boolean>;
    hostGroupIds?: pulumi.Input<string>;
    link?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    netflowCollectorId?: pulumi.Input<number>;
    preferredCollectorId: pulumi.Input<number>;
    relatedDeviceId?: pulumi.Input<number>;
}
