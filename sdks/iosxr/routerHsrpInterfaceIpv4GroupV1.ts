// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RouterHsrpInterfaceIpv4GroupV1 extends pulumi.CustomResource {
    /**
     * Get an existing RouterHsrpInterfaceIpv4GroupV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterHsrpInterfaceIpv4GroupV1State, opts?: pulumi.CustomResourceOptions): RouterHsrpInterfaceIpv4GroupV1 {
        return new RouterHsrpInterfaceIpv4GroupV1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxr:index/routerHsrpInterfaceIpv4GroupV1:RouterHsrpInterfaceIpv4GroupV1';

    /**
     * Returns true if the given object is an instance of RouterHsrpInterfaceIpv4GroupV1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterHsrpInterfaceIpv4GroupV1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterHsrpInterfaceIpv4GroupV1.__pulumiType;
    }

    /**
     * Hot standby IP address
     */
    public readonly address!: pulumi.Output<string | undefined>;
    /**
     * Learn virtual IP address from peer
     */
    public readonly addressLearn!: pulumi.Output<boolean | undefined>;
    /**
     * Select an interface over which to run BFD
     */
    public readonly bfdFastDetectPeerInterface!: pulumi.Output<string | undefined>;
    /**
     * BFD peer interface IPv4 address
     */
    public readonly bfdFastDetectPeerIpv4!: pulumi.Output<string | undefined>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    public readonly deleteMode!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * group number version 1 - Range: `0`-`255`
     */
    public readonly groupId!: pulumi.Output<number>;
    /**
     * HSRP interface configuration subcommands
     */
    public readonly interfaceName!: pulumi.Output<string>;
    /**
     * Use specified mac address for the virtual router
     */
    public readonly macAddress!: pulumi.Output<string | undefined>;
    /**
     * MGO session name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Wait before preempting - Range: `0`-`3600`
     */
    public readonly preemptDelay!: pulumi.Output<number | undefined>;
    /**
     * Priority level - Range: `0`-`255`
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * Set secondary hot standby IP address
     */
    public readonly secondaryIpv4Addresses!: pulumi.Output<outputs.RouterHsrpInterfaceIpv4GroupV1SecondaryIpv4Address[] | undefined>;
    /**
     * Hold time in seconds - Range: `1`-`255`
     */
    public readonly timersHoldTime!: pulumi.Output<number | undefined>;
    /**
     * Hold time in seconds - Range: `1`-`255`
     */
    public readonly timersHoldTime2!: pulumi.Output<number | undefined>;
    /**
     * Specify hellotime in milliseconds - Range: `100`-`3000`
     */
    public readonly timersMsec!: pulumi.Output<number | undefined>;
    /**
     * Specify hold time in milliseconds - Range: `100`-`3000`
     */
    public readonly timersMsec2!: pulumi.Output<number | undefined>;
    /**
     * Configure tracking
     */
    public readonly trackInterfaces!: pulumi.Output<outputs.RouterHsrpInterfaceIpv4GroupV1TrackInterface[] | undefined>;
    /**
     * Object tracking
     */
    public readonly trackObjects!: pulumi.Output<outputs.RouterHsrpInterfaceIpv4GroupV1TrackObject[] | undefined>;

    /**
     * Create a RouterHsrpInterfaceIpv4GroupV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouterHsrpInterfaceIpv4GroupV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterHsrpInterfaceIpv4GroupV1Args | RouterHsrpInterfaceIpv4GroupV1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterHsrpInterfaceIpv4GroupV1State | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["addressLearn"] = state ? state.addressLearn : undefined;
            resourceInputs["bfdFastDetectPeerInterface"] = state ? state.bfdFastDetectPeerInterface : undefined;
            resourceInputs["bfdFastDetectPeerIpv4"] = state ? state.bfdFastDetectPeerIpv4 : undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["interfaceName"] = state ? state.interfaceName : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["preemptDelay"] = state ? state.preemptDelay : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["secondaryIpv4Addresses"] = state ? state.secondaryIpv4Addresses : undefined;
            resourceInputs["timersHoldTime"] = state ? state.timersHoldTime : undefined;
            resourceInputs["timersHoldTime2"] = state ? state.timersHoldTime2 : undefined;
            resourceInputs["timersMsec"] = state ? state.timersMsec : undefined;
            resourceInputs["timersMsec2"] = state ? state.timersMsec2 : undefined;
            resourceInputs["trackInterfaces"] = state ? state.trackInterfaces : undefined;
            resourceInputs["trackObjects"] = state ? state.trackObjects : undefined;
        } else {
            const args = argsOrState as RouterHsrpInterfaceIpv4GroupV1Args | undefined;
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.interfaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interfaceName'");
            }
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["addressLearn"] = args ? args.addressLearn : undefined;
            resourceInputs["bfdFastDetectPeerInterface"] = args ? args.bfdFastDetectPeerInterface : undefined;
            resourceInputs["bfdFastDetectPeerIpv4"] = args ? args.bfdFastDetectPeerIpv4 : undefined;
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["interfaceName"] = args ? args.interfaceName : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["preemptDelay"] = args ? args.preemptDelay : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["secondaryIpv4Addresses"] = args ? args.secondaryIpv4Addresses : undefined;
            resourceInputs["timersHoldTime"] = args ? args.timersHoldTime : undefined;
            resourceInputs["timersHoldTime2"] = args ? args.timersHoldTime2 : undefined;
            resourceInputs["timersMsec"] = args ? args.timersMsec : undefined;
            resourceInputs["timersMsec2"] = args ? args.timersMsec2 : undefined;
            resourceInputs["trackInterfaces"] = args ? args.trackInterfaces : undefined;
            resourceInputs["trackObjects"] = args ? args.trackObjects : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterHsrpInterfaceIpv4GroupV1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterHsrpInterfaceIpv4GroupV1 resources.
 */
export interface RouterHsrpInterfaceIpv4GroupV1State {
    /**
     * Hot standby IP address
     */
    address?: pulumi.Input<string>;
    /**
     * Learn virtual IP address from peer
     */
    addressLearn?: pulumi.Input<boolean>;
    /**
     * Select an interface over which to run BFD
     */
    bfdFastDetectPeerInterface?: pulumi.Input<string>;
    /**
     * BFD peer interface IPv4 address
     */
    bfdFastDetectPeerIpv4?: pulumi.Input<string>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * group number version 1 - Range: `0`-`255`
     */
    groupId?: pulumi.Input<number>;
    /**
     * HSRP interface configuration subcommands
     */
    interfaceName?: pulumi.Input<string>;
    /**
     * Use specified mac address for the virtual router
     */
    macAddress?: pulumi.Input<string>;
    /**
     * MGO session name
     */
    name?: pulumi.Input<string>;
    /**
     * Wait before preempting - Range: `0`-`3600`
     */
    preemptDelay?: pulumi.Input<number>;
    /**
     * Priority level - Range: `0`-`255`
     */
    priority?: pulumi.Input<number>;
    /**
     * Set secondary hot standby IP address
     */
    secondaryIpv4Addresses?: pulumi.Input<pulumi.Input<inputs.RouterHsrpInterfaceIpv4GroupV1SecondaryIpv4Address>[]>;
    /**
     * Hold time in seconds - Range: `1`-`255`
     */
    timersHoldTime?: pulumi.Input<number>;
    /**
     * Hold time in seconds - Range: `1`-`255`
     */
    timersHoldTime2?: pulumi.Input<number>;
    /**
     * Specify hellotime in milliseconds - Range: `100`-`3000`
     */
    timersMsec?: pulumi.Input<number>;
    /**
     * Specify hold time in milliseconds - Range: `100`-`3000`
     */
    timersMsec2?: pulumi.Input<number>;
    /**
     * Configure tracking
     */
    trackInterfaces?: pulumi.Input<pulumi.Input<inputs.RouterHsrpInterfaceIpv4GroupV1TrackInterface>[]>;
    /**
     * Object tracking
     */
    trackObjects?: pulumi.Input<pulumi.Input<inputs.RouterHsrpInterfaceIpv4GroupV1TrackObject>[]>;
}

/**
 * The set of arguments for constructing a RouterHsrpInterfaceIpv4GroupV1 resource.
 */
export interface RouterHsrpInterfaceIpv4GroupV1Args {
    /**
     * Hot standby IP address
     */
    address?: pulumi.Input<string>;
    /**
     * Learn virtual IP address from peer
     */
    addressLearn?: pulumi.Input<boolean>;
    /**
     * Select an interface over which to run BFD
     */
    bfdFastDetectPeerInterface?: pulumi.Input<string>;
    /**
     * BFD peer interface IPv4 address
     */
    bfdFastDetectPeerIpv4?: pulumi.Input<string>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * group number version 1 - Range: `0`-`255`
     */
    groupId: pulumi.Input<number>;
    /**
     * HSRP interface configuration subcommands
     */
    interfaceName: pulumi.Input<string>;
    /**
     * Use specified mac address for the virtual router
     */
    macAddress?: pulumi.Input<string>;
    /**
     * MGO session name
     */
    name?: pulumi.Input<string>;
    /**
     * Wait before preempting - Range: `0`-`3600`
     */
    preemptDelay?: pulumi.Input<number>;
    /**
     * Priority level - Range: `0`-`255`
     */
    priority?: pulumi.Input<number>;
    /**
     * Set secondary hot standby IP address
     */
    secondaryIpv4Addresses?: pulumi.Input<pulumi.Input<inputs.RouterHsrpInterfaceIpv4GroupV1SecondaryIpv4Address>[]>;
    /**
     * Hold time in seconds - Range: `1`-`255`
     */
    timersHoldTime?: pulumi.Input<number>;
    /**
     * Hold time in seconds - Range: `1`-`255`
     */
    timersHoldTime2?: pulumi.Input<number>;
    /**
     * Specify hellotime in milliseconds - Range: `100`-`3000`
     */
    timersMsec?: pulumi.Input<number>;
    /**
     * Specify hold time in milliseconds - Range: `100`-`3000`
     */
    timersMsec2?: pulumi.Input<number>;
    /**
     * Configure tracking
     */
    trackInterfaces?: pulumi.Input<pulumi.Input<inputs.RouterHsrpInterfaceIpv4GroupV1TrackInterface>[]>;
    /**
     * Object tracking
     */
    trackObjects?: pulumi.Input<pulumi.Input<inputs.RouterHsrpInterfaceIpv4GroupV1TrackObject>[]>;
}
