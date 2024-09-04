// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LightsailKeyPair extends pulumi.CustomResource {
    /**
     * Get an existing LightsailKeyPair resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LightsailKeyPairState, opts?: pulumi.CustomResourceOptions): LightsailKeyPair {
        return new LightsailKeyPair(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/lightsailKeyPair:LightsailKeyPair';

    /**
     * Returns true if the given object is an instance of LightsailKeyPair.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LightsailKeyPair {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LightsailKeyPair.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly encryptedFingerprint!: pulumi.Output<string>;
    public /*out*/ readonly encryptedPrivateKey!: pulumi.Output<string>;
    public /*out*/ readonly fingerprint!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly namePrefix!: pulumi.Output<string>;
    public readonly pgpKey!: pulumi.Output<string | undefined>;
    public /*out*/ readonly privateKey!: pulumi.Output<string>;
    public readonly publicKey!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a LightsailKeyPair resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LightsailKeyPairArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LightsailKeyPairArgs | LightsailKeyPairState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LightsailKeyPairState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["encryptedFingerprint"] = state ? state.encryptedFingerprint : undefined;
            resourceInputs["encryptedPrivateKey"] = state ? state.encryptedPrivateKey : undefined;
            resourceInputs["fingerprint"] = state ? state.fingerprint : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namePrefix"] = state ? state.namePrefix : undefined;
            resourceInputs["pgpKey"] = state ? state.pgpKey : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["publicKey"] = state ? state.publicKey : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as LightsailKeyPairArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namePrefix"] = args ? args.namePrefix : undefined;
            resourceInputs["pgpKey"] = args ? args.pgpKey : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["encryptedFingerprint"] = undefined /*out*/;
            resourceInputs["encryptedPrivateKey"] = undefined /*out*/;
            resourceInputs["fingerprint"] = undefined /*out*/;
            resourceInputs["privateKey"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LightsailKeyPair.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LightsailKeyPair resources.
 */
export interface LightsailKeyPairState {
    arn?: pulumi.Input<string>;
    encryptedFingerprint?: pulumi.Input<string>;
    encryptedPrivateKey?: pulumi.Input<string>;
    fingerprint?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namePrefix?: pulumi.Input<string>;
    pgpKey?: pulumi.Input<string>;
    privateKey?: pulumi.Input<string>;
    publicKey?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a LightsailKeyPair resource.
 */
export interface LightsailKeyPairArgs {
    name?: pulumi.Input<string>;
    namePrefix?: pulumi.Input<string>;
    pgpKey?: pulumi.Input<string>;
    publicKey?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
