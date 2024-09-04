// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VerifyVoicePhrase extends pulumi.CustomResource {
    /**
     * Get an existing VerifyVoicePhrase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VerifyVoicePhraseState, opts?: pulumi.CustomResourceOptions): VerifyVoicePhrase {
        return new VerifyVoicePhrase(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/verifyVoicePhrase:VerifyVoicePhrase';

    /**
     * Returns true if the given object is an instance of VerifyVoicePhrase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VerifyVoicePhrase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VerifyVoicePhrase.__pulumiType;
    }

    /**
     * Date and time the verify phrase was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Name of the voice phrase container displayed in PingOne Admin UI or other administrative interface managing the
     * container.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * PingOne environment identifier (UUID) in which the verify voice phrase exists. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * Date and time the verify phrase was updated. Can be null.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a VerifyVoicePhrase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VerifyVoicePhraseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VerifyVoicePhraseArgs | VerifyVoicePhraseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VerifyVoicePhraseState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
        } else {
            const args = argsOrState as VerifyVoicePhraseArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VerifyVoicePhrase.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VerifyVoicePhrase resources.
 */
export interface VerifyVoicePhraseState {
    /**
     * Date and time the verify phrase was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Name of the voice phrase container displayed in PingOne Admin UI or other administrative interface managing the
     * container.
     */
    displayName?: pulumi.Input<string>;
    /**
     * PingOne environment identifier (UUID) in which the verify voice phrase exists. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * Date and time the verify phrase was updated. Can be null.
     */
    updatedAt?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VerifyVoicePhrase resource.
 */
export interface VerifyVoicePhraseArgs {
    /**
     * Name of the voice phrase container displayed in PingOne Admin UI or other administrative interface managing the
     * container.
     */
    displayName: pulumi.Input<string>;
    /**
     * PingOne environment identifier (UUID) in which the verify voice phrase exists. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
}
