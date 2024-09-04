// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PolicyMapQos extends pulumi.CustomResource {
    /**
     * Get an existing PolicyMapQos resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyMapQosState, opts?: pulumi.CustomResourceOptions): PolicyMapQos {
        return new PolicyMapQos(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxr:index/policyMapQos:PolicyMapQos';

    /**
     * Returns true if the given object is an instance of PolicyMapQos.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyMapQos {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyMapQos.__pulumiType;
    }

    public readonly classes!: pulumi.Output<outputs.PolicyMapQosClass[] | undefined>;
    /**
     * Set description for this policy-map
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Name of the policymap
     */
    public readonly policyMapName!: pulumi.Output<string>;

    /**
     * Create a PolicyMapQos resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyMapQosArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyMapQosArgs | PolicyMapQosState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyMapQosState | undefined;
            resourceInputs["classes"] = state ? state.classes : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["policyMapName"] = state ? state.policyMapName : undefined;
        } else {
            const args = argsOrState as PolicyMapQosArgs | undefined;
            if ((!args || args.policyMapName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyMapName'");
            }
            resourceInputs["classes"] = args ? args.classes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["policyMapName"] = args ? args.policyMapName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicyMapQos.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicyMapQos resources.
 */
export interface PolicyMapQosState {
    classes?: pulumi.Input<pulumi.Input<inputs.PolicyMapQosClass>[]>;
    /**
     * Set description for this policy-map
     */
    description?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Name of the policymap
     */
    policyMapName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PolicyMapQos resource.
 */
export interface PolicyMapQosArgs {
    classes?: pulumi.Input<pulumi.Input<inputs.PolicyMapQosClass>[]>;
    /**
     * Set description for this policy-map
     */
    description?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Name of the policymap
     */
    policyMapName: pulumi.Input<string>;
}
