// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VpcGatewayPolicyRule extends pulumi.CustomResource {
    /**
     * Get an existing VpcGatewayPolicyRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcGatewayPolicyRuleState, opts?: pulumi.CustomResourceOptions): VpcGatewayPolicyRule {
        return new VpcGatewayPolicyRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt-virtual-private-cloud:index/vpcGatewayPolicyRule:VpcGatewayPolicyRule';

    /**
     * Returns true if the given object is an instance of VpcGatewayPolicyRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcGatewayPolicyRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcGatewayPolicyRule.__pulumiType;
    }

    public /*out*/ readonly _revision!: pulumi.Output<number>;
    public readonly action!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly destinationGroups!: pulumi.Output<string[]>;
    public readonly destinationsExcluded!: pulumi.Output<boolean | undefined>;
    public readonly direction!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly ipProtocol!: pulumi.Output<string>;
    public readonly logged!: pulumi.Output<boolean | undefined>;
    public readonly notes!: pulumi.Output<string | undefined>;
    public readonly nsxId!: pulumi.Output<string>;
    public readonly parentPath!: pulumi.Output<string>;
    public /*out*/ readonly path!: pulumi.Output<string>;
    public readonly profiles!: pulumi.Output<string[]>;
    public readonly resourceType!: pulumi.Output<string>;
    public readonly scopes!: pulumi.Output<string[]>;
    public readonly sequenceNumber!: pulumi.Output<number>;
    public readonly serviceEntries!: pulumi.Output<outputs.VpcGatewayPolicyRuleServiceEntry[] | undefined>;
    public readonly services!: pulumi.Output<string[]>;
    public readonly sourceGroups!: pulumi.Output<string[]>;
    public readonly sourcesExcluded!: pulumi.Output<boolean | undefined>;
    public readonly tag!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<outputs.VpcGatewayPolicyRuleTag[] | undefined>;

    /**
     * Create a VpcGatewayPolicyRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcGatewayPolicyRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcGatewayPolicyRuleArgs | VpcGatewayPolicyRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcGatewayPolicyRuleState | undefined;
            resourceInputs["_revision"] = state ? state._revision : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["destinationGroups"] = state ? state.destinationGroups : undefined;
            resourceInputs["destinationsExcluded"] = state ? state.destinationsExcluded : undefined;
            resourceInputs["direction"] = state ? state.direction : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["ipProtocol"] = state ? state.ipProtocol : undefined;
            resourceInputs["logged"] = state ? state.logged : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["nsxId"] = state ? state.nsxId : undefined;
            resourceInputs["parentPath"] = state ? state.parentPath : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["profiles"] = state ? state.profiles : undefined;
            resourceInputs["resourceType"] = state ? state.resourceType : undefined;
            resourceInputs["scopes"] = state ? state.scopes : undefined;
            resourceInputs["sequenceNumber"] = state ? state.sequenceNumber : undefined;
            resourceInputs["serviceEntries"] = state ? state.serviceEntries : undefined;
            resourceInputs["services"] = state ? state.services : undefined;
            resourceInputs["sourceGroups"] = state ? state.sourceGroups : undefined;
            resourceInputs["sourcesExcluded"] = state ? state.sourcesExcluded : undefined;
            resourceInputs["tag"] = state ? state.tag : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as VpcGatewayPolicyRuleArgs | undefined;
            if ((!args || args.nsxId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nsxId'");
            }
            if ((!args || args.parentPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentPath'");
            }
            if ((!args || args.sequenceNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sequenceNumber'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destinationGroups"] = args ? args.destinationGroups : undefined;
            resourceInputs["destinationsExcluded"] = args ? args.destinationsExcluded : undefined;
            resourceInputs["direction"] = args ? args.direction : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["ipProtocol"] = args ? args.ipProtocol : undefined;
            resourceInputs["logged"] = args ? args.logged : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["nsxId"] = args ? args.nsxId : undefined;
            resourceInputs["parentPath"] = args ? args.parentPath : undefined;
            resourceInputs["profiles"] = args ? args.profiles : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["sequenceNumber"] = args ? args.sequenceNumber : undefined;
            resourceInputs["serviceEntries"] = args ? args.serviceEntries : undefined;
            resourceInputs["services"] = args ? args.services : undefined;
            resourceInputs["sourceGroups"] = args ? args.sourceGroups : undefined;
            resourceInputs["sourcesExcluded"] = args ? args.sourcesExcluded : undefined;
            resourceInputs["tag"] = args ? args.tag : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["_revision"] = undefined /*out*/;
            resourceInputs["path"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcGatewayPolicyRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcGatewayPolicyRule resources.
 */
export interface VpcGatewayPolicyRuleState {
    _revision?: pulumi.Input<number>;
    action?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destinationGroups?: pulumi.Input<pulumi.Input<string>[]>;
    destinationsExcluded?: pulumi.Input<boolean>;
    direction?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    displayName?: pulumi.Input<string>;
    ipProtocol?: pulumi.Input<string>;
    logged?: pulumi.Input<boolean>;
    notes?: pulumi.Input<string>;
    nsxId?: pulumi.Input<string>;
    parentPath?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    profiles?: pulumi.Input<pulumi.Input<string>[]>;
    resourceType?: pulumi.Input<string>;
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    sequenceNumber?: pulumi.Input<number>;
    serviceEntries?: pulumi.Input<pulumi.Input<inputs.VpcGatewayPolicyRuleServiceEntry>[]>;
    services?: pulumi.Input<pulumi.Input<string>[]>;
    sourceGroups?: pulumi.Input<pulumi.Input<string>[]>;
    sourcesExcluded?: pulumi.Input<boolean>;
    tag?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.VpcGatewayPolicyRuleTag>[]>;
}

/**
 * The set of arguments for constructing a VpcGatewayPolicyRule resource.
 */
export interface VpcGatewayPolicyRuleArgs {
    action?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destinationGroups?: pulumi.Input<pulumi.Input<string>[]>;
    destinationsExcluded?: pulumi.Input<boolean>;
    direction?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    displayName?: pulumi.Input<string>;
    ipProtocol?: pulumi.Input<string>;
    logged?: pulumi.Input<boolean>;
    notes?: pulumi.Input<string>;
    nsxId: pulumi.Input<string>;
    parentPath: pulumi.Input<string>;
    profiles?: pulumi.Input<pulumi.Input<string>[]>;
    resourceType?: pulumi.Input<string>;
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    sequenceNumber: pulumi.Input<number>;
    serviceEntries?: pulumi.Input<pulumi.Input<inputs.VpcGatewayPolicyRuleServiceEntry>[]>;
    services?: pulumi.Input<pulumi.Input<string>[]>;
    sourceGroups?: pulumi.Input<pulumi.Input<string>[]>;
    sourcesExcluded?: pulumi.Input<boolean>;
    tag?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.VpcGatewayPolicyRuleTag>[]>;
}
