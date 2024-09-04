// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified extends pulumi.CustomResource {
    /**
     * Get an existing NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedState, opts?: pulumi.CustomResourceOptions): NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified {
        return new NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/networkLoadBalancerNetworkLoadBalancersBackendSetsUnified:NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified';

    /**
     * Returns true if the given object is an instance of NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.__pulumiType;
    }

    public readonly backends!: pulumi.Output<outputs.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackend[] | undefined>;
    public readonly healthChecker!: pulumi.Output<outputs.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker>;
    public readonly ipVersion!: pulumi.Output<string>;
    public readonly isFailOpen!: pulumi.Output<boolean>;
    public readonly isInstantFailoverEnabled!: pulumi.Output<boolean>;
    public readonly isPreserveSource!: pulumi.Output<boolean>;
    public readonly name!: pulumi.Output<string>;
    public readonly networkLoadBalancerId!: pulumi.Output<string>;
    public readonly policy!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts | undefined>;

    /**
     * Create a NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedArgs | NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedState | undefined;
            resourceInputs["backends"] = state ? state.backends : undefined;
            resourceInputs["healthChecker"] = state ? state.healthChecker : undefined;
            resourceInputs["ipVersion"] = state ? state.ipVersion : undefined;
            resourceInputs["isFailOpen"] = state ? state.isFailOpen : undefined;
            resourceInputs["isInstantFailoverEnabled"] = state ? state.isInstantFailoverEnabled : undefined;
            resourceInputs["isPreserveSource"] = state ? state.isPreserveSource : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkLoadBalancerId"] = state ? state.networkLoadBalancerId : undefined;
            resourceInputs["policy"] = state ? state.policy : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedArgs | undefined;
            if ((!args || args.healthChecker === undefined) && !opts.urn) {
                throw new Error("Missing required property 'healthChecker'");
            }
            if ((!args || args.networkLoadBalancerId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkLoadBalancerId'");
            }
            if ((!args || args.policy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policy'");
            }
            resourceInputs["backends"] = args ? args.backends : undefined;
            resourceInputs["healthChecker"] = args ? args.healthChecker : undefined;
            resourceInputs["ipVersion"] = args ? args.ipVersion : undefined;
            resourceInputs["isFailOpen"] = args ? args.isFailOpen : undefined;
            resourceInputs["isInstantFailoverEnabled"] = args ? args.isInstantFailoverEnabled : undefined;
            resourceInputs["isPreserveSource"] = args ? args.isPreserveSource : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkLoadBalancerId"] = args ? args.networkLoadBalancerId : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resources.
 */
export interface NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedState {
    backends?: pulumi.Input<pulumi.Input<inputs.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackend>[]>;
    healthChecker?: pulumi.Input<inputs.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker>;
    ipVersion?: pulumi.Input<string>;
    isFailOpen?: pulumi.Input<boolean>;
    isInstantFailoverEnabled?: pulumi.Input<boolean>;
    isPreserveSource?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    networkLoadBalancerId?: pulumi.Input<string>;
    policy?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts>;
}

/**
 * The set of arguments for constructing a NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resource.
 */
export interface NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedArgs {
    backends?: pulumi.Input<pulumi.Input<inputs.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackend>[]>;
    healthChecker: pulumi.Input<inputs.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker>;
    ipVersion?: pulumi.Input<string>;
    isFailOpen?: pulumi.Input<boolean>;
    isInstantFailoverEnabled?: pulumi.Input<boolean>;
    isPreserveSource?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    networkLoadBalancerId: pulumi.Input<string>;
    policy: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts>;
}
