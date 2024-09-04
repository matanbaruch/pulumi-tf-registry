// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CleanroomsCollaboration extends pulumi.CustomResource {
    /**
     * Get an existing CleanroomsCollaboration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CleanroomsCollaborationState, opts?: pulumi.CustomResourceOptions): CleanroomsCollaboration {
        return new CleanroomsCollaboration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/cleanroomsCollaboration:CleanroomsCollaboration';

    /**
     * Returns true if the given object is an instance of CleanroomsCollaboration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CleanroomsCollaboration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CleanroomsCollaboration.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly creatorDisplayName!: pulumi.Output<string>;
    public readonly creatorMemberAbilities!: pulumi.Output<string[]>;
    public readonly dataEncryptionMetadata!: pulumi.Output<outputs.CleanroomsCollaborationDataEncryptionMetadata | undefined>;
    public readonly description!: pulumi.Output<string>;
    public readonly members!: pulumi.Output<outputs.CleanroomsCollaborationMember[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly queryLogStatus!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.CleanroomsCollaborationTimeouts | undefined>;
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a CleanroomsCollaboration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CleanroomsCollaborationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CleanroomsCollaborationArgs | CleanroomsCollaborationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CleanroomsCollaborationState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["creatorDisplayName"] = state ? state.creatorDisplayName : undefined;
            resourceInputs["creatorMemberAbilities"] = state ? state.creatorMemberAbilities : undefined;
            resourceInputs["dataEncryptionMetadata"] = state ? state.dataEncryptionMetadata : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["queryLogStatus"] = state ? state.queryLogStatus : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as CleanroomsCollaborationArgs | undefined;
            if ((!args || args.creatorDisplayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'creatorDisplayName'");
            }
            if ((!args || args.creatorMemberAbilities === undefined) && !opts.urn) {
                throw new Error("Missing required property 'creatorMemberAbilities'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.queryLogStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'queryLogStatus'");
            }
            resourceInputs["creatorDisplayName"] = args ? args.creatorDisplayName : undefined;
            resourceInputs["creatorMemberAbilities"] = args ? args.creatorMemberAbilities : undefined;
            resourceInputs["dataEncryptionMetadata"] = args ? args.dataEncryptionMetadata : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["queryLogStatus"] = args ? args.queryLogStatus : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CleanroomsCollaboration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CleanroomsCollaboration resources.
 */
export interface CleanroomsCollaborationState {
    arn?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    creatorDisplayName?: pulumi.Input<string>;
    creatorMemberAbilities?: pulumi.Input<pulumi.Input<string>[]>;
    dataEncryptionMetadata?: pulumi.Input<inputs.CleanroomsCollaborationDataEncryptionMetadata>;
    description?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<inputs.CleanroomsCollaborationMember>[]>;
    name?: pulumi.Input<string>;
    queryLogStatus?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.CleanroomsCollaborationTimeouts>;
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CleanroomsCollaboration resource.
 */
export interface CleanroomsCollaborationArgs {
    creatorDisplayName: pulumi.Input<string>;
    creatorMemberAbilities: pulumi.Input<pulumi.Input<string>[]>;
    dataEncryptionMetadata?: pulumi.Input<inputs.CleanroomsCollaborationDataEncryptionMetadata>;
    description: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<inputs.CleanroomsCollaborationMember>[]>;
    name?: pulumi.Input<string>;
    queryLogStatus: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.CleanroomsCollaborationTimeouts>;
}
