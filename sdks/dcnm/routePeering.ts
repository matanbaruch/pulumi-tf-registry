// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RoutePeering extends pulumi.CustomResource {
    /**
     * Get an existing RoutePeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoutePeeringState, opts?: pulumi.CustomResourceOptions): RoutePeering {
        return new RoutePeering(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dcnm:index/routePeering:RoutePeering';

    /**
     * Returns true if the given object is an instance of RoutePeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoutePeering {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoutePeering.__pulumiType;
    }

    public readonly attachedFabric!: pulumi.Output<string>;
    public readonly deploy!: pulumi.Output<boolean | undefined>;
    public readonly deployTimeout!: pulumi.Output<number | undefined>;
    public readonly deploymentMode!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nextHopIp!: pulumi.Output<string | undefined>;
    public readonly option!: pulumi.Output<string>;
    public readonly reverseNextHopIp!: pulumi.Output<string | undefined>;
    public readonly routes!: pulumi.Output<outputs.RoutePeeringRoute[] | undefined>;
    public readonly serviceFabric!: pulumi.Output<string>;
    public readonly serviceNetworks!: pulumi.Output<outputs.RoutePeeringServiceNetwork[]>;
    public readonly serviceNodeName!: pulumi.Output<string>;
    public readonly serviceNodeType!: pulumi.Output<string>;

    /**
     * Create a RoutePeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoutePeeringArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RoutePeeringArgs | RoutePeeringState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RoutePeeringState | undefined;
            resourceInputs["attachedFabric"] = state ? state.attachedFabric : undefined;
            resourceInputs["deploy"] = state ? state.deploy : undefined;
            resourceInputs["deployTimeout"] = state ? state.deployTimeout : undefined;
            resourceInputs["deploymentMode"] = state ? state.deploymentMode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nextHopIp"] = state ? state.nextHopIp : undefined;
            resourceInputs["option"] = state ? state.option : undefined;
            resourceInputs["reverseNextHopIp"] = state ? state.reverseNextHopIp : undefined;
            resourceInputs["routes"] = state ? state.routes : undefined;
            resourceInputs["serviceFabric"] = state ? state.serviceFabric : undefined;
            resourceInputs["serviceNetworks"] = state ? state.serviceNetworks : undefined;
            resourceInputs["serviceNodeName"] = state ? state.serviceNodeName : undefined;
            resourceInputs["serviceNodeType"] = state ? state.serviceNodeType : undefined;
        } else {
            const args = argsOrState as RoutePeeringArgs | undefined;
            if ((!args || args.attachedFabric === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attachedFabric'");
            }
            if ((!args || args.deploymentMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deploymentMode'");
            }
            if ((!args || args.option === undefined) && !opts.urn) {
                throw new Error("Missing required property 'option'");
            }
            if ((!args || args.serviceFabric === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceFabric'");
            }
            if ((!args || args.serviceNetworks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceNetworks'");
            }
            if ((!args || args.serviceNodeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceNodeName'");
            }
            if ((!args || args.serviceNodeType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceNodeType'");
            }
            resourceInputs["attachedFabric"] = args ? args.attachedFabric : undefined;
            resourceInputs["deploy"] = args ? args.deploy : undefined;
            resourceInputs["deployTimeout"] = args ? args.deployTimeout : undefined;
            resourceInputs["deploymentMode"] = args ? args.deploymentMode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nextHopIp"] = args ? args.nextHopIp : undefined;
            resourceInputs["option"] = args ? args.option : undefined;
            resourceInputs["reverseNextHopIp"] = args ? args.reverseNextHopIp : undefined;
            resourceInputs["routes"] = args ? args.routes : undefined;
            resourceInputs["serviceFabric"] = args ? args.serviceFabric : undefined;
            resourceInputs["serviceNetworks"] = args ? args.serviceNetworks : undefined;
            resourceInputs["serviceNodeName"] = args ? args.serviceNodeName : undefined;
            resourceInputs["serviceNodeType"] = args ? args.serviceNodeType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RoutePeering.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RoutePeering resources.
 */
export interface RoutePeeringState {
    attachedFabric?: pulumi.Input<string>;
    deploy?: pulumi.Input<boolean>;
    deployTimeout?: pulumi.Input<number>;
    deploymentMode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nextHopIp?: pulumi.Input<string>;
    option?: pulumi.Input<string>;
    reverseNextHopIp?: pulumi.Input<string>;
    routes?: pulumi.Input<pulumi.Input<inputs.RoutePeeringRoute>[]>;
    serviceFabric?: pulumi.Input<string>;
    serviceNetworks?: pulumi.Input<pulumi.Input<inputs.RoutePeeringServiceNetwork>[]>;
    serviceNodeName?: pulumi.Input<string>;
    serviceNodeType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RoutePeering resource.
 */
export interface RoutePeeringArgs {
    attachedFabric: pulumi.Input<string>;
    deploy?: pulumi.Input<boolean>;
    deployTimeout?: pulumi.Input<number>;
    deploymentMode: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nextHopIp?: pulumi.Input<string>;
    option: pulumi.Input<string>;
    reverseNextHopIp?: pulumi.Input<string>;
    routes?: pulumi.Input<pulumi.Input<inputs.RoutePeeringRoute>[]>;
    serviceFabric: pulumi.Input<string>;
    serviceNetworks: pulumi.Input<pulumi.Input<inputs.RoutePeeringServiceNetwork>[]>;
    serviceNodeName: pulumi.Input<string>;
    serviceNodeType: pulumi.Input<string>;
}
