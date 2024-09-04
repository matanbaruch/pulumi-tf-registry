// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RouterOspfVrfAreaInterface extends pulumi.CustomResource {
    /**
     * Get an existing RouterOspfVrfAreaInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterOspfVrfAreaInterfaceState, opts?: pulumi.CustomResourceOptions): RouterOspfVrfAreaInterface {
        return new RouterOspfVrfAreaInterface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxr:index/routerOspfVrfAreaInterface:RouterOspfVrfAreaInterface';

    /**
     * Returns true if the given object is an instance of RouterOspfVrfAreaInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterOspfVrfAreaInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterOspfVrfAreaInterface.__pulumiType;
    }

    /**
     * Enter the OSPF area configuration submode
     */
    public readonly areaId!: pulumi.Output<string>;
    /**
     * Interface cost - Range: `1`-`65535`
     */
    public readonly cost!: pulumi.Output<number | undefined>;
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
     * Enable routing on an interface
     */
    public readonly interfaceName!: pulumi.Output<string>;
    /**
     * Specify OSPF broadcast multi-access network
     */
    public readonly networkBroadcast!: pulumi.Output<boolean | undefined>;
    /**
     * Specify OSPF NBMA network
     */
    public readonly networkNonBroadcast!: pulumi.Output<boolean | undefined>;
    /**
     * Specify OSPF point-to-multipoint network
     */
    public readonly networkPointToMultipoint!: pulumi.Output<boolean | undefined>;
    /**
     * Specify OSPF point-to-point network
     */
    public readonly networkPointToPoint!: pulumi.Output<boolean | undefined>;
    /**
     * Disable passive
     */
    public readonly passiveDisable!: pulumi.Output<boolean | undefined>;
    /**
     * Enable passive
     */
    public readonly passiveEnable!: pulumi.Output<boolean | undefined>;
    /**
     * Router priority - Range: `0`-`255`
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * Name for this OSPF process
     */
    public readonly processName!: pulumi.Output<string>;
    /**
     * Name for this OSPF vrf
     */
    public readonly vrfName!: pulumi.Output<string>;

    /**
     * Create a RouterOspfVrfAreaInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouterOspfVrfAreaInterfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterOspfVrfAreaInterfaceArgs | RouterOspfVrfAreaInterfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterOspfVrfAreaInterfaceState | undefined;
            resourceInputs["areaId"] = state ? state.areaId : undefined;
            resourceInputs["cost"] = state ? state.cost : undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["interfaceName"] = state ? state.interfaceName : undefined;
            resourceInputs["networkBroadcast"] = state ? state.networkBroadcast : undefined;
            resourceInputs["networkNonBroadcast"] = state ? state.networkNonBroadcast : undefined;
            resourceInputs["networkPointToMultipoint"] = state ? state.networkPointToMultipoint : undefined;
            resourceInputs["networkPointToPoint"] = state ? state.networkPointToPoint : undefined;
            resourceInputs["passiveDisable"] = state ? state.passiveDisable : undefined;
            resourceInputs["passiveEnable"] = state ? state.passiveEnable : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["processName"] = state ? state.processName : undefined;
            resourceInputs["vrfName"] = state ? state.vrfName : undefined;
        } else {
            const args = argsOrState as RouterOspfVrfAreaInterfaceArgs | undefined;
            if ((!args || args.areaId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'areaId'");
            }
            if ((!args || args.interfaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interfaceName'");
            }
            if ((!args || args.processName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'processName'");
            }
            if ((!args || args.vrfName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vrfName'");
            }
            resourceInputs["areaId"] = args ? args.areaId : undefined;
            resourceInputs["cost"] = args ? args.cost : undefined;
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["interfaceName"] = args ? args.interfaceName : undefined;
            resourceInputs["networkBroadcast"] = args ? args.networkBroadcast : undefined;
            resourceInputs["networkNonBroadcast"] = args ? args.networkNonBroadcast : undefined;
            resourceInputs["networkPointToMultipoint"] = args ? args.networkPointToMultipoint : undefined;
            resourceInputs["networkPointToPoint"] = args ? args.networkPointToPoint : undefined;
            resourceInputs["passiveDisable"] = args ? args.passiveDisable : undefined;
            resourceInputs["passiveEnable"] = args ? args.passiveEnable : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["processName"] = args ? args.processName : undefined;
            resourceInputs["vrfName"] = args ? args.vrfName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterOspfVrfAreaInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterOspfVrfAreaInterface resources.
 */
export interface RouterOspfVrfAreaInterfaceState {
    /**
     * Enter the OSPF area configuration submode
     */
    areaId?: pulumi.Input<string>;
    /**
     * Interface cost - Range: `1`-`65535`
     */
    cost?: pulumi.Input<number>;
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
     * Enable routing on an interface
     */
    interfaceName?: pulumi.Input<string>;
    /**
     * Specify OSPF broadcast multi-access network
     */
    networkBroadcast?: pulumi.Input<boolean>;
    /**
     * Specify OSPF NBMA network
     */
    networkNonBroadcast?: pulumi.Input<boolean>;
    /**
     * Specify OSPF point-to-multipoint network
     */
    networkPointToMultipoint?: pulumi.Input<boolean>;
    /**
     * Specify OSPF point-to-point network
     */
    networkPointToPoint?: pulumi.Input<boolean>;
    /**
     * Disable passive
     */
    passiveDisable?: pulumi.Input<boolean>;
    /**
     * Enable passive
     */
    passiveEnable?: pulumi.Input<boolean>;
    /**
     * Router priority - Range: `0`-`255`
     */
    priority?: pulumi.Input<number>;
    /**
     * Name for this OSPF process
     */
    processName?: pulumi.Input<string>;
    /**
     * Name for this OSPF vrf
     */
    vrfName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterOspfVrfAreaInterface resource.
 */
export interface RouterOspfVrfAreaInterfaceArgs {
    /**
     * Enter the OSPF area configuration submode
     */
    areaId: pulumi.Input<string>;
    /**
     * Interface cost - Range: `1`-`65535`
     */
    cost?: pulumi.Input<number>;
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
     * Enable routing on an interface
     */
    interfaceName: pulumi.Input<string>;
    /**
     * Specify OSPF broadcast multi-access network
     */
    networkBroadcast?: pulumi.Input<boolean>;
    /**
     * Specify OSPF NBMA network
     */
    networkNonBroadcast?: pulumi.Input<boolean>;
    /**
     * Specify OSPF point-to-multipoint network
     */
    networkPointToMultipoint?: pulumi.Input<boolean>;
    /**
     * Specify OSPF point-to-point network
     */
    networkPointToPoint?: pulumi.Input<boolean>;
    /**
     * Disable passive
     */
    passiveDisable?: pulumi.Input<boolean>;
    /**
     * Enable passive
     */
    passiveEnable?: pulumi.Input<boolean>;
    /**
     * Router priority - Range: `0`-`255`
     */
    priority?: pulumi.Input<number>;
    /**
     * Name for this OSPF process
     */
    processName: pulumi.Input<string>;
    /**
     * Name for this OSPF vrf
     */
    vrfName: pulumi.Input<string>;
}
