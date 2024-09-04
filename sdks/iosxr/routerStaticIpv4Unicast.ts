// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RouterStaticIpv4Unicast extends pulumi.CustomResource {
    /**
     * Get an existing RouterStaticIpv4Unicast resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterStaticIpv4UnicastState, opts?: pulumi.CustomResourceOptions): RouterStaticIpv4Unicast {
        return new RouterStaticIpv4Unicast(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxr:index/routerStaticIpv4Unicast:RouterStaticIpv4Unicast';

    /**
     * Returns true if the given object is an instance of RouterStaticIpv4Unicast.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterStaticIpv4Unicast {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterStaticIpv4Unicast.__pulumiType;
    }

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
     * Forwarding router's address
     */
    public readonly nexthopAddresses!: pulumi.Output<outputs.RouterStaticIpv4UnicastNexthopAddress[] | undefined>;
    /**
     * Forwarding interface
     */
    public readonly nexthopInterfaceAddresses!: pulumi.Output<outputs.RouterStaticIpv4UnicastNexthopInterfaceAddress[] | undefined>;
    /**
     * Forwarding interface
     */
    public readonly nexthopInterfaces!: pulumi.Output<outputs.RouterStaticIpv4UnicastNexthopInterface[] | undefined>;
    /**
     * Destination prefix
     */
    public readonly prefixAddress!: pulumi.Output<string>;
    /**
     * Destination prefix length - Range: `0`-`128`
     */
    public readonly prefixLength!: pulumi.Output<number>;
    /**
     * Destination VRF
     */
    public readonly vrfs!: pulumi.Output<outputs.RouterStaticIpv4UnicastVrf[] | undefined>;

    /**
     * Create a RouterStaticIpv4Unicast resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouterStaticIpv4UnicastArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterStaticIpv4UnicastArgs | RouterStaticIpv4UnicastState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterStaticIpv4UnicastState | undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["nexthopAddresses"] = state ? state.nexthopAddresses : undefined;
            resourceInputs["nexthopInterfaceAddresses"] = state ? state.nexthopInterfaceAddresses : undefined;
            resourceInputs["nexthopInterfaces"] = state ? state.nexthopInterfaces : undefined;
            resourceInputs["prefixAddress"] = state ? state.prefixAddress : undefined;
            resourceInputs["prefixLength"] = state ? state.prefixLength : undefined;
            resourceInputs["vrfs"] = state ? state.vrfs : undefined;
        } else {
            const args = argsOrState as RouterStaticIpv4UnicastArgs | undefined;
            if ((!args || args.prefixAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'prefixAddress'");
            }
            if ((!args || args.prefixLength === undefined) && !opts.urn) {
                throw new Error("Missing required property 'prefixLength'");
            }
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["nexthopAddresses"] = args ? args.nexthopAddresses : undefined;
            resourceInputs["nexthopInterfaceAddresses"] = args ? args.nexthopInterfaceAddresses : undefined;
            resourceInputs["nexthopInterfaces"] = args ? args.nexthopInterfaces : undefined;
            resourceInputs["prefixAddress"] = args ? args.prefixAddress : undefined;
            resourceInputs["prefixLength"] = args ? args.prefixLength : undefined;
            resourceInputs["vrfs"] = args ? args.vrfs : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterStaticIpv4Unicast.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterStaticIpv4Unicast resources.
 */
export interface RouterStaticIpv4UnicastState {
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
     * Forwarding router's address
     */
    nexthopAddresses?: pulumi.Input<pulumi.Input<inputs.RouterStaticIpv4UnicastNexthopAddress>[]>;
    /**
     * Forwarding interface
     */
    nexthopInterfaceAddresses?: pulumi.Input<pulumi.Input<inputs.RouterStaticIpv4UnicastNexthopInterfaceAddress>[]>;
    /**
     * Forwarding interface
     */
    nexthopInterfaces?: pulumi.Input<pulumi.Input<inputs.RouterStaticIpv4UnicastNexthopInterface>[]>;
    /**
     * Destination prefix
     */
    prefixAddress?: pulumi.Input<string>;
    /**
     * Destination prefix length - Range: `0`-`128`
     */
    prefixLength?: pulumi.Input<number>;
    /**
     * Destination VRF
     */
    vrfs?: pulumi.Input<pulumi.Input<inputs.RouterStaticIpv4UnicastVrf>[]>;
}

/**
 * The set of arguments for constructing a RouterStaticIpv4Unicast resource.
 */
export interface RouterStaticIpv4UnicastArgs {
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
     * Forwarding router's address
     */
    nexthopAddresses?: pulumi.Input<pulumi.Input<inputs.RouterStaticIpv4UnicastNexthopAddress>[]>;
    /**
     * Forwarding interface
     */
    nexthopInterfaceAddresses?: pulumi.Input<pulumi.Input<inputs.RouterStaticIpv4UnicastNexthopInterfaceAddress>[]>;
    /**
     * Forwarding interface
     */
    nexthopInterfaces?: pulumi.Input<pulumi.Input<inputs.RouterStaticIpv4UnicastNexthopInterface>[]>;
    /**
     * Destination prefix
     */
    prefixAddress: pulumi.Input<string>;
    /**
     * Destination prefix length - Range: `0`-`128`
     */
    prefixLength: pulumi.Input<number>;
    /**
     * Destination VRF
     */
    vrfs?: pulumi.Input<pulumi.Input<inputs.RouterStaticIpv4UnicastVrf>[]>;
}
