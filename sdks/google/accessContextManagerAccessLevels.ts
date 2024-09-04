// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AccessContextManagerAccessLevels extends pulumi.CustomResource {
    /**
     * Get an existing AccessContextManagerAccessLevels resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccessContextManagerAccessLevelsState, opts?: pulumi.CustomResourceOptions): AccessContextManagerAccessLevels {
        return new AccessContextManagerAccessLevels(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/accessContextManagerAccessLevels:AccessContextManagerAccessLevels';

    /**
     * Returns true if the given object is an instance of AccessContextManagerAccessLevels.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessContextManagerAccessLevels {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessContextManagerAccessLevels.__pulumiType;
    }

    /**
     * The desired Access Levels that should replace all existing Access Levels in the Access Policy.
     */
    public readonly accessLevels!: pulumi.Output<outputs.AccessContextManagerAccessLevelsAccessLevel[] | undefined>;
    /**
     * The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}
     */
    public readonly parent!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AccessContextManagerAccessLevelsTimeouts | undefined>;

    /**
     * Create a AccessContextManagerAccessLevels resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessContextManagerAccessLevelsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccessContextManagerAccessLevelsArgs | AccessContextManagerAccessLevelsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccessContextManagerAccessLevelsState | undefined;
            resourceInputs["accessLevels"] = state ? state.accessLevels : undefined;
            resourceInputs["parent"] = state ? state.parent : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AccessContextManagerAccessLevelsArgs | undefined;
            if ((!args || args.parent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parent'");
            }
            resourceInputs["accessLevels"] = args ? args.accessLevels : undefined;
            resourceInputs["parent"] = args ? args.parent : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccessContextManagerAccessLevels.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AccessContextManagerAccessLevels resources.
 */
export interface AccessContextManagerAccessLevelsState {
    /**
     * The desired Access Levels that should replace all existing Access Levels in the Access Policy.
     */
    accessLevels?: pulumi.Input<pulumi.Input<inputs.AccessContextManagerAccessLevelsAccessLevel>[]>;
    /**
     * The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}
     */
    parent?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccessContextManagerAccessLevelsTimeouts>;
}

/**
 * The set of arguments for constructing a AccessContextManagerAccessLevels resource.
 */
export interface AccessContextManagerAccessLevelsArgs {
    /**
     * The desired Access Levels that should replace all existing Access Levels in the Access Policy.
     */
    accessLevels?: pulumi.Input<pulumi.Input<inputs.AccessContextManagerAccessLevelsAccessLevel>[]>;
    /**
     * The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}
     */
    parent: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccessContextManagerAccessLevelsTimeouts>;
}
