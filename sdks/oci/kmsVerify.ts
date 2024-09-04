// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KmsVerify extends pulumi.CustomResource {
    /**
     * Get an existing KmsVerify resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KmsVerifyState, opts?: pulumi.CustomResourceOptions): KmsVerify {
        return new KmsVerify(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/kmsVerify:KmsVerify';

    /**
     * Returns true if the given object is an instance of KmsVerify.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KmsVerify {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KmsVerify.__pulumiType;
    }

    public readonly cryptoEndpoint!: pulumi.Output<string>;
    public /*out*/ readonly isSignatureValid!: pulumi.Output<boolean>;
    public readonly keyId!: pulumi.Output<string>;
    public readonly keyVersionId!: pulumi.Output<string>;
    public readonly message!: pulumi.Output<string>;
    public readonly messageType!: pulumi.Output<string>;
    public readonly signature!: pulumi.Output<string>;
    public readonly signingAlgorithm!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.KmsVerifyTimeouts | undefined>;

    /**
     * Create a KmsVerify resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KmsVerifyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KmsVerifyArgs | KmsVerifyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KmsVerifyState | undefined;
            resourceInputs["cryptoEndpoint"] = state ? state.cryptoEndpoint : undefined;
            resourceInputs["isSignatureValid"] = state ? state.isSignatureValid : undefined;
            resourceInputs["keyId"] = state ? state.keyId : undefined;
            resourceInputs["keyVersionId"] = state ? state.keyVersionId : undefined;
            resourceInputs["message"] = state ? state.message : undefined;
            resourceInputs["messageType"] = state ? state.messageType : undefined;
            resourceInputs["signature"] = state ? state.signature : undefined;
            resourceInputs["signingAlgorithm"] = state ? state.signingAlgorithm : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as KmsVerifyArgs | undefined;
            if ((!args || args.cryptoEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cryptoEndpoint'");
            }
            if ((!args || args.keyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyId'");
            }
            if ((!args || args.keyVersionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyVersionId'");
            }
            if ((!args || args.message === undefined) && !opts.urn) {
                throw new Error("Missing required property 'message'");
            }
            if ((!args || args.signature === undefined) && !opts.urn) {
                throw new Error("Missing required property 'signature'");
            }
            if ((!args || args.signingAlgorithm === undefined) && !opts.urn) {
                throw new Error("Missing required property 'signingAlgorithm'");
            }
            resourceInputs["cryptoEndpoint"] = args ? args.cryptoEndpoint : undefined;
            resourceInputs["keyId"] = args ? args.keyId : undefined;
            resourceInputs["keyVersionId"] = args ? args.keyVersionId : undefined;
            resourceInputs["message"] = args ? args.message : undefined;
            resourceInputs["messageType"] = args ? args.messageType : undefined;
            resourceInputs["signature"] = args ? args.signature : undefined;
            resourceInputs["signingAlgorithm"] = args ? args.signingAlgorithm : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["isSignatureValid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KmsVerify.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KmsVerify resources.
 */
export interface KmsVerifyState {
    cryptoEndpoint?: pulumi.Input<string>;
    isSignatureValid?: pulumi.Input<boolean>;
    keyId?: pulumi.Input<string>;
    keyVersionId?: pulumi.Input<string>;
    message?: pulumi.Input<string>;
    messageType?: pulumi.Input<string>;
    signature?: pulumi.Input<string>;
    signingAlgorithm?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KmsVerifyTimeouts>;
}

/**
 * The set of arguments for constructing a KmsVerify resource.
 */
export interface KmsVerifyArgs {
    cryptoEndpoint: pulumi.Input<string>;
    keyId: pulumi.Input<string>;
    keyVersionId: pulumi.Input<string>;
    message: pulumi.Input<string>;
    messageType?: pulumi.Input<string>;
    signature: pulumi.Input<string>;
    signingAlgorithm: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KmsVerifyTimeouts>;
}
