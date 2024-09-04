// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class KeypairSigningCsr extends pulumi.CustomResource {
    /**
     * Get an existing KeypairSigningCsr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeypairSigningCsrState, opts?: pulumi.CustomResourceOptions): KeypairSigningCsr {
        return new KeypairSigningCsr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/keypairSigningCsr:KeypairSigningCsr';

    /**
     * Returns true if the given object is an instance of KeypairSigningCsr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KeypairSigningCsr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KeypairSigningCsr.__pulumiType;
    }

    /**
     * The CSR response file data in PKCS7 format or as an X.509 certificate. PEM encoding (with or without the header and
     * footer lines) is required. New line characters should be omitted or encoded in this value.
     */
    public readonly fileData!: pulumi.Output<string>;
    /**
     * ID of the key pair.
     */
    public readonly keypairId!: pulumi.Output<string>;

    /**
     * Create a KeypairSigningCsr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeypairSigningCsrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeypairSigningCsrArgs | KeypairSigningCsrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KeypairSigningCsrState | undefined;
            resourceInputs["fileData"] = state ? state.fileData : undefined;
            resourceInputs["keypairId"] = state ? state.keypairId : undefined;
        } else {
            const args = argsOrState as KeypairSigningCsrArgs | undefined;
            if ((!args || args.fileData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fileData'");
            }
            if ((!args || args.keypairId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keypairId'");
            }
            resourceInputs["fileData"] = args ? args.fileData : undefined;
            resourceInputs["keypairId"] = args ? args.keypairId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KeypairSigningCsr.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KeypairSigningCsr resources.
 */
export interface KeypairSigningCsrState {
    /**
     * The CSR response file data in PKCS7 format or as an X.509 certificate. PEM encoding (with or without the header and
     * footer lines) is required. New line characters should be omitted or encoded in this value.
     */
    fileData?: pulumi.Input<string>;
    /**
     * ID of the key pair.
     */
    keypairId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KeypairSigningCsr resource.
 */
export interface KeypairSigningCsrArgs {
    /**
     * The CSR response file data in PKCS7 format or as an X.509 certificate. PEM encoding (with or without the header and
     * footer lines) is required. New line characters should be omitted or encoded in this value.
     */
    fileData: pulumi.Input<string>;
    /**
     * ID of the key pair.
     */
    keypairId: pulumi.Input<string>;
}
