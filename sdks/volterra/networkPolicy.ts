// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkPolicy extends pulumi.CustomResource {
    /**
     * Get an existing NetworkPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkPolicyState, opts?: pulumi.CustomResourceOptions): NetworkPolicy {
        return new NetworkPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'volterra:index/networkPolicy:NetworkPolicy';

    /**
     * Returns true if the given object is an instance of NetworkPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkPolicy.__pulumiType;
    }

    public readonly annotations!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly disable!: pulumi.Output<boolean | undefined>;
    public readonly endpoints!: pulumi.Output<outputs.NetworkPolicyEndpoint[]>;
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly namespace!: pulumi.Output<string>;
    public readonly rules!: pulumi.Output<outputs.NetworkPolicyRule[] | undefined>;

    /**
     * Create a NetworkPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkPolicyArgs | NetworkPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkPolicyState | undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disable"] = state ? state.disable : undefined;
            resourceInputs["endpoints"] = state ? state.endpoints : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
        } else {
            const args = argsOrState as NetworkPolicyArgs | undefined;
            if ((!args || args.endpoints === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpoints'");
            }
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disable"] = args ? args.disable : undefined;
            resourceInputs["endpoints"] = args ? args.endpoints : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkPolicy resources.
 */
export interface NetworkPolicyState {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    disable?: pulumi.Input<boolean>;
    endpoints?: pulumi.Input<pulumi.Input<inputs.NetworkPolicyEndpoint>[]>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.NetworkPolicyRule>[]>;
}

/**
 * The set of arguments for constructing a NetworkPolicy resource.
 */
export interface NetworkPolicyArgs {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    disable?: pulumi.Input<boolean>;
    endpoints: pulumi.Input<pulumi.Input<inputs.NetworkPolicyEndpoint>[]>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    namespace: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.NetworkPolicyRule>[]>;
}
