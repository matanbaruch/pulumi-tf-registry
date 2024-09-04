// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LoadBalancer extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalancerState, opts?: pulumi.CustomResourceOptions): LoadBalancer {
        return new LoadBalancer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'hcloud:index/loadBalancer:LoadBalancer';

    /**
     * Returns true if the given object is an instance of LoadBalancer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalancer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalancer.__pulumiType;
    }

    public readonly algorithm!: pulumi.Output<outputs.LoadBalancerAlgorithm | undefined>;
    public readonly deleteProtection!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly ipv4!: pulumi.Output<string>;
    public /*out*/ readonly ipv6!: pulumi.Output<string>;
    public readonly labels!: pulumi.Output<{[key: string]: string}>;
    public readonly loadBalancerType!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly networkId!: pulumi.Output<number>;
    public /*out*/ readonly networkIp!: pulumi.Output<string>;
    public readonly networkZone!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly targets!: pulumi.Output<outputs.LoadBalancerTarget[] | undefined>;

    /**
     * Create a LoadBalancer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadBalancerArgs | LoadBalancerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoadBalancerState | undefined;
            resourceInputs["algorithm"] = state ? state.algorithm : undefined;
            resourceInputs["deleteProtection"] = state ? state.deleteProtection : undefined;
            resourceInputs["ipv4"] = state ? state.ipv4 : undefined;
            resourceInputs["ipv6"] = state ? state.ipv6 : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["loadBalancerType"] = state ? state.loadBalancerType : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkId"] = state ? state.networkId : undefined;
            resourceInputs["networkIp"] = state ? state.networkIp : undefined;
            resourceInputs["networkZone"] = state ? state.networkZone : undefined;
            resourceInputs["targets"] = state ? state.targets : undefined;
        } else {
            const args = argsOrState as LoadBalancerArgs | undefined;
            if ((!args || args.loadBalancerType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loadBalancerType'");
            }
            resourceInputs["algorithm"] = args ? args.algorithm : undefined;
            resourceInputs["deleteProtection"] = args ? args.deleteProtection : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["loadBalancerType"] = args ? args.loadBalancerType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkZone"] = args ? args.networkZone : undefined;
            resourceInputs["targets"] = args ? args.targets : undefined;
            resourceInputs["ipv4"] = undefined /*out*/;
            resourceInputs["ipv6"] = undefined /*out*/;
            resourceInputs["networkId"] = undefined /*out*/;
            resourceInputs["networkIp"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoadBalancer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoadBalancer resources.
 */
export interface LoadBalancerState {
    algorithm?: pulumi.Input<inputs.LoadBalancerAlgorithm>;
    deleteProtection?: pulumi.Input<boolean>;
    ipv4?: pulumi.Input<string>;
    ipv6?: pulumi.Input<string>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    loadBalancerType?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkId?: pulumi.Input<number>;
    networkIp?: pulumi.Input<string>;
    networkZone?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    targets?: pulumi.Input<pulumi.Input<inputs.LoadBalancerTarget>[]>;
}

/**
 * The set of arguments for constructing a LoadBalancer resource.
 */
export interface LoadBalancerArgs {
    algorithm?: pulumi.Input<inputs.LoadBalancerAlgorithm>;
    deleteProtection?: pulumi.Input<boolean>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    loadBalancerType: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkZone?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    targets?: pulumi.Input<pulumi.Input<inputs.LoadBalancerTarget>[]>;
}
