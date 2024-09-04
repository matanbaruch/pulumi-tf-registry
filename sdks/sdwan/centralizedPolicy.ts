// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CentralizedPolicy extends pulumi.CustomResource {
    /**
     * Get an existing CentralizedPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CentralizedPolicyState, opts?: pulumi.CustomResourceOptions): CentralizedPolicy {
        return new CentralizedPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/centralizedPolicy:CentralizedPolicy';

    /**
     * Returns true if the given object is an instance of CentralizedPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CentralizedPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CentralizedPolicy.__pulumiType;
    }

    /**
     * List of policy definitions
     */
    public readonly definitions!: pulumi.Output<outputs.CentralizedPolicyDefinition[] | undefined>;
    /**
     * The description of the centralized policy
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The name of the centralized policy
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The version of the object
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a CentralizedPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CentralizedPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CentralizedPolicyArgs | CentralizedPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CentralizedPolicyState | undefined;
            resourceInputs["definitions"] = state ? state.definitions : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as CentralizedPolicyArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            resourceInputs["definitions"] = args ? args.definitions : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CentralizedPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CentralizedPolicy resources.
 */
export interface CentralizedPolicyState {
    /**
     * List of policy definitions
     */
    definitions?: pulumi.Input<pulumi.Input<inputs.CentralizedPolicyDefinition>[]>;
    /**
     * The description of the centralized policy
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the centralized policy
     */
    name?: pulumi.Input<string>;
    /**
     * The version of the object
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a CentralizedPolicy resource.
 */
export interface CentralizedPolicyArgs {
    /**
     * List of policy definitions
     */
    definitions?: pulumi.Input<pulumi.Input<inputs.CentralizedPolicyDefinition>[]>;
    /**
     * The description of the centralized policy
     */
    description: pulumi.Input<string>;
    /**
     * The name of the centralized policy
     */
    name?: pulumi.Input<string>;
}
