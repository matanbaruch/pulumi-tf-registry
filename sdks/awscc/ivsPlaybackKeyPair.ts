// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IvsPlaybackKeyPair extends pulumi.CustomResource {
    /**
     * Get an existing IvsPlaybackKeyPair resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IvsPlaybackKeyPairState, opts?: pulumi.CustomResourceOptions): IvsPlaybackKeyPair {
        return new IvsPlaybackKeyPair(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ivsPlaybackKeyPair:IvsPlaybackKeyPair';

    /**
     * Returns true if the given object is an instance of IvsPlaybackKeyPair.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IvsPlaybackKeyPair {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IvsPlaybackKeyPair.__pulumiType;
    }

    /**
     * Key-pair identifier.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Key-pair identifier.
     */
    public /*out*/ readonly fingerprint!: pulumi.Output<string>;
    /**
     * An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The
     * value does not need to be unique.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The public portion of a customer-generated key pair.
     */
    public readonly publicKeyMaterial!: pulumi.Output<string>;
    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    public readonly tags!: pulumi.Output<outputs.IvsPlaybackKeyPairTag[]>;

    /**
     * Create a IvsPlaybackKeyPair resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IvsPlaybackKeyPairArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IvsPlaybackKeyPairArgs | IvsPlaybackKeyPairState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IvsPlaybackKeyPairState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["fingerprint"] = state ? state.fingerprint : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["publicKeyMaterial"] = state ? state.publicKeyMaterial : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as IvsPlaybackKeyPairArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["publicKeyMaterial"] = args ? args.publicKeyMaterial : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["fingerprint"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IvsPlaybackKeyPair.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IvsPlaybackKeyPair resources.
 */
export interface IvsPlaybackKeyPairState {
    /**
     * Key-pair identifier.
     */
    arn?: pulumi.Input<string>;
    /**
     * Key-pair identifier.
     */
    fingerprint?: pulumi.Input<string>;
    /**
     * An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The
     * value does not need to be unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The public portion of a customer-generated key pair.
     */
    publicKeyMaterial?: pulumi.Input<string>;
    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.IvsPlaybackKeyPairTag>[]>;
}

/**
 * The set of arguments for constructing a IvsPlaybackKeyPair resource.
 */
export interface IvsPlaybackKeyPairArgs {
    /**
     * An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The
     * value does not need to be unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The public portion of a customer-generated key pair.
     */
    publicKeyMaterial?: pulumi.Input<string>;
    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.IvsPlaybackKeyPairTag>[]>;
}
