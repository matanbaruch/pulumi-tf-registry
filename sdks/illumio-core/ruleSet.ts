// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RuleSet extends pulumi.CustomResource {
    /**
     * Get an existing RuleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RuleSetState, opts?: pulumi.CustomResourceOptions): RuleSet {
        return new RuleSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'illumio-core:index/ruleSet:RuleSet';

    /**
     * Returns true if the given object is an instance of RuleSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RuleSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RuleSet.__pulumiType;
    }

    /**
     * Timestamp when this ruleset was first created
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * User who created this ruleset
     */
    public /*out*/ readonly createdBy!: pulumi.Output<{[key: string]: string}>;
    /**
     * Timestamp when this ruleset was deleted
     */
    public /*out*/ readonly deletedAt!: pulumi.Output<string>;
    /**
     * User who deleted this ruleset
     */
    public /*out*/ readonly deletedBy!: pulumi.Output<{[key: string]: string}>;
    /**
     * Description of Ruleset
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Enabled flag. Determines whether the Ruleset is enabled or not. Default value: true
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * External data reference identifier
     */
    public readonly externalDataReference!: pulumi.Output<string | undefined>;
    /**
     * External data set identifier
     */
    public readonly externalDataSet!: pulumi.Output<string | undefined>;
    /**
     * URI of Ruleset
     */
    public /*out*/ readonly href!: pulumi.Output<string>;
    /**
     * Collection of IP Tables Rules
     */
    public readonly ipTablesRules!: pulumi.Output<outputs.RuleSetIpTablesRule[] | undefined>;
    /**
     * Name of Ruleset. Valid name should be between 1 to 255 characters
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Ruleset label scopes
     */
    public readonly scopes!: pulumi.Output<outputs.RuleSetScope[]>;
    /**
     * Type of update
     */
    public /*out*/ readonly updateType!: pulumi.Output<string>;
    /**
     * Timestamp when this ruleset was last updated
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * User who last updated this ruleset
     */
    public /*out*/ readonly updatedBy!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a RuleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RuleSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RuleSetArgs | RuleSetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RuleSetState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["deletedAt"] = state ? state.deletedAt : undefined;
            resourceInputs["deletedBy"] = state ? state.deletedBy : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["externalDataReference"] = state ? state.externalDataReference : undefined;
            resourceInputs["externalDataSet"] = state ? state.externalDataSet : undefined;
            resourceInputs["href"] = state ? state.href : undefined;
            resourceInputs["ipTablesRules"] = state ? state.ipTablesRules : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopes"] = state ? state.scopes : undefined;
            resourceInputs["updateType"] = state ? state.updateType : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["updatedBy"] = state ? state.updatedBy : undefined;
        } else {
            const args = argsOrState as RuleSetArgs | undefined;
            if ((!args || args.scopes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopes'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["externalDataReference"] = args ? args.externalDataReference : undefined;
            resourceInputs["externalDataSet"] = args ? args.externalDataSet : undefined;
            resourceInputs["ipTablesRules"] = args ? args.ipTablesRules : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["deletedAt"] = undefined /*out*/;
            resourceInputs["deletedBy"] = undefined /*out*/;
            resourceInputs["href"] = undefined /*out*/;
            resourceInputs["updateType"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RuleSet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RuleSet resources.
 */
export interface RuleSetState {
    /**
     * Timestamp when this ruleset was first created
     */
    createdAt?: pulumi.Input<string>;
    /**
     * User who created this ruleset
     */
    createdBy?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Timestamp when this ruleset was deleted
     */
    deletedAt?: pulumi.Input<string>;
    /**
     * User who deleted this ruleset
     */
    deletedBy?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Description of Ruleset
     */
    description?: pulumi.Input<string>;
    /**
     * Enabled flag. Determines whether the Ruleset is enabled or not. Default value: true
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * External data reference identifier
     */
    externalDataReference?: pulumi.Input<string>;
    /**
     * External data set identifier
     */
    externalDataSet?: pulumi.Input<string>;
    /**
     * URI of Ruleset
     */
    href?: pulumi.Input<string>;
    /**
     * Collection of IP Tables Rules
     */
    ipTablesRules?: pulumi.Input<pulumi.Input<inputs.RuleSetIpTablesRule>[]>;
    /**
     * Name of Ruleset. Valid name should be between 1 to 255 characters
     */
    name?: pulumi.Input<string>;
    /**
     * Ruleset label scopes
     */
    scopes?: pulumi.Input<pulumi.Input<inputs.RuleSetScope>[]>;
    /**
     * Type of update
     */
    updateType?: pulumi.Input<string>;
    /**
     * Timestamp when this ruleset was last updated
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * User who last updated this ruleset
     */
    updatedBy?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a RuleSet resource.
 */
export interface RuleSetArgs {
    /**
     * Description of Ruleset
     */
    description?: pulumi.Input<string>;
    /**
     * Enabled flag. Determines whether the Ruleset is enabled or not. Default value: true
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * External data reference identifier
     */
    externalDataReference?: pulumi.Input<string>;
    /**
     * External data set identifier
     */
    externalDataSet?: pulumi.Input<string>;
    /**
     * Collection of IP Tables Rules
     */
    ipTablesRules?: pulumi.Input<pulumi.Input<inputs.RuleSetIpTablesRule>[]>;
    /**
     * Name of Ruleset. Valid name should be between 1 to 255 characters
     */
    name?: pulumi.Input<string>;
    /**
     * Ruleset label scopes
     */
    scopes: pulumi.Input<pulumi.Input<inputs.RuleSetScope>[]>;
}
