// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class L3outConsumerLabel extends pulumi.CustomResource {
    /**
     * Get an existing L3outConsumerLabel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: L3outConsumerLabelState, opts?: pulumi.CustomResourceOptions): L3outConsumerLabel {
        return new L3outConsumerLabel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/l3outConsumerLabel:L3outConsumerLabel';

    /**
     * Returns true if the given object is an instance of L3outConsumerLabel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is L3outConsumerLabel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === L3outConsumerLabel.__pulumiType;
    }

    /**
     * The annotation of the L3out Consumer Label object.
     */
    public readonly annotation!: pulumi.Output<string>;
    public readonly annotations!: pulumi.Output<outputs.L3outConsumerLabelAnnotation[]>;
    /**
     * The description of the L3out Consumer Label object.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The name of the L3out Consumer Label object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name alias of the L3out Consumer Label object.
     */
    public readonly nameAlias!: pulumi.Output<string>;
    /**
     * The owner of the L3out Consumer Label object.
     */
    public readonly owner!: pulumi.Output<string>;
    /**
     * The key for enabling clients to own their data for entity correlation.
     */
    public readonly ownerKey!: pulumi.Output<string>;
    /**
     * A tag for enabling clients to add their own data. For example, to indicate who created this object.
     */
    public readonly ownerTag!: pulumi.Output<string>;
    /**
     * The distinguished name (DN) of the parent object.
     */
    public readonly parentDn!: pulumi.Output<string>;
    /**
     * Specifies the color of a policy label.
     */
    public readonly tag!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.L3outConsumerLabelTag[]>;

    /**
     * Create a L3outConsumerLabel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: L3outConsumerLabelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: L3outConsumerLabelArgs | L3outConsumerLabelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as L3outConsumerLabelState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["ownerKey"] = state ? state.ownerKey : undefined;
            resourceInputs["ownerTag"] = state ? state.ownerTag : undefined;
            resourceInputs["parentDn"] = state ? state.parentDn : undefined;
            resourceInputs["tag"] = state ? state.tag : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as L3outConsumerLabelArgs | undefined;
            if ((!args || args.parentDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["ownerKey"] = args ? args.ownerKey : undefined;
            resourceInputs["ownerTag"] = args ? args.ownerTag : undefined;
            resourceInputs["parentDn"] = args ? args.parentDn : undefined;
            resourceInputs["tag"] = args ? args.tag : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(L3outConsumerLabel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering L3outConsumerLabel resources.
 */
export interface L3outConsumerLabelState {
    /**
     * The annotation of the L3out Consumer Label object.
     */
    annotation?: pulumi.Input<string>;
    annotations?: pulumi.Input<pulumi.Input<inputs.L3outConsumerLabelAnnotation>[]>;
    /**
     * The description of the L3out Consumer Label object.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the L3out Consumer Label object.
     */
    name?: pulumi.Input<string>;
    /**
     * The name alias of the L3out Consumer Label object.
     */
    nameAlias?: pulumi.Input<string>;
    /**
     * The owner of the L3out Consumer Label object.
     */
    owner?: pulumi.Input<string>;
    /**
     * The key for enabling clients to own their data for entity correlation.
     */
    ownerKey?: pulumi.Input<string>;
    /**
     * A tag for enabling clients to add their own data. For example, to indicate who created this object.
     */
    ownerTag?: pulumi.Input<string>;
    /**
     * The distinguished name (DN) of the parent object.
     */
    parentDn?: pulumi.Input<string>;
    /**
     * Specifies the color of a policy label.
     */
    tag?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.L3outConsumerLabelTag>[]>;
}

/**
 * The set of arguments for constructing a L3outConsumerLabel resource.
 */
export interface L3outConsumerLabelArgs {
    /**
     * The annotation of the L3out Consumer Label object.
     */
    annotation?: pulumi.Input<string>;
    annotations?: pulumi.Input<pulumi.Input<inputs.L3outConsumerLabelAnnotation>[]>;
    /**
     * The description of the L3out Consumer Label object.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the L3out Consumer Label object.
     */
    name?: pulumi.Input<string>;
    /**
     * The name alias of the L3out Consumer Label object.
     */
    nameAlias?: pulumi.Input<string>;
    /**
     * The owner of the L3out Consumer Label object.
     */
    owner?: pulumi.Input<string>;
    /**
     * The key for enabling clients to own their data for entity correlation.
     */
    ownerKey?: pulumi.Input<string>;
    /**
     * A tag for enabling clients to add their own data. For example, to indicate who created this object.
     */
    ownerTag?: pulumi.Input<string>;
    /**
     * The distinguished name (DN) of the parent object.
     */
    parentDn: pulumi.Input<string>;
    /**
     * Specifies the color of a policy label.
     */
    tag?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.L3outConsumerLabelTag>[]>;
}
