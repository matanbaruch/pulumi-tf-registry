// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class EcdsaCa extends pulumi.CustomResource {
    /**
     * Get an existing EcdsaCa resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EcdsaCaState, opts?: pulumi.CustomResourceOptions): EcdsaCa {
        return new EcdsaCa(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'bless:index/ecdsaCa:EcdsaCa';

    /**
     * Returns true if the given object is an instance of EcdsaCa.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EcdsaCa {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EcdsaCa.__pulumiType;
    }

    /**
     * This is the base64 encoded CA encrypted private key.
     */
    public /*out*/ readonly encryptedCa!: pulumi.Output<string>;
    /**
     * This is the kms encrypted password.
     */
    public /*out*/ readonly encryptedPassword!: pulumi.Output<string>;
    /**
     * The kms key with which we should encrypt the CA password.
     */
    public readonly kmsKeyId!: pulumi.Output<string>;
    /**
     * This is the plaintext CA public key in openssh format.
     */
    public /*out*/ readonly publicKey!: pulumi.Output<string>;

    /**
     * Create a EcdsaCa resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EcdsaCaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EcdsaCaArgs | EcdsaCaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EcdsaCaState | undefined;
            resourceInputs["encryptedCa"] = state ? state.encryptedCa : undefined;
            resourceInputs["encryptedPassword"] = state ? state.encryptedPassword : undefined;
            resourceInputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            resourceInputs["publicKey"] = state ? state.publicKey : undefined;
        } else {
            const args = argsOrState as EcdsaCaArgs | undefined;
            if ((!args || args.kmsKeyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kmsKeyId'");
            }
            resourceInputs["kmsKeyId"] = args ? args.kmsKeyId : undefined;
            resourceInputs["encryptedCa"] = undefined /*out*/;
            resourceInputs["encryptedPassword"] = undefined /*out*/;
            resourceInputs["publicKey"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EcdsaCa.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EcdsaCa resources.
 */
export interface EcdsaCaState {
    /**
     * This is the base64 encoded CA encrypted private key.
     */
    encryptedCa?: pulumi.Input<string>;
    /**
     * This is the kms encrypted password.
     */
    encryptedPassword?: pulumi.Input<string>;
    /**
     * The kms key with which we should encrypt the CA password.
     */
    kmsKeyId?: pulumi.Input<string>;
    /**
     * This is the plaintext CA public key in openssh format.
     */
    publicKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EcdsaCa resource.
 */
export interface EcdsaCaArgs {
    /**
     * The kms key with which we should encrypt the CA password.
     */
    kmsKeyId: pulumi.Input<string>;
}
