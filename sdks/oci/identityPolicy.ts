// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IdentityPolicy extends pulumi.CustomResource {
    /**
     * Get an existing IdentityPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityPolicyState, opts?: pulumi.CustomResourceOptions): IdentityPolicy {
        return new IdentityPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/identityPolicy:IdentityPolicy';

    /**
     * Returns true if the given object is an instance of IdentityPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityPolicy.__pulumiType;
    }

    /**
     * @deprecated Deprecated
     */
    public /*out*/ readonly ETag!: pulumi.Output<string>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly inactiveState!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public /*out*/ readonly lastUpdateETag!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public /*out*/ readonly policyHash!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly statements!: pulumi.Output<string[]>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.IdentityPolicyTimeouts | undefined>;
    public readonly versionDate!: pulumi.Output<string>;

    /**
     * Create a IdentityPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityPolicyArgs | IdentityPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentityPolicyState | undefined;
            resourceInputs["ETag"] = state ? state.ETag : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["inactiveState"] = state ? state.inactiveState : undefined;
            resourceInputs["lastUpdateETag"] = state ? state.lastUpdateETag : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policyHash"] = state ? state.policyHash : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["statements"] = state ? state.statements : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["versionDate"] = state ? state.versionDate : undefined;
        } else {
            const args = argsOrState as IdentityPolicyArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.statements === undefined) && !opts.urn) {
                throw new Error("Missing required property 'statements'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["statements"] = args ? args.statements : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["versionDate"] = args ? args.versionDate : undefined;
            resourceInputs["ETag"] = undefined /*out*/;
            resourceInputs["inactiveState"] = undefined /*out*/;
            resourceInputs["lastUpdateETag"] = undefined /*out*/;
            resourceInputs["policyHash"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdentityPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdentityPolicy resources.
 */
export interface IdentityPolicyState {
    /**
     * @deprecated Deprecated
     */
    ETag?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    inactiveState?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    lastUpdateETag?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    policyHash?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    statements?: pulumi.Input<pulumi.Input<string>[]>;
    timeCreated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IdentityPolicyTimeouts>;
    versionDate?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IdentityPolicy resource.
 */
export interface IdentityPolicyArgs {
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    statements: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.IdentityPolicyTimeouts>;
    versionDate?: pulumi.Input<string>;
}
