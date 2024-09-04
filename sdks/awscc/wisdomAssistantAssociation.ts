// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WisdomAssistantAssociation extends pulumi.CustomResource {
    /**
     * Get an existing WisdomAssistantAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WisdomAssistantAssociationState, opts?: pulumi.CustomResourceOptions): WisdomAssistantAssociation {
        return new WisdomAssistantAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/wisdomAssistantAssociation:WisdomAssistantAssociation';

    /**
     * Returns true if the given object is an instance of WisdomAssistantAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WisdomAssistantAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WisdomAssistantAssociation.__pulumiType;
    }

    public /*out*/ readonly assistantArn!: pulumi.Output<string>;
    public /*out*/ readonly assistantAssociationArn!: pulumi.Output<string>;
    public /*out*/ readonly assistantAssociationId!: pulumi.Output<string>;
    public readonly assistantId!: pulumi.Output<string>;
    public readonly association!: pulumi.Output<outputs.WisdomAssistantAssociationAssociation>;
    public readonly associationType!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.WisdomAssistantAssociationTag[]>;

    /**
     * Create a WisdomAssistantAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WisdomAssistantAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WisdomAssistantAssociationArgs | WisdomAssistantAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WisdomAssistantAssociationState | undefined;
            resourceInputs["assistantArn"] = state ? state.assistantArn : undefined;
            resourceInputs["assistantAssociationArn"] = state ? state.assistantAssociationArn : undefined;
            resourceInputs["assistantAssociationId"] = state ? state.assistantAssociationId : undefined;
            resourceInputs["assistantId"] = state ? state.assistantId : undefined;
            resourceInputs["association"] = state ? state.association : undefined;
            resourceInputs["associationType"] = state ? state.associationType : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as WisdomAssistantAssociationArgs | undefined;
            if ((!args || args.assistantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'assistantId'");
            }
            if ((!args || args.association === undefined) && !opts.urn) {
                throw new Error("Missing required property 'association'");
            }
            if ((!args || args.associationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'associationType'");
            }
            resourceInputs["assistantId"] = args ? args.assistantId : undefined;
            resourceInputs["association"] = args ? args.association : undefined;
            resourceInputs["associationType"] = args ? args.associationType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["assistantArn"] = undefined /*out*/;
            resourceInputs["assistantAssociationArn"] = undefined /*out*/;
            resourceInputs["assistantAssociationId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WisdomAssistantAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WisdomAssistantAssociation resources.
 */
export interface WisdomAssistantAssociationState {
    assistantArn?: pulumi.Input<string>;
    assistantAssociationArn?: pulumi.Input<string>;
    assistantAssociationId?: pulumi.Input<string>;
    assistantId?: pulumi.Input<string>;
    association?: pulumi.Input<inputs.WisdomAssistantAssociationAssociation>;
    associationType?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.WisdomAssistantAssociationTag>[]>;
}

/**
 * The set of arguments for constructing a WisdomAssistantAssociation resource.
 */
export interface WisdomAssistantAssociationArgs {
    assistantId: pulumi.Input<string>;
    association: pulumi.Input<inputs.WisdomAssistantAssociationAssociation>;
    associationType: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.WisdomAssistantAssociationTag>[]>;
}
